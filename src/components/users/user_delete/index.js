import React,{useState} from 'react';
import { Button} from 'rbx';
import UserService from "../../../services/users"
import  {Navigate} from 'react-router-dom';

function UserDelete(){
    const [redirectToHome, setRedirectToHome] = useState('');



    const deleteUser = async ()=>{
        if(window.confirm('Are you sure you want to delete your account?')){
            UserService.delete()
            setRedirectToHome(true)
        }
    }

    if(redirectToHome == true){
        return <Navigate to={{pathname: "/"}}/>
    }

    return(
        <>
            <Button color="danger" onClick={()=> deleteUser()}>Delete Account</Button>
        </>
    )
}

export default UserDelete