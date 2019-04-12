import React, { Component } from 'react';
import LineSeperator from './LineSeperator';
import { Button, Container, Row, Col, Table} from 'reactstrap';
import moment from "moment";

export default class GameTypeError extends Component {
    render(){
        return(
            <div>
                {!this.props.showGameInfo &&
                <div>
                {Object.keys(this.props.gameData).length > 0 &&
                <Container className="game-information-section">
                    <Row>
                    <Col md={{ size: 12, offset: 0 }}>
                    <div className="">
                    <p className="primary-heading"><strong>Game Information</strong></p>          
                    <LineSeperator align="center" width="100%" pixels="10px"/>
                    </div>
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                        <p className="secondary-heading"><strong>Upcoming game</strong></p>
                        {this.props.gameData.upcoming.length === 0 &&
                        <p>No upcoming game available right now</p>}

                        {this.props.gameData.upcoming.length > 0 &&
                        <Table>
                        <thead>
                            <tr>
                            <th>Game Id</th>
                            <th>Start Time</th>
                            <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="text-muted">{this.props.closestUpcomingGame.id}</td>
                            <td className="text-muted">{moment(this.props.closestUpcomingGame.startTime).format('MMMM Do YYYY, h:mm:ss a')}</td>
                            <td>
                            <Button color="secondary" onClick={() => this.props.fetchGameDetails(this.props.closestUpcomingGame.id)}>View Details</Button>
                            </td>
                            </tr>
                        </tbody>
                        </Table>}
                    </Col>
                    </Row>

                    <LineSeperator align="center" width="100%"/>
                    
                    {this.props.gameData.upcoming.length === 0 &&
                    <Row>
                    <Col>
                        <p className="secondary-heading"><strong>Results game</strong></p>
                        <Table>
                        <thead>
                            <tr>
                            <th>Game Id</th>
                            <th>Start Time</th>
                            <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="text-muted">{this.props.closestResultsGame.id}</td>
                            <td className="text-muted">{this.props.closestResultsGame.startTime}</td>
                            <td>
                            <Button color="secondary" onClick={() => this.fetchGameDetails(this.props.closestResultsGame.id)}>View Details</Button>
                            </td>
                            </tr>
                        </tbody>
                        </Table>
                    </Col>
                    </Row>}
                </Container>}
                </div>}
           </div>        
        )
    }
}