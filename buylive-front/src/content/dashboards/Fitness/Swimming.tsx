import { Card, CardHeader, Typography, Avatar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import PoolTwoToneIcon from '@material-ui/icons/PoolTwoTone';
import ParametersChart from './ParametersChart';

function Swimming() {
  const { t }: { t: any } = useTranslation();

  const AvatarInfo = experimentalStyled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.info.lighter};
      color: ${theme.colors.info.main};
      width: ${theme.spacing(5)};
      height: ${theme.spacing(5)};
`
  );

  const ParametersChartWrapper = experimentalStyled(ParametersChart)(
    ({ theme }) => `
        height: 80px;
`
  );

  const parameter = {
    weeks: [
      'Monday',
      'Tueday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    data: [22, 15, 19, 7, 13, 1, 18]
  };

  return (
    <Card sx={{ p: 1 }}>
      <CardHeader
        avatar={
          <AvatarInfo>
            <PoolTwoToneIcon />
          </AvatarInfo>
        }
        title={t('Swimming')}
        titleTypographyProps={{ variant: 'h5' }}
        action={
          <>
            <Typography align="right" variant="h3">
              12
            </Typography>
            <Typography
              align="right"
              variant="subtitle1"
              color="text.secondary"
            >
              {t('miles')}
            </Typography>
          </>
        }
      />
      <ParametersChartWrapper data={parameter.data} labels={parameter.weeks} />
    </Card>
  );
}

export default Swimming;
