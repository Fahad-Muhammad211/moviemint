
    import React from 'react'
    import Heading from '../Heading'
    import './Top5ProHeader.css'
    import { Dropdown, DropdownButton } from 'react-bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';
    function Top5ProHeader() {
      return (
        <section id='Top5Projectss'>
    <div className="container">
        <div className="row">
        <div className="col-sm-6">
    <Heading first="Top 5" last="Projects"/>
    
        </div>
    
        <div className="col-sm-6">
      <div className="d-inline-block">
        <DropdownButton id="dropdown-basic-button" title="Genre" variant="secondary">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="d-inline-block">
        <DropdownButton id="dropdown-basic-button" title="Category" variant="secondary">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="d-inline-block">
        <DropdownButton id="dropdown-basic-button" title="Location" variant="secondary">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
    
        </div>
    </div>
    
        </section>
      )
    }
    
    export default Top5ProHeader