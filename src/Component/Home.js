import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

const actions = [
  { label: "Add Tag", value: 1 },
  { label: "Sample", value: 2 },
  { label: "URL's", value: 3 },
];

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/data");
  }

  return (
    <div>
      <header className="navbar"></header>
      <div className="split-container">
        <div className="split-left">
          <div className="heading">
            <img
              className="logo"
              alt="logo"
              src="https://taxadda.com/wp-content/uploads/TaxAdda-210-x-48.png"
            />
            {/* <h2 className="logo">TaxAdda</h2> */}
          </div>
          <div className="sidebar">
            <a href="home" className="sidebar-items">
              GSTIN List
            </a>
            <a href="home" className="sidebar-items">
              Return Status
            </a>
            <a href="home" className="sidebar-items">
              QRMP
            </a>
            <a href="home" className="sidebar-items">
              Tags
            </a>
          </div>
        </div>
        <div className="split-right">
          <div className="btn-div">
            <button className="manage-btn">Manage Subscription</button>
          </div>
          <div className="child-container">
            <div className="leftside">
              <h3 className="heading1">Add Client</h3>
              <p className="content">
                Enter the GST number of the client. <br />
                You can add GST number which have GST type as <br />
                Regular or Composition.
              </p>
              <h3 className="heading1">Here are your plan details</h3>
              <p className="content">
                Available GSTIN credits - 319 <br />
                Expiry Date - 21/06/2023
              </p>
            </div>
            <div className="rightside">
              <h4 className="GSTIN">Enter one or more GSTIN to import</h4>
              <input className="input1" type="text" size="80" />
              <div className="btn-class">
                <h4 className="select-btn">Select Tags</h4>
                <h4 className="add-btn">Add Tag</h4>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-12">
                    <Select options={actions} />
                  </div>
                  <div className="col-md-7"></div>
                </div>
              </div>

              <p className="content1">
                Paste all the client GSTIN in the box which you like to import.
                Each GSTIN should <br />
                be in new line. QRMP preferences along with GST return status
                from Jan 2021 till <br />
                date will be imported automatically.
              </p>
              <div className="btn-div1">
                <button className="save-btn" onClick={handleClick}>
                  Save Multiple GSTIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p></p>
      </footer>
    </div>
  );
};

export default Home;
