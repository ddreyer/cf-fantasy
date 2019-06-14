import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

class Home extends Component {
    render() {
        return (
            <div className='App'>
                <Header as='h1'> Crossfit Games Fantasy 2019 </Header>
                <div className='Home-column'>
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
            </div>

        );
    }
}

export default Home;

