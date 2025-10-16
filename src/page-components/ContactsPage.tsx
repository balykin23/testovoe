import styles from '@/styles/pages/Page.module.css';

export default function ContactsPage() {
  return (
    <main className={styles.container}>
      <header>
        <h1 className={styles.title}>Контакты</h1>
      </header>
      <section className={styles.placeholder} aria-labelledby="contacts-content">
        <h2 id="contacts-content" className="visually-hidden">Контактная информация</h2>
        <p>Здесь будет контент страницы контактов</p>
      </section>
    </main>
  );
}
