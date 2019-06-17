import React, { Component } from 'react';
import { Grid, Header, Table } from 'semantic-ui-react';

export default class Scoreboard extends Component {
    render() {
        return (
            <Grid textAlign='center' columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h3'> Dylan </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3'> Kevin </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3'> Matti </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h2'> Day 1 </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Table celled definition>

                        </Table>
                    </Grid.Column>
                    <Grid.Column>
                        
                    </Grid.Column>
                    <Grid.Column>
                        
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
        );
    }
}