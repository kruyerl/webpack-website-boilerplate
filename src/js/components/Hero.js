import React from 'react';
import Logo from '../../img/logo/LDKLogo.svg';

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="eight columns">
              <img src={Logo} alt="" />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              <h1>
                {this.props.content.heading} <span>:)</span>
              </h1>
              <h4>{this.props.content.description}</h4>
              <p>{this.props.content.paragraph}</p>
              <div className="callToAction">
                <a
                  href="mailto:hello@ldkcreatives.com?subject=LDK%20Creatives%20Enquiry&body=Hi%2C%20I%20was%20wondering..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Enquire Now</button>{' '}
                </a>
                <p>or call</p>
                <a href="tel:+27610682799">+27(0)61 068 2899</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Hero;
