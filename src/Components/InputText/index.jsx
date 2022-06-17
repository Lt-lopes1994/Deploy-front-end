import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function InputText({ name, value, setValue }) {
  return (
    <Box
      component="form"
      sx={{
        m: 1,
        width: "34.4rem",
        fontSize: "2rem",
      }}
      validate
      autoComplete="off"
    >
      <label htmlFor="outlined-basic">
        {name} *
        <TextField
          size="large"
          id="outlined-basic"
          variant="outlined"
          InputProps={{
            style: {
              fontSize: "1.6rem",
            },
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </Box>
  );
}
