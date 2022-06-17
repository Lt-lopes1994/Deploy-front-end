import { useEffect } from "react";
import { CustomizedAlert } from "./style";

export default function CustomAlert({ type, title, error, handleCloseAlert }) {
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        handleCloseAlert();
      }, 3000);
    }
  }, [error]); //eslint-disable-line

  return (
    <>
      {error && (
        <CustomizedAlert variant="filled" severity={type}>
          {title}
        </CustomizedAlert>
      )}
    </>
  );
}
