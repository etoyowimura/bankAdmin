import { useQuery } from "react-query";
import { locationsController } from "../../API/LayoutApi/adminLocation";

export const useLocationData = (
  name: any,
  companyId: undefined | number | string
): object => {
  return useQuery(
    [`admin/location${name}`, name, companyId],
    () => locationsController.read(name, companyId),
    { refetchOnWindowFocus: false }
  );
};

export const useLocationOneData = (
  companyId: number | string | undefined
): any => {
  return useQuery(
    [`admin/locationOne/${companyId || "all"}`, companyId],
    () => locationsController.locationCompanyOne(companyId),
    { refetchOnWindowFocus: false }
  );
};

export const useFindLocation = async (query: string) => {
  return await locationsController.locationFinderId(query);
};
export const useFindUserAddress = async (query: any) => {
  return await locationsController.UserAddressFinderId(query);
};
