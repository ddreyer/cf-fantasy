import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

export default class Teams extends Component {
    render() {
        return (
            <div className='Home-column'>
                <div className='Home-column'>
                <Header as='h3'> Blah </Header>
                </div>
                <div className='Home-column'>
                    <Header as='h3'> Kevin </Header>
                </div>
                <div className='Home-column'>
                    <Header as='h3'> Matti </Header>
                </div>
            </div>
        );
    }
}