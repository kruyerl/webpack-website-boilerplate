import React from 'react';
import Banner from '../components/Banner';

import Logo from '../../img/logo/LDKLogo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      special: {
        specialCopy: 'this is a special',
        specialUrl: '#',
        specialOpen: true,
      },
    };
  }

  render() {
    return (
      <Banner content={this.state.special} />
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="eight columns">
              <img src={Logo} alt="" />
              <br />
              <h1>
                Hi <span>:)</span>
              </h1>
              <h4>I am a South African based UX Designer, Front-end Web Developer & Brand Consultant.</h4>
              <p>
                Thanks for visiting! Currently, this site is down in order to make some exciting improvements. In the
                interim, let us chat over the phone or in person.
              </p>
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
export default App;
