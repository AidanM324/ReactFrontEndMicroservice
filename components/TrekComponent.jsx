import React, { useEffect, useState }from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMountains, listMountains } from '../services/TrekService';


const TrekComponent = () => {

const [searchTerm, setMountainId] = useState('');
const [mountains, setMountains] = useState([])

const navigator = useNavigate();
const {mountainId} = useParams();

const handleSearch = (e) => {
    setMountainId(e.target.value);
};

useEffect(() => {
        getAllMountains();
    }, [])

function getAllMountains(){
        //uses function in component to grab url, waits for the response, then sets the response data in user sets
        listMountains().then((response) => {
            setMountains(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function searchMountain(e){
        e.preventDefault();
    
            if(mountainId){
                getMountains(mountainId).then((response) => {
                    setMountains(response.data);
                }).catch(error => {
                    console.error(error);
                })
            }
        }

    

function searchMountain(mountainId){
    navigator(`/trek-microservice/${mountainId}`)
}

return (
    <div className='container'>
<br/>

<div className='text-center'>
            <input
                type="text"
                class="form-control rounded"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for a mountain"
                className='text-center'
            />
            <button onClick={searchMountain} class="btn btn-outline-primary" data-mdb-ripple-init>Search</button>

        
        </div>

        <br/>
        <h2 className='text-center'>List of Mountains</h2>
        
        <table className= 'table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Mountain Id</th>
                    <th>Mountain</th>
                    <th>Company</th>
                    <th>Price Range</th>
                    <th>Email</th>
                    <th>Trip Length</th>
                    <th>Location</th>
                    <th>Mountain Range</th>
                </tr>
            </thead>
            <tbody>
                {
                    mountains.map(mountain => 
                        <tr key={mountain.id}>
                              <td>{mountain.id}</td>  
                              <td>{mountain.mountainId}</td>
                              <td>{mountain.company}</td>
                              <td>{mountain.priceRange}</td>
                              <td>{mountain.email}</td>
                              <td>{mountain.tripLength}</td>
                              <td>{mountain.location}</td>
                              <td>{mountain.mountainRange}</td>
                                <td>
                                    
                                </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    
)
}

export default TrekComponent