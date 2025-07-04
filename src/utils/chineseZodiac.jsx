import { useState } from "react";

const zodiacAnimals = [
  "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
  "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
];

// --- High-Precision Astronomy Functions ---

function julianDate(year, month, day) {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (year + 4716)) +
         Math.floor(30.6001 * (month + 1)) +
         day + B - 1524.5;
}

function trueNewMoon(k) {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const rad = Math.PI / 180;

  let JDE = 2451550.09766 +
            29.530588861 * k +
            0.00015437 * T2 -
            0.000000150 * T3 +
            0.00000000073 * T * T2;

  const M = (2.5534 + 29.10535669 * k - 0.0000218 * T2) % 360;
  const MPrime = (201.5643 + 385.81693528 * k + 0.0107582 * T2) % 360;
  const F = (160.7108 + 390.67050274 * k - 0.0016118 * T2) % 360;

  JDE += -0.40720 * Math.sin(rad * MPrime) +
         0.17241 * Math.sin(rad * M) +
         0.01608 * Math.sin(rad * 2 * MPrime) +
         0.01039 * Math.sin(rad * 2 * F) +
         0.00739 * Math.sin(rad * (MPrime - M)) -
         0.00514 * Math.sin(rad * (MPrime + M));

  return JDE;
}

function julianToUTCDate(JD) {
  JD += 0.5;
  const Z = Math.floor(JD);
  const F = JD - Z;
  let A = Z;

  if (Z >= 2299161) {
    const alpha = Math.floor((Z - 1867216.25) / 36524.25);
    A += 1 + alpha - Math.floor(alpha / 4);
  }

  const B = A + 1524;
  const C = Math.floor((B - 122.1) / 365.25);
  const D = Math.floor(365.25 * C);
  const E = Math.floor((B - D) / 30.6001);

  const day = B - D - Math.floor(30.6001 * E) + F;
  const month = (E < 14) ? E - 1 : E - 13;
  const year = (month > 2) ? C - 4716 : C - 4715;

  const dayInt = Math.floor(day);
  const dayFrac = day - dayInt;
  const totalSeconds = Math.round(dayFrac * 86400);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return new Date(Date.UTC(year, month - 1, dayInt, hours, minutes, seconds));
}

function chineseNewYear(year) {
  const solsticeJD = julianDate(year - 1, 12, 21);  // Approximate solstice
  const kStart = Math.floor((solsticeJD - 2451550.09766) / 29.530588861);

  const newMoons = [];
  for (let k = kStart; k < kStart + 5; k++) {
    const jd = trueNewMoon(k);
    if (jd > solsticeJD) {
      newMoons.push(jd);
    }
  }

  if (newMoons.length < 2) {
    throw new Error("Unable to compute Chinese New Year for year " + year);
  }

  return julianToUTCDate(newMoons[1]);
}

function getChineseZodiac(date) {
  const birthUTC = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const birthYear = date.getFullYear();

  const cnyDate = chineseNewYear(birthYear);
  const cnyUTC = Date.UTC(cnyDate.getUTCFullYear(), cnyDate.getUTCMonth(), cnyDate.getUTCDate());

  const zodiacYear = (birthUTC < cnyUTC) ? birthYear - 1 : birthYear;
  const zodiacIndex = (zodiacYear - 4) % 12;

  return zodiacAnimals[(zodiacIndex + 12) % 12];
}

// --- Robust React Component ---

export default function ChineseZodiacCalculator() {
  const [inputDate, setInputDate] = useState("");
  const [zodiac, setZodiac] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputDate(value);

    const date = new Date(value + "T00:00:00Z");  // Ensure UTC

    if (!isNaN(date)) {
      try {
        const zodiacSign = getChineseZodiac(date);
        setZodiac(zodiacSign);
      } catch {
        setZodiac("");
      }
    } else {
      setZodiac("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Chinese Zodiac Finder</h2>
      <input
        type="date"
        value={inputDate}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      />
      {zodiac && (
        <div className="text-lg">
          Your Chinese Zodiac is: <strong>{zodiac}</strong>
        </div>
      )}
    </div>
  );
}
