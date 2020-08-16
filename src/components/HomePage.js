import React, { Component } from 'react';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Ironbeers</h1>

        <a href="/beers" className="">
          <div>
            <img style={{ width: '100%' }} src={'../../allbeers.jpg'} />
            <h2>All beers</h2>
          </div>
        </a>

        <a href="/random-beer" className="">
          <img style={{ width: '100%' }} src={'../../randombeer.jpg'} />
          <h2>Random beer</h2>
        </a>

        <a href="/new-beer" className="">
          <img style={{ width: '100%' }} src={'../../newbeer.jpeg'} />
          <h2>New beer</h2>
        </a>
      </div>
    );
  }
}

export default HomePage;
