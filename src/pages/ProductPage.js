import React from 'react'

// components
import {ProductNav} from '../components/ProductNav'
import {MainNav} from '../components/MainNav'

// style
import { Container, Row, Col } from "reactstrap";

export class ProductsPage extends React.Component {
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

    render() {
        return(
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