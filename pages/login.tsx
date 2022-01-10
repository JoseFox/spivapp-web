import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "../src/components/Button";
import { InputField } from "../src/components/InputField";
import { Wrapper } from "../src/components/Wrapper";
import { useLoginMutation } from "../src/generated/graphql";
import { toErrorMap } from "../src/utils/toErrorMap";

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
  const [_, login] = useLoginMutation();
  const router = useRouter();

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          const response = await login({ options: values });
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user?.id) {
            router.push("/");
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
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Login;
