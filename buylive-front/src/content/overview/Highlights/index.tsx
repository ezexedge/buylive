import { useTranslation } from 'react-i18next';
import {
  Box,
  Grid,
  Container,
  Card,
  Avatar,
  ListItem,
  ListItemText,
  List,
  Typography,
  Button,
  Tooltip
} from '@material-ui/core';
import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';
import { experimentalStyled } from '@material-ui/core/styles';
import deFlag from 'country-flag-icons/3x2/DE.svg';
import usFlag from 'country-flag-icons/3x2/US.svg';
import esFlag from 'country-flag-icons/3x2/ES.svg';
import frFlag from 'country-flag-icons/3x2/FR.svg';
import cnFlag from 'country-flag-icons/3x2/CN.svg';
import aeFlag from 'country-flag-icons/3x2/AE.svg';

const AvatarSuccess = experimentalStyled(Avatar)(
  ({ theme }) => `
    background: ${theme.colors.success.light};
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
`
);

const BoxRtl = experimentalStyled(Box)(
  ({ theme }) => `
    background: ${theme.colors.alpha.white[100]};
`
);

const ImageWrapper = experimentalStyled('img')(
  ({ theme }) => `
        margin-right: ${theme.spacing(1)};
        width: 44px;
`
);

const CardImageWrapper = experimentalStyled(Card)(
  () => `
    display: flex;
    position: relative;
    z-index: 6;

    img {
      width: 100%;
      height: auto;
    }
`
);

const CardImg = experimentalStyled(Card)(
  ({ theme }) => `
    position: absolute;
    border-radius: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.alpha.black[10]};
    transition: ${theme.transitions.create(['border'])};

    &:hover {
      border-color: ${theme.colors.primary.main};
    }
`
);

const TypographyH1 = experimentalStyled(Typography)(
  ({ theme }) => `
    color: ${theme.colors.primary.main};
    font-size: ${theme.typography.pxToRem(36)};
`
);

const TypographyH1Primary = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(36)};
`
);

const TypographyH2 = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const BoxHighlights = experimentalStyled(Box)(
  () => `
    position: relative;
    z-index: 5;
`
);

const BlowWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    position: relative;
    margin-top: ${theme.spacing(5)};
`
);

const Blob1 = experimentalStyled(Box)(
  ({ theme }) => `
  background: ${theme.colors.alpha.black[70]};
  width: 260px;
    height: 260px;
    position: absolute;
    z-index: 5;
    top: -${theme.spacing(9)};
    right: -${theme.spacing(7)};
    border-radius: 30% 70% 82% 18% / 26% 22% 78% 74%;
`
);

const Blob2 = experimentalStyled(Box)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[100]};
    width: 140px;
    bottom: -${theme.spacing(5)};
    left: -${theme.spacing(5)};
    position: absolute;
    z-index: 5;
    height: 140px;
    border-radius: 77% 23% 30% 70% / 81% 47% 53% 19% ;
`
);

const ScreenshotWrapper = experimentalStyled(Card)(
  ({ theme }) => `
    perspective: 700px;
    display: flex;
    overflow: visible;
    background: ${theme.colors.alpha.black[100]};
`
);

const Screenshot = experimentalStyled('img')(
  ({ theme }) => `
    width: 100%;
    height: auto;
    transform: rotateY(-35deg);
    border-radius: ${theme.general.borderRadius};
`
);

const icons = {
  Auth0: '/static/images/logo/auth0.svg',
  FirebaseAuth: '/static/images/logo/firebase.svg',
  JWT: '/static/images/logo/jwt.svg'
};

function Highlights() {
  const { t }: { t: any } = useTranslation();

  return (
    <BoxHighlights id="key-features">
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 10 } }}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            mb: { xs: 5, md: 10 },
            flexWrap: { xs: 'wrap', md: 'nowrap' }
          }}
        >
          <Box display="flex" alignItems="center" p={3} mx={3}>
            <TypographyH1 variant="h1" sx={{ pr: 1 }}>
              12
            </TypographyH1>
            <Typography variant="h4" color="text.secondary">
              dashboards
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" p={3} mx={3}>
            <TypographyH1 variant="h1" sx={{ pr: 1 }}>
              6
            </TypographyH1>
            <Typography variant="h4" color="text.secondary">
              applications
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" p={3} mx={3}>
            <TypographyH1 variant="h1" sx={{ pr: 1 }}>
              5
            </TypographyH1>
            <Typography variant="h4" color="text.secondary">
              management sections
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" p={3} mx={3}>
            <TypographyH1 variant="h1" sx={{ pr: 1 }}>
              5
            </TypographyH1>
            <Typography variant="h4" color="text.secondary">
              dark/light themes
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" p={3} mx={3}>
            <TypographyH1 variant="h1" sx={{ pr: 1 }}>
              130+
            </TypographyH1>
            <Typography variant="h4" color="text.secondary">
              components
            </Typography>
          </Box>
        </Box>
        <TypographyH1Primary textAlign="center" sx={{ mb: 2 }} variant="h1">
          {t('Key Features')}
        </TypographyH1Primary>
        <Container sx={{ mb: 6 }} maxWidth="sm">
          <TypographyH2
            sx={{ pb: 4 }}
            textAlign="center"
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            {t(
              'Some of the features that make Tokyo one of the best admin templates available today'
            )}
          </TypographyH2>
        </Container>

        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2">
              {t('Blazing-Fast Performance')}
            </Typography>
            <TypographyH2
              sx={{ my: 2 }}
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
            >
              {t('Beautiful design is nothing with performance')}.
            </TypographyH2>
            <Typography variant="subtitle2">
              {t(
                "We've built Tokyo using modern industry standards all packed under Material-UI components"
              )}
              .
            </Typography>
            <List sx={{ mt: 2 }}>
              <ListItem>
                <AvatarSuccess sx={{ mr: 2 }}>
                  <CheckTwoToneIcon />
                </AvatarSuccess>
                <ListItemText
                  primary={t(
                    '96+ Google Lighthouse performance score across all app pages.'
                  )}
                />
              </ListItem>
              <ListItem>
                <AvatarSuccess sx={{ mr: 2 }}>
                  <CheckTwoToneIcon />
                </AvatarSuccess>
                <ListItemText
                  primary={t(
                    'Perfectly responsive. Go ahead, browse the live preview and resize any page.'
                  )}
                />
              </ListItem>
              <ListItem>
                <AvatarSuccess sx={{ mr: 2 }}>
                  <CheckTwoToneIcon />
                </AvatarSuccess>
                <ListItemText
                  primary={t(
                    'Progressive Web App Optimized. You can view Tokyo offline on any screen size.'
                  )}
                />
              </ListItem>
              <ListItem>
                <AvatarSuccess sx={{ mr: 2 }}>
                  <CheckTwoToneIcon />
                </AvatarSuccess>
                <ListItemText
                  primary={t(
                    'Google Lighthouse Best Practices and SEO scrores over 95 for all pages.'
                  )}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <BlowWrapper>
              <Blob1 />
              <Blob2 />
              <CardImageWrapper>
                <img
                  src="/static/images/overview/performance.png"
                  alt="Tokyo Performance"
                />
              </CardImageWrapper>
            </BlowWrapper>
          </Grid>
        </Grid>

        <Box pt={30}>
          <Typography textAlign="center" sx={{ mb: 2 }} variant="h2">
            {t('Integrated Auth Services')}
          </Typography>
          <Container sx={{ position: 'relative', pb: 4 }} maxWidth="sm">
            <Tooltip arrow placement="top" title="Auth0">
              <CardImg sx={{ width: 80, height: 80, top: -110, left: -30 }}>
                <img width={40} alt="Auth0" src={icons['Auth0']} />
              </CardImg>
            </Tooltip>
            <Tooltip arrow placement="top" title="Firebase">
              <CardImg sx={{ width: 120, height: 120, top: -40, left: -190 }}>
                <img width={50} alt="Firebase" src={icons['FirebaseAuth']} />
              </CardImg>
            </Tooltip>
            <Tooltip arrow placement="top" title="JSON Web Token">
              <CardImg sx={{ width: 130, height: 130, top: -50, right: -160 }}>
                <img width={80} alt="JSON Web Token" src={icons['JWT']} />
              </CardImg>
            </Tooltip>
            <TypographyH2
              sx={{ pb: 4 }}
              textAlign="center"
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
            >
              {t(
                'Easily switch between multiple integrated auth methods based on your app needs'
              )}
              .
            </TypographyH2>
          </Container>

          <Grid container sx={{ textAlign: 'center' }} spacing={3}>
            <Grid item xs={12} md={4}>
              <AvatarSuccess sx={{ mx: 'auto', width: 50, height: 50 }}>
                <CheckTwoToneIcon />
              </AvatarSuccess>
              <Typography variant="h3" sx={{ py: 2 }}>
                {t('Multiple Auth Methods')}
              </Typography>
              <Typography variant="subtitle2">
                {t(
                  'Firebase, JWT Tokens and Auth0 are available in this release'
                )}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <AvatarSuccess sx={{ mx: 'auto', width: 50, height: 50 }}>
                <CheckTwoToneIcon />
              </AvatarSuccess>
              <Typography variant="h3" sx={{ py: 2 }}>
                {t('Status Pages')}
              </Typography>
              <Typography variant="subtitle2">
                {t(
                  'Multiple status pages included 500, 404 Error Pages, Coming Soon, Maintenance'
                )}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <AvatarSuccess sx={{ mx: 'auto', width: 50, height: 50 }}>
                <CheckTwoToneIcon />
              </AvatarSuccess>
              <Typography variant="h3" sx={{ py: 2 }}>
                {t('Auth Pages')}
              </Typography>
              <Typography variant="subtitle2">
                {t(
                  'Login/Register Pages, Wizards, Recover Password with confirmation'
                )}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <BoxRtl sx={{ mt: { xs: 5, md: 15 }, py: { xs: 5, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid
              item
              xs={12}
              md={5}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Box>
                <TypographyH1Primary variant="h1">
                  {t('Right-To-Left Layouts & Translation-Ready')}
                </TypographyH1Primary>
                <Typography variant="subtitle2" sx={{ py: 2 }}>
                  {t(
                    "Follow our documentation files to find out how to switch to a RTL layout. It's easy!"
                  )}
                </Typography>
                <Typography variant="h4" sx={{ my: 2 }}>
                  {t('Languages already integrated')}:
                </Typography>
                <ImageWrapper alt="USA" src={usFlag} />
                <ImageWrapper alt="Germany" src={deFlag} />
                <ImageWrapper alt="Spain" src={esFlag} />
                <ImageWrapper alt="France" src={frFlag} />
                <ImageWrapper alt="China" src={cnFlag} />
                <ImageWrapper alt="United Arab Emirates" src={aeFlag} />

                <Typography sx={{ pt: 1 }} variant="subtitle1">
                  {t(
                    'You can add and define translations for any language required. '
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <ScreenshotWrapper>
                <Screenshot
                  src="/static/images/overview/rtl-preview.jpg"
                  alt="RTL Preview"
                />
              </ScreenshotWrapper>
            </Grid>
          </Grid>
        </Container>
      </BoxRtl>
      <Container sx={{ py: { xs: 5, md: 20 } }} maxWidth="md">
        <TypographyH1Primary textAlign="center" sx={{ mb: 2 }} variant="h1">
          {t('Design Source Files')}
        </TypographyH1Primary>
        <Container sx={{ mb: 6 }} maxWidth="sm">
          <TypographyH2
            sx={{ pb: 4 }}
            textAlign="center"
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            {t(
              'Start working on your project directly from one of the included starter kits or use the Figma/Sketch files to create a prototype first'
            )}
          </TypographyH2>
        </Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ overflow: 'visible' }}>
              <AvatarSuccess
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  position: 'relative',
                  top: -28
                }}
              >
                <CheckTwoToneIcon />
              </AvatarSuccess>
              <Box
                px={4}
                pb={4}
                display={{ xs: 'block', md: 'flex' }}
                alignItems="flex-start"
              >
                <img
                  src="/static/images/overview/figma.svg"
                  style={{ width: 60 }}
                  alt="Figma Design Files"
                />
                <Box sx={{ pl: { xs: 0, md: 3 } }}>
                  <Typography variant="h3">
                    Figma {t('Design Files')}
                  </Typography>
                  <Typography sx={{ pt: 1, pb: 2 }} variant="subtitle2">
                    {t(
                      'Complete with reusable components, all pages and sections are available in the Figma ecosystem.'
                    )}
                  </Typography>
                  <Button
                    component="a"
                    target="_blank"
                    href="https://www.figma.com/file/XVw1wWOvmpn3UljELShZi3/Tokyo-Admin-Dashboard"
                    rel="noopener"
                    variant="outlined"
                  >
                    {t('View Figma Preview')}
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ overflow: 'visible' }}>
              <AvatarSuccess
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  position: 'relative',
                  top: -28
                }}
              >
                <CheckTwoToneIcon />
              </AvatarSuccess>
              <Box
                px={4}
                pb={4}
                display={{ xs: 'block', md: 'flex' }}
                alignItems="flex-start"
              >
                <img
                  src="/static/images/overview/sketch.svg"
                  style={{ width: 60 }}
                  alt="Sketch Design Files"
                />
                <Box sx={{ pl: { xs: 0, md: 3 } }}>
                  <Typography variant="h3">
                    Sketch {t('Design Files')}
                  </Typography>
                  <Typography sx={{ pt: 1, pb: 2 }} variant="subtitle2">
                    {t(
                      'Tokyo contains Figma + Sketch design files for Standard Plus and Extended Licenses. Adobe XD files comming in next release.'
                    )}
                  </Typography>
                  <Button disabled variant="outlined">
                    {t('View Sketch Preview')}
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </BoxHighlights>
  );
}

export default Highlights;
