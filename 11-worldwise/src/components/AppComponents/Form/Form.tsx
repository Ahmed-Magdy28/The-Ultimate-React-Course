import styles from './Form.module.css';
import Button from '../Button/Button';
import BackButton from '../Button/BackButton';
import { useForm } from '../../../logic/hooks/useForm';
import Spinner from '../spinner/Spinner';
import Message from '../Message/Message';
import 'react-day-picker/style.css';
import DatePickerPopOver from '../DatePickerPopOver/DatePickerPopOver';
import { useCitiesContex } from '../../../contexts/contexts';

function Form() {
   const { appState, createCity } = useCitiesContex();
   const { isLoading } = appState;
   const {
      cityName,
      notes,
      setNotes,
      emoji,
      setCityName,
      isLoadingCityData,
      geoCodingerror,
      lat,
      lng,
      handleSubmit,
      date,
      handleDateChange,
   } = useForm(createCity);
   if (isLoadingCityData) return <Spinner />;
   if (!lat && !lng)
      return <Message message={'Start by Clicking on the Map'} />;
   if (geoCodingerror) return <Message message={geoCodingerror} />;
   return (
      <form
         className={`${styles.form} ${isLoading ? styles.loading : ''}`}
         onSubmit={handleSubmit}
      >
         <div className={styles.row}>
            <label htmlFor="cityName">City name</label>
            <input
               id="cityName"
               onChange={(e) => setCityName(e.target.value)}
               value={cityName}
            />
            <span className={styles.flag}>{emoji}</span>
         </div>

         <div className={styles.row}>
            <label htmlFor="date">When did you go to {cityName}?</label>

            <DatePickerPopOver
               date={date}
               handleDateChange={handleDateChange}
            />
         </div>

         <div className={styles.row}>
            <label htmlFor="notes">Notes about your trip to {cityName}</label>
            <textarea
               id="notes"
               onChange={(e) => setNotes(e.target.value)}
               value={notes}
            />
         </div>

         <div className={styles.buttons}>
            <Button type="primary" onClick={undefined}>
               Add
            </Button>
            <BackButton />
         </div>
      </form>
   );
}

export default Form;
