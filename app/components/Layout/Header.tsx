import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    width: "100%",
  },
  mainTitle: {
    backgroundColor: theme.palette.secondary.main,
    borderBottom: `2px solid ${theme.palette.secondary.dark}`,
    marginBottom: "20px",
  },
  title: {
    textAlign: "center",
  },
}));

const Header = () => {
  const styles = useStyles();
  return (
    <header className={styles.header}>
      <Typography className={styles.mainTitle} variant="h1" color="primary">
        C A T M A S H 🐱
      </Typography>
      <Typography className={styles.title} variant="h2" color="primary">
        Are all of them cute? Yes. Is one of them cuter than the others?
        Probably!
      </Typography>
      <Typography className={styles.title} variant="h2" color="primary">
        Let's find out! Who's cuter?
      </Typography>
    </header>
  );
};

export default Header;
