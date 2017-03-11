import React, { Component } from 'react';
import axios from "axios";
import MDSpinner from "react-md-spinner"

import CamperList from "./camper_list"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recentCampers: [],
      allTimeCampers: [],
      currentView: "recentCampers"
    } // this.state
  } // constructor

  componentWillMount() {
    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
    .then(axios.spread((recentCampers, allTimeCampers) => {
      this.setState({
        recentCampers: recentCampers.data,
        allTimeCampers: allTimeCampers.data,
      }) // this.setState same as recentCampers: recentCampers ES6
    })) // axios
  } // componentWillMount

  fetchRecentCampers() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
  } //fetchRecentCampers

  fetchAllTimeCampers() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
  } //fetchAllTimeCampers

  // changeView(view) {
  //   this.setState({ currentView: view})
  // }

  changeView(currentView) {
    this.setState({
      currentView
    }) // this.setState
  } // changeView onClick run function to pass argument to state of currentView


  render() {
    if(!this.state.recentCampers.length && !this.state.recentCampers.length) {
      return <MDSpinner className="spinner" size={100} />
    }
    return (
      <div>
        <h2>{`Viewing Top ${this.state.currentView}`}</h2>
        <button className="btn btn-primary" onClick={() => this.changeView("recentCampers")}>Recent</button>
        <button className="btn btn-primary" onClick={() => this.changeView("allTimeCampers")}>All Time</button>
        <CamperList campers={this.state[this.state.currentView]} />
      </div>
    ) // return
  } // render
} // App
