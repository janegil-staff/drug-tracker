import { useForm } from "../../hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../util/validators";
import Button from "../FormElements/Button";
import Input from "../FormElements/Input";
import Card from "../UI/Card";

import "./SignUp.css";
const SignUp = (props) => {
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

    const authSubmitHandler = async event => {
      event.preventDefault();
      console.log(formState);


    }

  return (
    <Card className="authentication">
      <h2>Sign up</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          element="input"
          id="name"
          type="text"
          label="Your Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a name."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password, at least 6 characters."
          onInput={inputHandler}
        />
          <Button type="submit" disabled={!formState.isValid}>
            SIGNUP
          </Button>
      </form>
    </Card>
  );
};

export default SignUp;
