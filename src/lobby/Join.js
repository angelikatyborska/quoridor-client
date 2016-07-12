import React, { PropTypes } from 'react';

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
      <form onSubmit={::this.join}>
        Hello, how can I call you?
        <input type="text" placeholder="Name" onChange={::this.setNickname} />
        <button type="submit">Join</button>
      </form>
    );
  }
}

export default Join;
