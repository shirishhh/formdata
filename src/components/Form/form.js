import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { addFormAction } from "../../redux/actions/formaction";

const initialState = {
  FullName: "",
  Email: "",
  PhoneNumber: "",
  Gender: "",
  TermsAndConditions:false,
};

class Form extends Component {

  state = initialState;

  validate = () => {
    let FullNameError = "";
    let EmailError = "";
    let PhoneError = "";

    if (!this.state.FullName) {
      FullNameError = "Name Cannot be Null";
    }

    if (
      !new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).test(
        this.state.PhoneNumber
      )
    ) {
      PhoneError = "Invalid phone format. ex: 98412345678";
    }

    if (
      !new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
        this.state.Email
      )
    ) {
      EmailError = "Please Enter Valid Email";
    }

    if (FullNameError || PhoneError || EmailError) {
      this.setState({ FullNameError, EmailError, PhoneError });
      return false;
    }
    return true;
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.props.addFormAction(this.state);
       //this.setState(initialState)
  
    }
  };

  render() {
    if(this.props.formData.isLoading===false&&this.props.formData.isSuccess===false){
      return <div class="spinner text-info">Loading</div>;
    }
    return (
      <div>
        {this.props.formData.isSuccess === true? (
          <div className="alert alert-success" role="alert">
            Successfully Added.
          </div>
        ) : null}
        {this.props.formData.isSuccess === false ? (
          <div className="alert alert-danger" role="alert">
            Error Occured.
          </div>
        ) : null}
        <br />
        <h5 className="col d-flex justify-content-center">User Information</h5>
        <br />
        <div className="col d-flex justify-content-center">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.FullName}
                placeholder="Enter Full Name"
                onChange={(e) => {
                  this.setState({
                    FullName: e.target.value,
                  });
                }}
              />
            </div>
            {this.state.FullNameError ? (
              <div style={{ color: "red" }}>{this.state.FullNameError}</div>
            ) : null}
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="text"
                className="form-control"
                value={this.state.Email}
                aria-describedby="emailHelp"
                placeholder="Enter Email"
                onChange={(e) => {
                  this.setState({
                    Email: e.target.value,
                  });
                }}
              />
            </div>
            {this.state.EmailError ? (
              <div style={{ color: "red" }}>{this.state.EmailError}</div>
            ) : null}
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Phone Number</label>
              <input
                type="text"
                className="form-control"
                value={this.state.PhoneNumber}
                placeholder="Enter Phone No."
                onChange={(e) => {
                  this.setState({
                    PhoneNumber: e.target.value,
                  });
                }}
              />
              {this.state.PhoneError ? (
                <div style={{ color: "red" }}>{this.state.PhoneError}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Gender</label>
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                value={this.state.Gender}
                required
                onChange={(e) => {
                  this.setState({
                    Gender: e.target.value,
                  });
                }}
              >
                <option value="">--Select--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {this.state.GenderError ? (
                <div style={{ color: "red" }}>{this.state.GenderError}</div>
              ) : null}
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={this.state.TermsAndConditions}
                required
                onChange={(e) => {
                  this.setState({
                    TermsAndConditions: e.target.checked,
                  });
                }}
              />
              <label className="form-check-label" htmlFor="Terms and Condition">
                I Agree to Terms And Conditions
              </label>
              {this.state.TermsAndConditionError ? (
                <div style={{ color: "red" }}>
                  {this.state.TermsAndConditionError}
                </div>
              ) : null}
            </div>
            <br />
            <button type="submit" className="btn btn-primary center">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { formData: state.form };
 
};
export default connect(mapStateToProps, { addFormAction })(Form);
