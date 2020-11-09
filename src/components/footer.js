import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    return (
      <div className="footer-bottom-area">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="copyright">
                        <p>&copy; 2020 telebuy. All Rights Reserved.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="footer-card-icon">
                        <i className="fa fa-cc-discover"></i>
                        <i className="fa fa-cc-mastercard"></i>
                        <i className="fa fa-cc-paypal"></i>
                        <i className="fa fa-cc-visa"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default FooterComponent;