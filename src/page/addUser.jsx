import { Button, Form, Input, InputNumber, message } from "antd";
import { request } from "../config/request";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
export const AddUsers = () => {
  const [api, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const variant = Form.useWatch("variant", form);
  const onFinish = async (values) => {
    try {
      const response = await request.post("/users", values);
      if (response.status === 201) {
        api.success("User successfully added!");
        form.resetFields();
      } else {
        api.error("Something went wrong!");
      }
    } catch (error) {
      api.error("Failed to add user!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {contextHolder}
      <Form
        {...formItemLayout}
        form={form}
        variant={variant || "outlined"}
        onFinish={onFinish}
        style={{
          maxWidth: 600,
          width: "100%",
          marginTop: "50px",
          textAlign: "center",
        }}
        initialValues={{
          variant: "filled",
        }}
      >
        <Form.Item
          label="name"
          name="name"
          rules={[
            { required: true, message: "Please enter your name!" },
            { min: 3, message: "Name must be at least 3 characters!" },
            { max: 50, message: "Name cannot exceed 50 characters!" },
          ]}
        >
          <Input
            variant="outlined"
            style={{ padding: "10px", width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          label="age"
          name="age"
          rules={[
            { required: true, message: "Please enter your age!" },
            { type: "number", min: 0, message: "Age must be 0 or more!" },
            { type: "number", max: 120, message: "Age must be 120 or less!" },
          ]}
        >
          <InputNumber
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
        </Form.Item>

        <Form.Item
          label="address"
          name="address"
          rules={[{ required: true, message: "Please enter your address!" }]}
        >
          <Input
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Please enter a valid email address!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button
            style={{ padding: "20px 50px", marginRight: "40px" }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
