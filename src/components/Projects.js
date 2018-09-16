import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <Grid className="project-grid">

          <Cell col={12} className="project-cell">
            <h1>My Projects</h1>
            <p>The Website you are looking at is the result of the same. The website highlights the details about my career.</p>
            <a>ReactJS</a>
          </Cell>


          <Cell col={12} className="project-cell">
            <h1>Facebook bot</h1>
            <p>A bot which when provided with a word/movie name brings you the list of movies relating to that keyword.</p>
            <p>When user selects the particular option from the list, the bot reverts back with the details of that movie.</p>
            <a>NodeJS | Express</a>
          </Cell>


          <Cell col={12} className="project-cell">
            <h1>Restaurant Manaegment System</h1>
            <p>A GUI screen that contains menu of a Restaurant allowing every user to stack up desired items and create an order.</p>
            <p>Once the cart is ready, the user can place an order through the System.</p>
            <a>Visual C++ | MS Access</a>
          </Cell>
          
        </Grid>
      </div>
    );
  }
}

export default Projects;
