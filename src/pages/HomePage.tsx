import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { TransactionPage } from "./TransactionPage";

export function HomePage() {
	const classes = useStyles();
	const [boxColor, setBoxColor] = React.useState("red");
	const transactionList = useSelector((state: RootState) => state.transactionList);

	
	return (
		<div className={classes.root}>
			<Typography variant="h4" gutterBottom>
				You have {transactionList.length} Transactions in your list!
			</Typography>
			<TransactionPage/>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		height: "100%",
		textAlign: "center",
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
	},

	centerContainer: {
		flex: 1,
		height: "90%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},

	button: {
		marginTop: 20,
	},
});
