import {determineChineseZodiac} from "../utils/chineseZodiac";


export default function ChineseZodiac({ date }) {
  const zodiacSign = determineChineseZodiac(date)

  return (
    <div className="p-4 max-w-md mx-auto">
      {zodiacSign && (
        <div className="text-lg">
          <strong>Chinese Zodiac: {zodiacSign}</strong>
        </div>
      )}
    </div>
  );
}