import React, { Component } from 'react';
import { Grid, Header, Statistic } from 'semantic-ui-react'

export default class Home extends Component {
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
                        <Statistic.Group>
                            <Statistic color='red'>
                                <Statistic.Value>27</Statistic.Value>
                                <Statistic.Label>points</Statistic.Label>
                            </Statistic>
                                <Statistic color='orange'>
                                <Statistic.Value>8'</Statistic.Value>
                                <Statistic.Label>subs</Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
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
