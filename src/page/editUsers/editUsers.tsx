import { Button, Form, Input, InputNumber, message } from "antd";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useGetUsersById } from "./service/query/useGetUserByID";
import { useEditUsers } from "./service/mutation/useEditUsers";
import { client } from "../../config/query-client";

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
};

export interface UserFormValues {
  name: string;
  age: number;
  address: string;
  email: string;
}

export const UpdateUsers: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  const [api, contextHolder] = message.useMessage();
  const [form] = Form.useForm<UserFormValues>();
  const variant = Form.useWatch("variant", form);
  const { data, isLoading } = useGetUsersById(id as string);
  const { mutate, isPending } = useEditUsers();

  const onFinish = async (values: UserFormValues) => {
    mutate(
      { id, data: values },
      {
        onSuccess: () => {
          form.resetFields();
          api.success("User successfully updated!");
          client.invalidateQueries({ queryKey: ["users"] });
          navigate("/");
        },
        onError: () => {
          api.error("Failed to add user!");
        },
      }
    );
  };

  useEffect(() => {
    if (data?.users) {
      form.setFieldsValue(data.users);
    }
  }, [data, form]);

  return (
    <>
      <div style={{ display: "flex", gap: "230px" }}>
        {" "}
        <Button
          shape="circle"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
        />
        <h1>Edit Task</h1>
      </div>
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
              { message: "Please enter your name!" },
              { min: 3, message: "Name must be at least 3 characters!" },
              { max: 50, message: "Name cannot exceed 50 characters!" },
            ]}
          >
            <Input style={{ padding: "10px", width: "100%" }} />
          </Form.Item>

          <Form.Item<UserFormValues> label="Age" name="age">
            <InputNumber style={{ width: "100%", padding: "10px" }} />
          </Form.Item>

          <Form.Item<UserFormValues>
            label="Address"
            name="address"
            rules={[{ message: "Please enter your address!" }]}
          >
            <Input style={{ width: "100%", padding: "10px" }} />
          </Form.Item>

          <Form.Item<UserFormValues>
            label="Email"
            name="email"
            rules={[
              { message: "Please enter your email!" },
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
    </>
  );
};
