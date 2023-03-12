import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'


import { useNavigate } from 'react-router-dom'
import AxiosServices from '../services/AxiosServices';

function ViewAllBuses() {
    const [buses, setBuses] = useState([])
    const navigate = useNavigate();


    const getAllBuses = () => {
        AxiosServices.getAllBuses().then((res) => {
            setBuses(res.data)
        })
    }

    const onEditHandle = (id) => {
        navigate("/edit/" + id)
    }
    const onViewHandle = (id) => {
        AxiosServices.getBusById(1).then((res) => {
            navigate("/viewSeats/" + 1)
            console.log("hiii")
        })
    }
    const onDeleteHandle = (id) => {
        AxiosServices.deleteBus(id).then((res) => {
            navigate("/viewAllProducts");
            console.log("hiii")
        })
    }
    useEffect(() => {
        getAllBuses();
    }, [])

    return (
        <Container className='mt-5'>
            <div className='card-header text-white mb-5'>
                <h1 className='card-title'>View All Buses</h1>
            </div>
            <Table className='table shadow  table-striped border-dark bg-white'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th colSpan='3'>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buses.map((e, i) =>
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td><Button className='btn btn-success' onClick={() => onEditHandle(e.id)}>EDIT</Button></td>
                                <td><Button className='btn btn-danger' onClick={() => onDeleteHandle(e.id)}>DELETE</Button></td>
                                <td><Button className='btn btn-info' onClick={() => onViewHandle(e.id)}>VIEW</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

                   
        </Container>
    )
}

export default ViewAllBuses;