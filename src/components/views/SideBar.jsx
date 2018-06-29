import React from 'react'
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { BrowserRouter as Router,Route,Link, Switch,Redirect} from 'react-router-dom'
require('../../styles/app.css');
const sideBar = ()=>(
  <div style={{background: 'var(--side-bar-background)', color: '#FFF', width: 220,height:1400 }}> 
        <SideNav highlightColor='var(--side-bar-image-high-light)' highlightBgColor='var(--side-bar-high-light)' defaultSelected='dashboard'>       
            <Nav id='dashboard'>
                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
                <NavText> <Link style={{color: '#FFF'}} to='/dashboard'>Dashboard</Link> </NavText>
            </Nav>
            <Nav id='sales'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> <Link style={{color: '#FFF'}} to='/reviews'>Online Reviews</Link> </NavText>
            </Nav>
            <Nav id='web'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> <Link style={{color: '#FFF'}} to='/website-reviews'>Website Reviews</Link> </NavText>
            </Nav>
            <Nav id='onsite'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> <Link style={{color: '#FFF'}} to='/reviews2'>On-site Reviews</Link> </NavText>
            </Nav>
            <Nav id='nearby'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> <Link style={{color: '#FFF'}} to='/nearby'>Location analytics</Link> </NavText>
            </Nav>
             <Nav id='mini'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> <Link style={{color: '#FFF'}} to='/onsite-activities'>On-site activities</Link> </NavText>
            </Nav>
            <Nav id='mini2'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> <Link style={{color: '#FFF'}} to='/onsite-activities2'>Communication</Link> </NavText>
            </Nav>
            <Nav id='s'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText><Link style={{color: '#FFF'}} to='/myAccount'>Management Hiring</Link> </NavText>
            </Nav>
        </SideNav>
      </div>
);

export default sideBar;