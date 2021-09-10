import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Home = () => {

    const contacts = useSelector(state => state)
    const dispatch = useDispatch()

    const deleteContact = (id) =>{
        dispatch({type:'DELETE_CONTACT', payload: id});
        toast.success("Contact deleted sucessfully");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="my-5 text-right col-md-12" style={{"paddingLeft":"65%"}}>
                    <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
                </div>
                <div className="mx-auto col-md-6">
                    <table className="table table-hover">
                        <thead className="text-center text-white bg-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Ph Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           { contacts.map((contact, id)=>(
                               <tr key={id}>
                                   <th>{id+1}</th>
                                   <th>{contact.name}</th>
                                   <th>{contact.email}</th>
                                   <th>{contact.number}</th>
                                   <th>
                                       <Link to={`/edit/${contact.id}`} className="mr-2 btn btn-small btn-primary">Edit</Link>
                                       <button type="button" onClick={()=>deleteContact(contact.id)} className="btn btn-small btn-danger">Delete</button>
                                   </th>
                               </tr>
                           ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )       
}
