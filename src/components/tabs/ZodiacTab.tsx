import {Zodiac} from "../Zodiac.tsx";
import {ChineseZodiac} from "../ChineseZodiac.tsx";


type ZodiacProps = {
    date: Date;
}

export const ZodiacTab = ({date}:ZodiacProps) => {
    return (
            <div className="space-y-2">
                <div>
                    <span className="font-bold">Zodiac:</span> <Zodiac date={date} />
                </div>
                <div>
                    <span className="font-bold">Chinese Zodiac:</span> <ChineseZodiac date={date} />
                </div>
            </div>
    )
}   
