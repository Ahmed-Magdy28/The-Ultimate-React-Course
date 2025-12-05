import { Popover } from '@headlessui/react';
import { DayPicker } from 'react-day-picker';
import styles from './DatePickerPopOver.module.css';
import 'react-day-picker/style.css';

export default function DatePickerPopOver({
   date,
   handleDateChange,
}: {
   date: Date | undefined;
   handleDateChange: (date: Date | undefined) => void;
}) {
   return (
      <>
         {' '}
         <Popover className={styles.popover}>
            <Popover.Button className={styles.dateInput}>
               {date ? date.toISOString().split('T')[0] : 'Pick a date'}
            </Popover.Button>

            <Popover.Panel className={styles.popoverPanel}>
               <DayPicker
                  mode="single"
                  selected={date}
                  timeZone="+02:00"
                  onSelect={(d) => {
                     handleDateChange(d);
                  }}
               />
            </Popover.Panel>
         </Popover>
      </>
   );
}
