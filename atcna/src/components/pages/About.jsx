import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="col-lg-12">
            <div className="well well-sm">
              <h3>
                <strong>About Us</strong>
              </h3>
            </div>
            <p>
              የጠባሴ ልጆች ማህበር በሰሜን አሜሪካ እ አ አ ግንቦት 2 ቀን 2020 ሲመሰረት በሰሜን አሜሪካ የምንኖር
              የጠባሴ ልጆች የምንኖርበትን አገር ህግና ስርአት አክብረን፣ የዘር፣የጾታ፣የሃይማኖት፣የፖለቲካ ወገንተኝነት
              የሌለበት ወይም የማይካሄድበት ጠንካራና ለሁላችንም አለኝታ የሚሆን እንዲሁም ተወልደን ያደግንበትን ሰፈር
              ማህበራዊና ኢኮኖሚያዊ ችግሮችን ለመቅረፍ የሚያስችሉ ስራዎችን ለመስራት ታስቦ በእኛ በአባላቶቹ በጐ ፈቃድ
              ተመሠረተ።
            </p>
          </div>
          <div className="col-lg-12">
            <div className="well well-sm">
              <h3>
                <strong>Vision</strong>
              </h3>
            </div>
            <p>
              የጠባሴ ልጆችንና አረጋዊያንን የኢኮኖሚና ማህበራዊ ችግሮችን በዘላቂነት መፍታት የሚችል አስተማማኝ ማህበር
              ሆኖ ማየት።
            </p>
          </div>

          <div className="col-lg-12 ">
            <h3>
              <strong>Current Executive Commitee</strong>
            </h3>
            <div className="row">
              <div className="card-deck">
                <div className="card">
                  <img
                    src="../../../avatars/avatar-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Chairman</h6>
                    <p className="card-text">Melese Abate</p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="../../../avatars/avatar-3.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Vice Chairman</h6>
                    <p className="card-text">Bayush Gebrewold</p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="../../../avatars/avatar-2.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Secretary</h6>
                    <p className="card-text">Alayu Tadesse</p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="../../../avatars/avatar-5.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Treasurer</h6>
                    <p className="card-text">Mulugeta Tsigie</p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="../../../avatars/avatar-1.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Audit and Control Chairman</h6>
                    <p className="card-text">Abyot Hundessa</p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="../../../avatars/avatar-2.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Audit and Control Secretary</h6>
                    <p className="card-text">Zelalem Gizaw</p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src="../../../avatars/avatar-4.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Audit and Control Member</h6>
                    <p className="card-text">Mulu Setargie</p>
                  </div>
                </div>

                <div className="card">
                  <img
                    src="../../../avatars/avatar-3.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">IT Division</h6>
                    <p className="card-text">Samuel Gashaw</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
