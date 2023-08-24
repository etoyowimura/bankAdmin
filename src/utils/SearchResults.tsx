import { useFindCard } from "../hooks/Card/index";
import { useFindAccount } from "../hooks/Account/index";

type MyStructure = any;

export const SearchForCard = async (query: string) => {
  const data: MyStructure = await useFindCard(query);
  const dataArray = Array.from(data.data);
  const dataFor = [{ id: " ", card: "All dispatcher" }, ...dataArray];
  return dataFor?.map((el: any) => {
    const category = `${el.card}`;
    return {
      valId: el.card,
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
          <span> Card: {el.card}</span>
        </div>
      ),
    };
  });
};

export const SearchForAccount = async (query: string) => {
  const data: MyStructure = await useFindAccount(query);
  const dataArray = Array.from(data.data);
  const dataFor = [{ id: " ", account: "All dispatcher" }, ...dataArray];
  return dataFor?.map((el: any) => {
    const category = `${el.account}`;
    return {
      valId: el.account,
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
          <span> Account: {el.account}</span>
        </div>
      ),
    };
  });
};
