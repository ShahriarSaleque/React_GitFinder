import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle mr-2' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
