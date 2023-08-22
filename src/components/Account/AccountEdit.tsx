import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAccountCompanyOne } from "../../Hooks/Account";
import {
  Form,
  Spin,
  Watermark,
  Space,
  Tabs,
  Row,
  Col,
  Input,
  Button,
  Switch,
} from "antd";
import { accountController } from "../../services/layout/accountController";
import { AppleOutlined } from "@ant-design/icons";
import Notfound from "../../utils/Notfound";

const TabPane = Tabs.TabPane;

// type Data = {
//     data?: {
//         data: Array<any>,
//         count: number
//     }
// }
type params = {
  readonly id: any;
};

type MyObjectType = {
  [key: string | number]: any; // Индексная подпись с параметром типа 'string'
};
const AccountEdit = () => {
  const { id } = useParams<params>();
  const { data, refetch, status }: MyObjectType = useAccountCompanyOne(id);
  let navigate = useNavigate();

  const onSubmit = async (value: any) => {
    await accountController.accountPatch(value, id);
    refetch();
    navigate(-1);
  };
  return (
    <div>
      <Spin size="large" spinning={!data}>
        <Watermark style={{ height: "100%" }}>
          {status === "loading" ? (
            <Spin size="large" spinning={!data} />
          ) : data ? (
            <Spin size="large" spinning={!data}>
              <Space
                direction="vertical"
                size="middle"
                style={{ display: "flex" }}
              >
                <Tabs defaultActiveKey="1">
                  <TabPane
                    tab={
                      <span>
                        <AppleOutlined />
                        MAIN FIELDS
                      </span>
                    }
                    key="1"
                  >
                    <Space
                      direction="vertical"
                      size="middle"
                      style={{ display: "flex" }}
                    >
                      <Form
                        name="basic"
                        layout="vertical"
                        wrapperCol={{ span: 16 }}
                        initialValues={{ ...data }}
                        onFinish={onSubmit}
                        autoComplete="off"
                      >
                        <Row gutter={[16, 10]}>
                          <Col span={6}>
                            <Form.Item
                              wrapperCol={{ span: "100%" }}
                              label="app_version"
                              name="app_version"
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          {/*<Col span={6}>*/}
                          {/*    <Form.Item*/}
                          {/*        wrapperCol={{span: '100%'}}*/}
                          {/*        label="config"*/}
                          {/*        name="config"*/}
                          {/*    >*/}
                          {/*        <Input/>*/}
                          {/*    </Form.Item>*/}
                          {/*</Col>*/}
                          <Col span={6}>
                            <Form.Item
                              wrapperCol={{ span: "100%" }}
                              label="account_info"
                              name="account_info"
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={6}>
                            <Form.Item
                              wrapperCol={{ span: "100%" }}
                              label="fcm_token"
                              name="fcm_token"
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={[16, 10]}>
                          <Col span={6}>
                            <Form.Item
                              wrapperCol={{ span: "100%" }}
                              label="model"
                              name="model"
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={6}>
                            <Form.Item
                              wrapperCol={{ span: "100%" }}
                              label="one_signal_user_id"
                              name="one_signal_user_id"
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                          <Col span={6}>
                            <Form.Item
                              wrapperCol={{ span: "100%" }}
                              label="user_id"
                              name="user_id"
                            >
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={[16, 10]}>
                          <Col span={6}>
                            <Form.Item
                              wrapperCol={{ span: "100%" }}
                              label="is_active"
                              name="is_active"
                            >
                              <Switch defaultChecked={data?.is_active} />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Form.Item>
                          <Button type="primary" htmlType="submit">
                            Submit
                          </Button>
                        </Form.Item>
                      </Form>
                    </Space>
                  </TabPane>
                </Tabs>
              </Space>
            </Spin>
          ) : (
            <Notfound />
          )}
        </Watermark>
      </Spin>
    </div>
  );
};

export default AccountEdit;
