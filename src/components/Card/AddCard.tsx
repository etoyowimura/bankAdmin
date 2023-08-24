import React from "react";
import { Input, Modal, Form as FormAnt } from "antd";
import { cardController } from "../../services/layout/cardController";

const AddCard = ({
  open,
  setOpen,
  refetch,
}: {
  open: boolean;
  setOpen(open: boolean): void;
  refetch(): void;
}) => {
  const [form] = FormAnt.useForm();

  const handleCancel = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Modal
        open={open}
        title="Create a new card"
        okText="Create"
        cancelText="Cancel"
        onCancel={handleCancel}
        onOk={() => {
          form
            .validateFields()
            .then(async (values) => {
              form.resetFields();
              await cardController.addCardController(values);
              console.log(values);
              setOpen(!open);
              refetch();
            })
            .catch((info) => {
              refetch();
            });
        }}
      >
        <FormAnt
          form={form}
          layout="horizontal"
          name="form_in_modal"
          initialValues={{ modifier: "public" }}
        >
          <FormAnt.Item
            label="app_version"
            name="app_version"
            rules={[
              { required: true, message: "Please enter your androidVersion!" },
            ]}
          >
            <Input />
          </FormAnt.Item>
          <FormAnt.Item
            label="device_info"
            name="device_info"
            rules={[
              { required: true, message: "Please enter your device info!" },
            ]}
          >
            <Input />
          </FormAnt.Item>
          <FormAnt.Item
            label="fcm_token"
            name="fcm_token"
            rules={[
              { required: true, message: "Please input your fcm token!" },
            ]}
          >
            <Input />
          </FormAnt.Item>
          <FormAnt.Item
            label="model"
            name="model"
            rules={[{ required: true, message: "Please input your model!" }]}
          >
            <Input />
          </FormAnt.Item>
          <FormAnt.Item
            label="config"
            name="config"
            rules={[{ required: true, message: "Please input your config!" }]}
          >
            <Input />
          </FormAnt.Item>
        </FormAnt>
      </Modal>
    </div>
  );
};

export default AddCard;
