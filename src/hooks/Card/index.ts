import { useQuery } from "react-query";
import { cardController } from "../../services/layout//cardController";

export const useCardData = (
  name: any,
  companyId: undefined | number | string
): object => {
  return useQuery(
    [`admin/card${name}`, name, companyId],
    () => cardController.read(name, companyId),
    { refetchOnWindowFocus: false }
  );
};

export const useCardCompanyOne = (
  companyId: number | string | undefined
): any => {
  return useQuery(
    [`admin-card/${companyId || "all"}`, companyId],
    () => cardController.cardCompanyOne(companyId),
    { refetchOnWindowFocus: false }
  );
};

export const useCardOneData = (companyId: number | string | undefined): any => {
  return useQuery(
    [`admin/cardOne/${companyId || "all"}`, companyId],
    () => cardController.cardCompanyOne(companyId),
    { refetchOnWindowFocus: false }
  );
};

export const useFindCard = async (query: string) => {
  return await cardController.cardFinderId(query);
};
