import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Typography, Button } from '@material-ui/core';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';

function PageHeader() {
  const { t }: { t: any } = useTranslation();

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {t('Products')}
        </Typography>
        <Typography variant="subtitle2">
          {t('Use this page to manage your products , the fast and easy way.')}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, sm: 0 } }}
          component={RouterLink}
          to="/preview/management/commerce/products/create"
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          {t('Create product')}
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
