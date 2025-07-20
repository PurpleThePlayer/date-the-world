// import { useState } from 'react'
// import './App.css';
// import DateInput from "./components/DateInput.tsx";
// import Zodiac from "./components/Zodiac.tsx";
// import ChineseZodiac from "./components/ChineseZodiac.tsx";
// import Holidays from "./components/Holidays.tsx";
// import CountrySelect from "./components/Country.tsx";
// import { DateDisplay } from './components/DateDisplay.tsx';

// function App() {
//   const [date, setDate] = useState(new Date());
//   const year = date.getFullYear();
//   const [country, setCountry] = useState("JP");

//   return (
//   <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-700 p-6">
//     <div className="w-full max-w-4xl flex flex-col space-y-6 text-white">
//       <div className="flex flex-wrap gap-4">
//         <div className="border-2 rounded-md p-2 max-w-xs shadow-sm bg-gray-800">
//           <DateInput date={date} onDateChange={setDate} />
//         </div>
//         <div className="border-2 rounded-md p-2 max-w-xs shadow-sm bg-gray-800">
//           <CountrySelect country={country} setCountry={setCountry} />
//         </div>
//       </div>

//       {/* Date Display */}
//       <div className="text-xl font-semibold">
//         <DateDisplay date={date} />
//       </div>

//       {/* Zodiac Signs */}
//       <div className="space-y-2">
//         <div>
//           <span className="font-bold">Zodiac:</span> <Zodiac date={date} />
//         </div>
//         <div>
//           <span className="font-bold">Chinese Zodiac:</span> <ChineseZodiac date={date} />
//         </div>
//       </div>

//       {/* Holidays Table or Cards */}
//       <div>
//         <Holidays year={year} country={country} />
//       </div>
      
//     </div>
//   </div>
// );

// }

// export default App;

import { useState } from 'react';
import './App.css';
import DateInput from "./components/DateInput.tsx";
import {Zodiac} from "./components/Zodiac.tsx";
import { ChineseZodiac } from "./components/ChineseZodiac.tsx";
import Holidays from "./components/Holiday.tsx";
import CountrySelect from "./components/Country.tsx";
import { DateDisplay } from './components/DateDisplay.tsx';

type Tab = "Zodiacs" | "Holidays" | "Namedays";

function App() {
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const [country, setCountry] = useState("JP");
  const [activeTab, setActiveTab] = useState<Tab>("Zodiacs");

  return (
    <div className="min-h-screen min-w-screen bg-gray-700 text-white p-4 md:flex md:items-start md:justify-center">
      <div className="w-full max-w-6xl md:flex">

        {/* Sidebar Tabs (Desktop) */}
        <div className="hidden md:flex flex-col gap-2 w-1/4 bg-gray-800 p-4 rounded-md shadow-md">
          {["Zodiacs", "Holidays", "Namedays"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as Tab)}
              className={`text-left px-3 py-2 rounded font-semibold ${
                activeTab === tab ? 'bg-blue-500 text-white' : 'hover:bg-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-6 space-y-6">

          {/* Top Tabs (Mobile Only) */}
          <div className="flex md:hidden gap-2 mb-4">
            {["Zodiacs", "Holidays", "Namedays"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as Tab)}
                className={`flex-1 py-2 rounded font-semibold ${
                  activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Static Top Content */}
          <div className="flex flex-wrap gap-4">
            <div className="border-2 rounded-md p-2 max-w-xs shadow-sm bg-gray-800">
              <DateInput date={date} onDateChange={setDate} />
            </div>
            <div className="border-2 rounded-md p-2 max-w-xs shadow-sm bg-gray-800">
              <CountrySelect country={country} setCountry={setCountry} />
            </div>
          </div>

          <div className="text-xl font-semibold">
            <DateDisplay date={date} />
          </div>

          {/* Dynamic Tab Content */}
          <div className="bg-gray-800 p-4 rounded-md shadow-sm">
            {activeTab === "Zodiacs" && (
              <div className="space-y-2">
                <div>
                  <span className="font-bold">Zodiac:</span> <Zodiac date={date} />
                </div>
                <div>
                  <span className="font-bold">Chinese Zodiac:</span> <ChineseZodiac date={date} />
                </div>
              </div>
            )}

            {activeTab === "Holidays" && (
              <Holidays year={year} country={country} />
            )}

            {activeTab === "Namedays" && (
              <div className="text-gray-300 italic">Nameday info coming soon...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
