import Link from 'next/link';
import styles from './page.module.css';
import { MealsGrid } from '@/components/Meals/MealsGrid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

export const metadata = {
  title: 'NextLevel Food | Meals',
};

const MealGetter = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

export default function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favourite receipe and cook it yourself.</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching Meals...</p>}
        >
          <MealGetter />
        </Suspense>
      </main>
    </>
  );
}
