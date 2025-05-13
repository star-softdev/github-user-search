import React from "react";
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required(),
});

interface Props {
  onSearch: (query: string) => void;
}

export const SearchForm: React.FC<Props> = ({ onSearch }) => {
  const { register, watch } = useForm({ resolver: yupResolver(schema) });
  const username = watch("username");

  React.useEffect(() => {
    onSearch(username || "");
  }, [username, onSearch]);

  return (
    <Box my={3}>
      <TextField
        fullWidth
        label="Search GitHub Users"
        {...register("username")}
      />
    </Box>
  );
};
