import React, { useState } from "react";
import { useGetAllArticlesQuery } from "../../redux/services/blog";
import MDEditor from "@uiw/react-md-editor";
import Loading from "../../Components/Loading";
import "./style.css";
import { Link } from "react-router-dom";
import Error from "../../Components/Error";
import EmptyBlog from "../../Components/EmptyBlog";

function Blog() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useGetAllArticlesQuery(page);

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  const pageNumber = Array(data?.totalPages).fill(1);

  const next = () => {
    page < data.totalPages && setPage(page + 1);
  };

  const prev = () => {
    page >= data.totalPages && setPage(page - 1);
  };

  return (
    <div className="blog_wrapper">
      <div className="blog_container">
        {data?.docs.length === 0 ? (
          <EmptyBlog />
        ) : (
          data?.docs?.map((article, index) => {
            return (
              <Link to={`/articles/${article._id}`}>
                <div key={index} className="articles_container">
                  <div className="image_article"></div>

                  <div className="description_container">
                    <div className="title">{article.title}</div>

                    <div className="resume">
                      <MDEditor.Markdown
                        className="article_text"
                        source={article?.text?.substring(0, 100)}
                        style={{ whiteSpace: "pre-wrap" }}
                      />
                      ...
                    </div>

                    <div className="info_article_bottom">
                      <div className="date_of_creation">
                        <i className="fa-regular fa-clock"></i>{" "}
                        {article?.createdAt?.substring(0, 10)} · 4 min read
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>

      <div className="pagination">
        {data?.page === 1 ? (
          <button
            disabled
            className="paginate_next paginate last_page"
            onClick={() => prev()}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        ) : (
          <button className="paginate_next paginate" onClick={() => prev()}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        )}
        {pageNumber?.map((item, index) => {
          return (
            <>
              {index + 1 === data?.page ? (
                <div
                  className="paginate_numbers paginate active_page"
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </div>
              ) : (
                <div
                  className="paginate_numbers paginate"
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </div>
              )}
            </>
          );
        })}

        {data?.totalPages === data?.page ? (
          <button
            disabled
            className="paginate_next paginate last_page"
            onClick={() => next()}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        ) : (
          <button className="paginate_next paginate" onClick={() => next()}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        )}
      </div>
      <div className="pages">
        mostrando {data?.docs.length} de {data?.totalDocs}
      </div>
    </div>
  );
}

export default Blog;
