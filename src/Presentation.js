
import React, {Component}  from 'react';
import { Col } from 'reactstrap';
import './Presentation.css'

class Presentation extends Component{

    render(){
        return(
            <Col sm="3">
                <div className="presentation">
                    <div className="espacement">{this.props.image}</div>
                    <div className="espacement"> <span className="bold">{this.props.title}</span></div>
                    <div>{this.props.text}</div>
                </div>
            </Col>
        );
    }
}

export default Presentation;