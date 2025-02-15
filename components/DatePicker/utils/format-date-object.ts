import { Dayjs } from 'dayjs';
import { FormatedDayjs } from '@components/DatePicker/types';

export const formatDateObject = (
  date: Dayjs,
  currentMonth: Dayjs
): FormatedDayjs => {
  const clonedObject = { ...date.toObject() };
  return {
    day: clonedObject.date,
    month: clonedObject.months,
    year: clonedObject.years,
    isCurrentMonth: clonedObject.months === currentMonth.month(),
    isCurrentDay: date.isToday(),
  };
};
