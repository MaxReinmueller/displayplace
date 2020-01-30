import React from 'react'

// components
import {StepAndRep} from '../../components/CompToBeConverted/StepAndRep'
import {ProductNav} from '../../components/ProductNav'
import {MainNav} from '../../components/MainNav'

// style
import { Container, Row, Col } from "reactstrap";

export class StepAndRepP extends React.Component {
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
                        <Col sm='3.5'>
                            <ProductNav />
                        </Col>
                        <Col>
                            <StepAndRep />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}