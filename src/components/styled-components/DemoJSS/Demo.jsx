import React, { Component } from 'react';
import { Button, BigButton } from '../components/Button';

export class Demo extends Component {
  render() {
    return (
      <div>
        <Button className="mr-3">normal</Button>
        <Button className="mr-3" primary>
          primary button
        </Button>
        <BigButton>Big Button</BigButton>
      </div>
    );
  }
}

export default Demo;
