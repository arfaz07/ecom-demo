import React, { FC } from "react";
import styles from "./card.module.css";
import Image from "next/image";

export interface ICardProps {
  icon: any;
  title: string;
  description: string;
}

const Card: FC<ICardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <Image src={icon} height={32} width={32} alt={title} />
      <i className={styles.i}></i>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
