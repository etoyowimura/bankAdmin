import instance from "../api";

export const pingController = {
  async read(
    app_version: string | number | undefined,
    companyId: undefined | number | string
  ) {
    const { data }: { data: object } = await instance(
      `ping/?search=${app_version}`
    );
    const getCount = async () => {
      return 0;
    };
    const count = await getCount();

    return { data, count: count };
  },
};
