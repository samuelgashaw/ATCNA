import React, { Component } from 'react';
import Image1 from '../../images/dbu.jpg';
import Image2 from '../../images/localmarket.jpg';
import Image3 from '../../images/beresa.jpg';
import Image4 from '../../images/rasabebe.png';
import logo from '../../images/logo11.png';
import hope from '../../images/hope.jpg';

import { Wave } from 'react-animated-text';

export default class Home extends Component {
  render() {
    return (
      <div id="aboutDiv" className="bg-light">
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
        <div className="container py-5  bg-light " id="aboutDiv">
          <div className="col-sm-12 bg-light" colspan="2">
            <h3 className=" display-5 font-weight-bold text-center">
              <Wave
                text="Hope 4 Tebassie Inc."
                effect="stretch"
                effectChange="0.5"
              />
            </h3>
          </div>
          <p className="lead text-justify bg-light rounded ">
            Hope For Tebassie (H4T) is a legally licensed non-profit
            organization devoted to give hope for most vulnerable groups in our
            hometown Tebassie, Debre Birhan, Ethiopia. We are a USA based
            Non-Governmental Organization (NGO) that offers support to most
            vulnerable groups in our hometown to gain access to health services,
            clean water, and education. Founded by the Tebassie Hometown
            Association (HTA) group, we understand the need of our hometown and
            the work ahead of us to provide aid in communities where the
            capacity of the local government has fallen short. We are confident
            that with our unwavering support, we aspire to engage the local
            community in battling and eradicating poverty and expanding
            opportunities for those disregarded and most vulnerable.
          </p>
        </div>
      </div>
    );
  }
}
