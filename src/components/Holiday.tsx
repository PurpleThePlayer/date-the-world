import { useEffect, useState } from "react";

type Holiday = {
  date: string;
  localName: string;
  name: string;
};

export const Holidays = ({ year, country }: { year: number; country: string }) => {
  const [data, setData] = useState<Holiday[] | null>(null);

  useEffect(() => {
    setData(null); // Clear previous data on change

    fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`)
      .then((response) => (response.ok ? response.json() : []))
      .then(setData)
      .catch(() => setData([]));
  }, [year, country]);

  if (data === null) return <div>Loading...</div>;
  if (data.length === 0) return <div>No holidays could be retrieved.</div>;

  return (

    <div className="overflow-x-auto">
      <table className="min-w-full text-left border-collapse">
        <thead className="bg-gray-800 border-b">
          <tr>
            <th className="p-3 text-sm font-semibold">Date</th>
            <th className="p-3 text-sm font-semibold">Local Name</th>
            <th className="p-3 text-sm font-semibold">Name</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((holiday) => (
            <tr key={`${holiday.date}-${holiday.name}`} className="hover:bg-gray-800 transition">
              <td className="p-3 text-sm">{holiday.date}</td>
              <td className="p-3 text-sm">{holiday.localName}</td>
              <td className="p-3 text-sm">{holiday.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  //   <table>
  //     <thead> <br/>
  //       <tr> 
  //         <th>Date</th>
  //         <th>Local Name</th>
  //         <th>Name</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {data.map((holiday) => (
  //         <tr key={`${holiday.date}-${holiday.name}`}>
  //           <td>{holiday.date}</td>
  //           <td>{holiday.localName}</td>
  //           <td>{holiday.name}</td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </table>
  );
}

