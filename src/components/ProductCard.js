import React from 'react'

// styles 
import { Row, Col, Card, CardLink, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, CardDeck } from 'reactstrap';

export const ProductCard = (props) => {
    return (
        <div>
            <Row>
                <CardDeck>
                <Card>
                    <CardBody>
                    <Row>
                    <Col>
                    <CardTitle>{props.productName}</CardTitle>
                    <ul>
                    <li><CardText>{props.salesPoint1} Point 1</CardText></li>
                    <li><CardText>{props.salesPoint2} Point 2</CardText></li>
                    <li><CardText> {props.salesPoint3} Point 3</CardText></li>
                    </ul>
                    <CardSubtitle>Sizes </CardSubtitle>
                    <CardLink href="/">{props.height}" x {props.width}"</CardLink>
                    </Col>
                    <Col>
                    <CardImg right width="50%" src="https://github.com/MaxReinmueller/displayplace/blob/master/client/src/utils/images/tentionFabricStand.jpg?raw=true" alt="Card image cap" />
                    </Col>
                    </Row>
                    </CardBody>
                </Card>
                </CardDeck>
            </Row>
        </div>
    )
}