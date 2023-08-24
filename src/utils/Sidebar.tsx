import React from "react";
import { Link } from "react-router-dom";
import { DesktopOutlined, CreditCardOutlined } from "@ant-design/icons";
import Card from "../components/Card/Card";
import CardEdit from "../components/Card/CardEdit";
import AccountEdit from "../components/Account/AccountEdit";
import Account from "../components/Account/Account";
import { MenuProps } from "antd";

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
  getItem(<Link to="/">Account</Link>, "/", <DesktopOutlined />),
  getItem(<Link to="/card">Card</Link>, "/card", <CreditCardOutlined />),
];

export const items: Array<any> = [
  {
    path: "/",
    component: <Account />,
    key: "/",
  },
  {
    path: "/:id",
    component: <AccountEdit />,
    key: "/:id",
  },
  {
    path: "/locations",
    component: <Card />,
    key: "/locations",
  },
  {
    path: "/locations/:id",
    component: <CardEdit />,
    key: "/locations/:id",
  },
];
