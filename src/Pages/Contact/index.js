import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./style.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, getFirestore, collection } from "firebase/firestore";
import { firebaseConfig } from "../../Firebase";
import InputMask from "react-input-mask";

function Contact() {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [local, setLocal] = useState("");
  const [message, setMessage] = useState("");
  const [aboutUs, setAboutUs] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [project, ] = useState("Website");

  useEffect(() => {
    $(document).ready(function () {
      $(".right_container .top_navigation .boxes_nav").click(function () {
        $(".top_navigation .boxes_nav").removeClass("active");
        $(this).addClass("active");
      });
    });
  });

  const navigateTo = () => {navigate("/", { replace: true })};

  async function send(e) {
    var timestamp = Date.now();
    const db = getFirestore(firebaseConfig);
    const useMessagesRef = collection(db, "messages");
    e.preventDefault();
    await setDoc(doc(useMessagesRef), {
      name,
      company,
      email,
      local,
      message,
      aboutUs,
      timestamp,
      project,
      whatsapp
    })
      .then(function () {
        setName("");
        setCompany("");
        setEmail("");
        setLocal("");
        setWhatsapp("");
        setMessage("");
        setAboutUs("");
        alert("mensagem enviada com sucesso! entraremos em contato em breve.");
      })
      .catch((error) => {
        console.log(`Unsuccessful returned error ${error}`);
      });
  }
  return (
    <div className="contact_wrapper">
      <div className="contact_container">
        <div className="left">
          <div className="logo_contatct_wrapper" onClick={() => navigateTo()}>
            <div className="box_logo"></div>
            <div className="name_logo">boxmedia</div>
          </div>
          <div className="testimonial_container">
            <div className="stars"></div>
            <div className="text">
              “Always focused on data and results, Pony had us work our concepts
              and vision backwards; designing for outcome.”
            </div>
            <div className="author">Oliver Muller, Founder of Creid</div>
          </div>
          <div/>
        </div>
        <div className="right">

<div className="title_default_container">
        <div className="title_default">
        O que você está procurando?
        </div>
        <div className="sub_title_default">
        Conte pra gente o que você está buscando
e vamos começar a jornada.
        </div>
      </div>
          <div className="right_container">
            <div className="form_container">
              <div className="img_timeline"></div>
              <Form className="form_container" onSubmit={(e) => send(e)}>
                <Form.Control
                  value={name}
                  required
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Control
                  required
                  value={company}
                  type="text"
                  placeholder="Company"
                  onChange={(e) => setCompany(e.target.value)}
                />
                <Form.Control
                  required
                  value={email}
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputMask
                  required
                  value={whatsapp}
                  type="text"
                  placeholder="Whatsapp"
                  mask="(**) ***** - ****"
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
                <Form.Control
                  required
                  value={local}
                  type="text"
                  placeholder="Where are you based?"
                  onChange={(e) => setLocal(e.target.value)}
                />
                <textarea
                  value={message}
                  type="text"
                  placeholder="About the project"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <select
                  required
                  id="About"
                  onChange={(e) => setAboutUs(e.target.value)}
                  value={aboutUs}
                  placeholder="About the project"
                >
                  <option value="" disabled selected>
                    Como você ficou sabendo sobre nós?
                  </option>
                  <option value="Google">Google</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Linkedin">Linkedin</option>
                  <option value="Recomendação">Recomendação</option>
                  <option value="Outros">Outros</option>
                </select>
                <input type="submit" placeholder="" />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
