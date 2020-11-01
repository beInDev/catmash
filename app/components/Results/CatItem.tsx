import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import { Cat } from '../Vote/Vote';

const useStyles = makeStyles((theme) => ({
  // Avatars
  anyPlaceAvatar: {
    height: 75,
    width: 75,
    textAlign: 'center',
    borderColor: theme.palette.secondary.dark,
    borderWidth: '3px',
    borderStyle: 'solid',
  },
  firstPlaceAvatar: {
    height: 150,
    width: 150,
    textAlign: 'center',
    borderColor: '#F2D16B',
    borderWidth: '6px',
    borderStyle: 'solid',
  },
  secondPlaceAvatar: {
    height: 125,
    width: 125,
    textAlign: 'center',
    borderColor: '#C0C0C0',
    borderWidth: '5px',
    borderStyle: 'solid',
  },
  thirdPlaceAvatar: {
    height: 100,
    width: 100,
    textAlign: 'center',
    borderColor: '#cd7f32',
    borderWidth: '4px',
    borderStyle: 'solid',
  },

  // Texts
  anyPlaceText: {
    fontSize: '1em',
  },
  firstPlaceText: {
    fontSize: '1.5em',
  },
  secondPlaceText: {
    fontSize: '1.3em',
  },
  thirdPlaceText: {
    fontSize: '1.2em',
  },
  bold: {
    fontWeight: 400,
  },
}));

/**
 * Display each cat in the vote results list. Custom styles are applied according to ranks
 *
 * @param {{
 *   cat: Cat;
 *   rank: number;
 * }} {
 *   cat: { id, url, score, matchesLost, matchesWon },
 *   rank,
 * }
 * @returns
 */
const CatItem = ({
  cat: { id, url, score, matchesLost, matchesWon },
  rank,
}: {
  cat: Cat;
  rank: number;
}): JSX.Element => {
  const styles = useStyles();
  let rankStyle = {
    avatar: styles.anyPlaceAvatar,
    text: styles.anyPlaceText,
    bold: '',
  };
  switch (rank) {
    case 1:
      rankStyle = {
        avatar: styles.firstPlaceAvatar,
        text: styles.firstPlaceText,
        bold: styles.bold,
      };
      break;
    case 2:
      rankStyle = {
        avatar: styles.secondPlaceAvatar,
        text: styles.secondPlaceText,
        bold: styles.bold,
      };
      break;
    case 3:
      rankStyle = {
        avatar: styles.thirdPlaceAvatar,
        text: styles.thirdPlaceText,
        bold: styles.bold,
      };
      break;
  }
  return (
    <Grid
      container
      key={`catItem-${id}`}
      direction={'row'}
      spacing={1}
      alignItems='center'
      justify='center'
      style={{ marginBottom: '5px' }}
    >
      <Grid item className={rankStyle.text} xs={6} md={2} xl={1}>
        <Typography
          variant='h1'
          className={rankStyle.bold}
        >{`#${rank}`}</Typography>
      </Grid>
      <Grid item xs={6} md={2} xl={2}>
        <Grid
          container
          justify={'center'}
          alignContent='center'
          alignItems='center'
        >
          <Avatar alt={`cat${id}`} src={url} className={rankStyle.avatar} />
        </Grid>
      </Grid>
      <Grid item className={rankStyle.text} xs={12} md={4} xl={2}>
        <Typography variant='h2'>
          Score: {score} ({((matchesWon || 1) / (matchesLost || 1)).toFixed(2)})
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CatItem;
