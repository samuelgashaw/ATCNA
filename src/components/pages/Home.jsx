import React, { Component } from 'react';
import Image1 from '../../images/dbu.jpg';
import Image2 from '../../images/localmarket.jpg';
import Image3 from '../../images/beresa.jpg';
import Image4 from '../../images/rasabebe.png';
import logo from '../../images/logo11.png';
import hope from '../../images/hope.jpg';

import newyear from '../../images/newyear.jpg';

import { Wave } from 'react-animated-text';

export default class Home extends Component {
  render() {
    return (
      <div className="bg-light">
        <div>
          <img
            src={hope}
            alt=""
            style={{
              width: '100%',
              height: '500px',
              margin: '0px',
              opacity: 0.65,
            }}
          />
        </div>
        <div className="row ">
          <div
            className="col-md-7 text-justify  p-5 bg-light "
            style={{
              borderRight: '5px solid lightgray',
            }}
          >
            <div className="text-justify">
              <h3 className="display-5 font-weight-bold text-center">
                {/* <Wave
                  text="Hope 4 Tebassie Inc."
                  effect="stretch"
                  effectChange="0.5"
                /> */}
                Hope 4 Tebassie Inc.
              </h3>
            </div>
            <p className="lead text-justify rounded ">
              Hope For Tebassie (H4T) is a legally licensed non-profit
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
          </div>

          <div
            className="col-md-5  container p-5 bg-secondary text-white "

            // style={{
            //   color: 'red',
            // }}
          >
            <div
              className="text-dark bg-warning "
              id="curve"
              style={{
                color: '#C0C0C0	',
              }}
            >
              <h3 className=" display-5 font-weight-bold text-center">
                <Wave
                  text="Hunger Free Enkutatash 2013 Campaign"
                  effect="stretch"
                  effectChange="0.5"
                />
              </h3>
            </div>
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
              overcome hunger and Covid-19. We wish you and your beloved family
              a Happy 2013 Year ahead.
            </p>
            <p className="lead text-justify ">
              We thank you in advance for supporting our efforts! We cannot do
              this without generous friends and family like you.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
