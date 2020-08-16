import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.beerId,
      beer: {},
    };
  }

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${this.state.id}`)
      .then((response) =>
        this.setState({ ...this.state, beer: response.data })
      );
  }

  render() {
    const beer = this.state.beer;
    return (
      <div className="text-center">
        <Navbar />
        <img
          src={beer.image_url}
          alt={beer.name}
          style={{ height: '200px', width: 'auto', margin: '2em 0' }}
        />
        <div></div>
        <div className="">
          <h2>{beer.name}</h2>

          <h2 className="ml-auto text-secondary">{beer.attenuation_level}</h2>

          <div className="">
            <h4>{beer.tagline}</h4>

            <h5 className="ml-auto">First brewed: {beer.first_brewed}</h5>

            <p>Description: {beer.description}</p>
            <p className="text-secondary font-weight-bold">
              Contributed by:
              {beer.contributed_by}
            </p>
          </div>
        </div>
        <a
          style={{ marginBottom: '2em' }}
          className="btn btn-primary"
          href="/beers"
        >
          Back
        </a>
      </div>
    );
  }
}

export default BeerDetails;
