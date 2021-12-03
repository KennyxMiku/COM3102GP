import React from 'react';
import { useState } from 'react'
import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Alert,
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
import { User }from './register'

FocusStyleManager.onlyShowFocusOnTabs();


const Demo: React.FC = function () {

    const [name, setName] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [alert, setAlert] = useState<boolean>(false);
    const [alert1, setAlert1] = useState<boolean>(false);
    const [alert2, setAlert2] = useState<boolean>(false);
    const [log, setLog] = useState<boolean>(false);
    const read = typeof window !== 'undefined' ? localStorage.getItem('name') : null;
    let us = '';
    if (read) {
        us = read;
        console.log('Loading is done');
    } else {
        console.log('No data is found');
    }
    let check: boolean = false;
    const onClose = () => {
        setAlert(false);
    }
    const onClose1 = () => {
        setAlert1(false);
    }
    const onClose2 = () => {
        setAlert2(false);
    }
    function Login() {
        console.log(us);
        if (us === '') {

            let users = [];
            const usss = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
            if (usss) {

                users = JSON.parse(usss);

                console.log('Loading is done');
            } else {
                console.log('No data is found');
            }
            for (let i = 0; i < users.length; i++) {
                if (name === users[i].name && pw === users[i].password) {
                    check = true;
                }

            }
            if (check) {
                setLog(true);
                localStorage.setItem('name', name);
                
                setAlert(true);
            }
            else {
                setAlert1(true);
            }
        } else {
            setLog(true);
            setAlert2(true);
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
            </div>
            <div>
                <p style={{ fontSize: '30px', padding: '5%' }}>Login</p>
                <p style={{ fontSize: '30px',paddingLeft: '10%' }}>Welcome {us}!</p>
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Username/StudentID :</span>
                    <span> <InputGroup style={{ width: '20%' }} disabled={log} className=" bp3-large" type="text" placeholder="Enter username here...." dir="auto"
                        onChange={x => setName(x.target.value)}/>
                    </span>
                </div>
                <br/>
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Password :</span>
                    
                    <span>  <InputGroup style={{ width: '20%' }} disabled={log} type="password" className=" bp3-large"  placeholder="Enter your password..."
                        onChange={x => setPw(x.target.value)}/>
                    </span>
                </div>
                <br />
                <span style={{ paddingLeft: '10%' }}> <Button type="submit" className=".bp3-large bp3-button" onClick={() => Login() } > Login</Button> </span>
                <br />
                <div>
                    <span style={{ paddingLeft: '10%', fontSize: '20px' }}>If you are guest, Click
                        <span> <AnchorButton type="submit" icon='arrow-right' className=".bp3-large bp3-button" href="./register" > Here</AnchorButton> </span>
                        to register!</span>



                </div>
                <div style={{ paddingLeft: '10%', fontSize: '20px' }}><AnchorButton type="submit" icon='arrow-right' className=".bp3-large bp3-button" href="./Adminapi" > Admin only</AnchorButton> </div>
                <Alert style={{ width: '450px' }} isOpen={alert} intent={Intent.SUCCESS} icon='tick' onClose={() => onClose()} >
                    <p style={{ fontSize: "20px" }}>
                        Welcome {name}!;
                        </p>
                </Alert>
                <Alert style={{ width: '450px' }} isOpen={alert1} intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose1()} >
                    <p style={{ fontSize: "20px" }}>
                        Username or Password not correct!<br />
                        Please try again.
                    </p>
                </Alert>
                <Alert style={{ width: '450px' }} isOpen={alert2} intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose2()} >
                    <p style={{ fontSize: "20px" }}>
                        You have been login!
                    </p>
                </Alert>
            </div>


            </>
  )
}



export default Demo;
