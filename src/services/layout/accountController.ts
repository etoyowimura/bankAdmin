import instance from "../api";
import { message } from "antd";

export const accountController = {
  async read(account_id: string | number | undefined) {
    const { data }: { data: object } = await instance(
      `account/all?search=${account_id}`
    );
    const getCount = async () => {
      return 0;
    };
    const count = await getCount();

    return { data, count: count };
  },

  async accountCompanyOne(account_id: string | number | undefined) {
    const { data }: { data: any } = await instance(`account/${account_id}`);
    return data;
  },

  async accountPatch(companyData: any, account_id: string | number) {
    const key = "updatable";
    message.loading({ content: "Loading...", key });
    const { data }: { data: any } = await instance(`account/${account_id}`, {
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

  async addAccountController(companyId: any) {
    message.loading({ content: "Loading...", key: companyId });
    const { data } = await instance("/account/", {
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

  async deleteAccountController(account_id: number | string) {
    message.loading({ content: "Loading...", key: account_id });
    let res;
    let error = "";
    try {
      const { data } = await instance(`account/${account_id}`, {
        method: "DELETE",
      }).then((u) => {
        setTimeout(() => {
          message.success({
            content: "Deleted!",
            key: account_id,
            duration: 2,
          });
        }, 1000);
        return u;
      });
      res = data;
    } catch (err) {
      error = "Oops something went wrong!";
    }
    return { data: res, error };
  },
  async accountFinderId(account_id: string) {
    const { data }: { data: Array<any> } = await instance(
      `account?search=${account_id}`
    );
    return data;
  },
};
