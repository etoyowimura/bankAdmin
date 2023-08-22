import { MenuProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  MessageOutlined,
  HistoryOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  StockOutlined,
  UserOutlined,
  CreditCardOutlined,
  CoffeeOutlined,
  PartitionOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import Device from "../Components/Device/Device";
import DeviceEdit from "../Components/Device/DeviceEdit";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const allMenu: MenuItem[] = [
  getItem(<Link to="/">Device</Link>, "/", <DesktopOutlined />),
  getItem(
    <Link to="/locations">Location</Link>,
    "/locations",
    <WarningOutlined />
  ),
  getItem(<Link to="/users">Users</Link>, "/users", <UserOutlined />),
  getItem(
    <Link to="/admin-card">Card</Link>,
    "/admin-card",
    <CreditCardOutlined />
  ),
  getItem(
    <Link to="/providers">Providers</Link>,
    "/providers",
    <PartitionOutlined />
  ),
  getItem(<Link to="/state">State</Link>, "/state", <CoffeeOutlined />),
  getItem(
    <Link to="/notifications">Notifications</Link>,
    "/notifications",
    <MessageOutlined />
  ),
  getItem(
    <Link to="/admin-business">Business</Link>,
    "/business",
    <StockOutlined />
  ),
  getItem(
    <Link to="/admin-business-users">Business User</Link>,
    "/admin-business-users",
    <TeamOutlined />
  ),
  getItem(
    <Link to="/admin-category">Category</Link>,
    "/admin-category",
    <MenuUnfoldOutlined />
  ),
  getItem(
    <Link to="/admin-history-payment">History</Link>,
    "/admin-history-payment",
    <HistoryOutlined />
  ),
];

export const items: Array<any> = [
  {
    path: "/",
    component: <Device />,
    key: "/",
  },
  {
    path: "/:id",
    component: <DeviceEdit />,
    key: "/:id",
  },
  {
    path: "/locations",
    component: <AdminLocation />,
    key: "/locations",
  },
  {
    path: "/locations/:id",
    component: <LocationEdit />,
    key: "/locations/:id",
  },
];
