import axios from "axios";

export const searchUsers = async (query: string, page = 1) => {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=30`
  );
  return response.data;
};
