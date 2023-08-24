import React, { useState } from "react";
import { useAccountData } from "../../hooks/Account/";
import AccountTable from "./AccountTable";
import AddAccount from "./AddAccount";
import { Button } from "antd";
import SearchOptions from "../../utils/SearchOptions";
import { SearchForAccount } from "../../utils/SearchResults";

type Data = {
  data?: {
    data: Array<any>;
    count: number | string;
  };
  isLoading?: boolean;
  refetch?: any;
  isFetching?: boolean;
};
const Account = () => {
  const [skip, setSkip] = useState(0);
  const [appVersion, setAppVersion] = useState<string | number | undefined>("");
  const [companyId, setCompanyId] = useState<undefined | number | string>("");
  const { data, isLoading, refetch, isFetching }: Data = useAccountData(
    appVersion,
    companyId
  );
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
        {open && <AddAccount refetch={refetch} open={open} setOpen={setOpen} />}
        <SearchOptions
          SearchResult={(query: string) => SearchForAccount(query)}
          onSelect={(value: any, { valId }: { valId: number | string }) => {
            setAppVersion(valId === undefined ? "" : valId);
            if (valId) {
              setSkip(1);
            }
          }}
          placeholder="Models  Search"
        />
        <Button
          type="primary"
          style={{ marginLeft: "auto" }}
          size={"large"}
          onClick={showModal}
        >
          Add Account
        </Button>
        <Button size={"large"} style={{ marginLeft: "15px" }} onClick={refetch}>
          Refresh
        </Button>
      </span>

      <AccountTable
        data={data?.data}
        onChange={onChange}
        isLoading={isLoading}
        isFetching={isFetching}
        refetch={refetch}
      />
    </div>
  );
};

export default Account;
