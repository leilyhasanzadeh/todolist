import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListIcon from "@mui/icons-material/List";
import TodayIcon from "@mui/icons-material/Today";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { withTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const topList = [
  {
    text: "Add",
    icon: <AddBoxIcon />,
  },
  {
    text: "Inbox",
    icon: <ListIcon />,
  },
  {
    text: "Today",
    icon: <TodayIcon />,
  },
];

function Sidebar({ t }) {
  const navigate = useNavigate();

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={() => {}}
      onKeyDown={() => {}}
    >
      <List>
        {topList.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() =>
                navigate(`/${item.text.toLocaleLowerCase()}`, { replace: true })
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={t(item.text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[t("Trash")].map((text) => (
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
  return <aside className="shadow-lg">{list("left")}</aside>;
}

Sidebar.propTypes = {
  t: PropTypes.func,
};

export default withTranslation()(Sidebar);
