import styles from "./cast.module.css";

const Cast = ({ mainCast, supportingCast }) => {
  return (
    <div className={styles.cast}>
      <p>Main Actor: {mainCast}</p>
      <p>Supporting Actor: {supportingCast}</p>
    </div>
  );
};
export default Cast;
