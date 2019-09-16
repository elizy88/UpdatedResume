import React from 'react';


class KeySkills extends React.Component{
   render(){
    return(
    <div className = "skill">
    <h3 style={{paddingLeft: '45px',textDecoration: "underline",lineHeight: "15pt",border: '1px solid white',paddingRight: '85px'}}> Key Skills</h3> 
     
    <ul style={{ border: '1px solid white' , paddingLeft: '80px'}}>
        <li>
             {this.props.Scrum}<br/>
             
        </li>
        <li>
        {this.props.Meeting}
        </li>
        <li>
        {this.props.Story}   
        </li>
        <li>
         {this.props.Manage}   
        </li>
        <li>
        {this.props.skill2}   
        </li>
        <li>
         {this.props.skill3}   
        </li>
    </ul>

    </div>
    );
}
}
export default KeySkills;
