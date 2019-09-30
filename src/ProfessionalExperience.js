import React from 'react';
import ExperienceData from './ExperienceData'
class ProfessionalExperience extends React.Comonent{
constructor(props){
super(props);
this.state= {
  ExperienceData:ExperienceData
}
}
render(){
return(
<div>
  const experienceComponent = this.state.ExperienceData.map((rowdata, exp) =>
            <div>
               <h4 className="height1">{rowdata.Job}
               </h4>
                {(typeof (rowdata.list) == 'object') ?
                <div>
                {rowdata.list.map((subRowData, exp1) =>
                <div>
                                    <ul className="skill">
                                        <li>
                                        {subRowData.list1}
                                        </li>
                                        <li>
                                        {subRowData.list2}
                                        </li>
                                        <li
                                        >{subRowData.list3
                                        }</li>
                                    </ul>
                                    </div>)}
                                    </div> : null}
                                    </div>)
                                    </div>);
}
}
export default ProfessionalExperience;
