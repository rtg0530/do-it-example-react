import React from 'react';
import './sass/materialize.scss';
import Input from './04/InputWithStyle';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Input name="name" label="Label" />
      </div>
    );
  }
}

export default App;
