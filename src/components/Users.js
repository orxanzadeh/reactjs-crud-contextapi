import React, { Component } from "react";
import User from "./User";
import UserConsumer from "../context";

class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {value => {
          const { users } = value;

          return (
            <div className="col-lg-8">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Salary</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => {
                    return (
                      <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        surname={user.surname}
                        salary={user.salary}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default Users;
