import { Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "100px",
    borderTop: `1px solid ${theme.palette.secondary.dark}`,
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Footer = () => {
  const styles = useStyles();
  return (
    <footer className={styles.footer}>
      <Link href="/results" variant="h2">
        See the results!
      </Link>
    </footer>
  );
};

export default Footer;
