import React from 'react';

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }
  render() {
    return (
      <div>
        <span>카운트: {String(this.state.count)}</span>
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default StateExample;
