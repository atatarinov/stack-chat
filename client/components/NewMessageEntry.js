import React, { Component } from 'react';
import store, { writeMessage } from '../store';

export default class NewMessageEntry extends Component {
  constructor() {
    super();
    this.state = store.getState();
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onChangeHandler(event) {
    store.dispatch(writeMessage(event.target.value));
  }

  render () {
    return (
      <form id="new-message-form">
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            placeholder="Say something nice..."
            value={ this.state.message }
            onChange={ this.onChangeHandler }
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Chat!</button>
          </span>
        </div>
      </form>
    );
  }
}
