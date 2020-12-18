import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google </a></li>
      default:
        return <li><a href="/api/logout">Logout</a></li>

    }
  }
  render() {
    //console.log(this.props);
    return (

      <nav>
        <div class="nav-wrapper">
          <a href="" class="left brand-logo">Emaily</a>
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