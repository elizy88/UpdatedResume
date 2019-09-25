import React from 'react';


class Education extends React.Component {
  render() {
    return (
      <div>
        <h3 className="dev"> Education </h3>
        <ul className="prop">
          <li>
            {this.props.EIT}
          </li>
        </ul>
      </div>
    );
  }
}
export default Education;
