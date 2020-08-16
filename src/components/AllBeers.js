import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) =>
        this.setState({ ...this.state, beers: response.data })
      );
  }

  render() {
    const allBeers = this.state.beers.map((beer, index) => (
      <div
        style={{
          border: '1px solid',
          boxShadow: '0 0 10px 2px',
          padding: '1em',
        }}
        key={index}
        className="row border-bottom"
      >
        <div className="col-md-2 text-center mt-4 mb-4">
          <img src={beer.image_url} alt={beer.name} style={{ width: '25%' }} />
        </div>
        <div className="col-auto mt-4 mb-4">
          <h2 style={{ fontSize: '20px' }}>{beer.name}</h2>
          <h5 className="text-secondary">{beer.tagline}</h5>
          <p>
            <strong>Created by: </strong>
            {beer.contributed_by}
          </p>
          <a
            style={{ textAlign: 'center' }}
            href={'/beers/' + beer._id}
            className="btn btn-danger"
          >
            Details
          </a>
        </div>
      </div>
    ));
    return (
      <div>
        <Navbar />
        <h1 style={{ textAlign: 'center' }}>All beers</h1>
        {allBeers}
      </div>
    );
  }
}

export default AllBeers;
