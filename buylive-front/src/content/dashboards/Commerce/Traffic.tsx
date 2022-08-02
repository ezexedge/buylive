import {
  Button,
  Card,
  Box,
  CardHeader,
  Grid,
  Typography,
  Divider
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import ArrowForwardTwoToneIcon from '@material-ui/icons/ArrowForwardTwoTone';
import Label from 'src/components/Label';
import TrendingUp from '@material-ui/icons/TrendingUp';
import TrendingDown from '@material-ui/icons/TrendingDown';
import TrafficChart from './TrafficChart';

const ArrowTrendingUpWrapper = experimentalStyled(TrendingUp)(
  ({ theme }) => `
      color:  ${theme.palette.success.main};
`
);

const ArrowTrendingDownWrapper = experimentalStyled(TrendingDown)(
  ({ theme }) => `
      color:  ${theme.palette.error.main};
`
);

const TrafficChartWrapper = experimentalStyled(TrafficChart)(
  () => `
        height: 300px;
`
);

function Traffic() {
  const { t }: { t: any } = useTranslation();

  const visitors = {
    month: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      data: [357, 666, 615, 300, 544, 539, 861, 542, 327, 471, 817, 928]
    }
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        action={
          <Button
            size="small"
            endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
          >
            {t('More')}
          </Button>
        }
        title={t('Traffic')}
      />
      <Divider />
      <Grid spacing={0} container>
        <Grid xs={12} md={5} item display="flex" alignItems="center">
          <Grid container sx={{ p: 3 }} spacing={3}>
            <Grid xs={12} sm={6} md={12} item>
              <Typography
                variant="caption"
                noWrap
                sx={{ mb: 1 }}
                component="div"
              >
                {t('Total Store Visits')}
              </Typography>
              <Typography variant="h2" gutterBottom>
                57.483
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <Label color="success">694 (10.23%)</Label>
                <ArrowTrendingUpWrapper
                  sx={{ ml: 0.5, mr: -0.2 }}
                  fontSize="small"
                />
              </Box>
            </Grid>
            <Divider sx={{ my: 3 }} />
            <Grid xs={12} sm={6} md={12} item>
              <Typography
                variant="caption"
                sx={{ mb: 1 }}
                noWrap
                component="div"
              >
                {t('Average Daily Visitors')}
              </Typography>
              <Typography variant="h2" gutterBottom>
                7.492
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <Label color="error">-583 (8.64%)</Label>
                <ArrowTrendingDownWrapper
                  sx={{ ml: 0.5, mr: -0.2 }}
                  fontSize="small"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={7} item>
          <Box height={300}>
            <TrafficChartWrapper
              data={visitors.month.data}
              labels={visitors.month.labels}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Traffic;
