import React, { Component } from "react";
import ReactDOM from "react-dom";
import Education from "./Education";
import ProfessionalDevelopment from "./ProfessionalDevelopment";
import SkillData from "./SkillData";
import Logo from "./csmlogo.png";
import MySkill from "./MySkill";
import ExperienceData from "./ExperienceData";
import "./style.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ExperienceData: ExperienceData
    };
  }
  render() {
    const skillComponent = SkillData.map(skill => (
      <MySkill key={skill.id} skill1={skill.skill1} />
    ));

   const experienceComponent = this.state.ExperienceData.map(
      (rowdata) => (
        <div>
        
          <h4 className="height1">{rowdata.Job}</h4>
       
          <ul>
            {rowdata.list.map((subRowData) => {
            
              return (
                <>
                  <li className="height2">{subRowData}</li>
                </>
              );
            })}
          </ul>
        
        </div>
      )
    );
         
        return (
      <div
        style={{
          height: 1000,
          width: 1000,
          padding: "none",
          backgroundColor: "white",
          boxShadow: "10px 10px 10px 10px black",
          margin: "auto",
          overflowX: "hidden"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 className="name">
            <img src={Logo} align="center" alt="logo" height="100"></img>
            Elsabeth Kidane{" "}
          </h1>
          <p className="primary">
            {" "}
            Baltimore, Maryland 21209 ∙ (571) 835 -1032 ∙<a href="mailto:elizit88@gmail.com">elizit88@gmail.com</a>
          </p>
          <p>Fully Work Authorized. No Visa Sponsorship Required</p>
          <hr style={{ boredTop: "6px solid #833fb2", width: "80" }}></hr>
          <h3 className="center">Professional Summary</h3>
          <p className="summary">
            Scrum Master experience working in agile environment for 5 years
            with a team of 4 developers and 2 software testers.
            <br />
            Proven history of successful work with cross-functional teams.
            Strong ability to multitask and to perform with a sense
            <br /> of urgency for rapid issue resolution.
          </p>
        </div>
        <p className="space"></p>
        <h3 className="center">Key Skills</h3>
        <div>
          <div className="height">
            <p classs="height"> {skillComponent}</p>
          </div>
          <p className="space"></p>
          <h3 className="center">Professional Experience</h3>
          <p className="exp">{experienceComponent}</p>
          <p className="space"></p>
        </div>
        <ProfessionalDevelopment />
        <Education />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
