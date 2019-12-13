
import React, {Component} from 'react';
import './App.css';
import { Container, Row, Col  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, NavItem, NavLink } from 'reactstrap';

import Presentation from './Presentation';
import Item from './Item';

import entete from './images/entete.jpg';
import passoire from './images/passoire.jpg';
import ligne_deco from './images/ligne_deco.png';
import ligne_deco_2 from './images/ligne_deco_2.png';
import ligne_deco_3 from './images/ligne_deco_3.png';
import signature from './images/signature.png';
import plat_1 from './images/plat_1.jpg';
import plat_2 from './images/plat_2.jpg';
import plat_3 from './images/plat_3.jpg';
import plat_4 from './images/plat_4.jpg';
import plat_5 from './images/plat_5.jpg';
import plat_6 from './images/plat_6.jpg';

class App extends Component {

    render(){
        return (
            <Container>

                {/* Entete */}
                <Row id="entete">
                    <Col sm="7" id="img_entete">
                        <img src={entete} alt={entete}/>
                    </Col>
                    <Col sm="5">
                        <Nav className="menu">
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Specials</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contact</NavLink>
                            </NavItem>
                        </Nav>

                        <Row>
                            <Col id="box">
                                <div className="titre">
                                    Lorem ipsum dolor sit amet consectetur adipiscing
                                </div>
                                <div className="decoration">
                                    <img src={ligne_deco_3} alt={ligne_deco}/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Banderole */}
                <Row id="banderole" className="justify-content-around">
                    <Presentation
                        image = {<FontAwesomeIcon icon={"sun"} size="3x"/>}
                        title = "TURNIP GREENS"
                        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incidi veniam, quis nostrud exercitation ullamco laboris nisi."
                    />
                    <Presentation
                        image = {<FontAwesomeIcon icon={"sun"} size="3x"/>}
                        title = "BEETROOT WATER"
                        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incidi veniam, quis nostrud exercitation ullamco laboris nisi."
                    />
                    <Presentation
                        image = {<FontAwesomeIcon icon={"sun"} size="3x"/>}
                        title = "GET SOCIAL"
                        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incidi veniam, quis nostrud exercitation ullamco laboris nisi."
                    />
                </Row>

                {/* Body */}
                <Row>
                    <Col id="body">
                        <div className="titre">
                            This month specials
                        </div>
                        <div className="decoration">
                            <img src={ligne_deco} alt={ligne_deco}/>
                        </div>
                        <Row className="justify-content-center align-items-center">
                            <Item
                                image = {<img src={plat_1} alt={plat_1}/>}
                                title = "Greens fava"
                                text = "Lorem ipsum dolor sit amet dirr, consectetur"
                                price = "17$"
                            />
                            <Item
                                image = {<img src={plat_2} alt={plat_2}/>}
                                title = "Celery quandong"
                                text = "Lorem ipsum dolor sit amet dirr, consectetur"
                                price = "30$"
                            />
                            <Item
                                image = {<img src={plat_3} alt={plat_3}/>}
                                title = "Pea horseradish"
                                text = "Lorem ipsum dolor sit amet dirr, consectetur"
                                price = "25$"
                            />
                            <Item
                                image = {<img src={plat_4} alt={plat_4}/>}
                                title = "Soko radicchio"
                                text = "Lorem ipsum dolor sit amet dirr, consectetur"
                                price = "7$"
                            />
                            <Item
                                image = {<img src={plat_5} alt={plat_5}/>}
                                title = "Tigernut"
                                text = "Lorem ipsum dolor sit amet dirr, consectetur"
                                price = "3$"
                            />
                            <Item
                                image = {<img src={plat_6} alt={plat_6}/>}
                                title = "Yarrow sweet"
                                text = "Lorem ipsum dolor sit amet dirr, consectetur"
                                price = "5$"
                            />
                        </Row>
                    </Col>
                </Row>

                {/* Bas de page */}
                <Row id="basDePage">
                    <Col sm="5" id="cadre">
                        <div className="titre">
                            About us
                        </div>
                        <div className="decoration">
                            <img src={ligne_deco_2} alt={ligne_deco}/>
                        </div>
                        <div className="texte">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </div>
                        <div className="text-right">
                            <img src={signature} alt={signature}/>
                        </div>
                    </Col>
                    <Col sm="7">
                        <img src={passoire} alt={passoire}/>
                    </Col>
                </Row>
                
                <Row id="bordure"></Row>
            </Container>
        );
    }
}

export default App;
