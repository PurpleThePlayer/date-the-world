import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// @ts-ignore
import {determineChineseZodiac} from './utils/chineseZodiac.jsx'


function formatMMDD(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return month + day;
}

function zodiac(date: Date) {
  const dateMMDD = formatMMDD(date)
  if (dateMMDD >= "0120" && dateMMDD <= "0218") return "Aquarius";
  if (dateMMDD >= "0219" && dateMMDD <= "0320") return "Pisces";
  if (dateMMDD >= "0321" && dateMMDD <= "0419") return "Aries";
  if (dateMMDD >= "0420" && dateMMDD <= "0520") return "Taurus";
  if (dateMMDD >= "0521" && dateMMDD <= "0620") return "Gemini";
  if (dateMMDD >= "0621" && dateMMDD <= "0722") return "Cancer";
  if (dateMMDD >= "0723" && dateMMDD <= "0822") return "Leo";
  if (dateMMDD >= "0823" && dateMMDD <= "0922") return "Virgo";
  if (dateMMDD >= "0923" && dateMMDD <= "1022") return "Libra";
  if (dateMMDD >= "1023" && dateMMDD <= "1121") return "Scorpio";
  if (dateMMDD >= "1122" && dateMMDD <= "1221") return "Sagittarius";
  return "Capricorn"
}


function App() {
// export default function ChineseZodiacFinder() {
  const [selectedDate, setSelectedDate] = useState("");
  const [zodiacSign, setZodiacSign] = useState("");

  const handleDateChange = (e) => {
    const input = e.target.value;
    setSelectedDate(input);

    if (input) {
      const date = new Date(`${input}T00:00:00Z`);
      if (!isNaN(date)) {
        try {
          setZodiacSign(determineChineseZodiac(date));
        } catch {
          setZodiacSign("");
        }
      } else {
        setZodiacSign("");
      }
    } else {
      setZodiacSign("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Chinese Zodiac Finder</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="border p-2 rounded w-full mb-4"
      />
      {zodiacSign && (
        <div className="text-lg">
          Your Chinese Zodiac is: <strong>{zodiacSign}</strong>
        </div>
      )}
    </div>
  );
}

//   const [count, setCount] = useState(0)
//   const date = new Date()
  

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>{date.toDateString()} <br/> {zodiac(date)}</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App


