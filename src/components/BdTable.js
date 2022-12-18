import Table from 'react-bootstrap/Table';
import './DeleteButton';
import  api from '../helpers/api';
import { useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';
function BdTable() {

    const dispatch = useDispatch();
    const [data , setData]=useState([]);
    useEffect (()=> {
        api.get("/getAll")
        .then (response => {
            setData(response.data);
        }).catch( (err) => {
            console.log ("fetchall error");
        });
    },[]);
  return (

    <Table striped bordered hover>
          <thead>
            <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>file_name</th>
              <th >view the file</th>
              <th >Delete</th>

          </thead>
          <tbody>
            {data.map ((Row) =>(
                    <tr> 
                    <td>{Row.fileId}</td>
                    <td>{Row.firstName}</td>
                    <td>{Row.lastName}</td>
                    <td>{Row.fileName}</td>
                    <td button type="button" onClick={handleClick}>view file</td> 
                    <td button type="button" onClick={handleDelete}>Delete</td>
               </tr>


            ) )}
                
            </tbody>
        </Table>
  );
}


export default BdTable;