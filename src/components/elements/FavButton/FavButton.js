import React from 'react';
import './FavButton.css';

class FavButton extends React.Component {
  constructor() {
    super();
    this.state = {
      added: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      added: !this.state.added
    });
  }

  render() {
    const label = this.state.added ? 'Remove from favourites' : 'Add to favourites'
    return (
      <div>
        <button className="rmdb-movie-fav" onClick={this.handleClick}>
          {label}</button>
      </div>
    );
  }
}

export default FavButton;
