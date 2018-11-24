import React from 'react';

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  isBannerOpen = () => (this.props.content.specialOpen = true ? 'banner--open' : 'banner--closed');

  render() {
    return (
      <section className={`banner ${this.isBannerOpen()}`}>
        <div className="container">
          <div className="row">
            <div className="twelve column">
              <a href={this.props.content.specialUrl}>
                <small>{this.props.content.specialCopy}</small>
              </a>
              <a>
                <small>&times;</small>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Banner;
