import React from "react";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../Button";
function Banner() {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("contact", { replace: true });
  };

  return (
    <div className="banner_wrapper" id="home">
      <div className="scroll_tag">scroll <span></span></div>
      <div className="overlay" />
      <div className="banner_container">
        <div className="left">
          <div className="title_container">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
              <div className="title"><span>Web design done</span> differently.</div>
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

            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1700}>
              <div className="button_cotainer">
                <Button title={"começar agora!"} onClick={() => navigateTo()}>
                  começar agora!
                </Button>
                <AnchorLink href="#price">
                  <button>nossos planos</button>
                </AnchorLink>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="right">
          <div className="boxes_wrapper">
            <div className="box">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce={true}
                delay={500}
              >
                <div className="number">1000+</div>
                <div className="text">versions</div>
              </ScrollAnimation>
            </div>

            <div className="box">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce={true}
                delay={700}
              >
                <div className="number">50+</div>
                <div className="text">projects</div>
              </ScrollAnimation>
            </div>
            <div className="box">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce={true}
                delay={900}
              >
                <div className="number">20K</div>
                <div className="text">hours of work</div>
              </ScrollAnimation>
            </div>
            <div className="box">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce={true}
                delay={1100}
              >
                <div className="number">7</div>
                <div className="text">countries</div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
