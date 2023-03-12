import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <div className='container'>
            <header className='mt-3'>
                <h1>Welcome To Admin Dashboard</h1>
            </header>
            <div className='col-lg-12 col-md-3 col-sm-2 row justify-content-center'>
                <div className="card shadow bg-dark text-white op_Cards m-3 zoom">
                    <div className='card-body h-100'>
                        <div className='my-auto'>
                            <h1 className='card-text '>
                                <Link to="/addProduct" className="nav-link ">Add Products</Link>
                            </h1>
                        </div>


                    </div>

                </div>
                <div className="card shadow bg-dark text-white op_Cards m-3">
                    <div className='card-body'>
                        <h1 className='card-text'><Link to="/viewAllBuses" className="nav-link">View All Buses</Link></h1>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-3 col-sm-2'>
                <div className="card shadow bg-dark text-white op_Cards"></div>
            </div>
        </div>
    )
}

export default Admin