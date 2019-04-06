import React from 'react'
import './index.css';
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

class SiteNavBar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <Navbar.Brand
          href=""
        >Questions Collector</Navbar.Brand>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <NavLink
            to="/"
            className="btn btn-secondary my-2 my-sm-0 pull-right navbar-button"
          >
            Home
          </NavLink>
          <NavLink
            to="/create"
            className="btn btn-secondary my-2 my-sm-0 pull-right navbar-button"
          >
            + Create Question
          </NavLink>
        </div>
      </Navbar>
    )
  }
}

export default SiteNavBar;
