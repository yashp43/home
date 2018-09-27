import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Yash Prajapati</Link>} scroll>
              <Navigation>
                  <Link to="/projects">Projects</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/resume">Resume</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Yash Prajapati</Link>}>
              <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
              </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
