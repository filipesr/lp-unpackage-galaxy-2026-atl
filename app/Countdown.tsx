"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

const TARGET_DATE = new Date("2026-02-26T16:00:00Z"); // 13h BRT = 16h UTC

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now();

  if (diff <= 0) return null;

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);

  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return <div className={styles.countdown} style={{ minHeight: "4rem" }} />;
  }

  if (!timeLeft) {
    return <p className={styles.eventStarted}>O evento começou!</p>;
  }

  const blocks = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <div className={styles.countdown}>
      {blocks.map((b) => (
        <div key={b.label} className={styles.timeBlock}>
          <span className={styles.timeValue}>
            {String(b.value).padStart(2, "0")}
          </span>
          <span className={styles.timeLabel}>{b.label}</span>
        </div>
      ))}
    </div>
  );
}
