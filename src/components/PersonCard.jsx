import React from "react";
import styles from './PersonCard.module.css'
export const PersonCard = (props) => {
  return (
    <div className={styles.card}>
      <h2>{props.nombre}, {props.apellido}</h2>
      <p>Age {props.edad}</p>
      <p>Hair Color, {props.hairColor}</p>
    </div>
  );
};
