import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from './Home';
import Teams from './Teams';
import Scoreboard from './Scoreboard';
import { Header, Menu, Icon, MenuItemProps, Divider, Grid } from 'semantic-ui-react'

export default class App extends Component {
    state = {
        activeItem: 'home',
    };

    handleItemClick = (e: any, name: MenuItemProps) => this.setState({ activeItem: name.name })

    render() {
        const { activeItem } = this.state

        return (
            <Router>
            <div>
                <div className='Title'>
                    <Header as='h1'> Fantasy CrossFit 2019 </Header>
                </div>
                <Divider />
                <Grid columns='equal'>
                    <Grid.Column width={2}>
                        <Menu compact icon='labeled' vertical pagination>
                                <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                                    <Icon name='home' />
                                    Home
                                    
                                </Menu.Item>
                                <Menu.Item as={Link} to="/teams" name='teams' active={activeItem === 'teams'} onClick={this.handleItemClick}>
                                    <Icon name='list alternate' />
                                    Teams                                    
                                </Menu.Item>
                                <Menu.Item as={Link} to="/scoreboard" name='scoreboard' active={activeItem === 'scoreboard'} onClick={this.handleItemClick}>
                                    <Icon name='star' />
                                    Scoreboard
                                </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column>
                        <Route exact path="/" component={Home} />
                        <Route path="/teams" component={Teams} />
                        <Route path="/scoreboard" component={Scoreboard} />
                    </Grid.Column>
                </Grid>
            </div>
            </Router>
        );
    }
}
