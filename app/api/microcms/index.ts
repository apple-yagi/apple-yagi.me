import api from "./$api";
import aspida from "@aspida/fetch";

const fetchConfig = {
  headers: {
    "X-MICROCMS-API-KEY": X_MICROCMS_API_KEY,
  },
  baseURL: MICROCMS_BASE_URL,
};

export const microcmsApi = api(aspida(fetch, fetchConfig));
