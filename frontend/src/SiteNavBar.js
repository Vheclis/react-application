import React from 'react'
import './index.css';
import { Redirect } from 'react-router-dom'
import { Navbar, Button } from 'react-bootstrap'

class SiteNavBar extends React.Component {

  state = {
    shouldRedirectToCreate: false,
    shouldRedirectToHome: true,
  }

  setRedirect = (destination) => {
    if (destination === 'create') {
      this.setState({
        shouldRedirectToCreate: true,
      })
    } else {
      this.setState({
        shouldRedirectToHome: true,
      })
    }
  }

  renderRedirect = () => {
    if (this.state.shouldRedirectToCreate) {
      this.setState({
        shouldRedirectToCreate: false,
      })
      return <Redirect to='/create' />
    } else if (this.state.shouldRedirectToHome) {
      this.setState({
        shouldRedirectToHome: false,
      })
      return <Redirect to='/' />
    }
  }

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
          onClick={() => this.setRedirect('home')}
        >Questions Collector</Navbar.Brand>
        {this.renderRedirect()}
        <div class="collapse navbar-collapse" id="navbarColor03">
          <Button
            onClick={() => this.setRedirect('create')}
            className="btn btn-secondary my-2 my-sm-0 pull-right navbar-button"
          >
            Create Question
          </Button>
        </div>
      </Navbar>
    )
  }
}

export default SiteNavBar;
