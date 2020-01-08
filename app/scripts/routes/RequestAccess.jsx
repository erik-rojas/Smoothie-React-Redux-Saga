import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import SVG from 'react-inlinesvg';

import { accessConfirm } from 'actions/index';

export class RequestAcccess extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      accessInfo: {
        name: null,
        email: null,
        role: null,
        website: null,
        biztype: null,
      },
    };
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    requestaccess: PropTypes.object,
  };

  onInputChanged = e => {
    const { name, value } = e.target;
    const { accessInfo } = this.state;
    this.setState({
      accessInfo: {
        ...accessInfo,
        [name]: value,
      },
    });
  };

  handleClickConfirm = e => {
    const { accessInfo } = this.state;
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(accessConfirm(accessInfo));
  };

  render() {
    const { requestaccess } = this.props;
    let output;

    if (requestaccess.accessConfirm) {
      output = (
        <div className="success-content">
          <div className="background-logo-fill" />
          <div className="txt-content">
            <div className="first-text-section">
              Thanks for requesting an access to Croissant ! 🥐
            </div>
            <div className="second-text-section">
              We will get back to you tomorrow!
            </div>
          </div>
        </div>
      );
    }
    else {
      output = (
        <div className="form-content">
          <div className="input-group-section">
            <div className="input-item-section">
              <div className="icon-section">
                <SVG
                  className="icon-content"
                  src={require('assets/media/images/_ionicons_svg_md-person.svg')}
                />
              </div>
              <input
                type="text"
                className="input-section"
                name="name"
                value={this.name}
                onChange={this.onInputChanged}
                placeholder="Name"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
              />
            </div>
            <div className="input-item-section">
              <div className="icon-section">
                <SVG
                  className="icon-content"
                  src={require('assets/media/images/_ionicons_svg_ios-mail.svg')}
                />
              </div>
              <input
                type="email"
                className="input-section"
                name="email"
                value={this.email}
                onChange={this.onInputChanged}
                placeholder="Email"
              />
            </div>
            <div className="input-item-section">
              <div className="icon-section">
                <SVG
                  className="icon-content"
                  src={require('assets/media/images/_ionicons_svg_ios-briefcase.svg')}
                />
              </div>
              <input
                type="text"
                className="input-section"
                name="role"
                value={this.role}
                onChange={this.onInputChanged}
                placeholder="Role"
              />
            </div>
            <div className="input-item-section">
              <div className="icon-section">
                <SVG
                  className="icon-content"
                  src={require('assets/media/images/_ionicons_svg_ios-briefcase.svg')}
                />
              </div>
              <input
                type="text"
                className="input-section"
                name="website"
                value={this.website}
                onChange={this.onInputChanged}
                placeholder="Business website"
              />
            </div>
            <div className="input-item-section">
              <div className="icon-section">
                <SVG
                  className="icon-content"
                  src={require('assets/media/images/_ionicons_svg_ios-briefcase.svg')}
                />
              </div>
              <select
                label="Business type"
                value={this.biztype}
                name="biztype"
                onChange={this.onInputChanged}
                className="input-section"
              >
                <option value="saas">SaaS</option>
                <option value="marketplace">Marketplace</option>
                <option value="ecommerce">Ecommerce</option>
              </select>
            </div>
          </div>
          <div className="button-section">
            <div className="button-content">
              <button
                type="button"
                className="confirm-btn"
                onClick={this.handleClickConfirm}
              >
                Confirm
                <SVG
                  className="icon-section"
                  src={require('assets/media/images/_ionicons_svg_md-arrow-round-forward.svg')}
                />
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="app-requestaccess">
        <div className="app-requestaccess-background" />
        <div className="app-requestaccess-header">
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
              className="menu-btn"
              onClick={() => this.handleRequest()}
            />
          </div>
        </div>
        <div className="app-requestaccess-title">Request access</div>
        <div className="app-requestaccess-intro">
          We'd like to know more about you
        </div>
        <div className="app-requestaccess-confirm">{output}</div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { requestaccess: state.requestaccess };
}

export default connect(mapStateToProps)(RequestAcccess);
