import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Footer from 'components/Footer';

export class RequestAcccess extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      emailaddress: '',
      accessValid: true,
    };

    this.onEmailChange = this.onEmailChange.bind(this);
  }

  static propTypes = {
    history: PropTypes.object,
  };

  onEmailChange(e) {
    const emailvalue = e.target.value;
    const emailValid =      emailvalue
      && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailvalue);

    if (emailValid) {
      this.setState({
        accessValid: false,
      });
    }
    else {
      this.setState({
        accessValid: true,
      });
    }
    this.setState({
      emailaddress: e.target.value,
    });
  }

  handleRequest = () => {
    const { emailaddress } = this.state;
    const { history } = this.props;

    if (emailaddress) {
      history.push('/request-access');
    }
  };

  render() {
    const { accessValid, emailaddress } = this.state;
    return (
      <div key="Home" className="app-home">
        <div className="app-home-header">
          <div className="logo-section">
            <img
              className="logo-content"
              src={require('assets/media/images/croissant.png')}
              alt=""
            />
          </div>
          <div className="button-section">
            <button
              type="button"
              className="access-btn"
              onClick={() => this.handleRequest()}
            >
              Request Access
            </button>
            <button
              type="button"
              className="menu-btn"
              onClick={() => this.handleRequest()}
            />
          </div>
        </div>
        <div className="app-home-background-left-sm" />
        <div className="app-home-background-right-sm">
          <span className="app-home-title">
            Actually launch growth experiments.
          </span>
          <span className="app-home-intro">
            We are a team of engineers, designers & marketers managing, building
            and analysing growth experiments for SaaS, Marketplace and
            Ecommerce.
          </span>
          <div className="app-home-subscribe">
            <div className="text-section">
              <input
                type="email"
                required
                className="text-field"
                value={emailaddress}
                onChange={this.onEmailChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="button-section">
              <button
                type="button"
                className="subscribe-btn"
                onClick={() => this.handleRequest()}
                disabled={accessValid}
              >
                Request Access
              </button>
            </div>
          </div>
          <div className="app-home-subscribe-sm">
            <div className="text-section-sm">
              <input
                type="email"
                required
                className="text-field-sm"
                value={emailaddress}
                onChange={this.onEmailChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="button-section-sm">
              <button
                type="button"
                className="subscribe-btn-sm"
                onClick={() => this.handleRequest()}
                disabled={accessValid}
              >
                Request Access
              </button>
            </div>
          </div>
        </div>

        <div className="app-home-background">
          <div className="app-home-background-leftOval" />
          <div className="app-home-background-center" />
          <div className="app-home-background-rightOval" />
        </div>

        <div className="app-home-workedLogos">
          <span className="text-section">Our team members worked for</span>
          <div className="logos-section">
            <div className="logo-reeport">
              <img
                className="logo-content"
                src={require('assets/media/images/logo-reeport.jpg')}
                alt=""
              />
            </div>
            <div className="logo-algolia">
              <img
                className="logo-content"
                src={require('assets/media/images/logo-algolia.png')}
                alt=""
              />
            </div>
            <div className="logo-riseup">
              <img
                className="logo-content"
                src={require('assets/media/images/rise-up-300-x-300.jpg')}
                alt=""
              />
            </div>
            <div className="logo-mon">
              <img
                className="logo-content"
                src={require('assets/media/images/logo-mon-banquet.jpg')}
                alt=""
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(RequestAcccess);
