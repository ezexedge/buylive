import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

function PageHeader() {
  const { t }: { t: any } = useTranslation();

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h3" component="h3" gutterBottom>
              {t('Storefront')}
            </Typography>
            <Typography variant="subtitle2">
              {t('This is a list of all commerce products')}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, sm: 0 } }}
          component={RouterLink}
          startIcon={<EditTwoToneIcon />}
          to="/preview/management/commerce/products"
          variant="contained"
        >
          {t('Manage products')}
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
