import React, { Component } from 'react';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Ironbeers</h1>

        <a
          style={{ textDecoration: 'none', color: 'black' }}
          href="/beers"
          className=""
        >
          <div>
            <img style={{ width: '100%' }} src={'../../allbeers.jpg'} />
            <h2 className="ml-2">All beers</h2>
            <p className="text-secondary ml-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
              neque est. Phasellus eu facilisis dolor. Integer tristique rutrum
              aliquam.
            </p>
          </div>
        </a>

        <a
          style={{ textDecoration: 'none', color: 'black' }}
          href="/random-beer"
          className=""
        >
          <img style={{ width: '100%' }} src={'../../randombeer.jpg'} />
          <h2 className="ml-2">Random beer</h2>
          <p className="text-secondary ml-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            neque est. Phasellus eu facilisis dolor. Integer tristique rutrum
            aliquam.
          </p>
        </a>

        <a
          style={{ textDecoration: 'none', color: 'black' }}
          href="/new-beer"
          className=""
        >
          <img style={{ width: '100%' }} src={'../../newbeer.jpeg'} />
          <h2 className="ml-2">New beer</h2>
          <p className="text-secondary ml-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            neque est. Phasellus eu facilisis dolor. Integer tristique rutrum
            aliquam.
          </p>
        </a>
      </div>
    );
  }
}

export default HomePage;
