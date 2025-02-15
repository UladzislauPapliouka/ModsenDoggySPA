export type FormatedDayjs = {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isCurrentDay: boolean;
};

export type DatesPerWeek = Array<{ dates: Array<FormatedDayjs> }>;
