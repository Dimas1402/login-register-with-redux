import React from "react";

const AlertRegister = (props) => {
  return (
    <div
      style={{ position: "absolute" , top:"5px", right:"5px" }}
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <strong>Register gagal!</strong> Username atau Email telah digunakan.
    </div>
  );
};

export default AlertRegister;
