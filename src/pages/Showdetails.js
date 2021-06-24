import React, { Component } from 'react';
import { useLocation } from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import { render } from 'react-dom';

function ShowDetail(){
    const location = useLocation();
    const myparam = location.state.params;
    console.log(myparam);
    return(
        <div>
            <h1>Hello Detail Page!!!  </h1>
            <TableContainer component={Paper}>
            <Table
                style={{
                    width: 600,
                }}
                size="small"
             >
            <TableHead>
            <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">
                User Name
            </TableCell>
            <TableCell align="right">
                Phone Number
            </TableCell>
            </TableRow>
            </TableHead>
            {myparam.map((val, key) => {
            return (
                    <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            {val.id}
                        </TableCell>
                        <TableCell align="right">
                            {val.username}
                        </TableCell>
                        <TableCell align="right">
                            {val.phonenumber}
                        </TableCell>
                    </TableRow>
                    </TableBody>            
                
            );
            })}
        </Table>  
        </TableContainer>
        </div>
    )
}
export default ShowDetail;
 
