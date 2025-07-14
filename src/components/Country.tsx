type Country = { code: string; name: string };

const countries: Country[] = [
  { code: "NL", name: "Netherlands" },
  { code: "US", name: "United States" },
  { code: "SE", name: "Sweden" },
  { code: "JP", name: "Japan" },
  { code: "DE", name: "Germany" },
];

export default function CountrySelect({country, setCountry }: {
  country: string; setCountry: React.Dispatch<React.SetStateAction<string>>;}) {
  return (
    <div>
        <select value={country} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountry(e.target.value)}>
            {countries.map(({ code, name }) => (
                <option 
                key={code} value={code}>{name}
                </option>
            ))}
        </select>
    </div>
  );
}
