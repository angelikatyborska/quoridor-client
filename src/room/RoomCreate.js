import React, { PropTypes } from 'react';

class RoomCreate extends React.Component {
  static propTypes = {
    currentRoom: PropTypes.object.isRequired,
    createRoom: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      capacity: 2,
    };
  }

  setCapacity(event) {
    this.setState({ capacity: parseInt(event.target.value) });
  }

  createRoom(event) {
    event.preventDefault();
    this.props.createRoom(this.state.capacity);
  }

  render() {
    if (this.props.currentRoom.id) {
      return null;
    }

    return (
      <form onSubmit={::this.createRoom}>
        <input type="number" value={this.state.capacity} onChange={::this.setCapacity} />
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default RoomCreate;
