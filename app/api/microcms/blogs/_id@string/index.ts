import type { MicroCMSContentId, MicroCMSObjectContent, MicroCMSQueries } from "microcms-js-sdk";
import type { Content } from "../../types";

export type Methods = {
  get: {
    query?: Pick<MicroCMSQueries, "draftKey" | "fields" | "depth">;
    resBody: Content & MicroCMSObjectContent & MicroCMSContentId;
  };
};
