import {
  Button,
  Card,
  List,
  CardContent,
  CardHeader,
  ListItemAvatar,
  Avatar,
  Link,
  Divider,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import TrendingDown from '@material-ui/icons/TrendingDown';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import Text from 'src/components/Text';

function RecentTransactions() {
  const { t }: { t: any } = useTranslation();

  const AvatarWrapperError = experimentalStyled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.error.lighter};
      color:  ${theme.colors.error.main};
`
  );

  const AvatarWrapperSuccess = experimentalStyled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
  );

  const AvatarWrapperWarning = experimentalStyled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.warning.lighter};
      color:  ${theme.colors.warning.main};
`
  );

  return (
    <Card>
      <CardHeader
        action={
          <Button size="small" href="#">
            {t('View all')}
          </Button>
        }
        title={t('Recent Transactions')}
      />
      <Divider />
      <CardContent>
        <List disablePadding>
          <ListItem disableGutters>
            <ListItemAvatar>
              <AvatarWrapperSuccess>
                <CheckIcon fontSize="medium" />
              </AvatarWrapperSuccess>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Text color="black">
                  <b>$2499</b> paid by <b>Randy Smith</b> for Macbook PRO 16
                </Text>
              }
              primaryTypographyProps={{
                variant: 'body1',
                color: 'textPrimary',
                gutterBottom: true,
                noWrap: true
              }}
              secondary={
                <Text color="success">{t('Completed Successfully')}</Text>
              }
              secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
            />
          </ListItem>
          <Divider sx={{ my: 1 }} />
          <ListItem disableGutters>
            <ListItemAvatar>
              <AvatarWrapperWarning>
                <TrendingDown fontSize="medium" />
              </AvatarWrapperWarning>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Text color="black">
                  <b>Horia S.</b> is paying <b>$399</b> for a Google Nest
                  Thermostat
                </Text>
              }
              primaryTypographyProps={{
                variant: 'body1',
                color: 'textPrimary',
                gutterBottom: true,
                noWrap: true
              }}
              secondary={<Text color="warning">{t('Pending Payment')}</Text>}
              secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
            />
          </ListItem>
          <Divider sx={{ my: 1 }} />
          <ListItem disableGutters>
            <ListItemAvatar>
              <AvatarWrapperError>
                <CloseIcon fontSize="medium" />
              </AvatarWrapperError>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Text color="black">
                  <b>Poppy Freddy</b> tried paying <b>$199</b> for a Ring Smart
                  Door Bell
                </Text>
              }
              primaryTypographyProps={{
                variant: 'body1',
                color: 'textPrimary',
                gutterBottom: true,
                noWrap: true
              }}
              secondary={<Text color="error">{t('Payment Failed')}</Text>}
              secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
            />
          </ListItem>
          <Divider sx={{ my: 1 }} />

          <ListItem disableGutters>
            <ListItemAvatar>
              <AvatarWrapperSuccess>
                <CheckIcon fontSize="medium" />
              </AvatarWrapperSuccess>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Text color="black">
                  <b>Guest purchase</b> of <b>$999</b> made today in{' '}
                  <Link href="#">Electronics</Link>
                </Text>
              }
              primaryTypographyProps={{
                variant: 'body1',
                color: 'textPrimary',
                gutterBottom: true,
                noWrap: true
              }}
              secondary={
                <Text color="success">{t('Completed Successfully')}</Text>
              }
              secondaryTypographyProps={{ variant: 'body2', noWrap: true }}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default RecentTransactions;
