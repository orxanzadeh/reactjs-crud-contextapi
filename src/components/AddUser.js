import React, { Component } from "react";
import UserConsumer from "../context";
import axios from "axios";

class AddUser extends Component {

  state = {
    uid:"",
    name: "",
    surname: "",
    salary: "",
    nameError: "",
    surnameError: "",
    salaryError: ""
  };

  validateForm = () => {
    const { name, surname, salary } = this.state;

    this.setState({
      nameError:
        name.length > 3 ? null : "Name must be longer than 3 characters",
      surnameError:
        surname.length > 3 ? null : "Name must be longer than 3 characters",
      salaryError:
        salary.length > 3 ? null : "Name must be longer than 3 characters"
    });

  };

  changeInput = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        this.validateForm();
      }
    );
  };

  addUser = async (dispatch, e) => {
    e.preventDefault();
    const {
      name,
      surname,
      salary,
      nameError,
      surnameError,
      salaryError
    } = this.state;

    var id = new Date().getUTCMilliseconds();
    const newUser = {
      id: id,
      name: name,
      surname: surname,
      salary: salary
    };

    if (nameError !== null || surnameError !== null || salaryError !== null) {
      return;
    }
    const response = await axios.post("http://localhost:3004/users", newUser);
    dispatch({ type: "ADD_USER", payload: response.data });
    this.setState({
      name:"",
      surname:"",
      salary:""
    })
  };

  render() {
    const {
      name,
      surname,
      salary,
      nameError,
      surnameError,
      salaryError
    } = this.state;

    return (
      <UserConsumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="col-lg-4">
              <form onSubmit={this.addUser.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    className={`form-control ${nameError ? "is-invalid" : ""}`}
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.changeInput}
                  />
                  <small id="emailHelp" className="text-danger">
                    {nameError}
                  </small>
                </div>
                <div className="form-group">
                  <input
                    className={`form-control ${
                      surnameError ? "is-invalid" : ""
                    }`}
                    placeholder="Surname"
                    name="surname"
                    value={surname}
                    onChange={this.changeInput}
                  />
                  <small id="emailHelp" className="text-danger">
                    {surnameError}
                  </small>
                </div>
                <div className="form-group">
                  <input
                    className={`form-control ${
                      salaryError ? "is-invalid" : ""
                    }`}
                    placeholder="Salary"
                    name="salary"
                    value={salary}
                    onChange={this.changeInput}
                  />
                  <small id="emailHelp" className="text-danger">
                    {salaryError}
                  </small>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
