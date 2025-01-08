import React, { useEffect, useState } from 'react'
import { createUser, getUser, updateUser } from '../services/UserService'
import { useNavigate, useParams } from 'react-router-dom';

const UserComponent = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [accountId, setAccountId] = useState('')
const [location, setLocation] = useState('')

const {id} = useParams();
const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    accountId: '',
    location: ''
})

    const navigator = useNavigate();

    useEffect(() => {

        if(id){
            getUser(id).then((response) => {
                setName(response.data.name);
                setEmail(response.data.email);
                setPassword(response.data.password);
                setAccountId(response.data.accountId);
                setLocation(response.data.location);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function saveOrUpdateUser(e){
        e.preventDefault();
        

        if(validateForm()){

            const user = {name, email, password, accountId, location}
            console.log(user)

            if(id){
                updateUser(id, user).then((response) => {
                    console.log(response.data);
                    navigator('/getAllAccounts');
                }).catch(error => {
                    console.error(error);
                })
            } else{
                createUser(user).then((response) => {
                    console.log(response.data);
                    navigator('/getAllAccounts')
                }).catch(error => {
                    console.roor(error);
                })
            }
        }
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {...errors}

        if(name.trim()){
            errorsCopy.name = '';
        } else{
            errorsCopy.name = 'First name is Required';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        } else{
            errorsCopy.email= 'Your Email is Required';
            valid = false;
        }

        if(password.trim()){
            errorsCopy.password = '';
        } else{
            errorsCopy.password = 'Password is Required';
            valid = false;
        }

        if(accountId.trim()){
            errorsCopy.accountId = '';
        } else{
            errorsCopy.accountId = 'Account Id is Required';
            valid = false;
        }

        if(location.trim()){
            errorsCopy.location = '';
        } else{
            errorsCopy.location = 'Location is Required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update User</h2>
        } else{
            return <h2 className='text-center'>Add User</h2>
        }

    }
  return (
    <div className='container'>
        <br /> 
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Name:</label>
                            <input
                                type='text'
                                placeholder='Enter User Name'
                                name='name'
                                value={name}
                                className={`form-control ${ errors.name ? 'is-invalid': ''}`}
                                onChange={(e) => setName(e.target.value)}
                            >
                            </input>
                            { errors.name && <div className='invalid-feedback'> { errors.name } </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                placeholder='Enter User Email'
                                name='email'
                                value={email}
                                className={`form-control ${ errors.email ? 'is-invalid': ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                            { errors.email && <div className='invalid-feedback'> { errors.email } </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Password:</label>
                            <input
                                type='password'
                                placeholder='Enter User Password'
                                name='password'
                                value={password}
                                className={`form-control ${ errors.password ? 'is-invalid': ''}`}
                                onChange={(e) => setPassword(e.target.value)}
                            >
                            </input>
                            { errors.password && <div className='invalid-feedback'> { errors.password } </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Account Id:</label>
                            <input
                                type='text'
                                placeholder='Enter User Account Id'
                                name='accountId'
                                value={accountId}
                                className={`form-control ${ errors.accountId ? 'is-invalid': ''}`}
                                onChange={(e) => setAccountId(e.target.value)}
                            >
                            </input>
                            { errors.accountId && <div className='invalid-feedback'> { errors.accountId } </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Location:</label>
                            <input
                                type='text'
                                placeholder='Enter User Location'
                                name='location'
                                value={location}
                                className={`form-control ${ errors.location ? 'is-invalid': ''}`}
                                onChange={(e) => setLocation(e.target.value)}
                            >
                            </input>
                            { errors.location && <div className='invalid-feedback'> { errors.location } </div>}
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateUser}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserComponent