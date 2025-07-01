import { useQueryStates } from "nuqs";
import { parseAsString } from "nuqs/server";

export const serviceParamsSchema = {
  serviceId: parseAsString,
};

export function useServiceParams() {
  const [params, setParam] = useQueryStates(serviceParamsSchema);

  return {
    params,
    setParam,
  };
}
