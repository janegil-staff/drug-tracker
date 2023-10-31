import classes from "./TopHeader.module.css";
const TopHeader = () => {
  return (
    <>
      <nav className={classes['nav-top']}>
        <header>
          <h1>Drug Tracker</h1>
        </header>
        <button className={classes['login-link']}>Logg inn</button>
      </nav>
    </>
  );
};

export default TopHeader;
