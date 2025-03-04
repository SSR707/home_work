import React from "react";
import { Button, Table } from "antd";
import type { TableProps } from "antd";
import { useGetUsers } from "./service/query/useGetUsers";
import { useDeleteUsers } from "./service/mutetion/useDeleteUsers";
import { client } from "../../config/query-client";
import { useNavigate } from "react-router-dom";

interface DataType {
  id: string;
  name: string;
  key: string;
  age: number;
  address: string;
  email: string;
}

export const Home: React.FC = () => {
  const { data, isLoading, error } = useGetUsers();
  const { mutate, isPending } = useDeleteUsers();
  const navigate = useNavigate();
  const deleteUsers = (id: string) => {
    mutate(id, {
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ["users"] });
      },
    });
  };
  const updateUser = (id: string) => {
    navigate(`updateUser/${id}`);
  };
  const columns: TableProps<DataType>["columns"] = [
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
            <Button
              onClick={() => updateUser(data.key)}
              type="primary"
              color="danger"
            >
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
              disabled={isPending}
              onClick={() => {
                deleteUsers(data.key);
              }}
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
  const dataSource: DataType[] = data?.users
    ? data.users.map((item, index) => ({
        key: item._id,
        name: item.name,
        age: item.age,
        email: item.email,
        id: index + 1,
        address: item.address,
      }))
    : [];
  return (
    <>
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        loading={isLoading}
      />
    </>
  );
};
