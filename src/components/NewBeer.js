import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Navbar from './Navbar';

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    };
  }

  handleChange = (element) => {
    this.setState({
      ...this.state,
      [element.target.name]: element.target.value,
    });
  };

  handleSubmit = (element) => {
    element.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar />

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="name"
              value={this.state.name}
              type="text"
              placeholder="Enter beer name"
            />
          </Form.Group>

          <Form.Group controlId="tagline">
            <Form.Label>Tagline: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="tagline"
              value={this.state.tagline}
              type="text"
              placeholder="tagline"
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="description"
              value={this.state.description}
              type="text"
              placeholder="Be creative with your description"
            />
          </Form.Group>
          <Form.Group controlId="first_brewed">
            <Form.Label>First Brewed: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="first_brewed"
              value={this.state.first_brewed}
              type="text"
              placeholder="first_brewed"
            />
          </Form.Group>
          <Form.Group controlId="brewers_tips">
            <Form.Label>Brewers Tips: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="brewers_tips"
              value={this.state.brewers_tips}
              type="text"
              placeholder="Do you have any brewers tips?"
            />
          </Form.Group>
          <Form.Group controlId="attenuation_level ">
            <Form.Label>Attenuation Level: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="attenuation_level"
              value={this.state.attenuation_level}
              type="number"
              placeholder="Enter attenuation_level "
            />
          </Form.Group>
          <Form.Group controlId="contributed_by">
            <Form.Label>Contributed By: </Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              name="contributed_by"
              value={this.state.contributed_by}
              type="text"
              placeholder="Enter contributor name"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add new
          </Button>
        </Form>
      </div>
    );
  }
}
