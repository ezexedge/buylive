import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem
} from '@material-ui/core';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';
import { experimentalStyled } from '@material-ui/core/styles';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';

const ListWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        
`
);

function Previews() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      Previews
    </>
  );
};

export default Previews;
