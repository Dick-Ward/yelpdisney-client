import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return(
    <React.Fragment>
      <div className="navbar">Yelp Disney</div>
      <Link className="homeLink" to="/">Home</Link>
      <form  className="navSearch" onSubmit={ (e) => {e.preventDefault()}}>
        <label>New Search: 
          <input type="text"/>
        </label>
        {"   in   "}
        <select defaultValue="" onChange={() => {console.log("hi")}}>
          <option value="">All Parks</option>
          <option value="Epcot">Epcot</option>
          <option value="Magic Kingdom">Magic Kingdom</option>
          <option value="Hollywood Studios">Hollywood Studios</option>
          <option value="Animal Kingdom">Animal Kingdom</option>
          <option value="Blizzard Beach">Blizzard Beach</option>
          <option value="Typhoon Lagoon">Typhoon Lagoon</option>
          <option value="Resort Dining">Resort Dining</option>
        </select>
        <input type="submit" />

      </form>
    </React.Fragment>
  )
}

export default Navbar
