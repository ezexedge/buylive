import { Box, List, ListItem, ListItemText } from '@material-ui/core';
// import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';

function HeaderMenu() {
  const { t }: { t: any } = useTranslation();

  // const ref = useRef<any>(null);
  // const [isOpen, setOpen] = useState<boolean>(false);

  // const handleOpen = (): void => {
  //   setOpen(true);
  // };

  // const handleClose = (): void => {
  //   setOpen(false);
  // };

  return (
    <>
      <List sx={{ pl: { xs: 0, md: 2 } }} component={Box} display="flex">
        <ListItem
          classes={{ root: 'MuiListItem-indicators' }}
          button
          component="a"
          href="#key-features"
        >
          <ListItemText
            primaryTypographyProps={{ noWrap: true }}
            primary={t('Key Features')}
          />
        </ListItem>
        {/* <ListItem
          classes={{ root: 'MuiListItem-indicators' }}
          button
          ref={ref}
          onClick={handleOpen}
        >
          <ListItemText
            primaryTypographyProps={{ noWrap: true }}
            primary={
              <Box display="flex" alignItems="center">
                {t('Demo Pages')}
                <Box display="flex" alignItems="center" pl={0.3}>
                  <ExpandMoreTwoToneIcon fontSize="small" />
                </Box>
              </Box>
            }
          />
        </ListItem> */}
      </List>
      {/* <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem component="a" href="#dashboards-preview">
          {t('Dashboards')}
        </MenuItem>
        <MenuItem component="a" href="#applications-preview">
          {t('Applications')}
        </MenuItem>
        <MenuItem component="a" href="#management-preview">
          {t('Management')}
        </MenuItem>
      </Menu> */}
    </>
  );
}

export default HeaderMenu;
