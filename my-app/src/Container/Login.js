import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Button } from 'reactstrap'

export default class Login extends Component {
    render() {
        return (
            <div className='Login '>
                <Container>
                    <div className='border border-right-0 border-left-0'>
                        <Form>
                            <FormGroup>
                                <h4>Username</h4><Input name='' type='text' placeholder='Username' />
                                <h4>Password</h4><Input name='' type='password' placeholder='Password' />
                            </FormGroup>
                            <Button type='submit' color='danger'>Login</Button>
                        </Form>
                    </div>
                </Container>
            </div>
        )
    }
}
