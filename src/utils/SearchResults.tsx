import React from "react";
import { useFindDevice, useFindUserDevice } from "../Hooks/Device";
import { useFindLocation, useFindUserAddress } from "../Hooks/AdminLocation";

type MyStructure = any;

export const SearchForAddress = async (query: string) => {
  const data: MyStructure = await useFindLocation(query);
  const dataArray = Array.from(data.data);
  const dataFor = [{ id: " ", address: "All dispatcher" }, ...dataArray];
  return dataFor?.map((el: any) => {
    const category = `${el.address}`;
    return {
      valId: el.address,
      value: category,
      key: el.id,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          key={el.id}
        >
          <span>Address: {el.address}</span>
        </div>
      ),
    };
  });
};

export const UserSearchForAddress = async (query: string) => {
  const data: MyStructure = await useFindUserAddress(query);
  const dataArray = Array.from(data.data);
  const dataFor = [{ id: " ", address: "User id" }, ...dataArray];
  return dataFor?.map((el: any) => {
    const category = `${el.address}`;
    return {
      valId: el.address,
      value: category,
      key: el.id,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          key={el.id}
        >
          <span>user_id: {el.address}</span>
        </div>
      ),
    };
  });
};

export const SearchResultForDevice = async (query: string) => {
  const data: MyStructure = await useFindDevice(query);
  const dataArray = Array.from(data.data);
  const dataFor = [{ id: "", model: "All Models: " }, ...dataArray];
  return dataFor.map((el: any) => {
    const category = `${el.model}`;
    return {
      valId: el.model,
      value: category,
      key: el.id,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          key={el.id}
        >
          <span>Model: {el.model}</span>
        </div>
      ),
    };
  });
};

export const SearchResultForDeviceId = async (query: string) => {
  const data: MyStructure = await useFindUserDevice(query);
  const dataArray = Array.from(data.data);
  const dataFor = [{ id: "", model: "All app version: " }, ...dataArray];
  return dataFor.map((el: any) => {
    const category = `${el.model}`;
    return {
      valId: el.model,
      value: category,
      key: el.id,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          key={el.id}
        >
          <span>App version: {el.model}</span>
        </div>
      ),
    };
  });
};
