import React, { Component } from 'react';
import Image1 from '../../images/dbu.jpg';
import Image2 from '../../images/localmarket.jpg';
import Image3 from '../../images/beresa.jpg';
import Image4 from '../../images/rasabebe.png';
import logo from '../../images/logo11.png';
import hope from '../../images/hope.jpg';
import zelle from '../../images/zelle.png';

import ProgressBar from 'react-bootstrap/ProgressBar';
import newyear from '../../images/newyear.jpg';

import { Wave } from 'react-animated-text';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="bg-light ">
          {/* <div className="row"> */}
          <div className="">
            <img
              src={hope}
              alt=""
              style={{
                width: '100%',
                height: '400px',
                opacity: 0.95,
                marginBottom: '-150px',
              }}
            />
          </div>
        </div>
        <div
          className="row "
          id="mainPage"
          style={{
            marginBottom: '150px ',
          }}
        >
          <div
            className="col-md-6 container text-justify p-5 bg-light "
            style={{
              border: '2px solid lightgray',
              borderRadius: '25px',
              boxShadow: '10px 10px 5px #888',
            }}
          >
            <div className="pt-5">
              <h3 className="display-6 font-weight-bold text-center">
                {/* <Wave
                  text="Hope 4 Tebassie Inc."
                  effect="stretch"
                  effectChange="0.5"
                /> */}
                Hope 4 Tebassie Inc.
              </h3>
            </div>
            <p className="lead text-justify rounded ">
              Hope 4 Tebassie (H4T) is a legally licensed non-profit
              organization devoted to give hope for most vulnerable groups in
              our hometown Tebassie, Debre Birhan, Ethiopia. We are a USA based
              Non-Governmental Organization (NGO) that offers support to most
              vulnerable groups in our hometown to gain access to health
              services, clean water, and education.
            </p>
            <p className="lead text-justify  rounded ">
              Founded by the Tebassie Hometown Association (HTA) group, we
              understand the need of our hometown and the work ahead of us to
              provide aid in communities where the capacity of the local
              government has fallen short.
            </p>
            <p className="lead text-justify  rounded ">
              We are confident that with our unwavering support, we aspire to
              engage the local community in battling and eradicating poverty and
              expanding opportunities for those disregarded and most vulnerable.
            </p>
            {/* <div className="text-center p-5">
              <img
                src={logo}
                alt="H4T"
                width="175"
                height="175"
                className="d-inline-block align-center"
              />
              <div
                className="py-3 my-3 bg-secondary"
                style={{ borderRadius: '10px' }}
              >
                <h4 className="font-weight-bold" style={{ color: '#FFC30C' }}>
                  Hope 4 Tebassie
                  <span style={{ color: '#4FB7F7', fontFamily: 'Courier' }}>
                    (H4T)
                  </span>
                </h4>
              </div>
            </div> */}
          </div>

          <div
            className="col-md-5  container p-5 bg-secondary text-white"
            style={{
              border: '2px solid white',

              boxShadow: '  10px 10px 15px #888',
              borderRadius: '25px',
            }}
          >
            <div
              className=" text-dark bg-warning "
              id="curve"
              style={{
                color: '#C0C0C0	',
              }}
            >
              <h5 className=" display-5 text-center font-weight-bold">
                Hunger Free Enkutatash 2013 Campaign
                {/* <Wave
                  text="Hunger Free Enkutatash 2013 Campaign"
                  effect="stretch"
                  effectChange="0.5"
                /> */}
              </h5>
            </div>
            <br></br>
            <ProgressBar
              animated
              now={(4476.76 / 5000) * 100}
              label={` ${((4476.76 / 5000) * 100).toPrecision(4)} %`}
              style={{
                width: '100%',
                height: '30px',
              }}
            />
            <div
              className="text-warning font-weight-bold"
              style={{ float: 'left' }}
            >
              <em style={{ fontFamily: 'Courier' }}>Raised: $4,476.76</em>
            </div>
            <div
              className="text-warning font-weight-bold"
              style={{ float: 'right' }}
            >
              <em style={{ fontFamily: 'Courier' }}>Goal: $5,000.00</em>
            </div>
            <br></br>
            <br></br>
            <p className="lead text-justify ">
              Hope 4 Tebassie’s Hunger Free Enkutatash 2013 campaign aims to
              raise awareness and funds during the coming new year in Ethiopia.
            </p>
            <p className="lead text-justify ">
              We are currently raising funds to provide the Tebassie community
              with a holiday meal donation. Your participation will help
              individuals and families by providing them with a meal to enjoy
              with family.
            </p>
            <p className="lead text-justify ">
              Your donation of $5, $10, $15, $20 or whatever your heart desires
              will be greatly appreciated.
            </p>
            <p className="lead text-justify ">
              May the New Year be a year that Ethiopia will achieve peace,
              overcome hunger and Covid-19. To all Ethiopians welcoming the new
              year we wish you and your family a Healthy, Prosperous & Happiest
              New Year ahead! Happy New Year 2013!
            </p>
            <p className="lead text-justify ">
              We thank you in advance for supporting our efforts! We cannot do
              this without generous individuals like you.
            </p>
            <p className="display-5 bg-light lead font-weight-bold p-3">
              Please donate via
              <img
                src={zelle}
                alt=""
                style={{ height: '70%', width: '10%', align: 'center' }}
              />
              <a href="">hope4tebassie@gmail.com</a> email address.
            </p>
          </div>
        </div>
      </>
    );
  }
}
