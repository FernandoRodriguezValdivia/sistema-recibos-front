import { useContext } from "react";

import { Button, Form, Input } from "antd";

import { UserContext } from "../context/UserContext";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const PageLogin = () => {
  const { login } = useContext(UserContext);

  const onFinish = (values) => {
    
    login(values);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        padding: 30,
      }}
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Button type="primary" htmlType="submit">
          Iniciar Sesion
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PageLogin;
