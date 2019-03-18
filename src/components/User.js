import React, { Component } from "react";
import UserConsumer from "../context";
import axios from "axios";
import {Link } from "react-router-dom";

class User extends Component {

  onDeleteUser = async (dispatch, e) => {
    const { id } = this.props;
    //delete user from api
    await axios.delete("http://localhost:3004/users/"+id);
    //delete user from state
    dispatch({ type: "DELETE_USER", payload: id });
  };

  render() {
    const { name, surname, salary,id } = this.props;

    return (
      <UserConsumer>
        {value => {
          const { dispatch } = value;
          return (
            <tr>
              <td>{name}</td>
              <td>{surname}</td>
              <td>{salary}</td>
              <td>
                <Link to={"/edit/"+id} className="btn btn-primary">
                  Edit
                </Link>
                <button
                  onClick={this.onDeleteUser.bind(this, dispatch)}
                  type="button"
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        }}
      </UserConsumer>
    );
  }
}

export default User;
