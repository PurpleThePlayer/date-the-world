import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateInputProps {
  date: Date;
  onDateChange: (date: Date | null) => void;
}

export default function DateInput({ date, onDateChange }: DateInputProps) {
  return (
    <div>
      <DatePicker
        selected={date}
        onChange={onDateChange}
        dateFormat="dd/MM/yyyy"
        className="picker"
      />
    </div>
  );
}
