import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./style.css";

export default function InputPassword({
  values,
  setValues,
  name,
  error,
  setError,
}) {
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl
          sx={{ m: 1, width: "34.4rem", fontSize: "caption" }}
          variant="outlined"
        >
          <label htmlFor="outlined-adornment-password">
            {name} *
            <OutlinedInput
              id="outlined-adornment-password"
              sx={{ height: "5rem", fontSize: "caption" }}
              inputRef={{
                width: "34.4rem",
                height: "5rem",
                fontSize: "caption",
                padding: "0.5rem",
              }}
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </label>
        </FormControl>
      </div>
    </Box>
  );
}
