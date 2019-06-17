import React, { Component } from 'react';
import { Header, Grid, Table, Icon } from 'semantic-ui-react'

export default class Teams extends Component {
    state = {
        teams: [],
    };

    componentWillMount() {
        fetch('/api/teams')
        .then(response => response.json())
        .then(data => 
            this.setState({
            teams: data.data,
            })
        )
    }

    renderTeamData(user: string) {
        if (this.state.teams.length == 0) {
            return false
        }
        return this.state.teams[user].map(row => {
            const [ pick, first, last, used ] = row
            let usedSymbol;
            if (used === '1') {
                usedSymbol = <Icon color='green' name='checkmark' size='large' />
            } else {
                usedSymbol = <Icon color='red' name='close' size='large' />
            }
            return (
                <React.Fragment>
                    <Table.Row>
                        <Table.Cell>
                            {pick}
                        </Table.Cell>
                        <Table.Cell>
                            {first} {last}
                        </Table.Cell>
                        <Table.Cell>
                            {usedSymbol}
                        </Table.Cell>
                    </Table.Row>
                </React.Fragment>
            )
        })
    }

    render() {
        console.log(this.state.teams)
        let header = <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Pick</Table.HeaderCell>
                <Table.HeaderCell>Player</Table.HeaderCell>
                <Table.HeaderCell>Used?</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

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
                        <Table celled>
                            {header}
                            {this.renderTeamData("Dylan")}
                        </Table>
                    </Grid.Column>
                    <Grid.Column>
                        <Table celled>
                            {header}
                            {this.renderTeamData("Kevin")}
                        </Table>
                    </Grid.Column>
                    <Grid.Column>
                        <Table celled>
                            {header}
                            {this.renderTeamData("Matti")}
                        </Table>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        );
    }
}