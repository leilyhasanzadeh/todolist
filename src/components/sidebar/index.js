import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import TodayIcon from '@mui/icons-material/Today';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { withTranslation } from "react-i18next";

const topList = [
    {
        text: 'Add',
        icon: <AddBoxIcon />
    },
    {
        text: 'Inbox',
        icon: <ListIcon />
    },
    {
        text: 'Today',
        icon: <TodayIcon />
    }
];

function Sidebar({t, ...props}) {
    
    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={() => {}}
          onKeyDown={() => {}}
        >
          <List>
            {topList.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={t(item.text)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[t('Trash')].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DeleteIcon />                    
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    return (
        <aside className='shadow-lg'>            
            {list("left")}
        </aside>
    );
}

export default withTranslation()(Sidebar);
        