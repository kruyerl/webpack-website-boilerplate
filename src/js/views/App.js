import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
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
      hero: {
        heading: 'Hi',
        description: 'I am a South African based UX Designer, Front-end Web Developer & Brand Consultant.',
        paragraph:
          'Thanks for visiting! Currently, this site is down in order to make some exciting improvements. In the interim, let us chat over the phone or in person.',
      },
    };
  }

  render() {
    return (
      <React.Fragment>
        <Banner content={this.state.special} />
        <Hero content={this.state.hero} />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
