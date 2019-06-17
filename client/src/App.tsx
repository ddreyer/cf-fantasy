import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from './Home';
import Teams from './Teams';
import { Header, Menu, Icon, MenuItemProps, Divider } from 'semantic-ui-react'

export default class App extends Component {
    state = {
        activeItem: 'home'
    };

    handleItemClick = (e: any, name: MenuItemProps) => this.setState({ activeItem: name.name })

    render() {
        const { activeItem } = this.state
        let button;

        if (activeItem == 'home') {
            button = <Home />
        } else if (activeItem == 'teams') {
            button = <Teams />
        }
        return (
            <div>
                <div className='Title'>
                    <Header as='h1'> Fantasy CrossFit 2019 </Header>
                </div>
                <Divider />
                <div className='page'>
                    <Menu compact icon='labeled' vertical>
                        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                        <Icon name='home' />
                        Home
                        </Menu.Item>

                        <Menu.Item name='teams' active={activeItem === 'teams'} onClick={this.handleItemClick}>
                        <Icon name='list alternate' />
                        Teams
                        </Menu.Item>
                    </Menu>
                    {button}
                </div>

            </div>
        );
    }
}
