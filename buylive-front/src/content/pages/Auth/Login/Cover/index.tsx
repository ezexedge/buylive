import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  Hidden,
  Link,
  Tooltip,
  Typography,
  Container,
  Alert
} from '@material-ui/core';
import ContentWrapper from 'src/components/ContentWrapper';
import useAuth from 'src/hooks/useAuth';
import Auth0Login from '../LoginAuth0';
import FirebaseAuthLogin from '../LoginFirebaseAuth';
import JWTLogin from '../LoginJWT';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import Logo from 'src/components/Logo';
import { Scrollbars } from 'react-custom-scrollbars-2';

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
`
);

const SidebarWrapper = experimentalStyled(Box)(
  ({ theme }) => `
    background: ${theme.colors.alpha.white[100]};
    width: 440px;
`
);

const SidebarContent = experimentalStyled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: ${theme.spacing(6)};
  background-color: #1975FF;

`
);

const CardImg = experimentalStyled(Card)(
  ({ theme }) => `
    border-radius: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid ${theme.colors.alpha.black[10]};
    transition: ${theme.transitions.create(['border'])};

    &:hover {
      border-color: ${theme.colors.primary.main};
    }
`
);

const TypographyH1 = experimentalStyled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(33)};
`
);

function LoginCover() {
  const { method } = useAuth() as any;
  const { t }: { t: any } = useTranslation();

  return (
    <ContentWrapper title="Login - Cover">
      <Content>
        <Hidden mdDown>
          <SidebarWrapper>
            <Scrollbars autoHide>
              <SidebarContent>
               
                <Box>
                  <TypographyH1 variant="h1" style={{'color': 'white','textAlign':'center'}}>
                    Buylive
                  </TypographyH1>

                 
                </Box>
              </SidebarContent>
            </Scrollbars>
          </SidebarWrapper>
        </Hidden>
        <MainContent>
          <Container maxWidth="sm">
            <Card sx={{ mt: 3, px: 4, py: 5 }}>
              <Box textAlign="center">
                <Typography variant="h2" sx={{ mb: 1 }}>
                  {t('Inicia sesión')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ mb: 3 }}
                >
                </Typography>
              </Box>
              {method === 'Auth0' && <Auth0Login />}
              {method === 'FirebaseAuth' && <FirebaseAuthLogin />}
              {method === 'JWT' && <JWTLogin />}
              <Box mt={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t('no tienes una cuenta?')}
                </Typography>{' '}
                <Link component={RouterLink} to="/register">
                  <b>Registrarme</b>
                </Link>
              </Box>
            </Card>
            
          </Container>
        </MainContent>
      </Content>
    </ContentWrapper>
  );
}

export default LoginCover;
