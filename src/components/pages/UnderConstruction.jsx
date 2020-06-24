import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UnderConstructionImg from '../../images/UnderConstruction.png';
class UnderConstruction extends Component {
  render() {
    return (
      <ComponentUnderConstruction className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <div>
                <img src={UnderConstructionImg} alt="" width="800px" />
              </div>
              <div className="error-actions">
                <Link to="/" className="btn btn-outline-primary btn-lg">
                  <i className="fa fa-home">&nbsp; Back To Main</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ComponentUnderConstruction>
    );
  }
}

export default UnderConstruction;

const ComponentUnderConstruction = styled.div`
  .error-template {
    padding: 40px 15px;
    text-align: center;
  }

  .error-actions {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .btn {
    margin-right: 10px;
  }
`;
