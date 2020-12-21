import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
export class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google </a></li>
      default:
        return [
          <li key="1"><Payments/></li>,
        <li key="2"><a href="/api/logout">Logout</a></li>
        ];

    }
  }
  render() {
    //console.log(this.props);
    return (

      <nav>
        <div class="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            class="left brand-logo"
          >HDWD </Link>

          <ul id="nav-mobile" class="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>

    )
  }
}
function mapStateToProps({ auth }) {
  return { auth };
};
export default connect(mapStateToProps)(Header);