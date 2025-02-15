import { Cell } from '@components/DatePicker/components/cell';
import dayjs, { Dayjs } from 'dayjs';
import locale from 'dayjs/locale/en';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import weekdayPlugin from 'dayjs/plugin/weekday';
import objectPlugin from 'dayjs/plugin/toObject';
import isTodayPlugin from 'dayjs/plugin/isToday';
import { DatesPerWeek } from '@components/DatePicker/types';
import { getAllDays } from '@components/DatePicker/utils/get-all-days';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { Typography } from '@components/Typography';
import styles from './index.module.scss';
const now = dayjs().locale({ ...locale });
dayjs.extend(weekdayPlugin);
dayjs.extend(objectPlugin);
dayjs.extend(isTodayPlugin);

export const DatePicker = () => {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(now);
  const [arrayOfDays, setArrayOfDays] = useState<DatesPerWeek>([]);

  const nextMonth = () => {
    const plus = currentMonth.add(1, 'month');
    setCurrentMonth(plus);
  };

  const prevMonth = () => {
    const minus = currentMonth.subtract(1, 'month');
    setCurrentMonth(minus);
  };

  const renderCells = () => {
    const rows: Array<ReactNode> = [];
    let days: ReactNode[] = [];
    arrayOfDays.forEach((week, index) => {
      week.dates.forEach((d, i) => {
        days.push(
          <Cell isActive={d.isCurrentDay} disabled={!d.isCurrentMonth} key={i}>
            {d.day.toString()}
          </Cell>
        );
      });
      rows.push(
        <div className="row" key={index}>
          {days}
        </div>
      );
      days = [];
    });
    return <div>{rows}</div>;
  };

  const renderHeader = () => {
    const dateFormat = 'MMM YYYY';
    return (
      <div className={styles.header}>
        <div onClick={() => prevMonth()} className={styles.chevrons}>
          <FaChevronLeft size={16} />
        </div>

        <Typography variant={'body-3'} className={styles.monthName}>
          {currentMonth.format(dateFormat)}
        </Typography>

        <div onClick={() => nextMonth()} className={styles.chevrons}>
          <FaChevronRight size={16} />
        </div>
      </div>
    );
  };
  const renderDays = useCallback(() => {
    const dateFormat = 'dd';
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        <Cell isDayName key={`${i} ${now.weekday(i).format(dateFormat)}`}>
          {now.weekday(i).format(dateFormat).slice(0, 1)}
        </Cell>
      );
    }
    return <div>{days}</div>;
  }, []);

  useEffect(() => {
    setArrayOfDays(getAllDays(currentMonth));
  }, [currentMonth]);

  return (
    <div>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};
