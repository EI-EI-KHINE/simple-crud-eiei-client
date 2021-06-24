// import '../App.css';
import {useState} from 'react';
import Axios from 'axios';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Alert from 'react-bootstrap/Alert';


function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(true);

  const [employeeList,setEmployeeList] = useState([]);

  const addEmployee = () => {
    // console.log(name);
    Axios.post('http://localhost:3001/create',{
      name:name,
      age:age,
      country:country,
      position:position,
      wage:wage,
    }).then(() =>{
      // console.log('success');
      setEmployeeList([
        ...employeeList,
        {
          name:name,
          age:age,
          country:country,
          position:position,
          wage:wage,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      // console.log(response);
      setEmployeeList(response.data);
    });
  }

  const updateEmployeeWage = (id) => {
    Axios.put('http://localhost:3001/update',{wage: newWage,id: id}).then((response) => {
      // console.log(response);
      // alert('update');
      setEmployeeList(employeeList.map((val) => {
        return val.id == id ? {id: val.id,name: val.name,age: val.age,country: val.country,position: val.position,wage: newWage}:val
      }))
    });
  }

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(employeeList.filter((val) => {
        return val.id != id;
      }));
    });
  }

  // const displayInfo = () => {
  //   console.log(name + age + country + position + wage);
  // };

    return (
      <div className="App">
        <div className="information">
          <label>Name:</label>
          <input 
            type ="text" 
            onChange={(event) =>{
              setName(event.target.value);
            }}
          />
          <label>Age:</label>
          <input 
            type ="number"
            onChange={(event) =>{
              setAge(event.target.value);
            }}
          />
          <label>Country:</label>
          <input
            type ="text"
            onChange={(event) =>{
              setCountry(event.target.value);
            }}
          />
          <label>Position:</label>
          <input 
            type ="text"
            onChange={(event) =>{
              setPosition(event.target.value);
            }}
          />
          <label>Wage(Year):</label>
          <input 
            type ="number"
            onChange={(event) =>{
              setWage(event.target.value);
            }}
          />
          {/* <Form>
            <Form.Group>
                <Form.label>Email Address</Form.label>
                <Form.Control type="email" placeholder="Example@email.com"/>
                <Form.Text className="text-muted">
                    We'll never share you email address,trust us!
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.label>Password</Form.label>
                <Form.Control type="password" placeholder="Password"/>
                <Button variant="secondary" type="submit">Login 
                </Button>
            </Form.Group>
          </Form> */}
{/*           
          <Card className="mb-3" style={{color: "#000" }}>
              <Card.Img src="https://picsum.photos/200/100">
                <Card.Body>
                    <Card.Title>
                        Card Example
                    </Card.Title>
                    <Card.Text>
                        This is example of react bootstrap cards
                    </Card.Text>
                    <Button variant="primary">Read More
                    </Button>
                </Card.Body>
              </Card.Img>
          </Card> */}
          {/* <Breadcrumb>
            <Breadcrumb.Item>Test 1</Breadcrumb.Item>
            <Breadcrumb.Item>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="success">This is a button</Alert> */}
          <Button variant="outline-primary" onClick={addEmployee}>Add Employee</Button>
        </div>
        <div className="employees">
          <Button  variant="outline-success" onClick={getEmployees}>Show Employees</Button>

          {employeeList.map((val, key) => {
            // return <div>{val.name}</div>
            return(
              <div className="employee">
                <div>
                  <h3>Name: {val.name}</h3>
                  <h3>Age: {val.age}</h3>
                  <h3>Country: {val.country}</h3>
                  <h3>Position: {val.position}</h3>
                  <h3>Wage: {val.wage}</h3>
                </div>
                <div>
                <p>Update Successful</p>
                  <input type="text" placeholder="2000..." 
                    onChange={(event) => {
                      setNewWage(event.target.value);
                    }}
                />
                  <Button variant="outline-info" onClick={()=>{updateEmployeeWage(val.id)}} class="btn">Update</Button>
                  <Button variant="outline-danger" onClick={()=>{deleteEmployee(val.id)}} class="btn">Delete</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        
    );
}

export default Create;
