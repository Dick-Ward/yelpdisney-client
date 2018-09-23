import React from 'react'
import {Link} from 'react-router-dom'
import {Form, Input, Button, Dropdown} from 'semantic-ui-react'

const Navbar = () => {

  const options = [
    {key: 'All Parks', text: 'All Parks', value: ''},
    {key: 'Magic Kingdom', text: 'Magic Kingdom', value: 'Magic Kingdom'},
    {key: 'Epcot', text: 'Epcot', value: 'Epcot'},
    {key: 'Hollywood Studios', text: 'Hollywood Studios', value: 'Hollywood Studios'},
    {key: 'Animal Kingdom', text: 'Animal Kingdom', value: 'Animal Kingdom'},
    {key: 'Blizzard Beach', text: 'Blizzard Beach', value: 'Blizzard Beach'},
    {key: 'Typhoon Lagoon', text: 'Typhoon Lagoon', value: 'Typhoon Lagoon'},
    {key: 'Resort Dining', text: 'Resort Dining', value: 'Resort Dining'}
  ]

  return(
    <React.Fragment>
      <div className="navbar">Yelp Disney</div>
      <Link className="homeLink" to="/">Home</Link>
      <Form className="navSearch" onSubmit={ (e) => {e.preventDefault()}}>
        <Form.Group >
          <label>{`Search `} 
            <Input type="text"/>
          </label>
          <div className="in">in</div>
          <Dropdown
            placeholder={'Filter Results by Park'}
            options={options}
            selection
            onChange={() => {console.log("hi")}}
          />
          <Button>Submit</Button>
        </Form.Group>
      </Form>
    </React.Fragment>
  )
}

export default Navbar
