import React from 'react';
import styled from 'styled-components';
import SocialFollow from './SocialFollow';
function Footer() {
  return (
    <FooterContainer className="main-footer mb-0">
      <div className="footer-middle">
        <div className="container">
          <center>
            <h5 className="display-5">Follow us</h5>
            <SocialFollow />
          </center>
          {/* <div className="row">
            <div className="col-md-3 col-sm-6 text-capitalize">
              <h4>contact us</h4>
              <ul className="list-unstyled">
                <li>6701 14th St NW</li>
                <li>washington, DC.</li>
                <li>Phone 202-381-4544.</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Charity Organizations</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Aregawiyan Merja Mahiber</a>
                </li>
                <li>
                  <a href="/">Abroadeg</a>
                </li>
                <li>
                  <a href="/">Tebassie Charity</a>
                </li>
                <li>
                  <a href="/">Tebassie Charity</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Education</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Debre Birhan University</a>
                </li>
                <li>
                  <a href="/">Debre Birhan TEVT</a>
                </li>
                <li>
                  <a href="/">Ras Abebe Aregay Library & Bookstore</a>
                </li>
                <li>
                  <a href="/">Tebassie College</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Investment</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.habeshabreweries.com/">
                    Habesha Breweries
                  </a>
                </li>
                <li>
                  <a href="/">Dashen Breweries</a>
                </li>
                <li>
                  <a href="/">Tebassie Investment</a>
                </li>
                <li>
                  <a href="/">Tebassie Investment</a>
                </li>
              </ul>
            </div>
          </div>
*/}
          <div className="footer-bottom">
            <center>
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} H4T - All Rights Reserved
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
    background: rgba(0, 0, 0, 0.8);
    padding-top: 1rem;
    color: var(--mainYellow);
  }

  .footer-bottom {
    padding-top: 0rem;
    padding-bottom: 0rem;
    margin-bottom: 0;
  }
  ul li a {
    color: var(--mainYellow);
  }
  ul li a:hover {
    color: var(--mainLightBlue);
  }
  h4 {
    color: var(--mainLightBlue);
    text-decoration: underline;
  }
`;
