import React from "react";
import { Button, Modal, Space, Spin, Table, Tag } from "antd";
import { Link } from "react-router-dom";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { cardController } from "../../services/layout/cardController";
import moment from "moment";

const { confirm } = Modal;

type numStr = string | number;

interface cardSource {
  no: numStr;
  app_version: numStr;
  card_info: numStr;
  fcm_token: numStr;
  created_at: numStr;
  is_active: boolean;
  user_id: numStr;
  model: numStr;
  action: { id: numStr };
  key: React.Key;
}

const CardTable = ({
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
      title: "card_info",
      dataIndex: "card_info",
      key: "card_info",
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
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: ({
        id,
        queryClient,
      }: {
        id: string | number;
        queryClient: any;
      }) => {
        const showConfirm = () => {
          confirm({
            title: "Card",
            icon: <ExclamationCircleFilled />,
            content: "Do you want to delete this card ?",
            onOk: async () => {
              return new Promise(async (resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                await cardController.deleteCardController(id);
                refetch();
              }).catch(() => {
                refetch();
              });
            },
            onCancel() {},
          });
        };
        return (
          <Space>
            <Link to={`${id}`}>
              <Button>Edit</Button>
            </Link>
            <Button onClick={showConfirm}>Delete</Button>
          </Space>
        );
      },
    },
  ];
  return (
    <div>
      <Spin size="large" spinning={isLoading || isFetching}>
        <Table
          onChange={onChange}
          dataSource={data?.data?.map((u: any, i: number): cardSource => {
            let createCr = u.created_at;
            const obj: cardSource = {
              no: i + 1,
              app_version: u?.app_version,
              card_info: u?.card_info,
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

export default CardTable;
