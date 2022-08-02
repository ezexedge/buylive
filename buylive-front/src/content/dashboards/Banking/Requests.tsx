import { Typography, Box, Avatar, Card, CardContent } from '@material-ui/core';

import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import ArrowDownwardTwoTone from '@material-ui/icons/ArrowDownwardTwoTone';
import RequestPageTwoTone from '@material-ui/icons/RequestPageTwoTone';

const AvatarWrapper = experimentalStyled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.gradients.purple1};
      color:  ${theme.palette.primary.contrastText};
`
);

const ArrowDownwardWrapper = experimentalStyled(ArrowDownwardTwoTone)(
  ({ theme }) => `
      color:  ${theme.palette.error.main};
`
);

function Requests() {
  const { t }: { t: any } = useTranslation();

  const data = {
    value: '$4,486'
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <AvatarWrapper>
            <RequestPageTwoTone fontSize="medium" />
          </AvatarWrapper>
          <Typography
            sx={{ ml: 1 }}
            variant="body1"
            color="text.secondary"
            component="div"
          >
            {t('Requests')}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{ ml: -1.5, py: 3, justifyContent: 'center' }}
        >
          <ArrowDownwardWrapper />
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
          <b>-23%</b> less than last week
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Requests;
