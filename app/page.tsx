import Countdown from "./Countdown";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Galaxy Unpacked 2026</h1>

      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/SA93zbnoR4U"
          title="Galaxy Unpacked 2026 – Transmissão ao vivo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <Countdown />
    </main>
  );
}
