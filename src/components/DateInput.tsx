// import React, { useRef } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
//
// export default function DateInput({ date, onDateChange }) {
//   const datePickerRef = useRef(null);
//
//   const handleButtonClick = () => {
//     datePickerRef.current.setOpen(true);
//   };
//
//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <button
//         onClick={handleButtonClick}
//         className="border p-2 rounded w-full mb-4 text-left"
//       >
//         {"Click Me!"}
//       </button>
//
//       <DatePicker
//         ref={datePickerRef}
//         selected={date}
//         onChange={(selectedDate) => {
//           onDateChange(selectedDate);
//         }}
//         dateFormat="dd/MM/yyyy"
//         customInput={<></>} // Hides default input
//         className="hidden"
//         popperPlacement="bottom-start"
//       />
//
//       <h1>{date.toDateString()}</h1>
//     </div>
//   );
// }


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateInputProps {
  date: Date;
  onDateChange: (date: Date | null) => void;
}

export default function DateInput({ date, onDateChange }: DateInputProps) {
  return (
    <div className="p-4 max-w-md mx-auto">
      <DatePicker
        selected={date}
        onChange={onDateChange}
        dateFormat="dd/MM/yyyy"
        className="picker"
      />
      <h1>{date.toDateString()}</h1>
    </div>
  );
}
