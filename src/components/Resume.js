import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends React.Component {
  render() {
    return (
      <div>
      <Grid>
      <Cell col={4}>Left</Cell>
      <Cell className="resume-right-ccol" col={8}>

      </Cell>
      </Grid>
      </div>
    );
  }
}

export default Resume;
