// prettier-ignore
import { AppBar, Badge, Divider, Drawer as DrawerMui, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { Route, Router } from "react-router-dom";
import { history } from "./configureStore";
import { Transaction } from "./model";
import { HomePage, TransactionPage } from "./pages";
import { RootState } from "./reducers/index";
import { withRoot } from "./withRoot";
import { lightGreen } from "@material-ui/core/colors";

function Routes() {
	const classes = useStyles();

	return (
		<div className={classes.content}>
			<Route exact={true} path="/" component={HomePage} />
			<Route exact={true} path="/home" component={HomePage} />
			<Route exact={true} path="/transaction" component={TransactionPage} />
		</div>
	);
}

function Drawer(props: { transactionList: Transaction[] }) {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.drawerHeader} />
			<Divider />
			<List className={classes.List}>
				<ListItem button onClick={() => history.push("/")}>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItem>
			</List>
			<Divider />
			<List className={classes.List}> 
				<ListItem button onClick={() => history.push("/transaction")}>
					<ListItemText primary="Transactions" />
				</ListItem>
			</List>
			<Divider />
			<List className={classes.List}>
				<ListItem button onClick={() => history.push("/accounts")}>
					<ListItemText primary="Accounts" />
				</ListItem>
			</List>
			<Divider />
			<List className={classes.List}>
				<ListItem button onClick={() => history.push("/settings")}>
					<ListItemText primary="Settings" />
				</ListItem>
			</List>
			<Divider />
		</div>
	);
}

function App() {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(true);
	const transactionList = useSelector((state: RootState) => state.transactionList);
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("sm")
	);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Router history={history}>
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerToggle}
								className={classes.navIconHide}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								variant="h6"
								color="inherit"
								noWrap={isMobile}
							>
								A Transaction Tracking React App written with Typescript and built with Redux used CRA Template
							</Typography>
						</Toolbar>
					</AppBar>
					<Hidden mdUp>
						<DrawerMui
							variant="temporary"
							anchor={"left"}
							open={mobileOpen}
							classes={{
								paper: classes.drawerPaper,
							}}
							onClose={handleDrawerToggle}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
						>
							<Drawer transactionList={transactionList} />
						</DrawerMui>
					</Hidden>
					<Hidden smDown>
						<DrawerMui
							variant="permanent"
							open
							classes={{
								paper: classes.drawerPaper,
							}}
						>
							<Drawer transactionList={transactionList} />
						</DrawerMui>
					</Hidden>
					<Routes />
				</div>
			</div>
		</Router>
	);
}

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: 1,
		overflow: "hidden",
		
	},
	appFrame: {
		position: "relative",
		display: "flex",
		width: "100%",
		height: "100%",
		
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		position: "absolute",
		backgroundColor: "#4e7985bf" 
	},
	navIconHide: {
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	drawerHeader: { ...theme.mixins.toolbar },
	drawerPaper: {
		width: 250,
		backgroundColor: theme.palette.background.default,
		[theme.breakpoints.up("md")]: {
			width: drawerWidth,
			position: "relative",
			height: "100%",
		},
	},
	content: {
		backgroundColor: theme.palette.background.default,
		width: "100%",
		height: "calc(100% - 56px)",
		marginTop: 56,
		[theme.breakpoints.up("sm")]: {
			height: "calc(100% - 64px)",
			marginTop: 64,
		},
	},
	List: {
		backgroundColor: "#4e79854f"
	}
}));

export default withRoot(App);
