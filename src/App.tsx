import { useState } from 'react'
import './App.css';
import DateInput from "./components/DateInput.tsx";
import Zodiac from "./components/Zodiac.tsx";
import ChineseZodiac from "./components/ChineseZodiac.tsx";


function App() {
  const [date, setDate] = useState(new Date())

  return (
    <>
      <DateInput date={date} onDateChange={setDate} />
      <Zodiac date={date} />
      <ChineseZodiac date={date} />
    </>
  )
}

export default App;
