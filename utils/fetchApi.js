import axios from "axios";

const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(baseUrl + url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "62ce465bbbmsh07496081a85cdc7p177094jsn93f012aed0e8",
    },
  });

  return data;
};
