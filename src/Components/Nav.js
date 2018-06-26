import React, {Component} from 'react'
import firebase, {auth} from '../firebase'
import {Navbar, Button, Icon} from 'react-materialize'
import {NavLink} from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    auth.signOut()
  }

  render() {
    if(this.props.authUser) {
      return (
        <Navbar brand="Kata Cards" right>
          <li><NavLink to='/home' onClick={this.handleClick}>Logout</NavLink></li>
          <li><NavLink to="/home">Home</NavLink></li>
          {/* <Icon>search</Icon> */}
        </Navbar>
      )
    }
    return (
      <Navbar brand="Kata Cards" right>
        <li><NavLink to="/signup">Signup</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        {/* <Icon>search</Icon> */}
      </Navbar>
    )
  }
}

export default Nav
