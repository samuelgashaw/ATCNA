import React, { Component } from 'react';
import Image1 from '../../images/dbu.jpg';
import Image2 from '../../images/localmarket.jpg';
import Image3 from '../../images/beresa.jpg';
import Image4 from '../../images/rasabebe.png';
import logo from '../../logo.png';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <p className="lead text-justify p-5">
            Hope For Tebassie (H4T) is a legally licensed non-profit
            organization devoted to give hope for most vulnerable groups in our
            hometown Tebassie, Debre Birhan, Ethiopia. We are a North America
            based Non-Governmental Organization (NGO) that offers support to
            most vulnerable groups in our hometown to gain access to health
            services, clean water, and education. Founded by the Tebassie
            Hometown Association (HTA) group, we understand the need of our
            hometown and the work ahead of us to provide aid in communities
            where the capacity of the local government has fallen short. We are
            confident that with our unwavering support, we aspire to engage the
            local community in battling and eradicating poverty and expanding
            opportunities for those disregarded and most vulnerable.
          </p>
        </div>
      </>
    );
  }
}
