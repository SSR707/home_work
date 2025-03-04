import { Button, Form, Input, InputNumber, message } from "antd";
import { useCreateUsers } from "./service/mutation/useCreateUser";
import { client } from "../../config/query-client";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

export interface UserFormValues {
  name: string;
  age: number;
  address: string;
  email: string;
}

export const AddUsers: React.FC = () => {
  const [api, contextHolder] = message.useMessage();
  const { mutate, isPending } = useCreateUsers();
  const [form] = Form.useForm<UserFormValues>();
  const variant = Form.useWatch("variant", form);

  const onFinish = async (values: UserFormValues) => {
    mutate(values, {
      onSuccess: () => {
        form.resetFields();
        api.success("User successfully added!");
        client.invalidateQueries({ queryKey: ["users"] });
      },
      onError: () => {
        api.error("Failed to add user!");
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
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
        initialValues={{ variant: "filled" }}
      >
        <Form.Item<UserFormValues>
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please enter your name!" },
            { min: 3, message: "Name must be at least 3 characters!" },
            { max: 50, message: "Name cannot exceed 50 characters!" },
          ]}
        >
          <Input style={{ padding: "10px", width: "100%" }} />
        </Form.Item>

        <Form.Item<UserFormValues>
          label="Age"
          name="age"
          rules={[
            { required: true, message: "Please enter your age!" },
            { type: "number", min: 0, message: "Age must be 0 or more!" },
            { type: "number", max: 120, message: "Age must be 120 or less!" },
          ]}
        >
          <InputNumber style={{ width: "100%", padding: "10px" }} />
        </Form.Item>

        <Form.Item<UserFormValues>
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please enter your address!" }]}
        >
          <Input style={{ width: "100%", padding: "10px" }} />
        </Form.Item>

        <Form.Item<UserFormValues>
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Please enter a valid email address!",
            },
          ]}
        >
          <Input style={{ width: "100%", padding: "10px" }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button
            loading={isPending}
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
