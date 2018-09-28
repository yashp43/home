import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Projects extends React.Component {
  render() {
    return (
      <div className="project-div">
        <Grid className="project-grid" style={{width:'75%', textAlign: 'center'}}>

          <Cell col={12} className="project-cell">
            <h1>My Portfolio</h1>
            <p>A Website that briefly highlights the journey of my career. Distributed amonst three pages viz: Project, About Me and Resume. The Project tab briefs about the projects that I have done. My contact details are included in the About Me tab along with a short description and the Resume tab contains the detailed description of my Professional career. The important thing is you are already looking at it.</p>
            <a>ReactJS</a>

            <hr style={{borderTop: '3px solid #e22947'}} />

            <h1>Movie bot</h1>
            <p>A Facebook Messenger bot that fetches you the movie details as desired. It can be said as a short version of IMDB. Just open the messenger app and search for Movies page and click message. Inside the chatbox, type the movie name that you wish to get details of and you will be replied with the details. </p>
            <a>NodeJS | Express</a>

            <hr style={{borderTop: '3px solid #e22947'}} />

            <h1>Restaurant Management System</h1>
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
