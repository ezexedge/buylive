import { alpha, Box, Card, Typography, useTheme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';

import UsageChart from './UsageChart';

const UsageChartWrapper = experimentalStyled(UsageChart)(
  ({ theme }) => `
    width: 120px;
`
);

const BoxChartWrapperText = experimentalStyled(Box)(
  ({ theme }) => `
    position: relative;
    width: 120px;
    height: 120px;
    
    .ChartText {
      font-weight: bold;
      position: absolute;
      height: 40px;
      width: 40px;
      top: 50%;
      left: 50%;
      font-size: 19px;
      margin: -20px 0 0 -20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`
);

function MemoryUsage() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: [
          theme.colors.info.main,
          alpha(theme.colors.info.light, 0.15)
        ],
        hoverBackgroundColor: [
          theme.colors.info.dark,
          alpha(theme.colors.info.light, 0.25)
        ],
        data: [79, 21]
      }
    ]
  };

  return (
    <Card
      sx={{
        px: { lg: 4, xs: 2, md: 3 },
        py: { lg: 7.08, xs: 4 },
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <BoxChartWrapperText sx={{ mr: 3 }}>
        <div className="ChartText" style={{ color: theme.colors.info.main }}>
          <span>79%</span>
        </div>
        <UsageChartWrapper data={data} />
      </BoxChartWrapperText>
      <Typography variant="h1">{t('Memory Usage')}</Typography>
    </Card>
  );
}

export default MemoryUsage;
