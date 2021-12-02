import React, { useState } from 'react'
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
    AnchorButton,
    InputGroup,
    RadioGroup,
    Radio,
    ButtonGroup,
    Position
} from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { FocusStyleManager } from "@blueprintjs/core";
import { ICON } from '@blueprintjs/core/lib/esm/common/classes';


FocusStyleManager.onlyShowFocusOnTabs();

export interface User {
    programe?: string;
    year?: string;
    name: string;
    password: string;
}



const Demo: React.FC = function () {
    const [prog, setProg] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [user, setUser] = useState<User[]>();
    const [student,setStudent] = useState<boolean>(true);
    function submitRegister() {
        setUser([...user, { programe: prog, year: year, name: name, password: pw }]);
        localStorage.setItem('user', JSON.stringify(user))
      } 
    function validateForm() {
        if (name === '' || pw === '') {
            setStudent(false);
        } else {
            setStudent(true);
        }
    }
    
    return (
        <>
        <div>
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
            </div> //end of nav
            
            <div> //Register page
                <p style={{ fontSize: '30px', padding: '5%' }}>Register</p>
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Programe :</span>
                    <span> <input style={{ width: '20%' }} className="bp3-input bp3-large" type="text" placeholder="Enter programe here...." dir="auto" 

                        onChange={x => setProg(x.target.value)} />
                    </span>
                </div>
                <br/>
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Year of entrance :</span>
                    <span> <input style={{ width: '20%' }} className="bp3-input bp3-large" type="text" placeholder="Enter year of entrance ...." dir="auto" 

                        onChange={x => setYear(x.target.value)} />
                    </span>
                </div>
                <br/>
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Username/StudentID :</span>
                    <span> <input style={{ width: '20%' }} className="bp3-input bp3-large" type="text" placeholder="Enter username here...." dir="auto" 

                        onChange={x => setName(x.target.value)} />
                    </span>
                </div>
                <br/>
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Password :</span>
                    
                    <span>  <input type="password" className="bp3-input bp3-large"  placeholder="Enter your password..." 
                                                  
                        onChange={x => setPw(x.target.value)}/>
                    </span>
                </div>
                <span style={{ paddingLeft: '10%' }}> <AnchorButton type="submit" className=".bp3-large bp3-button" /*href="./Home"*/ onClick={submitRegister} disabled={student}> Register</AnchorButton> </span>
            </div>


            </>
  )
}



export default Demo;
