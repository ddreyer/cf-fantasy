import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

export default class Home extends Component {
    render() {
        return (
            <div className='page'>
                <div className='Home-column1'>
                <Header as='h3'> Dylan </Header>
                </div>
                <div className='Home-column1'>
                    <Header as='h3'> Kevin </Header>
                </div>
                <div className='Home-column1'>
                    <Header as='h3'> Matti </Header>
                </div>
            </div>
        );
    }
}
