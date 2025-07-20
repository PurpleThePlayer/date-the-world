type Props = {
    country: string;
    date:Date;
}

export const NamedayTab = ({date, country}:Props) => {
    return (
            <div className="text-gray-300 italic">Nameday info for {date.toDateString()} and {country} coming soon...</div>
    );
}
