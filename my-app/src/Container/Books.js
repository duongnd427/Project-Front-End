import React, { Component } from 'react'
import NavBar from '../Components/NavBar'
import Table from '../Components/Table'

export default class Books extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Table/>
      </div>
    )
  }
}
