import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";


// export default class login extends Component {
//     state = {
//         email: '',
//         password: ''
//     }

//     handleChange = e => {
//         const {name,value} = e.target
//         this.setState({[name]:value})
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//         const data = {
//             email: this.email,
//             password: this.password
//         };
//         console.log("works!");
//     };

//     render() {
//         return (
//             <div className="col-sm-6 offset-sm-3">
//                 <form onSubmit={this.handleSubmit} className="information">
//                 </form>
//                 <header>
//                      <h1>Sign In</h1>
//                 </header>
//                 <input className="form-control login" type ="email" placeholder="Email address" onChange={this.handleChange} required/>
//                 <input className="form-control"  type ="password" placeholder="password" onChange={this.handleChange} required/>
//                 <Button onSubmit={this.handleSubmit} class="login" >Login</Button>
//                 <div>
//                    <a href="/forgot-password">Forgot Password?</a>
//                 </div>
                
//             </div>
//         )
//     }
// }

function Login(){
    const [emailaddress, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showStatus, setshowStatus] = useState("");
    const history = useHistory();
    const handleSubmit = () => {
        Axios.post("http://localhost:3001/login",{
           emailaddress: emailaddress,
           password: password,
        }).then((response) => {
            if(response.data.message){
                // setLoginStatus(response.data.message);
            }else{
                Axios.get('http://localhost:3001/showData').then((response) => {
                    // console.log(response.data);
                    history.push(
                        '/showDetail',
                      {
                        params:response.data
                      }  
                    )
                               
                });
            }
        })
    };
    return (
        <div className="col-sm-6 offset-sm-3">
            <form className="information">
                <header>
                    <h1>Sign In</h1>
                </header>
                <input className="form-control login" name= "emailaddress" type ="email" placeholder="Email address" onChange={(event) =>{
                setEmail(event.target.value);}} required/>
                <input className="form-control login"  name="password" type ="password" placeholder="password" onChange={(event) =>{
                setPassword(event.target.value);}}  required/>
                <Button onClick={() => {handleSubmit()}} class="login" >Login</Button>
                <div>
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
                <h1>{showStatus}</h1>
            </form>
        </div>
    );
}
export default Login;

