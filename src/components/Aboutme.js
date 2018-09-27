import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contacts extends React.Component {
  render() {
    return (
      <div className="aboutme-body">
        <Grid className="aboutme-grid">
          <Cell col={6}>
            <h2>Yash Prajapati</h2>
            <img
              src="https://images.vexels.com//media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
              alt="avatar"
              style={{height:'250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Passionate Footballer, Diehard Real Madrid Fan, Zealous Programmer, Enthusiastic traveller, Food Lover and possess Blackbelt in Martial Arts.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="aboutme-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  +91 8460782133
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  yashp43@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-skype" aria-hidden="true" />
                  yashp43
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contacts;
