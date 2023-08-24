import React, { useState } from "react";
import { usePingData } from "../../hooks/Ping";
import PingTable from "./PingTable";
import AddPing from "./AddPing";
import { Button } from "antd";

type Data = {
  data?: {
    data: Array<any>;
    count: number | string;
  };
  isLoading?: boolean;
  refetch?: any;
  isFetching?: boolean;
};
const Ping = () => {
  const [skip, setSkip] = useState(0);
  const { data, isLoading, refetch, isFetching }: Data = usePingData("", "");
  const [open, setOpen] = useState(false);
  const onChange = (query: any) => {
    setSkip(10 * (parseInt(query.current) - 1));
  };
  const showModal = () => {
    setOpen(true);
  };
  return (
    <div>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {open && <AddPing refetch={refetch} open={open} setOpen={setOpen} />}
        <Button
          type="primary"
          style={{ marginLeft: "auto" }}
          size={"large"}
          onClick={showModal}
        >
          Add Ping
        </Button>
        <Button size={"large"} style={{ marginLeft: "15px" }} onClick={refetch}>
          Refresh
        </Button>
      </span>

      <PingTable
        data={data?.data}
        onChange={onChange}
        isLoading={isLoading}
        isFetching={isFetching}
        refetch={refetch}
      />
    </div>
  );
};

export default Ping;
