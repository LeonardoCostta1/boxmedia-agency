import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./style.css";

function Services() {
  return (
    <div className="services_wrapper" id="services">

      <div className="title_default">Why us?</div>
      <div className="services_container">
        <div className="box_services">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
            <div className="title_services">Business-centered approach</div>
            <div className="text">
              Everything we do is geared toward your strategic goals.
              Essentially, our designs are an effective way to make your
              business successful.
            </div>
          </ScrollAnimation>
        </div>

        <div className="box_services">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
            <div className="title_services">Strong marketing tools</div>
            <div className="text">
              Marketing and design are inextricably linked. We know just how to
              make them complement each other.
            </div>
          </ScrollAnimation>
        </div>

        <div className="box_services">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
            <div className="title_services">Close communication</div>
            <div className="text">
              We have found that keeping in touch with our clients accounts for
              60% of a given project’s success.
            </div>
          </ScrollAnimation>
        </div>

        <div className="box_services">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
            <div className="title_services">Meeting the deadlines</div>
            <div className="text">
              We hate falling behind on a project just as much as our clients.
              That’s why we never do it.
            </div>
          </ScrollAnimation>
        </div>

        <div className="box_services">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
            <div className="title_services">Future-proof results</div>
            <div className="text">
              Fads are fine, but some things are timeless. We make every effort
              to stay on the cutting edge of design.
            </div>
          </ScrollAnimation>
        </div>

        <div className="box_services">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
            <div className="title_services">Exceeding Expectations</div>
            <div className="text">
              You know why we really care about your success? Because it
              motivates us like nothing else! So it’s a win-win situation.
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Services;
