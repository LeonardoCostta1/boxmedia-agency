import React, { useState } from "react";
import "./style.css";
import MDEditor from "@uiw/react-md-editor";
import { useCreateArticleMutation } from "../../redux/services/blog";

function Editor() {
  const [createArticle] = useCreateArticleMutation();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const createArticleWithAllInformations = () => {
    createArticle({
      title,
      text,
      author: "leonardo costa"
    });
  };
  return (
    <div className="editor_wrapper">
      <div className="editor_container">
        <input
          type="text"
          placeholder="digite o titulo do artigo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <MDEditor value={text} onChange={(e) => setText(e)} />
        <button onClick={() => createArticleWithAllInformations()}>publicar artigo</button>
      </div>
    </div>
  );
}

export default Editor;
