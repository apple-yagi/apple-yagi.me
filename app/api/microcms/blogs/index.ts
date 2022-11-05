import { MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";
import { Content } from "../types";

export type Methods = {
  get: {
    query?: MicroCMSQueries;
    resBody: MicroCMSListResponse<Content>;
  };
};
