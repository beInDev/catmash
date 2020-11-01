import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  main: {
    padding: '5rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '75%',
  },
}));

/**
 * Main page content, should be between Heander and Footer, contains Component
 *
 * @param {*} props
 * @returns
 */
const Main = (props: Record<string, any>): JSX.Element => {
  const styles = useStyles();
  return <main className={styles.main} {...props} />;
};

export default Main;
