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

export default function Zodiac({date}) {
    const zodiacSign = zodiac(date)

    return (
        <>{zodiacSign}</>
        // <div >
        //     {zodiacSign && (
        //         <div>
        //             <strong>Zodiac: {zodiacSign}</strong>
        //         </div>
        //     )}
        // </div>
    );
}