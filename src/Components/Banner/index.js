import React from "react";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";
function Banner() {
  const navigate = useNavigate();

  const navigateTo = () => {navigate("contact", { replace: true })};

  return (
    <div className="banner_wrapper" id="home">
      <div className="overlay" />
      <div className="banner_container">
        <div className="left">
          <div className="title_container">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1200}>
              <div className="title">Web design done differently.</div>
            </ScrollAnimation>
            <div className="description">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce={true}
                delay={1400}
              >
                Somos um estúdio de design e desenvolvimento focado em criar
                interações valiosas por meio da inovação digital.
              </ScrollAnimation>
            </div>
            <div className="button_cotainer">
              <Button title={"começar agora!"} onClick={() => navigateTo()}>
                começar agora!
              </Button>
              <AnchorLink href="#price">
                <button>nossos planos</button>
              </AnchorLink>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="boxes_wrapper">
            <div className="box">
              <div className="number">1000+</div>
              <div className="text">versions</div>
            </div>
            <div className="box">
              <div className="number">50+</div>
              <div className="text">projects</div>
            </div>
            <div className="box">
              <div className="number">20K</div>
              <div className="text">hours of work</div>
            </div>
            <div className="box">
              <div className="number">7</div>
              <div className="text">countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
