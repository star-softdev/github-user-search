import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container, Typography } from "@mui/material";
import { SearchForm } from "./components/SearchForm";
import { UserList } from "./components/UserList";
import { useDebouncedValue } from "./hooks/useDebouncedValue";

const queryClient = new QueryClient();

const App = () => {
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebouncedValue(query, 2000);

  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          GitHub User Search
        </Typography>
        <SearchForm onSearch={setQuery} />
        <UserList query={debouncedQuery} />
      </Container>
    </QueryClientProvider>
  );
};

export default App;
