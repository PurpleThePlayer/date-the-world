import {determineChineseZodiac} from "../utils/chineseZodiac.tsx";

type ChineseZodiacProps = {
    date: Date;
}

export const ChineseZodiac = ({ date }:ChineseZodiacProps) => {
  const zodiacSign = determineChineseZodiac(date)

  return (
        <>{zodiacSign}</>
  );
}