import React, { Fragment } from 'react';
import PresentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header';
import {Column, Section, Title, Container} from 'rbx'
import "../../styles/home.scss";

const HomeScreen = ()=>{
    return(
        <Fragment>
            <Header/>
            <Section size="medium" className="home">
                <Container>
                    <Column.Group>
                        <Column size={5}>
                            <Title size={2} spaced className="has-text-white">
                                Create notes easily and access when you want on the cloud
                            </Title>
                            <Title size={5} spaced className="has-text-light" subtitle>
                                Have you imagined, having the chance to store all your notes on the clouds?
                                Notes that you can access anywhere, everywhere? try our App. register for free!
                            </Title>
                            <a className="button is-outlined is-white is-large" href="/register">
                                <p><strong/>Register for free</p>
                            </a>
                        </Column>
                        <Column size={6} offset={1}>
                            <img src={PresentationImage} alt = "apresentaçao"/>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    )
}

export default HomeScreen