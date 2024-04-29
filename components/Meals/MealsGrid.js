import { Meal } from './Meal';
import styles from './MealsGrid.module.css';

export const MealsGrid = ({ meals }) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <Meal {...meal} />
        </li>
      ))}
    </ul>
  );
};
