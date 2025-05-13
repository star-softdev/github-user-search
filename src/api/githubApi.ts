import axios from "axios";

export const searchUsers = async (query: string, page = 1) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}&page=${page}&per_page=30`
    );
    return response.data;
  } catch (err) {
    console.error("GitHub API error:", err);
    return { items: [] };
  }
};
