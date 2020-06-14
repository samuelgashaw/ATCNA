import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
function CreditCardPayment() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-6-lg">
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
          </div>
          <div className="col-6-lg">
            <div className="form-group">
              <form action="">
                <div className="form-control">
                  <input
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={number}
                    maxLength="16"
                    onChange={(e) => setNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                </div>
                <div className="form-control ">
                  <input
                    type="text"
                    name="name"
                    maxLength="30"
                    placeholder="Name on Card"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                </div>
                <div className="form-control ">
                  <input
                    type="text"
                    name="expiry"
                    maxLength="4"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                </div>
                <div className="form-control ">
                  <input
                    type="tel"
                    name="cvc"
                    maxLength="3"
                    placeholder="cvc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCardPayment;
