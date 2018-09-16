import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends React.Component {
  render() {
    return (
      <div style={{width:'100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="http://kinghondacarworld.com/images/avatar.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Developer</h1>
              <hr/>
              <p>HTML | CSS | React | NodeJS | Express | Bootstrap | JavaScript | MongoDB</p>
              <div className="social-links">
                <a href="https://github.com/yashp43" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                <a href="https://www.linkedin.com/in/yash-prajapati-8a98369a/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
