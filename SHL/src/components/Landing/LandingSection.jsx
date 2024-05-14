import { useEffect, useRef } from "react";
// import Image from "next/image";
import styles from "../../styles/Home.module.scss";

export default function Mysection({
  image,
  headline
}) {
  return (
    <div className={styles.section}>
      <div className={styles.copy}>
        <h2>{headline}</h2>
      </div>
      <img src={image} layout="fill"/>
      <button className={styles.downArrow} ></button>
    </div>
  );
}
