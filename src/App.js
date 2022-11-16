import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./Components/Loading";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Articles from "./Pages/Articles";
import Editor from "./Pages/Editor";

function App() {
  const ViewRef = useRef();
  useEffect(() => {
    ViewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <div className="App" ref={ViewRef}>
      <React.Suspense fallback={<Loading />}>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/articles/:id" element={<Articles />}></Route>
          <Route path="/editor" element={<Editor />}></Route>
        </Routes>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;
