import React, { useEffect } from "react";
import $ from "jquery";
import "./style.css";
import Moment from "react-moment";
import "moment-timezone";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
function Menu() {
  const navigate = useNavigate();

  useEffect(() => {
    $(document).ready(function ($) {
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 20) {
          $(".menu_wrapper").addClass("active");
        } else {
          $(".menu_wrapper").removeClass("active");
        }
      });
    });
  }, []);

  const navigateTo = (route) => {
    navigate(route, { replace: true });
  };

  return (
    <div className="menu_wrapper">
      <div className="menu_container">
        <AnchorLink href="#home">
          <div className="logo_container" onClick={() => navigateTo("/")}>
            <div className="box_logo"></div>
            <div className="name_logo">boxmedia</div>
            <Moment
              interval={1000}
              local
              format={`dddd | ${"hh:mm:ss"}`}
            ></Moment>
          </div>
        </AnchorLink>
        <div className="menu_drag">
          <div className="navigation_menu">
            <AnchorLink href="#clients">
              <div>clients</div>
            </AnchorLink>
            <AnchorLink href="#services">
              <div>Services</div>
            </AnchorLink>
            <AnchorLink href="#price">
              {" "}
              <div>Prices</div>
            </AnchorLink>
            <AnchorLink href="#works">
              <div>Works</div>
            </AnchorLink>
            <AnchorLink href="#about">
              <div>About</div>
            </AnchorLink>
            <div onClick={() => navigateTo("blog")}>blog</div>
            <Button title="Contact" onClick={() => navigateTo("contact")} />
          </div>
          <div className="drag_box_container">
            <div className="name_menu">menu</div>
            <div className="drag_box">
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
