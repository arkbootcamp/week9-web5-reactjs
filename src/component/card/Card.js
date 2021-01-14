import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {title, description, price} = this.props
    return (
      <div>
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <h6>Rp. {price}</h6>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
      </div>
    );
  }
}

export default Card;