import { Typography } from '@material-ui/core';

const Error = ({ error }: { error?: Error }): JSX.Element => {
  return <Typography color='error'>{error.message}</Typography>;
};

export default Error;
