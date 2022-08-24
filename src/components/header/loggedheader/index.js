import React, {useState, Fragment} from 'react';
import {Navbar,Container,Column, Dropdown, Button} from 'rbx';
import LogoImg from "../../../assets/images/logo-white.png";
import '../../../styles/custom-colors.scss';
import "../../../styles/header.scss";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from '@fortawesome/free-solid-svg-icons';
import {Navigate} from "react-router-dom";
import UserService from '../../../services/users';

const LoggedInHeader = (props)=>{
    const  [useNavigate, setUseNavigate] = useState(false);
    const [user, setUser] = useState(localStorage.getItem('user'));
    const getUserName = ()=>{
        const username = JSON.parse(localStorage.getItem('user'));
        return username.name
    }
    const logOut = async ()=>{
        await UserService.logout()
    }

    if (useNavigate == true){
        return <Navigate to = {{pathname:"/"}}/>
    }
    return(
        <Navbar className="navbar-logged">
            <Navbar.Brand>
               <Column.Group>
                  <Column size="11" offset="1">
                     <Link to="/notes">
                        <img src={LogoImg} />
                     </Link>
                  </Column>
               </Column.Group>
            </Navbar.Brand>

         <Navbar.Menu >
            <Navbar.Segment as="div" className="nav-bar-item navbar-start" align='start'>
               <Navbar.Item as="div">
                  <Button
                        className='open-button'
                        color='white'
                        outlined
                        onClick={()=>props.setIsOpen(true)}
                        >
                           <FontAwesomeIcon icon={faList}/>
                  </Button>
               </Navbar.Item>
            </Navbar.Segment>            
            <Navbar.Segment as="div" className="navbar-item navbar-end" align="end">
              <Navbar.Item as="div">
                 <Dropdown>
                    <Dropdown.Trigger>
                       <Button className="button is-white" outlined>
                          <span>{JSON.parse(user)['name']} ▼</span>
                       </Button>
                    </Dropdown.Trigger>
                    <Dropdown.Menu>
                       <Dropdown.Content>
                          <Dropdown.Item as="div">
                             <Link to="/users/edit">User Edit</Link>
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item as="div">
                             <a href="./" onClick={e => logOut()}>Logout</a>
                          </Dropdown.Item>
                       </Dropdown.Content>
                    </Dropdown.Menu>
                 </Dropdown>
              </Navbar.Item>
            </Navbar.Segment>
         </Navbar.Menu>
      </Navbar>
    )
}

export default LoggedInHeader