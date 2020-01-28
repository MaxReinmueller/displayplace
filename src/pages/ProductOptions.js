import React from 'react'

// components
import {MainNav} from '../components/MainNav'
import {ProductNav} from '../components/ProductNav'
import {ProductCard} from '../components/ProductCard'

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
                        <Col sm='3.5'>
                            <ProductNav />
                        </Col>
                        <Col>
                            <ProductCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}