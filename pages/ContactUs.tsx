import React,{ useState } from 'react'
import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
    Callout,
    Code,
    Card,
    H1, H2, H3,
    Intent,
    Overlay,
    Drawer,
    DrawerSize,
    HTMLSelect,
    OptionProps,
    Colors,
    Icon,
    AnchorButton
} from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { FocusStyleManager } from "@blueprintjs/core";
import { Position } from '@blueprintjs/core';
import { ICON } from '@blueprintjs/core/lib/esm/common/classes';


FocusStyleManager.onlyShowFocusOnTabs();
const ContactUs: React.FC = function () {
    
    return (

        <>
        <div style={{ backgroundColor: '#abdbe3'}}>
            <nav className="bp3-navbar bp3-fixed-top" style={{ background: Colors.GREEN5 }}>
                <span style={{ margin: '0 auto', width: '480px' }}>
                <div className="bp3-navbar-group bp3-align-left">
                    <div>
                        <img src={'/hsu-logo.png'} width='40' height='40' />
                    </div>
                </div>
                    <div className="bp3-navbar-group bp3-align-left">
                        <div className="bp3-navbar-heading"><a href="./Home"><h3 className="bp3-heading">HSU Shop</h3></a></div>
                        <span className="bp3-navbar-divider"></span>
                    </div>
                    <div className="bp3-navbar-group bp3-align-left">
                        <AnchorButton href="./Home" className="bp3-button bp3-large bp3-icon-home">Home</AnchorButton>
                        <AnchorButton href="./Shop" className="bp3-button bp3-large bp3-icon-shop">Shop</AnchorButton>
                        <AnchorButton href="./ContactUs" className="bp3-button bp3-large bp3-icon-phone">Contact us</AnchorButton>
                        <span className="bp3-navbar-divider"></span>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <AnchorButton href="./login" className="bp3-button bp3-large bp3-icon-log-in" >Login</AnchorButton>
                    </div>
                  
                </span>
            </nav>
        </div>
            <div ><br /><br /><br />
                <div style={{ backgroundColor: '#E8F9B6'}}>
                    <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={'./HsuSu.png'} width='500' height='500'  />
                </div>
                <div className='subtitle' style={{
                    paddingBottom: '1%', paddingTop: '1%', textAlign: 'center', backgroundColor: '#E8F9B6',color:'green',fontSize:36}}>
                Contact Us 
            </div>
                <div className='contact' style={{ color: 'black', fontSize: 18 }}>

                    <Callout className="bp3-intent-primary">
                        <span style={{ fontSize: "21px" }}>
                            <p style={{ paddingTop:'1%',paddingLeft: '7%' }}>Student Union Office Address:</p>
                            <p style={{ paddingTop: '1%', paddingLeft: '7%' }}> <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3D22.378734366722%252C114.21173383326%26fbclid%3DIwAR1nEKeb0mL7yaQHX4EVnwA9Js7jkPMRQ-_yXMQCHIuPNLHCMKhgFpFLmBI&h=AT2F82GBoBBH0u0VBsCvcyjedzpik1WrLIBt7SPiCmt6bmwwm4-CBEVO4rVoo0xfbRSfQVfrMMhIpfYkbc9yMg-pYU4LxsqVRgLo_npPHuctr_8MIoKmB4ZPjc9c5iqiXUXn8tZ3YSs'>
                            Room 303, 3/F, Lee Shau Kee Complex (Block B), The Hang Seng University of Hong Kong, Hang Shin Link, Siu Lek Yuen, Shatin, New Territories, Hong Kong
                            </a></p>
                            <p style={{ paddingTop: '1%', paddingLeft: '7%' }}>中文地址：香港新界沙田小瀝源行善里香港恒生大學B座李兆基綜合大樓3樓303室</p>
                            <div>
                                <img style={{ paddingBottom: '1%',paddingTop: '1%',display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={'./hsuGoogleMap.jpg'} width='600' height='500'  />
                            </div>
                        </span>
                    </Callout>              
            </div>
                <div className='subtitle' style={{ paddingBottom: '1%', paddingTop: '1%', fontStyle: '', fontSize: 30, textAlign: 'center', backgroundColor: '#E8F9B6'}}>
                Additonal Contact Info
            </div>
                <div className="contact" style={{ fontSize: 21 }}>
                    <Callout className="bp3-intent-success" style={{ height:'500px' }}>
                        <br /><br /><br />
                        <div style={{ display: 'inline', paddingLeft: '7%', fontSize: 21 }}>HSU Website:
                                <a href='http://hsusu.hk/' style={{ display: 'inline' }}>http://hsusu.hk/</a>
                        </div>
                        <br /><br /><br />
                            <div style={{ fontSize: 21, paddingLeft: '7%' }}>
                                Tel: (852)3963 5277, (852) 9505 9943
                            <br /><br />Email: su@hsu.edu.hk<br /><br />
                                <div style={{ display: 'inline' }}>
                                    FaceBook:
                                </div >
                                <a href='http://fb.com/HSUSUpage' style={{ display: 'inline' }}>http://fb.com/HSUSUpage</a>
                            </div>
                      
                    </Callout>
                
                
            </div>
        </div>
         </>
  )
}



export default ContactUs;
