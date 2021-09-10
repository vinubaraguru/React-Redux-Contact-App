import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

export const EditContact = () => {

    const {id} = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector(state => state)
    const dispatch = useDispatch();
    const history = useHistory();

    const updateStudent = (e) =>{
        e.preventDefault()

        if(!name || !email || !number){
            toast.warning("Please fill in all fields");
        }
        const checkEmail = contacts.find((contact)=>contact.email === email && contact.id !==parseInt(id))
        const checkNumber = contacts.find((contact)=>contact.number === number && contact.id !==parseInt(id))
        if(checkEmail){
            toast.error("This email is already exists");
        } else if(checkNumber){
            toast.error("This number is already exists");
        } else {
            
            const data = {
                id : parseInt(id),
                name: name,
                email: email,
                number: number
            }
            dispatch({type:'UPDATE_CONTACT', payload: data});
            toast.success("Contact updated sucessfully");
            history.push('/');
        }

    }

    const currentContact = contacts.find((contact)=>contact.id === parseInt(id))

    useEffect(() => {
      if(currentContact){
          setName(currentContact.name)
          setEmail(currentContact.email)
          setNumber(currentContact.number)
      }
    }, [currentContact])

    return (
        <div className="container">
            {
                currentContact ? (
                    <div className="row">
                        <h1 className="my-5 text-center display-3">
                            Edit Student {id}
                        </h1>
                    <div className="p-5 mx-auto shadow col-md-6">
                        <form onSubmit={updateStudent}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    placeholder="Name" 
                                    className="form-control"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="form-control"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input 
                                    type="number" 
                                    placeholder="Phone Number" 
                                    className="form-control"
                                    value={number}
                                    onChange={(e)=>setNumber(e.target.value)}
                                />
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="submit" value= "Update Student" className="btn btn-block btn-dark" />
                                <Link to="/" className="ml-3 btn btn-danger">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            ):  <>
                    <h1 className="my-5 text-center display-3">
                            Student  with id {id} doesn't exists 
                    </h1>
                </>
            }
        </div>
    )
}
