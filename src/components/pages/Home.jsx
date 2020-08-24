import React, { Component } from 'react';
import Image1 from '../../images/dbu.jpg';
import Image2 from '../../images/localmarket.jpg';
import Image3 from '../../images/beresa.jpg';
import Image4 from '../../images/rasabebe.png';
import logo from '../../logo.png';

export default class Home extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        data-interval="4000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={logo} alt="First slide" />
            <div className=" ImageDescription carousel-caption d-none d-md-block ">
              {/* <h5 className=" display-4">Debre Berhan University</h5> */}
              <h5 className=" display-4">Hope 4 Tebassie Inc.</h5>

              <p className="lead">
                Hope For Tebassie (H4T) is a legally licensed non-profit
                organization devoted to give hope for most vulnerable groups in
                our hometown Tebassie, Debre Birhan, Ethiopia. We are a North
                America based Non-Governmental Organization (NGO) that offers
                support to most vulnerable groups in our hometown to gain access
                to health services, clean water, and education. Founded by the
                Tebassie Hometown Association (HTA) group, we understand the
                need of our hometown and the work ahead of us to provide aid in
                communities where the capacity of the local government has
                fallen short. We are confident that with our unwavering support,
                we aspire to engage the local community in battling and
                eradicating poverty and expanding opportunities for those
                disregarded and most vulnerable.
                {/* Debre Berhan University, which is a 13 years old university, is
                established in the 600 years old historical town- Debre Berhan –
                specifically in Tebassie, 130 km away from Addis Ababa in the
                north. */}
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Image2} alt="Second slide" />
            <div className="ImageDescription carousel-caption d-none d-md-block">
              <h5 className="display-4">Local Market</h5>
              <p className="lead">
                A localmarket market is a physical retail marketplace intended
                for farmers to sell their homegrown produce, live animals and
                plants directly by farmers to consumers.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Image3} alt="Third slide" />
            <div className="ImageDescription carousel-caption d-none d-md-block">
              <h5 className="display-4">Beresa Dam</h5>
              <p className="lead">
                Debre Berhan University, which is a 13 year old university, is
                established in the 600 years old historical town- Debre Berhan –
                specoifically in Tebassie, 130 km away from Addis Ababa in the
                north.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Image4} alt="Third slide" />
            <div className="ImageDescription carousel-caption d-none d-md-block">
              <h5 className="display-4">
                Ras Abebe Aregay Library & Bookstore
              </h5>
              <p className="lead">
                Located in Tebasie ,Debre Birhan town, the library is the first
                of its kind in this town of about 100,000 people. The founder,
                Mezemir Girma, is a full-time lecturer at the Debre Birhan
                University in the department of English and Literature. He says,
                “I can see this library being the centre of literacy development
                in Debre Birhan.”
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
