import React from 'react'

import { ListGroup, ListGroupItem } from 'reactstrap';

export const ProductNav = props => {
    return (
        <div>
            <ListGroup>
                <ListGroupItem style={{backgroundColor: '#004C97'}} active action>INDOOR / OUTDOOR DISPLAYS</ListGroupItem>
                <ListGroupItem tag="a" href="/productoptions" action>Advertising Flags</ListGroupItem> 
                <ListGroupItem tag="a" href="/productoptions" action>Step and Repeat Backdrop</ListGroupItem> 
                <ListGroupItem tag="a" href="/productoptions" action>Hanging Displays</ListGroupItem> 
                <ListGroupItem tag="a" href="/productoptions" action>Standing Displays</ListGroupItem> 
                <ListGroupItem tag="a" href="/productoptions" action>Custom Event Tent</ListGroupItem> 
                <ListGroupItem tag="a" href="/productoptions" action>Table Throw</ListGroupItem> 
            </ListGroup>
            <ListGroup>
                <ListGroupItem style={{backgroundColor: '#004C97'}} active action>BANNERS</ListGroupItem>
                <ListGroupItem tag="a" href="/product" action>Vinyl Banner (13oz)</ListGroupItem> 
                <ListGroupItem tag="a" href="/product" action>Vinyl Banner (18oz Blockout)</ListGroupItem> 
                <ListGroupItem tag="a" href="/product" action>Vinyl Banner (Backlit)</ListGroupItem> 
                <ListGroupItem tag="a" href="/product" action>Vinyl Banner (Mesh)</ListGroupItem> 
            </ListGroup>
        </div>
    );
};
