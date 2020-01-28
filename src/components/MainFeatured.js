import React from 'react'
import { Container, Row, Col, Card, CardImg,CardDeck, Jumbotron } from 'reactstrap';

export const MainFeatured = (props) => {
    return(
        <div>
        <CardDeck>
        <Card>
          <CardImg top width="100%" src="https://www.researchgate.net/profile/Tao_Chen15/publication/3935609/figure/fig1/AS:394647298953219@1471102656485/8-bit-256-x-256-Grayscale-Lena-Image.pn" alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src="https://www.researchgate.net/profile/Tao_Chen15/publication/3935609/figure/fig1/AS:394647298953219@1471102656485/8-bit-256-x-256-Grayscale-Lena-Image.pn" alt="Card image cap" />
        </Card>
        <Card>
          <CardImg top width="100%" src="https://www.researchgate.net/profile/Tao_Chen15/publication/3935609/figure/fig1/AS:394647298953219@1471102656485/8-bit-256-x-256-Grayscale-Lena-Image.pn" alt="Card image cap" />
        </Card>
    </CardDeck>
    </div>
    );
};