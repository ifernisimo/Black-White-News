import React from "react";
import styles from "./CountrySelectorComponent.module.css";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const CountrySelectorComponent = (props) => {
  return (
    <div className={styles.language}>
      <FormControl variant="outlined" className={styles.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
        <Select
          onChange={props.handleChangeLanguage}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Country"
        >
          <MenuItem value="ua">Ukraine</MenuItem>
          <MenuItem value="us">USA</MenuItem>
          <MenuItem value="ru">Russia</MenuItem>
          <MenuItem value="de">Deutch</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CountrySelectorComponent;
