import { useState } from 'react'
import React from 'react';
import {
    Alignment,
    Button,
   
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
    Alert,
    Dialog,
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
    Position,
    Classes
} from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import { Popover2 } from "@blueprintjs/popover2";
import { FocusStyleManager } from "@blueprintjs/core";
import { ICON } from '@blueprintjs/core/lib/esm/common/classes';
import { User } from './register'


FocusStyleManager.onlyShowFocusOnTabs();

const Demo: React.FC = function () {
   
    const [count, setCount] = useState<number>(0);

    const [year, setYear] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [prog, setProg] = useState<string>('');
    const [opw, setOpw] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [pw2, setPw2] = useState<string>('');
    const [chpw, setChpw] = useState<string>('');
    const [alert, setAlert] = useState<boolean>(false);
    const [alert1, setAlert1] = useState<boolean>(false);
    const [alert2, setAlert2] = useState<boolean>(false);
    const [alert3, setAlert3] = useState<boolean>(false);
    const [visible, setVisible] = useState(true);
    const rea = typeof window !== 'undefined' ? localStorage.getItem('name') : null;
    let us = '';
    if (rea) {
        us = rea;
        console.log('Loading is done');
    } else {
        console.log('No data is found');
    }
    let users = [];
    const usss = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (usss) {

        users = JSON.parse(usss);

        console.log('Loading is done');
    } else {
        console.log('No data is found');
    }
    const [user, setUser] = useState<User[]>(users);
    const show = () => {
        if (us === '') {
            setAlert3(true);
            setVisible(true);
        } else {
            setVisible( false );
            for (let i = 0; i < user.length; i++) {
                if (us === user[i].name) {

                    setName(user[i].name);
                    setYear(user[i].year);
                    setProg(user[i].programe);
                    setChpw(user[i].password);
                }
            }
        }
        

    };

    const onClose = () => {
        localStorage.setItem('user', JSON.stringify(user));
        setAlert(false);
    };
    const onClose1 = () => {
        setAlert1(false);
    };
    const onClose2 = () => {
        setAlert2(false);
    };
    const onClose3 = () => {
        setAlert3(false);
    };
    function onReset() {
        let check = false;
        if (opw !== chpw) {
            setAlert1(true);
        } else {
            if (pw !== pw2) {
                setAlert2(true);
            } else {
                for (let i = 0; i < user.length; i++) {
                    if (us === user[i].name) {
                        user[i].password = pw;
                        check = true;
                    }
                }
                if (check) {
                    setAlert(true);
                }


            }
        }
    }


    return (
        <>
        <div >
            <nav className="bp3-navbar bp3-fixed-top" style={{ background: Colors.GREEN5 }}>
                <span style={{ margin: '0 auto', width: '480px' }}>
                <div className="bp3-navbar-group bp3-align-left">
                    <div>
                        <img src={'/hsu-logo.png'} width='40' height='40' />
                    </div>
                </div>
                        <div className="bp3-navbar-group bp3-align-left">
                            <div className="bp3-navbar-heading"><a href="./Home"><h3  className="bp3-heading">HSU Shop</h3></a></div>
                        <span className="bp3-navbar-divider"></span>
                    </div>
                    <div className="bp3-navbar-group bp3-align-left">
                        <AnchorButton href="./Home" className="bp3-button bp3-large bp3-icon-home">Home</AnchorButton>
                        <AnchorButton href="./Shop" className="bp3-button bp3-large bp3-icon-shop">Shop</AnchorButton>
                        <AnchorButton href="./ContactUs" className="bp3-button bp3-large bp3-icon-phone">Contact us</AnchorButton>
                        <span className="bp3-navbar-divider"></span>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                            <AnchorButton href="./login" className="bp3-button bp3-large bp3-icon-log-in">Login</AnchorButton>
                    </div>
                  
                </span>
            </nav>
            </div>
            <div style={{ backgroundColor: "#FFE4A0", paddingBottom:'50%' }}>
                <p style={{ fontSize: '30px', padding: '5%' }}>View State <Button type="submit" icon='arrow-right' className="bp3-large bp3-button" onClick={() => show()} >Click me</Button></p>
                <p style={{ fontSize: '20px', paddingLeft: '10%' }}>Username: {name}</p><br />
                <p style={{ fontSize: '20px', paddingLeft: '10%' }}>(For student only) Programme:  {prog}</p><br />
                <p style={{ fontSize: '20px', paddingLeft: '10%' }}>(For student only) Year:  {year}</p><br />
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Old Password :</span>

                    <span>  <input type="password" className="bp3-input bp3-large" placeholder="Enter your old password..."

                        onChange={x => setOpw(x.target.value)} />
                    </span>
                </div>
                <br/>
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>New Password :</span>

                    <span>  <input type="password" className="bp3-input bp3-large" placeholder="Enter your new password..."

                        onChange={x => setPw(x.target.value)} />
                    </span>
                </div>
                <br />
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>New Password :</span>

                    <span>  <input type="password" className="bp3-input bp3-large" placeholder="Enter your new password again..."

                        onChange={x => setPw2(x.target.value)} />
                    </span>
                </div>
                <br />
                <div style={{ paddingLeft: '10%' }}>

                    <Button className="bp3-large bp3-button bp3-icon-tick" disabled={visible} onClick={() => onReset()}>Confirm</Button>
                    <Alert style={{ width: '450px' }} isOpen={alert} intent={Intent.SUCCESS} icon='tick' onClose={() => onClose()} >
                        <p style={{ fontSize: "20px" }}>
                            Password reset success!
                        </p>
                    </Alert>

                    <Alert style={{ width: 'auto', height: 'auto' }} isOpen={alert1} confirmButtonText="OK!" intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose1()} >
                        <p style={{ padding: '5%', fontSize: '20px' }}>
                            Old password incorrect!
                        </p>
                    </Alert>
                    <Alert style={{ width: 'auto', height: 'auto' }} isOpen={alert2} confirmButtonText="OK!" intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose2()} >
                        <p style={{ padding: '5%', fontSize: '20px' }}>
                            Incorrect New password!<br />
                            Please input same password in both text area.
                        </p>
                    </Alert>
                    <Alert style={{ width: '500px', height: 'auto' }} isOpen={alert3} confirmButtonText="OK!" intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose3()} >
                        <p style={{ fontSize: '20px' }}>
                            Please login First!!
                        </p>
                    </Alert>
                    <span style={{ paddingLeft: '5%' }}> <AnchorButton type="reset" className="bp3-large bp3-button" href="./Home" > Cancel</AnchorButton></span>
                </div>

            </div>

            </>
  )
}



export default Demo;
