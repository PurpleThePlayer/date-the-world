import { useState } from 'react'
import './App.css';
import DateInput from "./components/DateInput.tsx";
import Zodiac from "./components/Zodiac.tsx";
import ChineseZodiac from "./components/ChineseZodiac.tsx";
import Holidays from "./components/Holidays.tsx";
import CountrySelect from "./components/Country.tsx";
import { DateDisplay } from './components/DateDisplay.tsx';

function App() {
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const [country, setCountry] = useState("JP");

  return (
  <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-700 p-6">
    <div className="w-full max-w-4xl flex flex-col space-y-6 text-white">

      {/* Top: Date and Country Select Side by Side */}
      {/* <div className="flex flex-wrap gap-4">
        <div className='border-2'>
          <DateInput date={date} onDateChange={setDate} />
        </div>
        <div className="border-2">
          <CountrySelect country={country} setCountry={setCountry} />
        </div>              
      </div> */}
      <div className="flex flex-wrap gap-4">
        <div className="border-2 rounded-md p-2 max-w-xs shadow-sm bg-gray-800">
          <DateInput date={date} onDateChange={setDate} />
        </div>
        <div className="border-2 rounded-md p-2 max-w-xs shadow-sm bg-gray-800">
          <CountrySelect country={country} setCountry={setCountry} />
        </div>
      </div>

      {/* Date Display */}
      <div className="text-xl font-semibold">
        <DateDisplay date={date} />
      </div>

      {/* Zodiac Signs */}
      <div className="space-y-2">
        <div>
          <span className="font-bold">Zodiac:</span> <Zodiac date={date} />
        </div>
        <div>
          <span className="font-bold">Chinese Zodiac:</span> <ChineseZodiac date={date} />
        </div>
      </div>

      {/* Holidays Table or Cards */}
      <div>
        <Holidays year={year} country={country} />
      </div>
      
    </div>
  </div>
);

//   return (
//     <div className='min-h-screen min-w-screen flex flex-col justify-center space-x-6 bg-amber-700'>
//       <div className="flex flex-row gap-x-2">
//           <DateInput date={date} onDateChange={setDate} />
//           <CountrySelect country={country} setCountry={setCountry} />
//       </div>
//       <DateDisplay date={date}/>
//       <Zodiac date={date} />
//       <ChineseZodiac date={date} />
//       <Holidays year={year} country={country} />
//     </div>
//   )
}

export default App;
