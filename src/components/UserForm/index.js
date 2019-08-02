import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/UseInputValue";
import { Error, Form, Input, Button, Title } from "./styles";

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} type="text" placeholder="Email" {...email} />
        <Input
          disabled={disabled}
          type="password"
          placeholder="Password"
          {...password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  );
};
