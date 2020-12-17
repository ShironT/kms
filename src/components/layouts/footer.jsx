import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/*Column 1*/}
            <div className="col-md-3 col-sm-6">
              <h4>Contacts</h4>
              <ul className="list-unstyled">
                <li>shironceylon@gmail.com </li>
              </ul>
            </div>
            {/*Column 2*/}
            <div className="col-md-3 col-sm-6">
              <h4>KMSystem</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/post-a-problem">Post A Problem</a>
                </li>
                <li>
                  <a href="/problem-list">Answer A Problem</a>
                </li>
                <li>
                  <a href="/expert-list">Find An Expert</a>
                </li>
              </ul>
            </div>
            {/*Column 3*/}
            <div className="col-md-3 col-sm-6">
              <h4>Connect</h4>
              <ul className="list-unstyled">
                <li>
                  <FaFacebookF />
                  <a href="https://www.facebook.com/">Facebook</a>
                </li>

                <li>
                  <FaTwitter />
                  <a href="https://twitter.com/">Twitter</a>
                </li>
              </ul>
            </div>
            {/*Column 4*/}
            <div className="col-md-3 col-sm-6">
              <h4>More</h4>
              <ul className="list-unstyled">
                <li>About</li>
                <li>Terms & condition</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Shiron Thalagala - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: #343a40;
    padding-top: 3rem;
    color: white;
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: #808080;
  }

  ul li a:hover {
    color: white;
  }
`;
