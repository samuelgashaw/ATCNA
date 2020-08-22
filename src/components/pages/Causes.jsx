import React, { Component } from 'react';
import styled from 'styled-components';
import causesImage from '../../images/causes.png';

class Causes extends Component {
  render() {
    return (
      <>
        <div className="my-3 py-5">
          <div className="container ">
            <div className="row">
              <div className="col-sm-6">
                <img
                  src={causesImage}
                  alt=""
                  style={{ height: '250px', align: 'center' }}
                />
              </div>
              <div className="bg-light col-sm-6">
                <div>
                  <h3 className="display-6">Causes</h3>
                </div>
                <p className="lead">
                  We believe that support to basic health, education and water
                  and sanitation infostructures is the key to having healthy and
                  productive people in our community. Our primary focus is to
                  provide immediate financial and material assistance to most
                  vulnerable people (children, elderly, disabled, and the poor)
                  with the aim of preventing the spread of Covid-19 as well as
                  other related public health issues in Tebassie, Ethiopia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Causes;
