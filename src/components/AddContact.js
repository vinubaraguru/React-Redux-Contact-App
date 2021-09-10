import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

export const AddContact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector(state => state)
    const dispatch = useDispatch();
    const history = useHistory();

    const sumbitStudent = (e) =>{
        e.preventDefault()

        if(!name || !email || !number){
            toast.warning("Please fill in all fields");
        }
        const checkEmail = contacts.find((contact)=>contact.email === email && email)
        const checkNumber = contacts.find((contact)=>contact.number === number && number)
        if(checkEmail){
            toast.error("This email is already exists");
        } else if(checkNumber){
            toast.error("This number is already exists");
        } else{
            const data = {
                id : contacts[contacts.length - 1].id +1,
                name: name,
                email: email,
                number: number
            }
            dispatch({type:'ADD_CONTACT', payload: data});
            toast.success("Contact added sucessfully");
            history.push('/');
        }
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="my-5 text-center display-3">
                    Add Student
                </h1>
                <div className="p-5 mx-auto shadow col-md-6">
                    <form onSubmit={sumbitStudent}>
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
                            <input type="submit" value= "Add Student" className="btn btn-block btn-dark" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
