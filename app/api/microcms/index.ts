import aspida from "@aspida/fetch";
import api from "./$api";

const fetchConfig = {
  headers: {
    "X-MICROCMS-API-KEY": X_MICROCMS_API_KEY,
  },
  baseURL: MICROCMS_BASE_URL,
};

export const microcmsApi = api(aspida(fetch, fetchConfig));
