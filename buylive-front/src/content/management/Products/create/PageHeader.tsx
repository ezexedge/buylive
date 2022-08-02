import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';

const RootWrapper = experimentalStyled(Box)(
  () => `
    flex: 1;
`
);

function PageHeader() {
  const { t }: { t: any } = useTranslation();

  return (
    <RootWrapper>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h3" component="h3" gutterBottom>
                {t('Add new product')}
              </Typography>
              <Typography variant="subtitle2">
                {t('Fill in the fields below to create a new product')}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Button
            sx={{ mt: { xs: 2, sm: 0 } }}
            component={RouterLink}
            startIcon={<ArrowBackTwoToneIcon />}
            to="/preview/management/commerce/products"
            variant="contained"
          >
            {t('Go back to all products')}
          </Button>
        </Grid>
      </Grid>
    </RootWrapper>
  );
}

export default PageHeader;
