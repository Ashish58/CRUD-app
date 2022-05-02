import { useState,useEffect } from "react";
import { FormControl,FormGroup, InputLabel,Input,Typography,Button,styled } from "@mui/material";
import {getUser,editUser} from '../service/api';
import { useNavigate,useParams } from "react-router-dom";

const Container=styled(FormGroup)`
    width:50%;
    margin:5% auto;
    & > div{
        margin-top:20px;
    }
`;

const initialValues={
    name:'',
    username:'',
    email:'',
    phone:''
}


const EditUser =()=>{

const[user,setUser]=useState(initialValues);
const navigate=useNavigate();
const {id} = useParams();

useEffect(()=> {
    getUserData();
},[])

const getUserData= async() =>{
    let response = await getUser(id);
    setUser(response.data);
}

const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user);

}

const addUserDetails= async ()=>{
 await editUser(user,id);
 navigate('/alluser');
}
    return(
        <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
            <InputLabel>Name:</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Username:</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email:</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone no:</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button onClick={()=>addUserDetails()} variant="contained">
               Edit user 
            </Button>
        </FormControl>
        </Container>
    )
}
export default EditUser;