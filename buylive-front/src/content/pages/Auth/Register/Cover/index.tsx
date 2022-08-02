import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  Container,
  Divider,
  Link,
  ListItemText,
  ListItem,
  List,
  ListItemIcon,
  Hidden,
  IconButton,
  Typography
} from '@material-ui/core';
import ContentWrapper from 'src/components/ContentWrapper';
import useAuth from 'src/hooks/useAuth';
import Auth0Register from '../RegisterAuth0';
import FirebaseAuthRegister from '../RegisterFirebaseAuth';
import JWTRegister from '../RegisterJWT';
import { useTranslation } from 'react-i18next';
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';
import { experimentalStyled } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Logo from 'src/components/LogoSign';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

const icons = {
  Auth0: '/static/images/logo/auth0.svg',
  FirebaseAuth: '/static/images/logo/firebase.svg',
  JWT: '/static/images/logo/jwt.svg'
};

const Content = experimentalStyled(Box)(
  () => `
    display: flex;
    height: 100%;
    flex: 1;
`
);

const MainContent = experimentalStyled(Box)(
  () => `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    position: relative;
`
);

const SidebarWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    background: ${theme.colors.gradients.blue3};
    width: 500px;
`
);

const SidebarContent = experimentalStyled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: ${theme.spacing(6)};
`
);

const CardImg = experimentalStyled(Card)(
  ({ theme }) => `
    border-radius: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 11px solid ${theme.colors.alpha.white[10]};
    transition: ${theme.transitions.create(['border'])};
    width: ${theme.spacing(16)};
    height: ${theme.spacing(16)};
    margin-bottom: ${theme.spacing(3)};
`
);

const SwipeIndicator = experimentalStyled(IconButton)(
  ({ theme }) => `
        color: ${theme.colors.alpha.white[50]};
        width: ${theme.spacing(6)};
        height: ${theme.spacing(6)};
        border-radius: 100px;
        transition: ${theme.transitions.create(['background', 'color'])};

        &:hover {
          color: ${theme.colors.alpha.white[100]};
          background: ${theme.colors.alpha.white[10]};
        }
`
);

const LogoWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    position: absolute;
    left: ${theme.spacing(4)};
    top: ${theme.spacing(4)};
`
);

const TypographyPrimary = experimentalStyled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[100]};
`
);

const TypographySecondary = experimentalStyled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[70]};
`
);

const DividerWrapper = experimentalStyled(Divider)(
  ({ theme }) => `
      background: ${theme.colors.alpha.white[10]};
`
);

const ListItemTextWrapper = experimentalStyled(ListItemText)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[70]};
`
);
const ListItemIconWrapper = experimentalStyled(ListItemIcon)(
  ({ theme }) => `
      color: ${theme.colors.success.main};
      min-width: 32px;
`
);

const SwiperWrapper = experimentalStyled(Box)(
  ({ theme }) => `
      .swiper-pagination {
        .swiper-pagination-bullet {
          background: ${theme.colors.alpha.white[30]};
          opacity: 1;
          transform: scale(1);

          &.swiper-pagination-bullet-active {
            background: ${theme.colors.alpha.white[100]};
            width: 16px;
            border-radius: 6px;
          }
        }
      }
`
);

function RegisterCover() {
  const { method } = useAuth() as any;
  const { t }: { t: any } = useTranslation();

  return (
    <ContentWrapper title="Register - Cover">
      <Content>
        <Hidden mdDown>
          <SidebarWrapper>
            <Scrollbars autoHide>
              <SidebarContent>
                <Box mb={2} display="flex" justifyContent="center">
                  <SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
                    <ChevronLeftTwoToneIcon fontSize="large" />
                  </SwipeIndicator>
                  <SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
                    <ChevronRightTwoToneIcon fontSize="large" />
                  </SwipeIndicator>
                </Box>
                <TypographyPrimary
                  align="center"
                  variant="h3"
                  sx={{ mb: 4, px: 8 }}
                >
                  {t('Multiple authentication methods available')}
                </TypographyPrimary>
                <SwiperWrapper>
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop
                    navigation={{
                      nextEl: '.MuiSwipe-right',
                      prevEl: '.MuiSwipe-left'
                    }}
                    pagination={{ dynamicBullets: true, clickable: true }}
                  >
                    <SwiperSlide>
                      <Box textAlign="center">
                        <CardImg>
                          <img
                            height={80}
                            alt="JSON Web Token"
                            src={icons['Auth0']}
                          />
                        </CardImg>
                        <TypographyPrimary
                          align="center"
                          variant="h3"
                          sx={{ mb: 2 }}
                        >
                          Auth0
                        </TypographyPrimary>
                        <TypographySecondary
                          align="center"
                          variant="subtitle2"
                          sx={{ mb: 5 }}
                        >
                          Auth0 is an easy to implement, adaptable
                          authentication and authorization platform.
                        </TypographySecondary>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box textAlign="center">
                        <CardImg>
                          <img
                            height={80}
                            alt="JSON Web Token"
                            src={icons['JWT']}
                          />
                        </CardImg>
                        <TypographyPrimary
                          align="center"
                          variant="h3"
                          sx={{ mb: 2 }}
                        >
                          JSON Web Token
                        </TypographyPrimary>
                        <TypographySecondary
                          align="center"
                          variant="subtitle2"
                          sx={{ mb: 5 }}
                        >
                          JSON Web Tokens are an open method for representing
                          claims securely between two parties.
                        </TypographySecondary>
                      </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Box textAlign="center">
                        <CardImg>
                          <img
                            height={80}
                            alt="Firebase"
                            src={icons['FirebaseAuth']}
                          />
                        </CardImg>
                        <TypographyPrimary
                          align="center"
                          variant="h3"
                          sx={{ mb: 2 }}
                        >
                          Firebase
                        </TypographyPrimary>
                        <TypographySecondary
                          align="center"
                          variant="subtitle2"
                          sx={{ mb: 5 }}
                        >
                          Firebase helps teams from startups to global
                          enterprises build &amp; run successful apps.
                        </TypographySecondary>
                      </Box>
                    </SwiperSlide>
                  </Swiper>
                </SwiperWrapper>

                <DividerWrapper sx={{ mt: 3, mb: 4 }} />
                <Box>
                  <TypographyPrimary variant="h3" sx={{ mb: 3 }}>
                    {t('Start your free trial today')}
                  </TypographyPrimary>

                  <List dense sx={{ mb: 3 }}>
                    <ListItem disableGutters>
                      <ListItemIconWrapper>
                        <CheckCircleOutlineTwoToneIcon />
                      </ListItemIconWrapper>
                      <ListItemTextWrapper
                        primaryTypographyProps={{ variant: 'h6' }}
                        primary={t('premium features included')}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemIconWrapper>
                        <CheckCircleOutlineTwoToneIcon />
                      </ListItemIconWrapper>
                      <ListItemTextWrapper
                        primaryTypographyProps={{ variant: 'h6' }}
                        primary={t('no credit card required')}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemIconWrapper>
                        <CheckCircleOutlineTwoToneIcon />
                      </ListItemIconWrapper>
                      <ListItemTextWrapper
                        primaryTypographyProps={{ variant: 'h6' }}
                        primary={t('modern development solutions')}
                      />
                    </ListItem>
                  </List>
                </Box>
              </SidebarContent>
            </Scrollbars>
          </SidebarWrapper>
        </Hidden>
        <MainContent>
          <Hidden smDown>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </Hidden>
          <Container maxWidth="sm">
            <Card sx={{ px: 4, py: 5 }}>
              <Box textAlign="center">
                <Typography variant="h2" sx={{ mb: 1 }}>
                  {t('Create account')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ mb: 3 }}
                >
                  {t('Fill in the fields below to sign up for an account.')}
                </Typography>
              </Box>
              {method === 'Auth0' && <Auth0Register />}
              {method === 'FirebaseAuth' && <FirebaseAuthRegister />}
              {method === 'JWT' && <JWTRegister />}
              <Box mt={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t('Already have an account?')}
                </Typography>{' '}
                <Link component={RouterLink} to="/login">
                  <b>Sign in here</b>
                </Link>
              </Box>
            </Card>
          </Container>
        </MainContent>
      </Content>
    </ContentWrapper>
  );
}

export default RegisterCover;
