import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends React.Component {
  render() {
    return (
      <div>
      <Grid>
      <Cell col={4}>
        <div style={{textAlign: 'left'}}>
          <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              style={{height: '200px'}}
          />
        </div>

        <h2 style={{paddingTop: '.2em'}}>Yash Prajapati</h2>
        <h4 style={{color: 'grey'}}>Programmer</h4>
        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        <p>Passionate about Coding. Likes to keep rendering myself with new ideas and technologies over time.
          Zealous about learning new things.</p>
        <h5>Address</h5>
        <p>36/401 Prabhudarshan Apartment, Bigbazzar Vesu Road, Piplod, Surat, Gujarat</p>
        <h5>Phone</h5>
        <p>+91 8460782133/+91 8320480296</p>
        <h5>Email</h5>
        <p>yashp43@gmail.com</p>
        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
      </Cell>
      <Cell className="resume-right-col" col={8}>
        <h2>Experience</h2>
        <Experience
          startYear="June 2018"
          endYear="present"
          companyName="TATA CONSULTANCY SERVICES, Mumbai"
          designation="Systems Engineer"
          description="Part of Modernization Team where my work area includes performance improvement, system analysis and Database Migration. Achievements include successfully removal of a database and corresponding code thereby increasing response time of the Appliation"
        />

        <Experience
          startYear="June 2017"
          endYear="June 2018"
          companyName="TATA CONSULTANCY SERVICES, Mumbai"
          designation="Associate Systems Engineer"
          description="Key areas include writing of modules in C language, Bug Fixing and scripts(VBSscripts) for Automation Testing. Achievements include successful implementation of Application and reduced human efforts through large extent by scripts."
        />

        <Experience
          startYear="June 2016"
          endYear="June 2017"
          companyName="TATA CONSULTANCY SERVICES, Mumbai"
          designation="Associate Systems Engineer Trainee"
          description="Trained in C++, Unix and Oracle for three months and deployed on a project(Car Rental Company). Trained on Funtional knowledge of the project"
        />

        <Experience
          startYear="December 2015"
          endYear="April 2016"
          companyName="TATA CONSULTANCY SERVICES, Ahmedabad"
          designation="Intern"
          description="Work area included writing shell scripts as a part of backend."
        />

        <hr style={{borderTop: '3px solid #e22947'}} />

        <h2>Skills</h2>
        <Skills
          topic="Programming Languages : "
          skillset="C, C++, Shellscripts, JavaScript, NodeJS, VBScripts"
        />

        <Skills
          topic="Frameworks : "
          skillset="Express, ReactJS"
        />

        <Skills
          topic="Databases : "
          skillset="Oracle, PL/SQL, DB2, MongoDB"
        />


        <hr style={{borderTop: '3px solid #e22947'}} />
        <h2>Education</h2>
        <Education
          startYear={2012}
          endYear={2016}
          schoolName="Nirma University, Ahmedabad, Gujarat"
          degree="Bachelor of Technology in Computer Engineering(CGPA: 7.3)"
        />

        <Education
          startYear={2011}
          endYear={2012}
          schoolName="Sri Sathya Sai Vidyaniketan, Navsari, Gujarat"
          degree="Higher Secondary Certificate Examination(CGPA: 8.84)"
        />

        <Education
          startYear={2009}
          endYear={2010}
          schoolName="Sri Sathya Sai Vidyaniketan, Navsari, Gujarat"
          degree="Senior Secondary Certificate Examination(CGPA: 9.4)"
        />

      </Cell>
      </Grid>
      </div>
    );
  }
}

export default Resume;
