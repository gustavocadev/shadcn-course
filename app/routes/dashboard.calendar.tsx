import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useState } from 'react';
import { Calendar } from '~/components/ui/calendar';

export default function AlertDialogDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const smallDate = date?.toLocaleDateString('es-ES', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
  const [multipleDates, setMultipleDate] = useState<Date[] | undefined>([]);

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date < new Date()}
      />

      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDate}
        className="rounded-md border"
      />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />

      <div>
        <h1 className="text-3xl">Informacion</h1>
        <div className="border-b"></div>
        <p>{format(date!, 'EEEE, d MMMM', { locale: es })}</p>
        <p>
          {multipleDates
            ?.map((date) => format(date, 'EEEE, d MMMM', { locale: es }))
            .join(', ')}
        </p>
      </div>
    </div>
  );
}
