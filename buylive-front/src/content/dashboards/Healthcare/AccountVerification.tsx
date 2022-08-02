import { Button, Card, Typography, Avatar, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import AddTaskTwoToneIcon from '@material-ui/icons/AddTaskTwoTone';

const AvatarSuccess = experimentalStyled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(6)};
      height: ${theme.spacing(6)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const RootWrapper = experimentalStyled(Card)(
  ({ theme }) => `
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${theme.colors.gradients.blue3};
      color:  ${theme.colors.alpha.white[100]};
      padding: ${theme.spacing(2)};
`
);

const TypographyPrimary = experimentalStyled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.trueWhite[100]};
`
);

const TypographySecondary = experimentalStyled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.trueWhite[70]};
`
);

function AccountVerification() {
  const { t }: { t: any } = useTranslation();

  return (
    <RootWrapper sx={{ display: { xs: 'block', sm: 'flex' } }}>
      <Box display="flex" alignItems="center">
        <AvatarSuccess sx={{ mr: 2 }} variant="rounded">
          <AddTaskTwoToneIcon />
        </AvatarSuccess>
        <Box>
          <TypographyPrimary variant="h5">
            {t('Account Verification')}
          </TypographyPrimary>
          <TypographySecondary variant="subtitle2">
            {t('Your account is almost ready!')}
          </TypographySecondary>
        </Box>
      </Box>
      <Box sx={{ pt: { xs: 2, sm: 0 } }}>
        <Button variant="contained">{t('Confirm email address')}</Button>
      </Box>
    </RootWrapper>
  );
}

export default AccountVerification;
