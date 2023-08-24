import { useQuery } from "react-query";
import { accountController } from "../../services/layout/accountController";

export const useAccountData = (
  name: any,
  companyId: undefined | number | string
): object => {
  return useQuery(
    [`admin/account${name}`, name],
    () => accountController.read(name),
    { refetchOnWindowFocus: false }
  );
};

export const useAccountCompanyOne = (
  companyId: number | string | undefined
): any => {
  return useQuery(
    [`account/${companyId || "all"}`, companyId],
    () => accountController.accountCompanyOne(companyId),
    { refetchOnWindowFocus: false }
  );
};

export const useAccountOneData = (
  companyId: number | string | undefined
): any => {
  return useQuery(
    [`admin/accountOne/${companyId || "all"}`, companyId],
    () => accountController.accountCompanyOne(companyId),
    { refetchOnWindowFocus: false }
  );
};

export const useFindAccount = async (query: string) => {
  return await accountController.accountFinderId(query);
};
