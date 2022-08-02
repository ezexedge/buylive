import type { FC } from 'react';
import PropTypes from 'prop-types';
import { Box, List, Button } from '@material-ui/core';
import { useSelector } from 'src/store';
import SidebarItem from './SidebarItem';
import { useTranslation } from 'react-i18next';
import { experimentalStyled } from '@material-ui/core/styles';

interface MailboxSidebarProps {
  containerRef: any;
}

const ListItemWrapper = experimentalStyled(SidebarItem)(
  ({ theme }) => `

    padding: ${theme.spacing(1)};

    .MuiTypography-root {
      font-size: ${theme.typography.pxToRem(15)};
      color: ${theme.colors.alpha.black[100]};
    }

    .MuiListItemIcon-root {
      color: ${theme.colors.primary.main};
      min-width: 34px;
    }

    .MuiTouchRipple-root {
      display: none;
    }

    &.Mui-selected {
      background-color: ${theme.colors.alpha.white[100]} !important;
    }

    &:hover {
      background-color: ${theme.colors.alpha.white[70]};
    }
`
);

const MailboxSidebar: FC<MailboxSidebarProps> = () => {
  const { tags } = useSelector((state) => state.mailbox);
  const { t }: { t: any } = useTranslation();

  return (
    <Box p={3}>
      <Button fullWidth variant="contained">
        {t('Compose message')}
      </Button>
      <List sx={{ mt: 3 }} component="div">
        {tags.map((tag) => (
          <ListItemWrapper key={tag.id} tag={tag} />
        ))}
      </List>
    </Box>
  );
};

MailboxSidebar.propTypes = {
  containerRef: PropTypes.any.isRequired
};

export default MailboxSidebar;
