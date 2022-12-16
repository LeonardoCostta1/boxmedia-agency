import React, { useEffect } from "react";
import $ from "jquery";
import "./style.css";

function Price() {
  useEffect(() => {
    $(document).ready(function () {
      $(".pri_container .left .services").click(function () {
        $(".left .services").removeClass("actived");
        $(this).addClass("actived");
      });
    });
  });
  return (
    <div className="pri_wrapper" id="price">
      <div className="pri_container">
        <div className="right">
          <div class="pricing-details">
            <div class="single-pricing">
              <div class="top_pricing">
                <div class="title">Starter</div>
                <div class="type">Web Design &amp; Development</div>
                <div class="price">
                  $99<span>/Mês</span>
                </div>
              </div>
              <ul class="feature-list">
                <li>WordPress Website</li>
                <li>+ Three Custom Designed Templates</li>
                <li>+ One Contact Form</li>
                <li>+ Up to 10 web pages setup and data entry</li>
                <li>+ CMS with full edit access</li> <li>+ Website Domain</li>
                <li>+ Website Hosting &amp; SSL Certificate</li>
                <li>+ On-Page SEO Setup</li> <li>Google Analytics</li>
              </ul>
            </div>
            <div class="single-pricing">
              <div class="top_pricing">
                <div class="title">Pro</div>
                <div class="type">Web Design &amp; Development</div>
                <div class="price">
                  $199<span>/Mês</span>
                </div>
              </div>
              <ul class="feature-list">
                <li>Everything in Starter</li>
                <li>+ Three Additional Templates</li>
                <li>+ Up to 40 web pages setup and data entry</li>
                <li>+ Two Service / RFQ forms</li>
                <li>+ Google Maps Integration</li> <li>+ Video Banners</li>
                <li>+ Five hours per month website maintenance</li>
                <li>+ SEO Monthly Maintenance</li>
                <li>+ Chat / WhatsApp Integration</li>
              </ul>
            </div>
            <div class="single-pricing">
              <div class="top_pricing">
                <div class="title">Custom</div>
                <div class="type">Web Design &amp; Development</div>
                <div class="price">
                  Custom<span></span>
                </div>
              </div>
              <ul class="feature-list">
                <li>Everything in Pro</li> <li>+ Multi-Lingual Website</li>
                <li>+ Shopping Cart and Ecommerce Functionality</li>
                <li>+ Custom Animations</li> <li>+ Apps and Integrations</li>
                <li>+ Registered Customer Management</li>
                <li>+ 20 hours per month website maintenance</li>
                <li>+ Advanced SEO with Performance Targets</li>
                <li>+ Email Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
