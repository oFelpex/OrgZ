import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { memo } from "react";

interface Props {
  dateBegin: Dayjs | null;
  dateFinish: Dayjs | null;
  onDateChange: (
    field: "dateBegin" | "dateFinish",
    value: Dayjs | null
  ) => void;
}

export const DatePickers = memo(
  ({ dateBegin, dateFinish, onDateChange }: Props) => (
    <>
      <DatePicker
        label="Start Date"
        value={dateBegin}
        onChange={(newValue) => onDateChange("dateBegin", newValue)}
      />
      <DatePicker
        label="Finish Date"
        value={dateFinish}
        onChange={(newValue) => onDateChange("dateFinish", newValue)}
      />
    </>
  )
);
