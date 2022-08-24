import  React, {Fragment, useState} from "react";
import { Button, Field, Control, Input, Column, Tittle, Help, Label} from 'rbx';
import UserService from "../../../services/users";

const UserEditPassword = ()=>{
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = async(e)=>{
        e.preventDefault()

        if(password == password_confirmation){
            try{
                await UserService.updatePassword({password: password});
                setStatus("Success")
            }catch(err){
                setStatus("error_update")
            }
        }else{
            setStatus("error_confirmation_password")
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Control>
                        <Label className="has-text-grey">Password</Label>
                        <Input  
                            type="password"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            required
                            name="password"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Label className="has-text-grey">Password Confirmation</Label>
                        <Input  
                            type="password"
                            value={password_confirmation}
                            onChange={e=>setPasswordConfirmation(e.target.value)}
                            required
                            name="password"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Column.Group>
                            <Column className="has-text-right">
                                <Button color="custom-purple" outlined>Update password</Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                {status == "error_update" &&
                    <Help color="danger">Problem in password update</Help>
                }
                {status == "error_confirmation_password" &&
                    <Help color="danger">Password don't match</Help>
                }
                {status == "Success" &&
                    <Help color="primary">Updated with success</Help>
                }
            </form>
        </>
    )
}

export default UserEditPassword