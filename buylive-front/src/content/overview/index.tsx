import { Box, Container, Hidden, Card, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ContentWrapper from 'src/components/ContentWrapper';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import Logo from 'src/components/Logo';
import Menu from './Menu';
import Hero from './Hero';
import Highlights from './Highlights';
import SettingsButton from 'src/layouts/SidebarLayout/Header/Buttons/Settings';
import Footer from 'src/components/Footer';

const HeaderWrapper = experimentalStyled(Card)(
  ({ theme }) => `
    width: 100%;
    border-radius: 0;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 6;
    top: 0;
    height: ${theme.spacing(10)};
`
);

const OverviewWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    margin-top: ${theme.spacing(10)};
`
);

function Overview() {
  const { t }: { t: any } = useTranslation();

  return (
    <OverviewWrapper>
      <ContentWrapper title="Tokyo React Admin Dashboard">
        <HeaderWrapper>
          <Container maxWidth="lg">
            <Box display="flex" alignItems="center">
              <Logo />

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flex={1}
              >
                <Menu />
                <Box>
                  <Hidden smDown>
                    <SettingsButton />
                    <Button
                      sx={{ mx: 2 }}
                      size="small"
                      component="a"
                      href="https://material-ui.com/store/items/tokyo-react-admin-dashboard"
                      target="_blank"
                      rel="noopener"
                      variant="outlined"
                    >
                      {t('Buy now')}
                    </Button>
                  </Hidden>
                  <Button
                    size="small"
                    component={RouterLink}
                    to="/preview/dashboards/analytics"
                    variant="contained"
                  >
                    {t('Live Preview')}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
        </HeaderWrapper>
        <Hero />
        <Highlights />
      </ContentWrapper>
      <Footer />
    </OverviewWrapper>
  );
}

export default Overview;
