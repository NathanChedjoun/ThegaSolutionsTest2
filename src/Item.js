
import React, {Component}  from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import './Item.css'

class Item extends Component{

    render(){
        return(
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    {this.props.image}
                </div>
                <div>
                    <Card id="carte">
                        <CardBody>
                            <CardTitle className="bold">{this.props.title}</CardTitle>
                            <CardText>{this.props.text}</CardText>
                            <CardText>{this.props.price}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Item;