import {determineChineseZodiac} from "../utils/chineseZodiac";


export default function ChineseZodiac({ date }) {
  const zodiacSign = determineChineseZodiac(date)

  return (
        <>{zodiacSign}</>
    // <div>
    //   {zodiacSign && (
    //     <div>
    //       <strong>{zodiacSign}</strong>
    //     </div>
    //   )}
    // </div>
  );
}