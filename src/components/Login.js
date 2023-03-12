import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import AxiosServices from '../services/AxiosServices';
const Login = () => {
    const navigate = useNavigate();
    const [credential, setCredentials] = useState({
        uname: "",
        password: ""
    })
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({
        id: "",
        uname: "",
        pass: "",
        type: ""
    })
    const getAllUsers = () => {
        AxiosServices.getAllUsers().then((res) => {
            setUsers(res.data)
        })
    }
    useEffect(() => {
        getAllUsers();
    }, [])
    function validate(e) {
        e.preventDefault();
        let count = 0;
        users.filter(f => {
            if (f.uname == credential.uname) {
                if (f.pass == credential.password) {
                    if (f.type == 'admin') {
                        setUser(f)
                        localStorage.setItem('admin_user', JSON.stringify(user));
                        count++;
                        return navigate('/admin')
                    } else if (f.type == 'cus') {
                        setUser(f)
                        localStorage.setItem('cus_user', JSON.stringify(user));
                        count++;
                        return navigate('/customer')
                    }
                }
            }
        });
        if (count == 0) {
            alert("Invalid UserName or Password")
        }

    }
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'uname':
                setCredentials((prev) => {
                    let st = { ...prev };
                    st.uname = value;
                    return st;
                })
                break;
            case 'password':
                setCredentials((prev) => {
                    let st = { ...prev };
                    st.password = value;
                    return st;
                })
                break;
            default:
                break;
        }
    }



    
     

    return (
        

        
        <div className='container'>

            <div className='login-wrap  mt-5'>
                <div className='login-width '>
                    <div className='card p-3 shadow bg-white'>

                        <div className='card-header hash-bg'>
                            <h1 className='card-title text-white'>Login</h1>
                        </div>
                        <form onSubmit={(e) => validate(e)}>
                            <div className='card-body'>
                                <div className='mt-3 p-3'>
                                    <label className='form-label'>Enter UserName</label>
                                    <input type='text' name='uname' className='form-control' onChange={onChangeHandler} />
                                </div>
                                <div className='mt-3 p-3'>
                                    <label className='form-label'>Enter Password</label>
                                    <input type='text' name='password' className='form-control' onChange={onChangeHandler} />
                                </div>
                                <div className='mt-3 text-center'>
                                    <button className='btn hash-bg text-white'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login