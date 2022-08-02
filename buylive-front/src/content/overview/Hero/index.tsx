import {
  Box,
  Button,
  Avatar,
  Card,
  Container,
  Tooltip,
  Hidden,
  Typography
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';

import { experimentalStyled } from '@material-ui/core/styles';

const TypographyH1 = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(36)};
`
);

const TypographyH2 = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const WaveWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    position: absolute;
    top: -${theme.spacing(8)};
    left: 0;
    width: 100%;
    z-index: 4;

    &.MuiWave-bottom {
      top: auto;
      bottom: -${theme.spacing(26)};
    }

    svg {
      display: block;
      path {
        fill: ${theme.palette.background.default};
      }
    }
`
);

const BoxContent = experimentalStyled(Box)(
  ({ theme }) => `
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    background: ${theme.colors.alpha.black[100]};
  }
`
);

const VideoWrapper = experimentalStyled(Box)(
  () => `
    position: relative;

    .MuiContainer-root {
      position: relative;
      z-index: 5;
    }
`
);

const CardIframe = experimentalStyled(Card)(
  ({ theme }) => `
    padding: ${theme.spacing(1)};
    display: flex;
    position: relative;
`
);

const CardHeading = experimentalStyled(Card)(
  ({ theme }) => `
    position: absolute;
    background: ${theme.colors.gradients.blue3};
    opacity: .9;
    padding: ${theme.spacing(2, 3)};
    bottom: ${theme.spacing(4)};
    left: ${theme.spacing(4)};
    max-width: 480px;

    @media (max-width: ${theme.breakpoints.values.sm}px) {
      left: 0;
      bottom: 0;
      width: 100%;
      max-width: none;
    }

    .MuiTypography-h3 {
      color: ${theme.colors.alpha.trueWhite[100]};
    }
    
    .MuiTypography-h4 {
      font-weight: normal;
      color: ${theme.colors.alpha.trueWhite[70]};
    }
`
);

const AvatarSuccess = experimentalStyled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.success.light};
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
`
);

function Hero() {
  const { t }: { t: any } = useTranslation();

  return (
    <Box sx={{ textAlign: 'center', pt: { xs: 5, sm: 10 } }}>
      <Box display="flex" flexWrap="wrap" justifyContent="center" mb={5}>
        <Box display="flex" alignItems="center" my={2} mx={2}>
          <AvatarSuccess sx={{ mr: 1 }}>
            <CheckTwoToneIcon fontSize="small" />
          </AvatarSuccess>
          <Typography variant="h4">React</Typography>
        </Box>
        <Box display="flex" alignItems="center" my={2} mx={2}>
          <AvatarSuccess sx={{ mr: 1 }}>
            <CheckTwoToneIcon fontSize="small" />
          </AvatarSuccess>
          <Typography variant="h4">Typescript</Typography>
        </Box>
        <Box display="flex" alignItems="center" my={2} mx={2}>
          <AvatarSuccess sx={{ mr: 1 }}>
            <CheckTwoToneIcon fontSize="small" />
          </AvatarSuccess>
          <Typography variant="h4">Javascript</Typography>
        </Box>
        <Box display="flex" alignItems="center" my={2} mx={2}>
          <AvatarSuccess sx={{ mr: 1 }}>
            <CheckTwoToneIcon fontSize="small" />
          </AvatarSuccess>
          <Typography variant="h4">Material-UI v.5</Typography>
        </Box>
        <Box display="flex" alignItems="center" my={2} mx={2}>
          <AvatarSuccess sx={{ mr: 1 }}>
            <CheckTwoToneIcon fontSize="small" />
          </AvatarSuccess>
          <Typography variant="h4">Figma</Typography>
        </Box>
        <Box display="flex" alignItems="center" my={2} mx={2}>
          <Tooltip
            arrow
            title={t(
              'Next release will include the Sketch design source files'
            )}
          >
            <AvatarSuccess sx={{ mr: 1 }}>
              <CheckTwoToneIcon fontSize="small" />
            </AvatarSuccess>
          </Tooltip>
          <Typography variant="h4">Sketch</Typography>
        </Box>
      </Box>

      <TypographyH1 sx={{ mb: 2 }} variant="h1">
        {t('Tokyo React Admin Dashboard')}
      </TypographyH1>
      <Container maxWidth="md" sx={{ mb: { xs: 5, sm: 10 } }}>
        <TypographyH2
          sx={{ lineHeight: 1.5, px: 4, pb: 4 }}
          variant="h4"
          color="text.secondary"
          fontWeight="normal"
        >
          {t(
            'High performance React template built with lots of powerful Material-UI components across multiple product niches for fast & perfect apps development processes'
          )}
        </TypographyH2>
        <Button
          component={RouterLink}
          to="/preview/dashboards/analytics"
          size="large"
          variant="contained"
        >
          {t('Browse Live Preview')}
        </Button>
      </Container>
      <VideoWrapper>
        <Hidden smDown>
          <WaveWrapper>
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1440 260"
              style={{ transform: 'rotate(180deg)' }}
            >
              <path
                d="M0,104L40,86.7C80,69,160,35,240,56.3C320,78,400,156,480,177.7C560,199,640,165,720,164.7C800,165,880,199,960,208C1040,217,1120,199,1200,164.7C1280,130,1360,78,1440,82.3C1520,87,1600,147,1680,151.7C1760,156,1840,104,1920,69.3C2000,35,2080,17,2160,43.3C2240,69,2320,139,2400,177.7C2480,217,2560,225,2640,199.3C2720,173,2800,113,2880,91C2960,69,3040,87,3120,78C3200,69,3280,35,3360,39C3440,43,3520,87,3600,117C3680,147,3760,165,3840,160.3C3920,156,4000,130,4080,108.3C4160,87,4240,69,4320,69.3C4400,69,4480,87,4560,112.7C4640,139,4720,173,4800,173.3C4880,173,4960,139,5040,117C5120,95,5200,87,5280,73.7C5360,61,5440,43,5520,39C5600,35,5680,43,5720,47.7L5760,52L5760,260L5720,260C5680,260,5600,260,5520,260C5440,260,5360,260,5280,260C5200,260,5120,260,5040,260C4960,260,4880,260,4800,260C4720,260,4640,260,4560,260C4480,260,4400,260,4320,260C4240,260,4160,260,4080,260C4000,260,3920,260,3840,260C3760,260,3680,260,3600,260C3520,260,3440,260,3360,260C3280,260,3200,260,3120,260C3040,260,2960,260,2880,260C2800,260,2720,260,2640,260C2560,260,2480,260,2400,260C2320,260,2240,260,2160,260C2080,260,2000,260,1920,260C1840,260,1760,260,1680,260C1600,260,1520,260,1440,260C1360,260,1280,260,1200,260C1120,260,1040,260,960,260C880,260,800,260,720,260C640,260,560,260,480,260C400,260,320,260,240,260C160,260,80,260,40,260L0,260Z"
                fillOpacity="1"
                strokeLinecap="round"
                strokeLinejoin="miter"
              ></path>
            </svg>
          </WaveWrapper>
        </Hidden>
        <BoxContent>
          <Container maxWidth="md">
            <CardIframe>
              <iframe
                style={{ width: '100%', height: 534 }}
                src="https://www.youtube.com/embed/je1Yf1LO8Nw?autoplay=1&rel=0&loop=1&controls=0&modestbranding=1&rel=0"
                title="Tokyo React Admin Dashboard"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <CardHeading>
                <Typography sx={{ mb: 2 }} variant="h3" textAlign="left">
                  {t(
                    'Multiple layouts, color schemes, applications and management sections'
                  )}
                </Typography>
                <Typography variant="h4" gutterBottom textAlign="left">
                  {t(
                    'With over 130 individual components, we’ve got you covered'
                  )}
                </Typography>
              </CardHeading>
            </CardIframe>
          </Container>
        </BoxContent>
        <WaveWrapper className="MuiWave-bottom">
          <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 1440 260">
            <path
              d="M0,26L40,30.3C80,35,160,43,240,52C320,61,400,69,480,82.3C560,95,640,113,720,125.7C800,139,880,147,960,130C1040,113,1120,69,1200,43.3C1280,17,1360,9,1440,13C1520,17,1600,35,1680,43.3C1760,52,1840,52,1920,73.7C2000,95,2080,139,2160,143C2240,147,2320,113,2400,82.3C2480,52,2560,26,2640,43.3C2720,61,2800,121,2880,147.3C2960,173,3040,165,3120,169C3200,173,3280,191,3360,203.7C3440,217,3520,225,3600,199.3C3680,173,3760,113,3840,99.7C3920,87,4000,121,4080,147.3C4160,173,4240,191,4320,173.3C4400,156,4480,104,4560,73.7C4640,43,4720,35,4800,26C4880,17,4960,9,5040,34.7C5120,61,5200,121,5280,138.7C5360,156,5440,130,5520,99.7C5600,69,5680,35,5720,17.3L5760,0L5760,260L5720,260C5680,260,5600,260,5520,260C5440,260,5360,260,5280,260C5200,260,5120,260,5040,260C4960,260,4880,260,4800,260C4720,260,4640,260,4560,260C4480,260,4400,260,4320,260C4240,260,4160,260,4080,260C4000,260,3920,260,3840,260C3760,260,3680,260,3600,260C3520,260,3440,260,3360,260C3280,260,3200,260,3120,260C3040,260,2960,260,2880,260C2800,260,2720,260,2640,260C2560,260,2480,260,2400,260C2320,260,2240,260,2160,260C2080,260,2000,260,1920,260C1840,260,1760,260,1680,260C1600,260,1520,260,1440,260C1360,260,1280,260,1200,260C1120,260,1040,260,960,260C880,260,800,260,720,260C640,260,560,260,480,260C400,260,320,260,240,260C160,260,80,260,40,260L0,260Z"
              fillOpacity="1"
              strokeLinecap="round"
              strokeLinejoin="miter"
            ></path>
          </svg>
        </WaveWrapper>
      </VideoWrapper>
    </Box>
  );
}

export default Hero;
