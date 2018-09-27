import React, { Component } from 'react';
import { Grid } from 'react-mdl';

class Skills extends Component {
  render () {
    return (
      <Grid col={12}>
        <p><b>{this.props.topic}</b>{this.props.skillset}</p>
      </Grid>
    )
  }
}

export default Skills;
