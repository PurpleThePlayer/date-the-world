interface DateDisplayProps { date: Date; }

export function DateDisplay({ date }: DateDisplayProps) {
  return (
    <h1>{date.toDateString()}</h1>
  );
}
