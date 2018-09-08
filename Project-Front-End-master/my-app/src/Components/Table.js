import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import NavBar from '../Components/NavBar'

const table = {
    width: '15rem',
}
export default class Table extends Component {
    render() {
        return (
            <div className='backround'>
                <Container>
                    <NavBar />
                    <div class="card-columns">
                        <div class="card">
                            <img class="card-img-top" src="http://kenhvanhoc.edu.vn/wp-content/uploads/2014/09/ban-hoc.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Bàn 1</h5>
                                <Button>Đặt Bàn</Button>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src="http://kenhvanhoc.edu.vn/wp-content/uploads/2014/09/ban-hoc.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Bàn 1</h5>
                                <Button>Đặt Bàn</Button>
                            </div>
                        </div><div class="card">
                            <img class="card-img-top" src="http://kenhvanhoc.edu.vn/wp-content/uploads/2014/09/ban-hoc.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Bàn 1</h5>
                                <Button>Đặt Bàn</Button>
                            </div>
                        </div><div class="card">
                            <img class="card-img-top" src="http://kenhvanhoc.edu.vn/wp-content/uploads/2014/09/ban-hoc.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Bàn 1</h5>
                                <Button>Đặt Bàn</Button>
                            </div>
                        </div><div class="card">
                            <img class="card-img-top" src="http://kenhvanhoc.edu.vn/wp-content/uploads/2014/09/ban-hoc.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Bàn 1</h5>
                                <Button>Đặt Bàn</Button>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src="http://kenhvanhoc.edu.vn/wp-content/uploads/2014/09/ban-hoc.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Bàn 1</h5>
                                <Button>Đặt Bàn</Button>
                            </div>
                        </div>
                        
                    </div>
                </Container>
            </div>
        )
    }
}
