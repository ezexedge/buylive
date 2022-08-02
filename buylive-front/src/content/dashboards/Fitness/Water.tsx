import {
  Card,
  Box,
  Typography,
  Avatar,
  LinearProgress
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import LocalDrinkTwoToneIcon from '@material-ui/icons/LocalDrinkTwoTone';

const AvatarWrapperWarning = experimentalStyled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(7)};
      height: ${theme.spacing(7)};
      border-radius: ${theme.general.borderRadius};
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
      margin-bottom: ${theme.spacing(3)};
`
);

function Water() {
  const { t }: { t: any } = useTranslation();

  return (
    <Card sx={{ p: 3 }}>
      <AvatarWrapperWarning>
        <LocalDrinkTwoToneIcon />
      </AvatarWrapperWarning>
      <Typography variant="h3" sx={{ pb: 1 }}>
        {t('Water')}
      </Typography>
      <Typography
        color="text.primary"
        variant="h2"
        sx={{ pr: 0.5, display: 'inline-flex' }}
      >
        54%
      </Typography>
      <Box pt={3}>
        <LinearProgress value={54} color="primary" variant="determinate" />
      </Box>
    </Card>
  );
}

export default Water;
