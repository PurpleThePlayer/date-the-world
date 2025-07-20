import {Holidays} from "../Holiday.tsx"

type Props = {
    year: number;
    country: string;
}

export const HolidayTab = ({year,country}:Props) => {
    return (
        <Holidays year={year} country={country}/>
    );
}