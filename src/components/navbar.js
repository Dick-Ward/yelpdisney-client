import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return(
    <React.Fragment>
      <div className="navbar">Yelp Disney</div>
      <Link className="homeLink" to="/">Home</Link>
      <form  className="navSearch" onSubmit={ (e) => {e.preventDefault()}}>
        <label>Search
          <input type="text"/>
          <input type="submit" />
        </label>
      </form>
      </React.Fragment>
  )
}

export default Navbar
