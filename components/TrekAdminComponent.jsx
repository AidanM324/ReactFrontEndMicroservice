import React, {useEffect, useState} from 'react'
import { deleteMountain, listMountains } from '../services/TrekAdminService'
import { useNavigate } from 'react-router-dom'

const TrekAdminComponent = () => {

    const [mountains, setMountains] = useState([])

    const navigator = useNavigate();
   
    useEffect(() => {
        getAllMountains();
    }, [])// optional dependencies in brackets

    function getAllMountains(){
        //uses function in component to grab url, waits for the response, then sets the response data in user sets
        listMountains().then((response) => {
            setMountains(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewMountain(){
        navigator('/create-mountain')
    }

    function updateMountain(Id){
        navigator(`/edit-mountain/${Id}`)
    }

    function removeMountain(Id){
        console.log(Id);

        deleteMountain(Id).then((response) => {
            getAllMountains();

        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>

        <h2 className='text-center'>List of Mountains</h2>
        <button className='btn btn-primary mb-2' onClick={addNewMountain}>Create Mountain</button>
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
                    <th>Actions</th>
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
                                    <button className='btn btn-info' onClick={() => updateMountain(mountain.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeMountain(mountain.id)} >Delete</button>
                                </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default TrekAdminComponent