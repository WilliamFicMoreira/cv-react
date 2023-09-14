import React from 'react'

const ProgressBar = (props) => {
    const {labelcolor, fillcolor, bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '95%',
      backgroundColor: fillcolor,
      // borderRadius: 50,
      margin: 10,
      // padding: 5,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: labelcolor,
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;