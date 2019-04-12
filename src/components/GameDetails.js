import React, { Component } from 'react';
import LineSeperator from './LineSeperator';
import {Container, Row, Col, Table, Card, CardBody, CardHeader} from 'reactstrap';
import moment from "moment";
import {  Accordion, AccordionItem,  AccordionItemHeading,  AccordionItemButton,  AccordionItemPanel} from 'react-accessible-accordion';

export default class GameTypeError extends Component {
    render(){
        return(
            <div>
                {!this.props.showGameDetails &&
                <div>
                {Object.keys(this.props.gameDetails).length > 0 &&
                <Container className="game-information-section">
                    <Row>
                    <Col md={{ size: 12, offset: 0 }}>
                    <div className="">
                        <p className="primary-heading"><strong>Game Details</strong></p>          
                        <LineSeperator align="center" width="100%"/>
                    </div>
                    </Col>
                    </Row>
                    
                    <Row>
                    <Col>
                        <span className="secondary-heading"><strong>Game Type: </strong></span>          
                        <span className="text-muted"><strong>{this.props.gameDetails['@type']}</strong></span>          
                        <div className="margin-balance"/>
                    </Col>
                    </Row>

                    {this.props.gameDetails.races.map(race => (
                    <Row>
                        <Col md={{ size: 12, offset: 0 }}>
                        <Card body outline color="secondary" className="race-card-margin">
                            <CardHeader>
                            <div className="race-card-header">
                                <div>
                                <span className="secondary-heading"><strong>Race number: </strong></span>
                                <span className="text-muted">{race.number}</span>
                                </div>
                                <div>
                                <span className="secondary-heading"><strong>Race start time: </strong></span>
                                <span className="text-muted">{moment(race.startTime).format('MMMM Do YYYY, h:mm:ss a')}</span>
                                </div>
                            </div>
                            </CardHeader>
                            <CardBody>
                            {race.starts.map(start => (
                                <Card body outline color="success" className="start-card-margin">
                                <CardBody>
                                    <Table>
                                    <thead>
                                        <tr>
                                        <th className="text-left starts-table-column">Start number</th>
                                        <th className="text-left starts-table-column">Hourse name</th>
                                        <th className="text-left starts-table-column">Rider name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td className="text-muted text-left">{start.number}</td>
                                        <td className="text-muted text-left">{start.horse.name}</td>
                                        <td className="text-muted text-left">{start.driver.firstName} {start.driver.lastName}</td>
                                        </tr>
                                    </tbody>
                                    </Table>

                                    <Accordion allowZeroExpanded={true}>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                More information
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <Table>
                                            <thead>
                                                <tr>
                                                <th className="text-left more-info-table-column">Trainer name</th>
                                                <th className="text-left more-info-table-column">Horse father name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td className="text-muted text-left">{start.horse.trainer.firstName} {start.horse.trainer.lastName}</td>
                                                <td className="text-muted text-left">{start.horse.pedigree.father.name}</td>
                                                </tr>
                                            </tbody>
                                            </Table>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    </Accordion>
                                </CardBody>
                                </Card>
                            ))}
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                    ))}
                </Container>}
                </div>}
           </div>        
        )
    }
}