import React from "react";
import { Button, Modal, Space, Spin, Table, Tag } from "antd";
import { Link } from "react-router-dom";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { pingController } from "../../services/layout/ping";
import moment from "moment";

const { confirm } = Modal;

type numStr = string | number;

interface pingSource {
  no: numStr;
  app_version: numStr;
  ping_info: numStr;
  fcm_token: numStr;
  created_at: numStr;
  is_active: boolean;
  user_id: numStr;
  model: numStr;
  action: { id: numStr };
  key: React.Key;
}

const PingTable = ({
  data = [],
  onChange,
  isLoading,
  isFetching,
  refetch,
}: {
  data: any | undefined;
  onChange(current: any): void;
  isLoading: boolean | undefined;
  isFetching: boolean | undefined;
  refetch(): void;
}) => {
  console.log(data);
  // debugger;
  const columns: object[] = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "app_version",
      dataIndex: "app_version",
      key: "app_version",
    },
    {
      title: "ping_info",
      dataIndex: "ping_info",
      key: "ping_info",
    },
    {
      title: "fcm_token",
      dataIndex: "fcm_token",
      key: "fcm_token",
    },
    {
      title: "created_at",
      dataIndex: "created_at",
      key: "created_at",
    },
    // {
    //   title: "user_id",
    //   dataIndex: "user_id",
    //   key: "user_id",
    // },
    {
      title: "model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Is Active",
      dataIndex: "is_active",
      key: "is_active",
      render: (tag: boolean) => (
        <Tag color={tag ? "geekblue" : "red"}>{tag ? "True" : "False"}</Tag>
      ),
      filters: [
        {
          text: "True",
          value: true,
        },
        {
          text: "False",
          value: false,
        },
      ],
      onFilter: (value: any, record: any) => {
        return record.is_active === value;
      },
    },
  ];
  return (
    <div>
      <Spin size="large" spinning={isLoading || isFetching}>
        <Table
          onChange={onChange}
          dataSource={data?.data?.map((u: any, i: number): pingSource => {
            let createCr = u.created_at;
            const obj: pingSource = {
              no: i + 1,
              app_version: u?.app_version,
              ping_info: u?.ping_info,
              fcm_token: u?.fcm_token,
              created_at: createCr
                ? moment(createCr).format("YYYY-MM-DD, h:mm:ss a")
                : "",
              user_id: u?.user_id,
              model: u.model,
              is_active: u.is_active,
              action: { id: u.id },
              key: u.id,
            };
            return obj;
          })}
          columns={columns}
        />
      </Spin>
    </div>
  );
};

export default PingTable;
