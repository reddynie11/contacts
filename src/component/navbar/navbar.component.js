import React from 'react'
import { Navbar, Form, FormControl } from 'react-bootstrap'


const AppNavbar= ({handleSearch})=>{
    return(
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand className='mr-auto ml-5' href="#">iContacts</Navbar.Brand>
                <Form inline className='mr-5 my-2'>
                    <FormControl type="search" placeholder="Search" className="mr-sm-2" onChange={handleSearch} />
                </Form>
            </Navbar>
        </div>
    )
}

export default AppNavbar