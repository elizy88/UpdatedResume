
import React from 'react';
import ReactDOM from 'react-dom';
import Education from './Education';
import ProfessionalDevelopment from './ProfessionalDevelopment';
import ProfessionalExperience from './ProfessionalExperience';
import KeySkills from './KeySkills';
import Logo from './csmlogo.png';
class Header extends React.Component {
  constructor(props){
    super(props);


  }
    render() {
      return (
       <div>
                  <div className="Resume" style={{textAlign:'center' }}>
                     
        <h1 style={{color: "black",textAlign: "center" ,lineHeight: "26pt",
        fontFamily: "Arial" }}><img src={Logo} Align="center" height="100"></img> 
        Elsabeth Kidane</h1>
       <p style={{color:"black",textAlign:"center", lineHeight: "6pt",fontSize:"16",
          fontFamily: "Arial" }}>Baltimore, Maryland 21209 ∙ (571) 835 -1032 ∙ elizit88@gmail.com</p>
      
    
        <p style={{color:"black",textAlign:"center", lineHeight: "5pt",
      fontFamily: "Arial"}}>Fully Work Authorized. No Visa Sponsorship Required</p>
        <hr style={{boredTop:'6px solid #833fb2', width:'80'}} ></hr>
        
        <h3 style={{color:"black",textAlign:"left", lineHeight: "15pt",fontSize:"8",border: '1px solid white', paddingLeft: '50px',
        fontFamily: "Arial",textDecoration: "underline",paddingRight: '25px'}}>Professional Summary</h3>
        
        
        <p style={{ paddingLeft: '55px',border: '1px solid white',paddingRight: '35px',textAlign:"left" }} >
         Scrum Master experience working in agile environment for 5 years with a team of 4 developers and
         2 software testers.Proven history of successful work with cross-functional teams.<br/>Strong ability 
        to multitask and to perform with a sense of urgency for rapid issue resolution.
      </p>
 
      </div>
<KeySkills 
Scrum ="Programming Languages: SQL, JAVA, Vb.Net,HTML" 
skill2="Development Methodologies: Agile, Waterfall"
skill3="Strong communication skills"
 Meeting ="Facilitate meetings (daily scrum, sprint planning, sprint demo and retrospective)"
 Story= "Writing user stories"
 Manage="Project Managment"
/>
<ProfessionalDevelopment
certification="Certified Scrum Master,Oakland,CA"
date="December 2018"/>
<ProfessionalExperience
Albo="Database Manager, Albo African Gift shop, Oakland, CA ,07/2018 - 12/2018"
Res="Designed and managed inventory on company’s internal database"
res1="Upgraded database systems by adding fields and filters to increase business efficiency"
res2="Installed and maintained money transfer software using RIA and GMT"
bes="Software Engineer,BES,Kampala,UG,01/2016 - 12/2017"
res3="Acted as Scrum Master for Product teams with a focus on guiding the teams towards improving the way
they work"
res4="Assisted team to remove impediments by having an understanding the control and release processes"
res5="Worked with cross-functional groups to coordinate design and development activities"
zoba1="Software Developer,City Hall, Asmara,ER ,08/2012 - 12/2015"
res6="Developed Tigrigna Speech Recognition Software that converts speech to Geez Unicode text using Java "
res7="Worked with customers and product manager to prioritize and validate requirements"
res8="Provided quality assurance, manual and functional testing using live tests and box testing; "
zoba2="Network Administrator,city hall,Asmara,ER,09/2011 - 07/2012"
res9="Designed, managed and maintained group policies"
res10="Diagnosed and resolved all network related issues"
res11="Maintained network and related devices as assigned, such as DHCP and Router configurations"
/>
<Education
EIT="Bachelor in Computer Science, Eritrean Institute of Technology, Asmara, Eritrea, 2011" />
     </div>
      )
      }
    }

ReactDOM.render(<Header/>,
   document.querySelector("#root") );
