import { useEffect,useState } from "react";
import { Table,TableBody, TableHead, TableRow,TableCell,styled } from "@mui/material";
import {getUsers} from '../service/api';



const StyledTable=styled(Table)`
    width:90%;
    margin:50px auto 0 auto;
`;

const Thead=styled(TableRow)`
background: #000;
& > th{
    color:white;
    font-size:20px;
}
}
`

const Tbody=styled(TableRow)`
    & > td{
    font-size:20px;
}

`;


const AllUser =()=>{

const[users,setUsers]=useState([]);

 useEffect(() =>{
     getUsersDetails();
 },[])


 const getUsersDetails=async() =>{
     let response=await getUsers();
     console.log(response);
     setUsers(response.data);
 }

    return(
        <StyledTable>
            <TableHead>
            <Thead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Usename</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
            {
                users.map(user =>(
                    <Tbody>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                    </Tbody>
                ))
            }
            </TableBody>
        </StyledTable>
    )
}
export default AllUser;