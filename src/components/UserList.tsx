import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { searchUsers } from "../api/githubApi";
import { transformUsers } from "../utils/transformUsers";
import { GitHubUser } from "../types";
import {
  Box,
  Card,
  Avatar,
  Typography,
  CircularProgress,
} from "@mui/material";

interface Props {
  query: string;
}

export const UserList: React.FC<Props> = ({ query }) => {
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["users", query],
    queryFn: ({ pageParam = 1 }) => searchUsers(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.items.length === 30 ? pages.length + 1 : undefined,
    enabled: !!query,
});


  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading)
    return <CircularProgress sx={{ display: "block", mt: 4, mx: "auto" }} />;

  if (isError)
    return <Typography color="error">Error loading users.</Typography>;

  const users: GitHubUser[] =
    data?.pages.flatMap((page) => transformUsers(page.items)) || [];

  if (!users.length) return <Typography>No users found.</Typography>;

  return (
    <Box>
      {users.map((user) => (
        <Card key={user.id} sx={{ mb: 2, p: 2 }}>
          <Box display="flex" alignItems="center">
            <Avatar src={user.avatar_url} sx={{ mr: 2 }} />
            <Box>
              <Typography>{user.login}</Typography>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                Profile
              </a>
            </Box>
          </Box>
        </Card>
      ))}
      <div ref={ref} />
      {isLoading && <CircularProgress sx={{ display: "block", mx: "auto" }} />}
    </Box>
  );
};
