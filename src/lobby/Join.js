import React, { PropTypes } from 'react';

class Join extends React.Component {
  join() {
    this.props.join('John');
  }

  render() {
    return (
      <div>
        <button onClick={::this.join}>Join</button>
      </div>
    );
  }
}

export default Join;
