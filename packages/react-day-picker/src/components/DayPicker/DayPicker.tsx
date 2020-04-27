import * as React from 'react';
import { startOfMonth } from 'date-fns';

import { Months } from '../Months';
import { defaultProps } from './defaults/defaultProps';

/**
 * Render a date picker component.
 *
 * @category Components
 */
export function DayPicker(props = defaultProps): JSX.Element {
  const isControlled = Boolean(props.month);

  const [currentMonth, setCurrentMonth] = React.useState(
    startOfMonth(props.initialMonth || new Date())
  );

  function handleMonthChange(month: Date, e: React.MouseEvent): void {
    setCurrentMonth(month);
    props.onMonthChange?.(month, e);
  }
  return (
    <Months
      {...props}
      onMonthChange={!isControlled ? handleMonthChange : props.onMonthChange}
      month={isControlled ? props.month : currentMonth}
    />
  );
}
