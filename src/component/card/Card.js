import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {title, description, price} = this.props
    console.log(this.props.deleteProduct);
    return (
      <div>
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <h6>Rp. {price}</h6>
            <button onClick={()=>this.props.deleteProduct(title)} className="btn btn-primary">delete</button>
            </div>
            </div>
      </div>
    );
  }
}

export default Card;