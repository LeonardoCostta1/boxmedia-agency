import React from "react";
import "./style.css";
function Footer() {
  return (
    <>
      <div className="footer_wrapper" id="about">
        <div className="title_footer_page">
          Why be shy,<span>Say hi.</span>
        </div>
        <div className="footer_container">
          <div className="box">
            <div className="info_container_footer">
              <div className="title_footer_default">mail us</div>
              <div className="info">contact@boxmedia.com.br</div>
            </div>
            <div className="info_container_footer">
              <div className="title_footer_default">even better call us</div>
              <div className="info"> <span>(31)</span> 99126 - 1722</div>
            </div>
          </div>

          <div className="box">
            <div className="title_footer_default">let's be friends</div>
            <div className="info_second_box">
              <div className="item_footer">linkedin</div>
              <div className="item_footer">instagram</div>
              <div className="item_footer">behance</div>
              <div className="item_footer">github</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub_footer">
      <div>Belo Horizonte</div>
        <div>© 2022. Haspr™ All rights reserved.</div>
      </div>
    </>
  );
}
export default Footer;
