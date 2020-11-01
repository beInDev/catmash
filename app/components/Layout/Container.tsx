import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

/**
 * Container element for the page layout (top order)
 *
 * @param {*} { ...props }
 * @returns
 */
const Container = ({ ...props }) => {
  const styles = useStyles();
  return <div className={styles.container} {...props} />;
};

export default Container;
