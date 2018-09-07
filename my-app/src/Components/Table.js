import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'

export default class Table extends Component {
    render() {
        return (
            <div className='backround'>
                <Container>
                    <div className='tables ' >
                        <div className='state-table table1'>
                            <p>Bàn 1</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        <div className='state-table table2'>
                            <p>Bàn 2</p>
                            <Button className='disable' disabled>Đặt Bàn</Button>
                        </div>
                        <div className='state-table'>
                            <p>Bàn 3</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        <div className='state-table'>
                            <p>Bàn 4</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        <div className='state-table'>
                            <p>Bàn 5</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        <div className='state-table'>
                            <p>Bàn 6</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        <div className='state-table'>
                            <p>Bàn 7</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        <div className='state-table'>
                            <p>Bàn 8</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        <div className='state-table'>
                            <p>Bàn 8</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        <div className='state-table'>
                            <p>Bàn 8</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        <div className='state-table'>
                            <p>Bàn 8</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        <div className='state-table'>
                            <p>Bàn 8</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        <div className='state-table'>
                            <p>Bàn 8</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        <div className='state-table'>
                            <p>Bàn 8</p>
                            <Button>Đặt Bàn</Button>
                        </div>
                        
                        
                    </div>

                </Container>
            </div>
        )
    }
}
