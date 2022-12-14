import { useRef, useState } from 'react';
import useAuth from 'src/hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Divider,
  lighten,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import InboxTwoToneIcon from '@material-ui/icons/InboxTwoTone';
import { experimentalStyled } from '@material-ui/core/styles';
import UnfoldMoreTwoToneIcon from '@material-ui/icons/UnfoldMoreTwoTone';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';

const UserBoxButton = experimentalStyled(Button)(
  ({ theme }) => `
    padding: ${theme.spacing(2)};
    background-color: ${theme.sidebar.menuItemBgActive};
            color: ${theme.sidebar.menuItemColorActive};

    .MuiButton-label {
      justify-content: flex-start;
    }
`
);

const MenuUserBox = experimentalStyled(Box)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(2)};
`
);

const UserBoxText = experimentalStyled(Box)(
  ({ theme }) => `
    text-align: left;
    padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = experimentalStyled(Typography)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.palette.secondary.main};
    display: block;
`
);

const UserBoxDescription = experimentalStyled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);

function SidebarTopSection() {
  const { t }: { t: any } = useTranslation();

  const history = useHistory();

  const { user, logout } = useAuth();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleLogout = async (): Promise<void> => {
    try {
      handleClose();
      await logout();
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <UserBoxButton fullWidth color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar variant="rounded" alt={user.name} src={user.avatar} />
        <Box
          display="flex"
          flex={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user.jobtitle}
            </UserBoxDescription>
          </UserBoxText>
          <UnfoldMoreTwoToneIcon fontSize="small" sx={{ ml: 1 }} />
        </Box>
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
      >
        <MenuUserBox sx={{ minWidth: 210 }} display="flex">
          <Avatar variant="rounded" alt={user.name} src={user.avatar} />
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {user.jobtitle}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Divider sx={{ mb: 0 }} />
        <List sx={{ p: 1 }} component="nav">
          <ListItem button to="/preview/management/user/1" component={NavLink}>
            <AccountBoxTwoToneIcon fontSize="small" />
            <ListItemText primary={t('Profile')} />
          </ListItem>
          <ListItem
            button
            to="/preview/applications/mailbox/inbox"
            component={NavLink}
          >
            <InboxTwoToneIcon fontSize="small" />
            <ListItemText primary={t('Inbox')} />
          </ListItem>
          <ListItem
            button
            to="/preview/applications/projects-board"
            component={NavLink}
          >
            <AccountTreeTwoToneIcon fontSize="small" />
            <ListItemText primary={t('Projects')} />
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button color="primary" fullWidth onClick={handleLogout}>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            {t('Sign out')}
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default SidebarTopSection;
