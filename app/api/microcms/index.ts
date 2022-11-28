import aspida from "@aspida/fetch";
import api from "./$api";
import type { TimelineItem } from "~/components/TimelineCard";
import { getEnglishDate } from "~/utils/getEnglishDate";

const fetchConfig = {
  headers: {
    "X-MICROCMS-API-KEY": X_MICROCMS_API_KEY,
  },
  baseURL: MICROCMS_BASE_URL,
};

export const microcmsApi = api(aspida(fetch, fetchConfig));

export const fetchMicrocms = async (): Promise<TimelineItem[]> => {
  const res = await microcmsApi.blogs.$get();

  return res.contents.map((content) => ({
    title: content.title,
    pubDate: getEnglishDate(new Date(content.publishedAt as string)),
    link: `/blog/${content.id}`,
    kind: "MyBlog",
  }));
};
