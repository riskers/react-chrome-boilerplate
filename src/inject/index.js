import React, { Component } from 'react';
import { render } from 'react-dom';

// web_accessible_resources libs (chrome/lib):
window.Log('this is inject script!');

class Inject extends Component {
  render() {
    return (
      <div
        style={{
          position: 'fixed',
          bottom: 50,
          left: 50,
          background: '#FFF',
          height: 40,
        }}
      >
        this is inject scripts!
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const dom = document.createElement('div');
  document.querySelector('body').appendChild(dom);

  render(<Inject />, dom);
});
