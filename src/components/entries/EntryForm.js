import { useContext, useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import LoadingSpinner from "../UI/LoadingSpinner";
import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hooks/http-hook";
import { useForm } from "../../hooks/form-hook";
import Input from "../FormElements/Input";
import Button from "../FormElements/Button";
import Select from "../FormElements/Select";
import { VALIDATOR_REQUIRE } from "../../util/validators";
import "./EntryForm.css";
import { REACT_APP_BACKEND_URL } from "../../constants/env";

const EntryForm = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      type: {
        value: "Canabis",
        isValid: true,
      },
      amount: {
        value: "",
        isValid: false,
      },
      price: {
        value: "",
        isValid: false,
      }
    },
    false
  );

  const entrySubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        REACT_APP_BACKEND_URL + "/entries",
        "POST",
        JSON.stringify({
          type: formState.inputs.type.value,
          price: formState.inputs.price.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(responseData);
    } catch (err) {}
  };

  const onOptionChangeHandler = (event) => {
    setFormData(
      {
        ...formState.inputs,
        type: {
          value: event.target.value,
          isValid: event.target.value ? true : false,
        },
        price: {
          value: formState.inputs.amount.value,
          isValid: formState.inputs.amount.value ? true : false,
        },
        price: {
          value: formState.inputs.price.value,
          isValid: formState.inputs.price.value ? true : false,
        },
      },
      formState.inputs.type.isValid && formState.inputs.price.isValid
    );
  };
  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Add entry</h2>
        <hr />
        <form onSubmit={entrySubmitHandler}>
          <div className="form-elements">
            <div className="form-element__item">
              <Select
                htmlFor="type"
                onOptionChangeHandler={onOptionChangeHandler}
                value="Ketamine"
              />
            </div>
            <div className="form-element__item">
              <Input
                element="input"
                id="amount"
                type="number"
                label="Amount"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid value."
                onInput={inputHandler}
              />
            </div>
            <div className="form-element__item">
              <Input
                element="input"
                id="price"
                type="number"
                label="Price"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid value."
                onInput={inputHandler}
              />
            </div>
          </div>

          <Button type="submit" disabled={!formState.isValid}>
            Add new entry
          </Button>
        </form>
      </Card>
    </>
  );
};

export default EntryForm;
