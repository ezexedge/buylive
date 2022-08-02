import { FC, ChangeEvent, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Checkbox,
  IconButton,
  Tooltip,
  Typography,
  TextField,
  ListItemText,
  ListItem,
  List,
  InputAdornment,
  Menu
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import ArchiveTwoToneIcon from '@material-ui/icons/ArchiveTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import MarkEmailReadTwoToneIcon from '@material-ui/icons/MarkEmailReadTwoTone';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import ChevronLeftTwoToneIcon from '@material-ui/icons/ChevronLeftTwoTone';

interface ActionBarItemProps {
  mails: number;
  onDeselectAll?: () => void;
  onSelectAll?: () => void;
  selectedMails: number;
}

const SearchInputWrapper = experimentalStyled(TextField)(
  ({ theme }) => `
      .MuiInputBase-input {
          font-size: ${theme.typography.pxToRem(17)};
      }
`
);

const ActionBarItem: FC<ActionBarItemProps> = ({
  mails,
  onDeselectAll,
  onSelectAll,
  selectedMails
}) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) =>
    event.target.checked ? onSelectAll() : onDeselectAll();

  const selectedAllMails = selectedMails === mails && mails > 0;
  const selectedSomeMails = selectedMails > 0 && selectedMails < mails;
  const selectedBulkActions = selectedMails > 0;

  const { t }: { t: any } = useTranslation();

  const [onMenuOpen, menuOpen] = useState<boolean>(false);
  const moreRef = useRef<HTMLButtonElement | null>(null);

  const openMenu = (): void => {
    menuOpen(true);
  };

  const closeMenu = (): void => {
    menuOpen(false);
  };

  return (
    <>
      <Box px={3} sx={{ pt: { lg: 3 } }} pb={1}>
        <SearchInputWrapper
          autoFocus={true}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchTwoToneIcon />
              </InputAdornment>
            )
          }}
          placeholder={t('Search messages...')}
          fullWidth
        />
      </Box>
      <Box
        px={1.5}
        pb={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Tooltip arrow placement="top" title={t('Select all mails')}>
            <Checkbox
              checked={selectedAllMails}
              indeterminate={selectedSomeMails}
              onChange={handleCheckboxChange}
            />
          </Tooltip>
          {!selectedBulkActions && <Typography>{t('Select all')}</Typography>}
          {selectedBulkActions && (
            <Box>
              <Tooltip arrow placement="top" title={t('Archive')}>
                <IconButton color="primary" sx={{ ml: 1, p: 1 }}>
                  <ArchiveTwoToneIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="top" title={t('Delete')}>
                <IconButton color="primary" sx={{ p: 1 }}>
                  <DeleteTwoToneIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="top" title={t('Mark as read')}>
                <IconButton color="primary" sx={{ p: 1 }}>
                  <MarkEmailReadTwoToneIcon />
                </IconButton>
              </Tooltip>
              <IconButton
                color="primary"
                onClick={openMenu}
                ref={moreRef}
                sx={{ ml: 1, p: 1 }}
              >
                <MoreVertTwoToneIcon />
              </IconButton>
            </Box>
          )}
        </Box>

        {mails > 0 && (
          <Box display="flex" alignItems="center">
            <IconButton color="primary" sx={{ mr: 0.5, p: 0.5 }}>
              <ChevronLeftTwoToneIcon />
            </IconButton>

            <Typography variant="body2" color="text.secondary">
              <b>1</b> - <b>{mails}</b> {t('of')} <b>{mails}</b>
            </Typography>
            <IconButton color="primary" sx={{ ml: 0.5, p: 0.5 }}>
              <ChevronRightTwoToneIcon />
            </IconButton>
          </Box>
        )}
      </Box>
      <Menu
        keepMounted
        anchorEl={moreRef.current}
        open={onMenuOpen}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center'
        }}
        getContentAnchorEl={null}
      >
        <List sx={{ p: 1 }} component="nav">
          <ListItem button>
            <ListItemText primary={t('Mark as read')} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={t('Mark as important')} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={t('Filter messages like this')} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={t('Forward as attachment')} />
          </ListItem>
        </List>
      </Menu>
    </>
  );
};

ActionBarItem.propTypes = {
  mails: PropTypes.number.isRequired,
  onDeselectAll: PropTypes.func,
  onSelectAll: PropTypes.func,
  selectedMails: PropTypes.number.isRequired
};

ActionBarItem.defaultProps = {
  onDeselectAll: () => {},
  onSelectAll: () => {}
};

export default ActionBarItem;
