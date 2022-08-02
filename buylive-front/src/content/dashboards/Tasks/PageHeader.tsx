import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useAuth from 'src/hooks/useAuth';

function PageHeader() {
  const { t }: { t: any } = useTranslation();
  const { user } = useAuth();

  return (
    <>
      <Typography variant="h2" component="h2" sx={{ pb: 1 }}>
        {t('Hello')}, {user.name}!
      </Typography>
      <Typography variant="h4" color="text.secondary" fontWeight="normal">
        {t(
          'Manage your day to day tasks with style! Enjoy a well built UI system.'
        )}
      </Typography>
    </>
  );
}

export default PageHeader;
