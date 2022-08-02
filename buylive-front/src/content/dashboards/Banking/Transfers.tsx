import { Typography, Box, Avatar, Card, CardContent } from '@material-ui/core';

import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import AccountBalanceWalletTwoTone from '@material-ui/icons/AccountBalanceWalletTwoTone';
import ArrowUpwardTwoTone from '@material-ui/icons/ArrowUpwardTwoTone';

const AvatarWrapper = experimentalStyled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.gradients.blue1};
      color:  ${theme.palette.primary.contrastText};
`
);

const ArrowUpwardWrapper = experimentalStyled(ArrowUpwardTwoTone)(
  ({ theme }) => `
      color:  ${theme.palette.success.main};
`
);

function Transfers() {
  const { t }: { t: any } = useTranslation();

  const data = {
    value: '$2395'
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <AvatarWrapper>
            <AccountBalanceWalletTwoTone fontSize="medium" />
          </AvatarWrapper>
          <Typography
            sx={{ ml: 1 }}
            variant="body1"
            color="text.secondary"
            component="div"
          >
            {t('Transfers')}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{ ml: -1.5, py: 3, justifyContent: 'center' }}
        >
          <ArrowUpwardWrapper />
          <Typography variant="h2" color="text.primary">
            {data.value}
          </Typography>
        </Box>
        <Typography
          align="center"
          variant="body2"
          color="text.secondary"
          component="div"
        >
          <b>+51%</b> more than last week
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Transfers;
