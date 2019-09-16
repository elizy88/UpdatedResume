import React from 'react';


class Education extends React.Component{
   render(){
    return(
    <div className = "edu" >
    <h3 style={{paddingLeft: '45px',textDecoration: "underline",border: '1px solid white',paddingRight: '35px'}}> Education </h3>  
    <ul style={{paddingLeft: '85px',border: '1px solid white',paddingRight: '35px'}}>
  <li>
                        {this.props.EIT}
                        </li>
                        </ul>
    </div>
    );
}
}
export default Education;
