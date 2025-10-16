import styles from '@/styles/pages/Page.module.css';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <header>
        <h1 className={styles.title}>Главная страница</h1>
      </header>
      <section className={styles.placeholder} aria-labelledby="home-content">
        <h2 id="home-content" className="visually-hidden">Контент главной страницы</h2>
        <p>Здесь будет контент главной страницы</p>
      </section>
    </main>
  );
}
