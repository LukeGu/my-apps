import React from "react";
import "./index.css";

const AppTable = props => {
  let listBody = props.children;
  let listInfo = <h2>Loading...</h2>;
  let tableBody = listBody.length > 0 ? listBody : listInfo;
  return (
    <div className="my-flex justify-content-center">
      <div className="app-body">
        <div className="my-row">{tableBody}</div>
      </div>
    </div>
  );
};

export default AppTable;
