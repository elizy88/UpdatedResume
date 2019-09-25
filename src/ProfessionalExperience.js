import React from 'react';

function ProfessionalExperience (props){
  return (
    <div className="exp">
     <h3>Professional Experience</h3>
      <ul>       
        <li>{props.experience}</li>      
      </ul>
     </div>
  );

}
export default ProfessionalExperience;