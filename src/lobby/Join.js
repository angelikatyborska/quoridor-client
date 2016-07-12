import React, { PropTypes } from 'react';
import './join.scss';

class Join extends React.Component {
  static propTypes = {
    join: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      nickname: '', // TODO: add a cool random nickname
    };
  }

  setNickname(event) {
    this.setState({ nickname: event.target.value });
  }

  join(event) {
    event.preventDefault();
    this.props.join(this.state.nickname);
  }

  render() {
    return (
      <form onSubmit={::this.join} className="join">
        <h2>Hello!</h2>
        <p>What's your name?</p>
        <input type="text" placeholder="Name" onChange={::this.setNickname} />
        <button type="submit">Join</button>
      </form>
    );
  }
}

export default Join;
