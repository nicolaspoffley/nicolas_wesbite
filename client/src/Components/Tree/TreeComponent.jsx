import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import _ from "lodash";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import BusinessIcon from "@material-ui/icons/Business";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import organization from "./treeContent.json";

import {
  createTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    padding: "5px",
    background: 'white',
    border: 0,
    borderRadius: 3,
    boxShadow: '3px 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  expand: {
    transform: "rotate(0deg)",
    marginTop: -10,
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.short
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#ECECF4"
  }
}));

function Organization({ org, onCollapse, collapsed }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card
      className={classes.root}
    >
      <CardHeader
        avatar={
          <Tooltip
            title={`${_.size(
              org.parentChildRelationship
            )} Sub Profile, ${_.size(org.account)} Sub Account`}
            arrow
          >
            <Badge
              style={{ cursor: "pointer" }}
              color="secondary"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              showZero
              invisible={!collapsed}
              overlap="circular"
              badgeContent={_.size(org.parentChildRelationship)}
              onClick={onCollapse}
            >
              <Avatar className={classes.avatar}>
                <BusinessIcon color="primary" />
              </Avatar>
            </Badge>
          </Tooltip>
        }
        title={org.parent}
        action={
          <IconButton size="small" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
      />

      <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BusinessIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Add Sub Profile" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountBalanceIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Add Sub Account" />
        </MenuItem>
      </Menu>
      <IconButton
        size="small"
        onClick={onCollapse}
        className={clsx(classes.expand, {
          [classes.expandOpen]: !collapsed
        })}
      >
        <ExpandMoreIcon />
      </IconButton>
    </Card>
  );
}
function Account({ a }) {
  const classes = useStyles();
  const opacity = 1;
  return (
    <Card
      className={classes.root}
      style={{ cursor: "pointer", opacity }}
    >
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <AccountBalanceIcon color="secondary" />
          </Avatar>
        }
        title={a.name}
      />
    </Card>
  );
}
function Product({ p }) {
  const classes = useStyles();
  return (
    <div>
      <Card variant="outlined" className={classes.root}>
        <CardContent>
          <Typography variant="subtitle2">{p.name}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
function Node({ o, parent, root }) {
  const [collapsed, setCollapsed] = React.useState(root === true ? false : true);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  React.useEffect(() => {
    o.collapsed = collapsed;
  });
  const T = parent
    ? TreeNode
    : (props) => (
      <Tree
        {...props}
        lineWidth={"2px"}
        lineColor={"#bbc"}
        lineBorderRadius={"12px"}
      >
        {props.children}
      </Tree>
    );
  return collapsed ?
    (
      <T
        label={
          <Organization
            org={o}
            onCollapse={handleCollapse}
            collapsed={collapsed}
          />
        }
      />
    ) : (
      <T
        label={
          <Organization
            org={o}
            onCollapse={handleCollapse}
            collapsed={collapsed}
          />
        }
      >
        {_.map(o.entry, (a) => (
          <TreeNode label={<Account a={a} />}>
            <TreeNode label={<Product p={a.description} />} />
          </TreeNode>
        ))}
        {_.map(o.parentChildRelationship, (c, index) => (
          <Node o={c} parent={o} root={false} key={index} />
        ))}
      </T>
    );
}
const theme = createTheme({
  palette: {
    background: "#fbfebfb"
  },
  fontFamily: "Roboto, sans-serif"
});

export default function TreeComponent(props) {
  return (
    <div data-aos="fade-up">
      <ThemeProvider theme={theme}>
        <Box bgcolor="background" padding={4} height="80vh">
          <DndProvider backend={HTML5Backend}>
            <Node o={organization} root={true} />
          </DndProvider>
        </Box>
      </ThemeProvider>
    </div>
  );
}
