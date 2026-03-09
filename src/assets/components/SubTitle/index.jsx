import styles from "../Header/Header.module.css";

const SubTitle = ({subTitle}) => {
  return (
  <h3 className={styles.subTitle}>{subTitle}</h3>
  )
};
export default SubTitle;
