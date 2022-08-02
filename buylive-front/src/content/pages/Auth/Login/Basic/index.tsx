import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
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
import Logo from 'src/components/LogoSign';

const icons = {
  Auth0: '/static/images/logo/auth0.svg',
  FirebaseAuth: '/static/images/logo/firebase.svg',
  JWT: '/static/images/logo/jwt.svg'
};

const CardImg = experimentalStyled(Card)(
  ({ theme }) => `
    width: 90px;
    height: 80px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${theme.colors.alpha.black[5]};
    margin: 0 ${theme.spacing(1)};
    border: 1px solid ${theme.colors.alpha.black[10]};
    transition: ${theme.transitions.create(['all'])};

    &:hover {
      border-color: ${theme.colors.primary.main};
      background: ${theme.colors.alpha.white[100]};
    }
`
);

const BottomWrapper = experimentalStyled(Card)(
  ({ theme }) => `
    padding: ${theme.spacing(3)};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
`
);

const MainContent = experimentalStyled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

const TopWrapper = experimentalStyled(Box)(
  () => `
  overflow: auto;
  display: flex;
  width: 100%;
  flex: 1;
  padding: 20px;
`
);

function LoginBasic() {
  const { method } = useAuth() as any;
  const { t }: { t: any } = useTranslation();

  return (
    <ContentWrapper title="Login - Basic">
      <MainContent>
        <TopWrapper>
          <Container maxWidth="sm">
            <Logo />
            <Card sx={{ mt: 3, px: 4, pt: 5, pb: 3 }}>
              <Box>
                <Typography variant="h2" sx={{ mb: 1 }}>
                  {t('Sign in')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{ mb: 3 }}
                >
                  {t('Fill in the fields below to sign into your account.')}
                </Typography>
              </Box>
              {method === 'Auth0' && <Auth0Login />}
              {method === 'FirebaseAuth' && <FirebaseAuthLogin />}
              {method === 'JWT' && <JWTLogin />}
              <Box my={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t('Don’t have an account, yet?')}
                </Typography>{' '}
                <Link component={RouterLink} to="/register-basic">
                  <b>Sign up here</b>
                </Link>
              </Box>
              {method !== 'Auth0' && (
                <Tooltip
                  title={t('Used only for the live preview demonstration !')}
                >
                  <Alert severity="warning">
                    Use <b>demo@example.com</b> and password <b>TokyoPass1@</b>
                  </Alert>
                </Tooltip>
              )}
            </Card>
          </Container>
        </TopWrapper>
        <BottomWrapper>
          <Box mb={3}>
            <Tooltip arrow placement="top" title="Auth0">
              <CardImg>
                <img height={50} alt="Auth0" src={icons['Auth0']} />
              </CardImg>
            </Tooltip>
            <Tooltip arrow placement="top" title="Firebase">
              <CardImg>
                <img height={50} alt="Firebase" src={icons['FirebaseAuth']} />
              </CardImg>
            </Tooltip>
            <Tooltip arrow placement="top" title="JSON Web Token">
              <CardImg>
                <img height={50} alt="JSON Web Token" src={icons['JWT']} />
              </CardImg>
            </Tooltip>
          </Box>

          <Alert severity="warning">
            {t(
              'Learn how to switch between auth methods by reading the section we’ve prepared in the documentation.'
            )}
          </Alert>
        </BottomWrapper>
      </MainContent>
    </ContentWrapper>
  );
}

export default LoginBasic;
