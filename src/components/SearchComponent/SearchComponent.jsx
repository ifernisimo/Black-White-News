import React from "react";
import styles from "./SearchComponent.module.css";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
const SearchComponent = (props) => {
  const handleDateChangeFrom = (date) => {
    props.setDateFrom(date);
  };

  const handleDateChangeTo = (date) => {
    props.setDateTo(date);
  };

  return (
    <>
      <div className={styles.search}>
        <input
          onChange={(e) => {
            props.getSearchNewsFromApi(
              e.target.value,
              props.searchFromDate,
              props.searchToDate
            );
          }}
          type="text"
          placeholder="Поиск..."
        />
      </div>
      <div className={styles.datePicker}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={styles.dateFrom}
            onChange={handleDateChangeFrom}
            value={props.searchFromDate}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="search-from"
            label="From"
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            className={styles.dateTo}
            onChange={handleDateChangeTo}
            value={props.searchToDate}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="search-to"
            label="To"
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    </>
  );
};

export default SearchComponent;
