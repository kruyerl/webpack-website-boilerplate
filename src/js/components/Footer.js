import React from 'react';
import Logo from '../../img/logo/LDKLogo.svg';
import { getTheYear } from '../helpers';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <ul>
                <li>
                  <a className="">Test</a>
                </li>
                <li>
                  <a className="">Test</a>
                </li>
                <li>
                  <a className="">Test</a>
                </li>
                <li>
                  <a className="">Test</a>
                </li>
              </ul>
              <small>Copyright 2018 by Luke Kruyer</small>
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
