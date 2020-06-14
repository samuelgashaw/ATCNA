import React from 'react';
import styled from 'styled-components';
import SocialFollow from './SocialFollow';
function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 text-capitalize">
              <h4>contact us</h4>
              <ul className="list-unstyled">
                <li>6701 14th St NW</li>
                <li>washington, DC.</li>
                <li>Phone 202-381-4544.</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Lorem.</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem, ipsum.</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum.</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum.</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum.</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Lorem.</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem, ipsum.</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum.</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum.</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum.</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Lorem.</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem, ipsum.</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum.</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum.</a>
                </li>
                <li>
                  <a href="/">Lorem, ipsum.</a>
                </li>
              </ul>
            </div>
          </div>
          <SocialFollow />
          <div className="footer-bottom">
            <center>
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} ATCNA - All Rights Reserved
              </p>
            </center>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: #121214;
    padding-top: 3rem;
    color: var(--mainYellow);
  }

  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainYellow);
  }
  ul li a:hover {
    color: var(--mainLightBlue);
  }
`;
