import React, { useState } from "react";

import "./style.css";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import MDEditor from "@uiw/react-md-editor";
import { motion, useScroll } from "framer-motion";
import useSWR from "swr";
import { useCreateCommentMutation } from "../../redux/services/blog";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Articles() {
  const { scrollYProgress } = useScroll();

  const [comment, setComment] = useState("");

  const [showComments, setShowComments] = useState(2);

  const [createComment] = useCreateCommentMutation();

  const createCommentAction = (e, id) => {
    e.preventDefault();
    createComment({
      id,
      comment,
      name: "leonardo costa",
      email: "juca@juca.com"
    });
    setComment("");
  };

  const { id } = useParams();

  const { data } = useSWR(`http://localhost:4000/api/${id}`, fetcher);

  if (!data) return <Loading />;

  const moreComments = () => {if (commentSliced?.length === data?.comments.length) {return;}
    setShowComments(showComments + 2);
  };

  const commentSliced = data?.comments.slice(0, showComments);


  async function share() {
    try {
      await navigator.share({
        text: data?.title,
        url: `http://localhost:3000/articles/${id}`
      })
    } catch (error) {
      console.log('Sharing failed!', error)
    }
  }

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="article_wrapper">
        <div className="article_container">
          <div className="article_content">
            <div className="social_wrapper">
              <div className="social_container">

                <div className="box_social_media">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>

                <div className="box_social_media">
                  <i className="fa-brands fa-github"></i>
                </div>

                <div className="box_social_media" onClick={()=>share()}>
                  <i className="fa-solid fa-share-nodes"></i>
                </div>
              </div>
            </div>
            <div className="article_info_container">
              <div className="author_info_container">
                <div className="image">
                  {!data?.image ? (
                    <i className="fa-solid fa-user"></i>
                  ) : (
                    data?.image
                  )}
                </div>

                <div className="author_box">
                  <div className="author">{data?.author}</div>

                  <div className="read_time">9 min read</div>
                </div>
              </div>

              <div className="data">
                <i className="fa-regular fa-clock"></i>{" "}
                {data?.createdAt?.substring(0, 10)}
              </div>
            </div>
            <div className="title_article">{data?.title}</div>

            <MDEditor.Markdown
              className="article_text"
              source={data?.text}
              style={{ whiteSpace: "pre-wrap" }}
            />

            <div className="title_category">comments</div>

            <form onSubmit={(e) => createCommentAction(e, data?._id)}>
              <input
                type="text"
                value={comment}
                placeholder="Adicionar comentario"
                onChange={(e) => setComment(e.target.value)}
              />
            </form>
            <div className="comments_container">
              {commentSliced.map((comments, index) => {
                return (
                  <div key={index} className="comments_box">
                    <div className="name">{comments?.name}</div>
                    <div className="comments">{comments?.comment}</div>
                    <div className="data_comments">
                      <i className="fa-regular fa-clock"></i>{" "}
                      {comments?.createdAt?.substring(0, 10)}
                    </div>
                  </div>
                );
              })}
            </div>
            {commentSliced.length === data?.comments.length ? (
              <div className="endCommentsText">não há mais comentários</div>
            ):<button onClick={() => moreComments()}>mostrar mais 2 comentários</button>}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
