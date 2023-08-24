import { useQuery } from "react-query";
import { pingController } from "../../services/layout/ping";

export const usePingData = (
  name: any,
  companyId: undefined | number | string
): object => {
  return useQuery(
    [`admin/ping${name}`, name, companyId],
    () => pingController.read(name, companyId),
    { refetchOnWindowFocus: false }
  );
};
