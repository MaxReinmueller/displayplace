import React from 'react'

import {MainNav} from '../components/MainNav'
import { render } from '@testing-library/react';

export class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    componentDidMount() {
        console.log('component did mount');
    }

    componentDidUpdate() {
        console.log('component did update');
    }

    render() {
        return(
            <div>
                <MainNav />
            </div>
        )
    }

}