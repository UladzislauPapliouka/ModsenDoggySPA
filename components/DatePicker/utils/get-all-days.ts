import { Dayjs } from 'dayjs';
import { DatesPerWeek, FormatedDayjs } from '@components/DatePicker/types';
import { formatDateObject } from '@components/DatePicker/utils/format-date-object';

export const getAllDays = (currentMonth: Dayjs) => {
  let currentDate = currentMonth.startOf('month').weekday(0);
  const nextMonth = currentMonth.add(1, 'month').month();
  const allDates: DatesPerWeek = [];
  let weekDates: FormatedDayjs[] = [];
  let weekCounter = 1;

  while (currentDate.weekday(0).toObject().months !== nextMonth) {
    const formated = formatDateObject(currentDate, currentMonth);
    weekDates.push(formated);
    if (weekCounter === 7) {
      allDates.push({ dates: weekDates });
      weekDates = [];
      weekCounter = 0;
    }
    weekCounter++;
    currentDate = currentDate.add(1, 'day');
  }
  return allDates;
};
