import { Link, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const styles = useStyles();
  const resultsPath = "/results";
  const votePath = "/";
  const isVotePage = router.pathname === votePath;
  return (
    <footer className={styles.footer}>
      <Link href={isVotePage ? resultsPath : votePath} variant="h2">
        {isVotePage ? "See the results!" : "Vote!"}
      </Link>
    </footer>
  );
};

export default Footer;
