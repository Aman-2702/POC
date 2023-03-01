import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './Preview.css'
import { Context } from "./Context";

const Preview = () => {

  const { items, setItems } = useContext(Context);

  const { items_cont, setitems_cont } = useContext(Context)
  const { items_state, setitems_state } = useContext(Context)
  const { items_city, setitems_city } = useContext(Context)
  const { items_add, setitems_add } = useContext(Context)
  //For the previous page

  let navigate = useNavigate();
  const onChangeHandle = () => {
    navigate('/Address')
  }
  //Sending Data in DB on submit

  const onSubmitHandler = async () => {
    setItems('')
    setitems_add('')
    navigate('/')
    swal({
      title: "Success!",
      text: "You registered Successfully",
      icon: "success"
    });

    const data = {
      "name": items.firstname,
      "email": items.email,
      "dob": items.dob,
      "username": items.username,
      "password": items.password,
      "Address": items_add,
      "country": items_cont,
      "State": items_state,
      "city": items_city
    }

    const res = await fetch('http://localhost:4002/post', {
      method: 'POST',
      body: JSON.stringify(data),

      headers: {
        'Content-Type': 'application/json'
      },
    });

    return res.json()
  }

  return (
    <div>

      <div><h2>Details Of User</h2></div>

      <div class="row">
        <div class="col-md-6">
          <span>Name:</span>
        </div>
        <div class="col-md-6">
          <span>{items.firstname}</span>
        </div >
      </div>
      <div class="row">
        <div class="col-md-6">
          <span>Email:</span>
        </div>
        <div class="col-md-6">
          <span>{items.email}</span>
        </div >
      </div>
      <div class="row">
        <div class="col-md-6">
          <span>Date of Birth:</span>
        </div>
        <div class="col-md-6">
          <span>{items.dob}</span>
        </div >
      </div>
      <div class="row">
        <div class="col-md-6">
          <span>Username:</span>
        </div>
        <div class="col-md-6">
          <span>{items.username}</span>
        </div >
      </div>
      <div class="row">
        <div class="col-md-6">
          <span>Address:</span>
        </div>
        <div class="col-md-6">
          <span>{ items_add}</span>
        </div >
      </div>
      <div class="row">
        <div class="col-md-6">
          <span>Country:</span>
        </div>
        <div class="col-md-6">
          <span>{items_cont}</span>
        </div >
      </div>
      <div class="row">
        <div class="col-md-6">
          <span>State:</span>
        </div>
        <div class="col-md-6">
          <span>{items_state}</span>
        </div >
      </div>
      <div class="row">
        <div class="col-md-6">
          <span>City:</span>
        </div>
        <div class="col-md-6">
          <span>{items_city}</span>
        </div >
      </div>

      <div className="btncls">
        <button type='button' className="btn btn-primary btn-lg float-right" onClick={onChangeHandle}>Previous</button>
        <button type='button' className="btn btn-success btn-lg float-right " onClick={onSubmitHandler}>Submit</button>
      </div>
    </div >
  )
}

export default Preview
