import React, { useState } from 'react'
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
    Position,
    Alert
} from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import { Popover2, Classes } from "@blueprintjs/popover2";
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
    const [pw2, setPw2] = useState<string>('');
    const [state, setState] = useState<string>('pb');
    const [student, setStudent] = useState<boolean>(true);
    const [alert, setAlert] = useState<boolean>(false);
    const [alert1, setAlert1] = useState<boolean>(false);
    const [alert2, setAlert2] = useState<boolean>(false);
    const [alert3, setAlert3] = useState<boolean>(false);
    const [alert4, setAlert4] = useState<boolean>(false);
    
    let check: boolean = false;
    let users = [];
    const usss = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (usss) {

        users = JSON.parse(usss);

        console.log('Loading is done');
    } else {
        console.log('No data is found');
    }
    const [user, setUser] = useState<User[]>(users);

    const onClose = () => {
        localStorage.setItem('user', JSON.stringify(user));
        setAlert(false);
    }
    const onClose1 = () => {
        setAlert1(false);
    }
    const onClose2 = () => {
        setAlert2(false);
    }
    const onClose3 = () => {
        setAlert3(false);
    }
    const onClose4 = () => {
        setAlert4(false);
    }
    const onPb = () => {
        setState('pb');
        setStudent(true);
    }
    const onSt = () => {
        setState('st');
        setStudent(false);
    }
    function submitRegister() {

        if (state === 'st') {
            if (prog === '' || year === '') {
                setAlert1(true);
            } else {
                if (name === '' || pw === '' || pw2 === '') {
                    setAlert2(true);
                } else {
                    if (pw !== pw2) {
                        setAlert3(true);

                    } else {
                        for (let i = 0; i < user.length; i++) {
                            if (name === user[i].name) {
                                check = true;
                            }

                        }
                        if (check === true) {
                            setAlert4(true)
                        } else {
                            setUser([...user, { programe: prog, year: year, name: name, password: pw }]);
                            setAlert(true);

                        }

                        
                    }

                }

            }
                
        } else {
            if (state === 'pb') {
                if (name === '' || pw === '' || pw2 === '') {
                    setAlert2(true);
                } else {
                    if (pw !== pw2) {
                        setAlert3(true);

                    } else {
                        for (let i = 0; i < user.length; i++) {
                            if (name === user[i].name) {
                                check = true;
                            }

                        }
                        if (check === true) {
                            setAlert4(true)
                        } else {
                            setUser([...user, { programe: prog, year: year, name: name, password: pw }]);
                            setAlert(true);

                        }
                    }

                }

            }

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

            <div style={{ backgroundColor: '#E8F9B6', paddingBottom: '20%' }}> //Register page
                <p style={{ fontSize: '30px', padding: '5%' }}><b>Register</b></p>
                <ButtonGroup style={{ paddingLeft: '10%' }} large={true}>
                    <Popover2
                        content={
                            <div className={Classes.POPOVER2_DISMISS} style={{ width: "300px" }}>
                                <div style={{ padding: '12%', textAlign: 'center', fontSize: '20px' }}>Weclome guest!</div>

                                <span style={{ paddingLeft: '40%' }}><Button icon='cross' intent='danger'>
                                    Close
                                </Button>
                                </span>
                                <br />
                            </div>
                        }
                        position='top'
                    >
                        <Button icon="people" onClick={() => onPb()}>Public</Button>
                    </Popover2>
                    <Popover2
                        content={
                            <div className={Classes.POPOVER2_DISMISS} style={{ width: "300px" }} >
                                <div style={{ padding: '12%', textAlign: 'center', fontSize: '20px' }}>Welcome student!</div>

                                <span style={{ paddingLeft: '40%' }}><Button icon='cross' intent='danger'>
                                    Close
                                </Button>
                                </span>
                                <br />
                            </div>
                        }
                        position='top'
                    >
                        <Button icon="person" onClick={() => onSt() } >Student</Button>
                    </Popover2>
                    

                </ButtonGroup>
                <br /><br />
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Programe :</span>
                    <span> <InputGroup maxLength={4} disabled={student} style={{ width: '20%' }} className=" bp3-large" type="text" placeholder="Enter programe here...." dir="auto"

                        onChange={x => setProg(x.target.value)} />
                    </span>
                </div>
                <br/>
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Year of entrance :</span>
                    <span> <InputGroup style={{ width: '20%' }} disabled={student} className=" bp3-large" type="number" placeholder="Enter year of entrance ...." dir="auto"

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
                <br />
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Password :</span>

                    <span>  <input type="password" className="bp3-input bp3-large" placeholder="Enter your password..."

                        onChange={x => setPw2(x.target.value)} />
                    </span>
                </div>
                <br />
                <span style={{ paddingLeft: '10%' }}> <AnchorButton type="submit" className="bp3-large bp3-button" onClick={submitRegister}> Register</AnchorButton> </span>
                <Alert style={{ width: '450px' }} isOpen={alert} intent={Intent.SUCCESS} icon='tick' onClose={() => onClose()} >
                    <p style={{ fontSize: "20px" }}>
                        Your register is success!
                    </p>
                </Alert>
                <Alert style={{ width: '450px' }} isOpen={alert1} intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose1()} >
                    <p style={{ fontSize: "20px" }}>
                        Programme or Year is not fill!
                    </p>
                </Alert>
                <Alert style={{ width: '450px' }} isOpen={alert2} intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose2()} >
                    <p style={{ fontSize: "20px" }}>
                        Username or Password is not fill!
                        
                    </p>
                </Alert>
                <Alert style={{ width: '450px' }} isOpen={alert3} intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose3()} >
                    <p style={{ fontSize: "20px" }}>
                        Incorrect password!<br />
                        Please input same password in both text area.
                       
                    </p>
                </Alert>
                <Alert style={{ width: '450px' }} isOpen={alert4} intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose4()} >
                    <p style={{ fontSize: "20px" }}>
                        Username has already been used.<br/><br/>
                        Please try another one.
                    </p>
                </Alert>
                
            </div>


            </>
  )
}



export default Demo;
