import React from 'react'; // Optional: you can use es6 object destructuring: import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Education from './Education';
import ProfessionalDevelopment from './ProfessionalDevelopment';
//import ProfessionalExperience from './ProfessionalExperience';
import SkillData from './SkillData';
import Logo from './csmlogo.png';
import MySkill from './MySkill';
import ExperienceData from './ExperienceData'; // Great work here. Now your data lives in one place, so you can edit content without changing any code.
import './style.css';
class App extends React.Component { // Using object destructuring above allows you todeclare class App extends Component { -> making your code a little more readable.
    constructor(props) {
        super(props);
        this.state = {
            ExperienceData: ExperienceData,
        }
    }
    render() {
        const skillComponent = SkillData.map(skill =>
             <MySkill key={skill.id} skill1={skill.skill1} /> // Great job! Creating a component for each skill
             )

        const experienceComponent = this.state.ExperienceData.map((rowdata, exp) => // Here the value of 'exp' is never used. It is the index of the current 'rowdata' variable in the ExperienceData array, and most often used for the value of 'key' in rendered element or component
            <div>
                <h4 className="height1">{rowdata.Job}</h4>
                {(typeof (rowdata.list) == 'object') 
                ? <div>
                    {rowdata.list.map((subRowData, exp1) =>
                        <div>
                            <ul className="skill">
                                <li>{subRowData.list1}</li>
                                <li>{subRowData.list2}</li>
                                <li>{subRowData.list3}</li>
                            </ul>
                        </div>)
                    }
                    </div> 
                : null  // Nice use of a ternary operator! Since you're returning null here, you could achieve the same thing with a short circuit operator: using && instead of ?, with no :
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation
                
                }
            </div>
        )

        return (
            // It is best practice to extract your CSS into an external file here. It makes your logic more readable and separates concerns. Using CRA this is made easy because of webpack. You can just import a css file as so: import 'style.css';
            <div style={{height: 1000,width: 1000,padding: 'none',backgroundColor: 'white',
            boxShadow: '10px 10px 10px 10px black',margin: 'auto',overflowX: 'hidden'}}>               
            <div style={{ textAlign: 'center' }}>
            <h1 className='name'>
            <img src={Logo} align="center" alt='logo' height="100"></img>Elsabeth Kidane  </h1>
            <p className="primary"> Baltimore, Maryland 21209 ∙ (571) 835 -1032 ∙elizit88@gmail.com</p>
            <p>Fully Work Authorized. No Visa Sponsorship Required</p>
            <hr style={{ boredTop: '6px solid #833fb2', width: '80' }} ></hr>
            <h3 className="center">Professional Summary</h3>
                    <p className="summary">
                        Scrum Master experience working in agile environment for 5 years with a team of 4 developers and
                        2 software testers.<br/>Proven history of successful work with cross-functional teams.
                        Strong ability to multitask and to perform with a sense<br/> of urgency for rapid issue resolution.</p>
                </div>
                <p className="space"></p>
                <h3 className="center">Key Skills</h3>
                <div>
                <div className="height">
                    <p classs="height"> {skillComponent}</p></div>
                    <p className="space"></p>
                    <h3 className="center">Professional Experience</h3>
                    <p className="exp">{experienceComponent}</p><p className="space"></p>
                 </div>
                   <ProfessionalDevelopment
                    certification="Certified Scrum Master,Oakland,CA,December 2018"/>
                   <Education EIT="Bachelor in Computer Science, Eritrean Institute of Technology,
                    Asmara, Eritrea, 2011" />
                </div >
        )
    }
}
ReactDOM.render(<App />,
    document.getElementById("root"))

export default <App />

// Fantastic, you're coming along nicely. As always, I recommend keeping your code formatted (ctrl + shift + i (For me on my PC, your keyboard shortcut may be different.))