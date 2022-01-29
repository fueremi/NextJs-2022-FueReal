import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "4b4974357fmshf2e11eeea1c3738p1cd1aajsn7136a53af655",
    },
  });

  return data;
};
