import React, { Component } from 'react';

import config from './firebase.config';

class App extends Component {

  constructor(props) {
    super(props);
    firebase.initializeApp(config);

    this.state = {
      loggedIn: false,
      mailAddress: '',
      password: '',
      message: '',
    };
  }

  render() {
    return (
      <div>
        <h1>メールアドレス</h1>
        <input
          type="text"
          onInput={(event) => ::this.handleOnInput(event, 'mailAddress')}
        />
        <h1>パスワード</h1>
        <input
          type="password"
          onInput={(event) => ::this.handleOnInput(event, 'password')}
        />
        <button
          onTouchTap={::this.login}
        >
          ログイン
        </button>
        <pre>
          {JSON.stringify(this.state)}
        </pre>
      </div>
    );
  }

  handleOnInput(event, propertyName) {
    const state = Object.assign({}, this.state, {[propertyName]: event.target.value});
    this.setState(state);
  }

  login() {
    const {
      mailAddress,
      password,
    } = this.state;
    firebase.auth().signInWithEmailAndPassword(mailAddress, password)
      .then(() => {
        this._setState(true, '成功');
      })
      .catch((e) => {
        this._setState(false, '失敗' + JSON.stringify(e));
      });
  }

  _setState(loggedIn, message) {
    const state = Object.assign({}, this.state, {loggedIn, message});
    this.setState(state);
  }

}

export default App;
