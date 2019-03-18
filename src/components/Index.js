import AddUser from "./AddUser";
import Users from "./Users";

import React, { Component } from "react";

export default class Index extends Component {
  // state={
  //    uid:""
  // }
  // if (uid!==null) {
    
  // }

  render() {
    return (
      <div className="row">
        <AddUser/>
        <Users/>
      </div>
    )}
    

  }

