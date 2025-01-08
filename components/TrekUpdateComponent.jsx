import React, { useEffect, useState } from 'react'
import { createMountain, getMountain, updateMountain } from '../services/TrekAdminService'
import { useNavigate, useParams } from 'react-router-dom';

const TrekUpdateComponent = () => {

const [mountainId, setMountainId] = useState('')
const [company, setCompany] = useState('')
const [priceRange, setPriceRange] = useState('')
const [email, setEmail] = useState('')
const [tripLength, setTripLength] = useState('')
const [location, setLocation] = useState('')
const [mountainRange, setMountainRange] = useState('')

const {Id} = useParams();
const [errors, setErrors] = useState({
    mountainId: '',
    company: '',
    priceRange: '',
    email: '',
    tripLength: '',
    location: '',
    mountainRange: ''
})

    const navigator = useNavigate();

    useEffect(() => {

        if(Id){
            getMountain(Id).then((response) => {
                setMountainId(response.data.mountainId);
                setCompany(response.data.company);
                setPriceRange(response.data.priceRange);
                setEmail(response.data.email);
                setTripLength(response.data.tripLength);
                setLocation(response.data.location);
                setMountainRange(response.data.mountainRange);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [Id])

    function saveOrUpdateMountain(e){
        e.preventDefault();
        

        if(validateForm()){

            const mountain = {mountainId, company, priceRange, email, tripLength, location, mountainRange}
            console.log(mountain)

            if(Id){
                updateMountain(Id, mountain).then((response) => {
                    console.log(response.data);
                    navigator('/trekadmin-microservice');
                }).catch(error => {
                    console.error(error);
                })
            } else{
                createMountain(mountain).then((response) => {
                    console.log(response.data);
                    navigator('/trekadmin-microservice')
                }).catch(error => {
                    console.roor(error);
                })
            }
        }
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {...errors}

        if(mountainId.trim()){
            errorsCopy.mountainId = '';
        } else{
            errorsCopy.mountainId = 'Mountain is Required';
            valid = false;
        }

        if(company.trim()){
            errorsCopy.company = '';
        } else{
            errorsCopy.company = 'Company is Required';
            valid = false;
        }

        if(priceRange.trim()){
            errorsCopy.priceRange = '';
        } else{
            errorsCopy.priceRange= 'Price Range is Required';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        } else{
            errorsCopy.email = 'Email is Required';
            valid = false;
        }

        if(tripLength.trim()){
            errorsCopy.tripLength = '';
        } else{
            errorsCopy.tripLength = 'Trip Length is Required';
            valid = false;
        }

        if(location.trim()){
            errorsCopy.location = '';
        } else{
            errorsCopy.location = 'Location is Required';
            valid = false;
        }

        if(mountainRange.trim()){
            errorsCopy.mountainRange = '';
        } else{
            errorsCopy.mountainRange = 'Mountain Range is Required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(Id){
            return <h2 className='text-center'>Update Mountain</h2>
        } else{
            return <h2 className='text-center'>Add Mountain</h2>
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
                            <label className='form-label'>Mountain:</label>
                            <input
                                type='text'
                                placeholder='Enter User Mountain'
                                name='Mountain'
                                value={mountainId}
                                className={`form-control ${ errors.mountainId ? 'is-invalid': ''}`}
                                onChange={(e) => setMountainId(e.target.value)}
                            >
                            </input>
                            { errors.mountainId && <div className='invalid-feedback'> { errors.mountainId } </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Company:</label>
                            <input
                                type='text'
                                placeholder='Enter Trekking Company'
                                name='company'
                                value={company}
                                className={`form-control ${ errors.company ? 'is-invalid': ''}`}
                                onChange={(e) => setCompany(e.target.value)}
                            >
                            </input>
                            { errors.company && <div className='invalid-feedback'> { errors.company } </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Price Range:</label>
                            <input
                                type='text'
                                placeholder='Enter Price Range'
                                name='priceRange'
                                value={priceRange}
                                className={`form-control ${ errors.priceRange ? 'is-invalid': ''}`}
                                onChange={(e) => setPriceRange(e.target.value)}
                            >
                            </input>
                            { errors.priceRange && <div className='invalid-feedback'> { errors.priceRange } </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                placeholder='Enter Company Email'
                                name='email'
                                value={email}
                                className={`form-control ${ errors.email ? 'is-invalid': ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                            { errors.email && <div className='invalid-feedback'> { errors.email } </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Trip Length:</label>
                            <input
                                type='text'
                                placeholder='Enter Trip Length'
                                name='tripLength'
                                value={tripLength}
                                className={`form-control ${ errors.tripLength ? 'is-invalid': ''}`}
                                onChange={(e) => setTripLength(e.target.value)}
                            >
                            </input>
                            { errors.tripLength && <div className='invalid-feedback'> { errors.tripLength } </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Location:</label>
                            <input
                                type='text'
                                placeholder='Enter Location'
                                name='location'
                                value={location}
                                className={`form-control ${ errors.location ? 'is-invalid': ''}`}
                                onChange={(e) => setLocation(e.target.value)}
                            >
                            </input>
                            { errors.location && <div className='invalid-feedback'> { errors.location } </div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Mountain Range:</label>
                            <input
                                type='text'
                                placeholder='Enter Mountain Range'
                                name='mountainRange'
                                value={mountainRange}
                                className={`form-control ${ errors.mountainRange ? 'is-invalid': ''}`}
                                onChange={(e) => setMountainRange(e.target.value)}
                            >
                            </input>
                            { errors.mountainRange && <div className='invalid-feedback'> { errors.mountainRange } </div>}
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateMountain}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrekUpdateComponent