import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <Grid className="project-grid">
          <Cell col={12} className="project-cell">
            <h1><b>My Projects</b></h1>
            <p>The Website you are looking at is the result of the same. The website highlights the details about my career.</p>
          </Cell>
          <Cell col={12} className="project-cell">
            <h1><b>Facebook Movie bot</b></h1>
            <p>A bot which when provided with a word/movie name brings you the list of movies relating to that keyword.</p>
            <p>When user selects the particular option from the list, the bot reverts back with the details of that movie.</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
