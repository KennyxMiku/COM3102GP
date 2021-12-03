import { useState } from 'react'
import React from 'react';
import { getAllItems, Item } from './shopitem';
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
    H1,H2,H3,
    Intent,
    Overlay,
    InputGroup,
    Alert,
    HTMLSelect,
    OptionProps,
    Colors,
    Icon,
    AnchorButton,
    Dialog
} from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { FocusStyleManager } from "@blueprintjs/core";
import { Position } from '@blueprintjs/core';
import { ICON } from '@blueprintjs/core/lib/esm/common/classes';
import { User } from './register';

FocusStyleManager.onlyShowFocusOnTabs();
const shopItems = getAllItems();


const Home: React.FC = function () {
   
    const [count, setCount] = useState<number>(0);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [alert, setAlert] = useState<boolean>(false);
    const [alert1, setAlert1] = useState<boolean>(false);
    let uss: User[];
    let data = '0';
    const usss = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (usss) {
        data = usss;
        uss = JSON.parse(usss)
        console.log(JSON.parse(usss))
        console.log('Loading is done');
    } else {
        console.log('No data is found');
    };
    const [user, setUser] = useState<User[]>(uss);
    
    function checkLogin() {        
        if (id === "comadmin" && pw === "com3102") {
            setVisible(true);
        } else {
            setAlert(true);
        }
    }
    function clear() {
        localStorage.removeItem('user');
        console.log('Data is cleared');
    }
    const close = () => {
        setVisible(false);
    };
    const onClose = () => {
        setAlert(false);
    };
    const onClose1 = () => {
        setAlert1(false);
    };
    const open = () => {
        setAlert1(true);
    };
    return (
        <>
                <div style={{ backgroundColor: '#FFEEC5' }}>
                <br /> <br /><br />
                <H2 style={{ textAlign: 'center' }}> Admin Login: </H2>
                  
                    <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Username/StudentID :</span>
                        <span> <InputGroup style={{ width: '20%' }} className=" bp3-large" type="text"
                            placeholder="Enter username here...." dir="auto" onChange={x => setId(x.target.value)} />
                        </span>
                    </div>
                    <br />
                    <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Password :</span>

                        <span>  <InputGroup  style={{ width: '20%' }} type="password" className=" bp3-large" placeholder="Enter your password..."
                            onChange={x => setPw(x.target.value)} />
                        </span>
                    </div>
                    <br />
                <span style={{ paddingLeft: '10%' }}> <Button type="submit" className="bp3-large bp3-button" onClick={() => checkLogin()} > Login</Button> </span>
                <span style={{ paddingLeft: '20%' }}>  <AnchorButton href="./login" className="bp3-button bp3-large bp3-icon-log-in" >Go back</AnchorButton> </span>
                <Dialog isOpen={visible} onClose={() => close()}>
                    <span style={{ fontSize:'20px' }} className={Classes.DIALOG_HEADER}>User information</span>
                    {data}
                    <div className={Classes.DRAWER_FOOTER} >
                        <Button type="submit" className=".bp3-large bp3-button" onClick={() => close()} > close</Button>
                        <span style={{ paddingLeft: '10%' }}> <Button type="submit" className=".bp3-large bp3-button" onClick={() => open()} > Clear</Button> </span>
                    </div>
                 </Dialog>
                <Alert style={{ width: '450px' }} isOpen={alert} intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose()} >
                    <p style={{ fontSize: "20px" }}>
                        Username or Password not correct!<br />
                        Please try again.
                    </p>
                </Alert>
                <Alert style={{ width: '450px' }} isOpen={alert1} intent={Intent.DANGER} icon='warning-sign' cancelButtonText='No' confirmButtonText='confirm' onClose={() => onClose1()} onConfirm={() => clear()}>
                    <p style={{ fontSize: "20px" }}>
                        Confirm to delete all user data?
                    </p>
                </Alert>
            </div>

            </>
  )
}



export default Home;
