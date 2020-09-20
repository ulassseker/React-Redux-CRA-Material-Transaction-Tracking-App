// prettier-ignore
import { IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../actions";
import * as TransactionActions from "../actions/transaction";
import { Transaction } from "../model";
import { RootState } from "../reducers";

export function TransactionTable() {
	const classes = useStyles();
	const transactionList = useSelector((state: RootState) => state.transactionList);
	const transactionActions = useActions(TransactionActions);

	return (
		<Paper className={classes.paper}>
			<TableContainer>
				
			</TableContainer>
			<Table stickyHeader className={classes.table}>
				<TableHead>
					<TableRow className={classes.tableRow}>
						<TableCell padding="default">İşlem Adı</TableCell>
						<TableCell padding="default">Açıklama</TableCell>
						<TableCell padding="default">Tarih</TableCell>
						<TableCell padding="default">Adet</TableCell>
						<TableCell padding="default">Para Birimi</TableCell>
						<TableCell padding="default"></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{transactionList.map((n: Transaction) => {
						return (
							<TableRow
								key={n.id}
								hover
							>
								<TableCell padding="none">{n.name}</TableCell>
								<TableCell padding="none">{n.description}</TableCell>
								<TableCell padding="none">{n.date}</TableCell>
								<TableCell padding="none">{n.amount}</TableCell>
								<TableCell padding="none">{n.currency}</TableCell>
								<TableCell padding="none">
									<IconButton
										aria-label="Delete"
										color="default"
										onClick={() =>
											transactionActions.deleteTransaction(n.id)
										}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);
}

const useStyles = makeStyles({
	paper: {
		width: "100%",
		minWidth: 260,
		display: "inline-block",
	},
	table: {
		width: "100%",
		overflowY: "auto",
		overflowX: "hidden"
	},
	tableRow: {
		margin: 20
	}
});
