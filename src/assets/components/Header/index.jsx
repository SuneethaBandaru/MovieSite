import styles from "./Header.module.css";
import SubTitle from "../SubTitle";

const Header = ({ title, childProp }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <SubTitle subTitle={childProp} />
    </header>
  );
};

export default Header;

/* 1.
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Suneetha's Movie Review</h1>
      <h3 className={styles.subTitle}>The best movie reviews on the net</h3>
    </header>
  );
};

export default Header;

2. another version of the same file using props  

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>{props.title}</h1>
      <h3 className={styles.subTitle}>{props.subTitle}</h3>
    </header>
  );
};

export default Header;

then go to App.jsx and pass the title as a prop to the Header component 
that means in place of <Header /> write

<Header title="Suneetha's Movie Review"
        subTitle="the best movie reviews on the net" 
/> like this

--------------------------------------------------------------------


*/
