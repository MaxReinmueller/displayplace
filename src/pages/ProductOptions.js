import React from 'react'

// components
import {MainNav} from '../components/MainNav'
import {ProductNav} from '../components/ProductNav'

// style
import { Container, Row, Col } from "reactstrap";

export class ProductOptions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log('component did mount')
    }

    componentDidUpdate() {
        console.log('component did update')
    }

    render(){
        return (
            <div>
                <MainNav />
                <Container>
                    <Row>
                        <Col>
                        <ProductNav />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}