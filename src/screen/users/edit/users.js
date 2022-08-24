import React , {Fragment} from 'react';
import {Column, Section, Title, Container, Card, Button} from 'rbx';
import "../../../styles/users.scss";
import LoggedInHeader from '../../../components/header/loggedheader';
import UserEditForm from "../../../components/users/users_edit_form" 
import UserEditPassword from "../../../components/users/users_edit_password"
import UserDelete from '../../../components/users/user_delete';


const UserEdit = ()=>{
    return (
        <>
            <LoggedInHeader/>
            <Section size="medium" className="users">
                <Container>
                    <Column.Group centered className='users-edit'>
                        <Column  size={4}>
                            <Title size={5} className="has-text-grey has-text-left">
                                Personal Information
                            </Title>
                            <Card>
                                <Card.Content>
                                    <UserEditForm/>
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                    <Column.Group centered className="users-edit">
                        <Column size={4}>
                            <Title size={5} className="has-text-grey has-text-left">
                                Password
                            </Title>
                            <Card>
                                <Card.Content>
                                    <UserEditPassword/>
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                    <Column.Group centered>
                        <Column size={4} className="!has-text-right">
                            <UserDelete/>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </>
    )
}

export default UserEdit