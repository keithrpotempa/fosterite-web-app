import React, { useEffect, useState } from "react";
import { RegisterForm } from "../../components";
import { userManager, formHandler } from "../../modules";

const Register = (props) => {
  const [formState, setFormState] = useState({});
  const [failedLogin, setFailedLogin] = useState(false);
  const [failedLoginMessage, setFailedLoginMessage] = useState("false");

  const handleFieldChange = (evt) => formHandler.handleFieldChange(evt, formState, setFormState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: formState.username,
      email: formState.email,
      password: formState.password,
      first_name: formState.firstName,
      last_name: formState.lastName,
      looking_to_foster: formState.looking_to_foster,
      phone: formState.phoneNumber,
      street: formState.street,
      city: formState.city,
      state: formState.state,
      zip: formState.zip
    };

    userManager
      .register(user)
      .then((resp) => {
        if ("token" in resp) {
          props.setAuth(resp);
          props.history.push("/");
        }
      })
      // With a 500 HTTP error, no response is given,
      // so the error must be handled with .catch
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
      .catch(() => {
        setFailedLogin(true);
        setFailedLoginMessage(
          "The username you entered is already in use, please try again."
        );
      });
  };

  useEffect(() => {}, [failedLogin]);

  return (
    <div className="register-form-view">
      <RegisterForm
        handleFieldChange={handleFieldChange}
        failedLogin={failedLogin}
        failedLoginMessage={failedLoginMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Register;
