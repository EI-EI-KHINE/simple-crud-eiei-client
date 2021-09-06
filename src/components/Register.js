import React, { Component } from 'react';
import Axios from 'axios';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Register() 
{
    const [username, setUserName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [emailaddress, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [option,setOption] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
        
    // handleChange(event){
    //     console.log("handle change", event);
    //     console.log(event.target.value);
    //     this.setState({
    //         [event.target.name] : event.target.value
    //     });

    // }
    // handleSubmit(event) {
    //     const{ username,email,password,confirmPassword } = this.state;
    //     Axios.post('http://localhost:3001/register',{
    //         users: {
    //             username: username,
    //             email: email,
    //             password: password,
    //             confirmPassword: confirmPassword
    //         }
    //     },
    //     {
    //         withCredentials: true }
    //     ).then(response => {
    //         console.log('registration res', response);
    //     }).catch(error => {
    //         console.log('registration error', error);
    //     })
    //     console.log("form submitted");
    //     event.preventDefault();
    // }
    const formatedTimestamp = ()=> {
        const d = new Date()
        const date = d.toISOString().split('T')[0];
        const time = d.toTimeString().split(' ')[0].replace(/:/g, '-');
        return `${date} ${time}`
      }
    function handleSubmit()
    {
        let item = {username,phonenumber,emailaddress,password,confirmpassword,option,startDate}
        console.warn(item);
        Axios.post('http://localhost:3001/register',{
            username:username,
            phonenumber:phonenumber,
            emailaddress:emailaddress,
            password:password,
            confirmpassword:confirmpassword,
            option:option,
            startDate:formatedTimestamp(startDate),
        }).then(() =>{
            console.log('success');
        });
        // console.warn(username,phonenumber,emailaddress,password,confirmpassword,option,startDate);
    }
    return (
        <div className="col-sm-6 offset-sm-3">Registeration goes here;
            <form onSubmit={handleSubmit}>
                <header>
                    <h1>New User Register</h1>
                </header>
                <label>User Name</label>
                    <input  type ="text" className="form-control" name="username" placeholder="User Name" onChange={(event) =>{
                setUserName(event.target.value);
                }} required/>
                <label>Phone No</label>
                <input className="form-control" type ="text" className="form-control" name="phonenumber" placeholder="Phone Number" onChange={(event) =>{
                setPhoneNumber(event.target.value);
                }} required/>
                <label>Date of Birth</label>
                <DatePicker className="form-control" dateFormat="yyyy/MM/dd" name="startDate" selected={startDate} onChange={(date) => setStartDate(date)} />
                <label>Email Address</label>
                <input type="email" className="form-control" name="emailaddress" placeholder="Email" onChange={(event) =>{
                setEmail(event.target.value);}} required />
                <label>Password</label>
                <input type ="password" className="form-control" name="password" placeholder="Password" 
                onChange={(event) =>{
                    setPassword(event.target.value);}} required />
                <label>Confirm Password</label>
                <input type ="password" className="form-control" name="confirmpassword" placeholder="ConfirmPassword" onChange={(event) =>{
                setConfirmPassword(event.target.value);}} required />
                <label>Gender</label>
                <select className="form-control" name='option'  onChange={(event) =>{
                    setOption(event.target.value);}} >
                    <option value="1">Male</option>
                    <option value="2">Female</option> 
                </select>
                <Button type="submit">User Register</Button>
            </form>
            
        </div>
    )
}
export default Register;
