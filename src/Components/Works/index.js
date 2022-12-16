import React from "react";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";
function Works() {
  return (
    <div className="works_wrapper" id="works">
      <div className="works_container">
        <div className="title_default_container"></div>

        <div className="works_boxes_container">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={200}>
            <div className="works_boxes">
              <div className="opacity">
                <div class="desc-wrapper">
                  <div class="type">Shopify eCommerce</div>
                  <div class="title">Everyday wear clothing company</div>
                  <div class="client">Wolf and Thistle</div>
                  <div class="link-icon">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
          <div className="works_boxes">
            <div className="opacity">
              <div class="desc-wrapper">
                <div class="type">Shopify eCommerce</div>
                <div class="title">Everyday wear clothing company</div>
                <div class="client">Wolf and Thistle</div>
                <div class="link-icon">
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={800}>
          <div className="works_boxes">
            <div className="opacity">
              <div class="desc-wrapper">
                <div class="type">Shopify eCommerce</div>
                <div class="title">Everyday wear clothing company</div>
                <div class="client">Wolf and Thistle</div>
                <div class="link-icon">
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={1100}>
          <div className="works_boxes">
            <div className="opacity">
              <div class="desc-wrapper">
                <div class="type">Shopify eCommerce</div>
                <div class="title">Everyday wear clothing company</div>
                <div class="client">Wolf and Thistle</div>
                <div class="link-icon">
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Works;
