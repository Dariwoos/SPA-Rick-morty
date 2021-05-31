import React from 'react'
import "./css/Layout.css";
export default function layout({ navbar, name, image, description, next, bankData, options }) {
  return (
    <div className="container">
      {navbar}
      <div className="card mb-3">
        <div className="row ">
          <div className="col-md-6 middle">{image}</div>
          <div className="col-md-5">
            <div className="card-body middle">
              <h5 className="card-title"> {name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"> {bankData}</p>
            </div>
          </div>
        </div>
      </div>
      {next}
      {options}
    </div>
  );
}
