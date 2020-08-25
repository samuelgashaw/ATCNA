import React, { Component } from 'react';
// import styled from 'styled-components';
import causesImage from '../../images/causes.png';
import styled from 'styled-components';

class Causes extends Component {
  render() {
    return (
      <>
        <CausesContainer className="bg-light my-3 py-5">
          <div className="container ">
            <div className="row">
              <div className="col-sm-3">
                <img
                  src={causesImage}
                  alt=""
                  style={{ height: '100%', width: '100%', align: 'center' }}
                />
              </div>
              <div className="bg-light col-sm-9">
                <div>
                  <h4 className="display-4">Causes</h4>
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
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </CausesContainer>
      </>
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
