import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
// import { useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";
import "./Login.css";
// import { useContext, createContext } from "react";

export default function Login() {
//    const history = useHistory();

    // pull from context: the setter function from the
    // authenticted useState on App.js
    
    const { userHasAuthenticated } = useAppContext();
    // const {userHasAuthenticated} = useContext('snirklozonoifler');

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: ""
    });
    
    function validateForm() {
        return fields.email.length > 0 && fields.password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        setIsLoading(true);

        try {
            await Auth.signIn(fields.email, fields.password);
            userHasAuthenticated(true);
//            history.push('/');
        } catch (e) {
            console.log(e);
            onError(e.message);
            setIsLoading(false);
        }
    }

    return (
            <div className="Login">
            <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
        autoFocus
        type="email"
        value={fields.email}
        onChange={(e) => handleFieldChange}
            />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
        type="password"
        value={fields.password}
        onChange={(e) => handleFieldChange}
            />
            </Form.Group>
            <LoaderButton
        block
        size="lg"
        type="submit"
        isLoading={isLoading}
        disabled={!validateForm()}>
            Login
        </LoaderButton>
            </Form>
            </div>
    );
}


