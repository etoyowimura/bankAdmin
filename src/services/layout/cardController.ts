import instance from "../api";
import { message } from "antd";

export const cardController = {
  async read(
    app_version: string | number | undefined,
    companyId: undefined | number | string
  ) {
    const { data }: { data: object } = await instance(
      `card/all?search=${app_version}`
    );
    const getCount = async () => {
      return 0;
    };
    const count = await getCount();

    return { data, count: count };
  },

  async cardCompanyOne(card_id: string | number | undefined) {
    const { data }: { data: any } = await instance(`card/${card_id}`);
    return data;
  },

  async cardPatch(companyData: any, card_id: string | number) {
    const key = "updatable";
    message.loading({ content: "Loading...", key });
    const { data }: { data: any } = await instance(`card/${card_id}`, {
      method: "PUT",
      data: companyData,
    }).then((u) => {
      setTimeout(() => {
        message.success({ content: "Loaded!", key, duration: 2 });
      }, 1000);
      return u;
    });
    return data;
  },

  async addCardController(companyId: any) {
    message.loading({ content: "Loading...", key: companyId });
    const { data } = await instance("/admin/devices/", {
      method: "POST",
      data: {
        ...companyId,
      },
    }).then((u) => {
      setTimeout(() => {
        message.success({ content: "Loaded!", key: companyId, duration: 2 });
      }, 1000);
      return u;
    });
    return data;
  },

  async deleteCardController(card_id: number | string) {
    message.loading({ content: "Loading...", key: card_id });
    let res;
    let error = "";
    try {
      const { data } = await instance(`/card/${card_id}`, {
        method: "DELETE",
      }).then((u) => {
        setTimeout(() => {
          message.success({ content: "Deleted!", key: card_id, duration: 2 });
        }, 1000);
        return u;
      });
      res = data;
    } catch (err) {
      error = "Oops something went wrong!";
    }
    return { data: res, error };
  },
  async cardFinderId(model: string) {
    const { data }: { data: Array<any> } = await instance(
      `card?search=${model}`
    );
    return data;
  },
};
