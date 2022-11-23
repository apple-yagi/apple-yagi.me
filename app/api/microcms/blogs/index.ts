import type { MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";
import type { Content } from "../types";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Content>;
  };
};
