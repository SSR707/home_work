import { Button, message, Table } from "antd";
import { useEffect, useState } from "react";
import { request } from "../config/request";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const [api, contextHolder] = message.useMessage();
  useEffect(() => {
    request.get("/users").then((res) => {
      setData(res.data.users);
    });
  }, [data]);
  const deleteItem = (id) => {
    request
      .delete(`/users/${id}`)
      .then(() => {
        api.success("User successfully deleted!");
      })
      .catch(() => {
        api.error("Failed to delete user!");
      });
  };
  const updateUser = (id) => {
    navigate(`updateUser/${id}`)
  }
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Edit",
      render: (data) => {
        return (
          <div>
            <Button onClick={() => updateUser(data.key)} type="primary" color="danger">
              Edit
            </Button>
          </div>
        );
      },
    },
    {
      title: "Delete",
      render: (data) => {
        return (
          <div>
            <Button
              onClick={() => deleteItem(data.key)}
              type="primary"
              color="danger"
            >
              Delelte
            </Button>
          </div>
        );
      },
    },
  ];
  const dataSource = data.map((item, index) => ({
    key: item._id,
    name: item.name,
    age: item.age,
    email: item.email,
    id: index + 1,
    address: item.address,
  }));
  return (
    <>
      {contextHolder}
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};
