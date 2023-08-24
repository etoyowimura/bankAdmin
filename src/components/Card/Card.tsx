import React, { useState } from "react";
import { useCardData } from "../../hooks/Card/index";
import CardTable from "./CardTable";
import AddCard from "./AddCard";
import { Button } from "antd";
import SearchOptions from "../../utils/SearchOptions";
import { SearchForCard } from "../../utils/SearchResults";

type Data = {
  data?: {
    data: Array<any>;
    count: number | string;
  };
  isLoading?: boolean;
  refetch?: any;
  isFetching?: boolean;
};
const Card = () => {
  const [skip, setSkip] = useState(0);
  const [appVersion, setAppVersion] = useState<string | number | undefined>("");

  const { data, isLoading, refetch, isFetching }: Data = useCardData(
    appVersion,
    ""
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
        {open && <AddCard refetch={refetch} open={open} setOpen={setOpen} />}
        <SearchOptions
          SearchResult={(query: string) => SearchForCard(query)}
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
          Add Card
        </Button>
        <Button size={"large"} style={{ marginLeft: "15px" }} onClick={refetch}>
          Refresh
        </Button>
      </span>

      <CardTable
        data={data?.data}
        onChange={onChange}
        isLoading={isLoading}
        isFetching={isFetching}
        refetch={refetch}
      />
    </div>
  );
};

export default Card;
