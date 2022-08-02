import type { FC } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import type { Tag } from 'src/models/mailbox';
import Label from 'src/components/Label';

import InboxTwoToneIcon from '@material-ui/icons/InboxTwoTone';
import OutboxTwoToneIcon from '@material-ui/icons/OutboxTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';
import AutoDeleteTwoToneIcon from '@material-ui/icons/AutoDeleteTwoTone';
import LocalOfferTwoToneIcon from '@material-ui/icons/LocalOfferTwoTone';

interface MailboxSidebarItemProps {
  tag: Tag;
}

const categoryTagIcons = {
  inbox: InboxTwoToneIcon,
  outbox: OutboxTwoToneIcon,
  favourites: FavoriteTwoToneIcon,
  drafts: DraftsTwoToneIcon,
  deleted: AutoDeleteTwoToneIcon
};

const getTagIcon = (tag: any) => {
  if (tag.type === 'category_tag') {
    return categoryTagIcons[tag.id];
  }

  return LocalOfferTwoToneIcon;
};

const getTo = (tag: any): string => {
  const url = '/preview/applications/mailbox';

  if (tag.type === 'category_tag') {
    return `${url}/${tag.id}`;
  }

  if (tag.type === 'label_tag') {
    return `${url}/tag/${tag.name}`;
  }

  return url;
};

const getColor = (tag: any): string => {
  if (tag.type === 'label_tag') {
    return tag.color;
  }

  return null;
};

const MailboxSidebarItem: FC<MailboxSidebarItemProps> = ({ tag, ...rest }) => {
  const TagIcon = getTagIcon(tag);
  const route = getTo(tag);
  const color = getColor(tag);
  const showNewMails = Boolean(tag.newMails && tag.newMails > 0);
  const tagType = Boolean(tag.type && tag.type === 'label_tag');

  return (
    <ListItem
      button
      component={RouterLink}
      to={route}
      activeClassName="Mui-selected"
      exact
      {...rest}
    >
      <ListItemIcon>
        <TagIcon color="inherit" sx={{ color: color }} />
      </ListItemIcon>

      <ListItemText
        primary={tag.name}
        primaryTypographyProps={{ fontWeight: tagType ? null : 'bold' }}
      />
      {showNewMails && <Label color="primary">{tag.newMails}</Label>}
    </ListItem>
  );
};

MailboxSidebarItem.propTypes = {
  // @ts-ignore
  tag: PropTypes.object.isRequired
};

export default MailboxSidebarItem;
