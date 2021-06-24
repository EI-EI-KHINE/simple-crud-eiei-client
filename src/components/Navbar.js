import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
// import {useHistory} from 'react-router-dom';
// import ShareLink from 'react-facebook-share-link';
// const useState = useHistory();
// import ReorderIcon from '@material-ui/icons/Reorder';
// import SearchIcon from '@material-ui/icons/Search';

// const selectedStyle = {
//     color: "white",
//     fontSize: "25px",
//     marginLeft: "15px"
//  }
const Navbar = () => {
    // const[showLinks, setShowLinks] = useState(false);
    return(
        <nav className="Navbar">
            <div className="leftSide">
                <div className="links">
                    {/* <NavLink to ="/home">Home</NavLink> */}
                    <NavLink to ="/Facebook">Facebook</NavLink>
                    {/* <ShareLink link='https://your-site.com/some-page'>
        {link => (
            <a href={link} target='_blank'>Share this on Facebook</a>
        )}
  </ShareLink> */}
                    <NavLink to ="/about">About</NavLink>
                    <NavLink to ="/contact">Contact</NavLink>
                    <NavLink to ="/create">Create</NavLink>
                </div>
            </div>
             <div className="rightSide">
              <Button variant="outline-light" onClick={event =>  window.location.href='/login'} >
                 <span>Sign in</span>
                 </Button>
                 <Button variant="outline-light" onClick={event =>  window.location.href='/register'}>Register
                 </Button>
                 <input type="text" placeholder="Search.."/>
                 <Button variant="outline-light">Search</Button>
            </div>

        </nav>
    )
}
export default Navbar;