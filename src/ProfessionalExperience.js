import React from 'react';


class ProfessionalExperience extends React.Component{
   render(){
    return(
    <div className = "exp">
    <h3 style={{paddingLeft: '45px',textDecoration: "underline",border: '1px solid white',paddingRight: '35px'}}>Professional Experience</h3>
    <h4 style={{paddingLeft: '55px',border: '1px solid white',paddingRight: '35px'}}>{this.props.Albo}</h4>
                       
                          <ul style={{paddingLeft: '85px',border: '1px solid white',paddingRight: '35px'}}>
                          <li>
                              {this.props.Res}
                        </li>
                        <li>
                        {this.props.res1} 
                        </li>
                        <li>
                        {this.props.res2}  
                        </li>
                    
                        </ul>
<h4 style={{paddingLeft: '55px',border: '1px solid white',paddingRight: '35px'}}>{this.props.bes}</h4>
<ul style={{paddingLeft: '85px',border: '1px solid white',paddingRight: '35px'}}>
                          <li>
                        {this.props.res3}
                        </li>
                        <li>
                        {this.props.res4} 
                        </li>
                        <li>
                        {this.props.res5}  
                        </li>
                        </ul>
<h4 style={{paddingLeft: '55px',border: '1px solid white',paddingRight: '35px'}}>{this.props.zoba1}</h4>
<ul style={{paddingLeft: '85px',border: '1px solid white',paddingRight: '35px'}}>
                          <li>
                        {this.props.res6}
                        </li>
                        <li>
                        {this.props.res7} 
                        </li>
                        <li>
                        {this.props.res8}  
                        </li>
                        </ul>
<h4 style={{paddingLeft: '55px',border: '1px solid white',paddingRight: '35px'}}>{this.props.zoba2}</h4>
<ul style={{paddingLeft: '85px',border: '1px solid white',paddingRight: '35px'}}>
                          <li>
                        {this.props.res9}
                        </li>
                        <li>
                        {this.props.res10} 
                        </li>
                        <li>
                        {this.props.res11}  
                        </li>
                        </ul>



    </div>
    );
}
}
export default ProfessionalExperience;