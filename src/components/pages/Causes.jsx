import React, { Component } from 'react';
// import styled from 'styled-components';
import causesImage from '../../images/causes.png';
import newyear from '../../images/newyear.jpg';
import zelle from '../../images/zelle.png';
import dyk from '../../images/dyk.png';

import styled from 'styled-components';

class Causes extends Component {
  render() {
    return (
      <div>
        <CausesContainer className="my-0 p-5 bg-light">
          <div className="container ">
            <div className="row ">
              <div className=" col-md-8 ">
                <div
                  className="downarrowdiv text-center "
                  id=""
                  style={{ width: '100%' }}
                >
                  <h1 className=" text-white font-weight-bold">
                    <span className=" text-warning font-weight-bold">
                      Hunger Free
                    </span>
                    &nbsp; Enkutatash 2013 Campaign
                  </h1>
                </div>
                <div className="bg-light text-white p-4">
                  <p className="lead text-justify">
                    Our first fundraising since becoming licensed is focused to
                    raise funds to provide meals for the Holiday, Ethiopian New
                    Year, “Enkutatash 2013” . We are most fortunate to not have
                    to worry about where our next meal is coming from, and we
                    hope we will never have to be in such an agonizing
                    situation. However, in Tebassie Ethiopia there are many
                    families who must choose between feeding their children or
                    themselves.
                  </p>
                  <p className="lead text-justify">
                    We at H4T, while we understand we can’t change our
                    community’s lives in a day or even in a year, we are
                    committed to do what we can one day at a time with the help
                    of individuals like you. That is why we decided to kick off
                    this great venture at the start of the Ethiopian New Year,
                    Enkutatash 2013 fundraising campaign. Help us to assist
                    families to have a holiday meal and put a smile on their
                    face.
                  </p>
                  <p className="lead text-justify">
                    We thank you in advance for supporting our efforts! We
                    cannot do this without generous friends and family like you.
                  </p>
                </div>
              </div>

              <div className="col-sm-4 py-5 mt-5">
                <img
                  src={newyear}
                  alt=""
                  style={{ height: '100%', width: '100%', align: 'center' }}
                />
              </div>

              <div className="row p-0">
                <div className="col-md-2 p-1 ">
                  <img
                    src={dyk}
                    alt=""
                    style={{ height: '100%', width: '100%', align: 'center' }}
                  />
                </div>
                <div className="col-md-10 m-0 p-0 bg-white">
                  <h6 className="lead text-justify p-3 ">
                    Ethiopia is 7 years behind and the first month of the
                    Calendar year is September? Yes! Ethiopia will be welcoming
                    2013 on September 11, 2020. See links below for more
                    information regarding the history Ethiopian calendar.
                  </h6>
                  <ul>
                    <li>
                      <a
                        href="https://ethiopiancalendar.wordpress.com/history/"
                        target="_blank"
                      >
                        The Ethiopic Calendar
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://theculturetrip.com/africa/ethiopia/articles/why-is-the-ethiopian-calendar-7-years-behind/"
                        target="_blank"
                      >
                        Why Is the Ethiopian Calendar 7 Years Behind?
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <br />

              <p className="display-5 lead font-weight-bold">
                Please donate via
                <img
                  src={zelle}
                  alt=""
                  style={{ height: '70%', width: '10%', align: 'center' }}
                />
                <a href="">hope4tebassie@gmail.com</a> email address.
              </p>
            </div>

            {/*<div className="row">
               <div className="col-sm-3">
                <img
                  src={causesImage}
                  alt=""
                  style={{ height: '100%', width: '100%', align: 'center' }}
                />
              </div> */}

            {/* <div className="bg-light col-sm-9" id="aboutDiv">
                <div>
                  <h3 className="display-4">
                    Upcoming Event---Covid-19 Campaign
                  </h3>
                </div>
                <p className="lead text-justify">
                  We believe that support to basic health, education and water
                  and sanitation infostructures is the key to having healthy and
                  productive people in our community. Our primary focus is to
                  provide immediate financial and material assistance to most
                  vulnerable people (children, elderly, disabled, and the poor)
                  with the aim of preventing the spread of Covid-19 as well as
                  other related public health issues in Tebassie, Ethiopia.
                </p>
              </div> 
            </div>*/}
          </div>
        </CausesContainer>
      </div>
    );
  }
}

export default Causes;

const CausesContainer = styled.section`
  * {
    color: #000;
  }
  h4 {
    text-align: left;
    padding: 10px;
    color: #121214;
    width: 25%;
    :hover {
      opacity: 0.5;
    }
  }
  img {
    :hover {
      cursor: pointer;
      opacity: 0.75;
    }
  }

  kbd {
    color: var(--mainYellow);
  }
`;
