import React from 'react';


class ProfessionalDevelopment extends React.Component{
   render(){
    return(
    <div className = "Professionalexp"> 
    <h3 style={{paddingLeft: '45px',textDecoration: "underline",lineHeight: "15pt",border: '1px solid white',paddingRight: '35px'}}>Professional Development</h3> 

    
    <ul style={{paddingLeft: '85px',border: '1px solid white',paddingRight: '35px'}}>
  <li>
                        {this.props.certification}
                        </li>
                        </ul>
                   
                
    </div>
    );
}
}
export default ProfessionalDevelopment;