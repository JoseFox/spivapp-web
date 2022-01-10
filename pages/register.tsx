import React from "react";
import { Form, Formik } from "formik";
import { Wrapper } from "../src/components/Wrapper";
import { InputField } from "../src/components/InputField";
import { Button } from "../src/components/Button";
import { useRegisterMutation } from "../src/generated/graphql";
import { toErrorMap } from "../src/utils/toErrorMap";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          const response = await register(values);
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              className="mb-2"
              name="username"
              placeholder="username"
              label="Username"
            />
            <InputField
              type="password"
              name="password"
              placeholder="password"
              label="Password"
            />
            <Button isLoading={isSubmitting} type="submit">
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
