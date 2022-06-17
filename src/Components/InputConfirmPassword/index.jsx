import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";
import "./style.css";

export default function InputConfirmPassword({
  values,
  setValues,
  name,
  error,
  setError,
}) {
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl sx={{ m: 1, width: "34.4rem" }}>
          {/* <InputLabel htmlFor="outlined-adornment-password">{name}</InputLabel> */}

          <label htmlFor="outlined-adornment-password">{name} *</label>

          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showConfirmPassword ? "text" : "password"}
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            inputProps={{
              fontSize: "1.6rem",
              width: "34.4rem",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirmPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="ConfirmPassword"
          />
          <br />
        </FormControl>
      </div>
    </Box>
  );
}
