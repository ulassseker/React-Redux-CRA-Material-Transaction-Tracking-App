// prettier-ignore
import { Button, Dialog, DialogActions, DialogTitle, TextField, Grid, MenuItem, Select, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useActions } from "../actions";
import * as TransactionActions from "../actions/transaction";
import {TransactionCurrency} from "../model";
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker,} from '@material-ui/pickers';

interface Props {
	open: boolean;
	onClose: () => void;
}

export function TransactionDialog(props: Props) {
	const { open, onClose } = props;
	const classes = useStyles();
	const [newTransactionName, setNewTransactionName] = React.useState("");
	const [newTransactionDescription, setNewTransactionDescription] = React.useState("");
	const [newTransactionAmount, setNewTransactionAmount] = React.useState(0);
	const [newTransactionCurrency, setNewTransactionCurrency] = React.useState("TRY");
	const transactionActions = useActions(TransactionActions);

	const handleClose = () => {
		
	};

	const handleChangeTransactionName = (event: any) => {
		setNewTransactionName(event.target.value);
	};
	const handleChangeTransactionDescription = (event: any) => {
		setNewTransactionDescription(event.target.value);
	};
	const handleChangeTransactionAmount = (event: any) => {
		setNewTransactionAmount(event.target.value);
	};
	const handleChangeTransactionCurrency = (event: any) => {
		setNewTransactionCurrency(event.target.value);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();

		if(newTransactionName === "" || newTransactionAmount === 0 || isNaN(newTransactionAmount)){

		}
		else{
			transactionActions.addTransaction({
				id: Math.random(),
				name: newTransactionName,
				description: newTransactionDescription,
				date: new Date().toLocaleDateString(),
				amount: newTransactionAmount,
				currency: newTransactionCurrency
			});
			onClose();
	
			setNewTransactionName("");
			setNewTransactionDescription("");
			setNewTransactionAmount(0);
			setNewTransactionCurrency("TRY");
		}
		
	}

	return (
		<form onSubmit={handleSubmit}>
		<Dialog open={open} onClose={handleSubmit}>
			<Grid container>
				<Grid item xs={6}>
					<DialogTitle>Add a new Transaction Name</DialogTitle>
					<TextField
						id="name"
						error = {newTransactionName === ""}
						helperText={newTransactionName === "" ? 'Required!' : ' '}
						required
						value={newTransactionName}
						onChange={handleChangeTransactionName}
						className={classes.textField}
					/>
					<DialogTitle>Add a new Transaction Amount</DialogTitle>
					<TextField
						id="amount"
						required
						type = "number"
						error = {newTransactionAmount === 0 || isNaN(newTransactionAmount)}
						helperText={newTransactionAmount === 0 || isNaN(newTransactionAmount) ? 'Required!' : ' '}
						value={newTransactionAmount}
						onChange={handleChangeTransactionAmount}
						className={classes.textField}
					/>
				</Grid>
				<Divider/>
				<Grid item xs={6}>
					<DialogTitle>Add a new Transaction Description</DialogTitle>
					<TextField
						id="description"
						value={newTransactionDescription}
						onChange={handleChangeTransactionDescription}
						className={classes.textField}
					/>
					<DialogTitle>Add a new Transaction Currency </DialogTitle>
					<Select
						required
						defaultValue = {TransactionCurrency.TRY}
						labelId="demo-controlled-open-select-label"
						id="demo-controlled-open-select"
						value={newTransactionCurrency}
						onChange={handleChangeTransactionCurrency}
						className = {classes.selectField}
					>
						<MenuItem value={TransactionCurrency.TRY} selected={true} >TRY</MenuItem>
						<MenuItem value={TransactionCurrency.USD}>USD</MenuItem>
						<MenuItem value={TransactionCurrency.EUR}>EUR</MenuItem>
					</Select>
				</Grid>
			</Grid>
			
			<DialogActions>
				<Button type = "submit" color="primary" onClick={handleSubmit}>
					OK
				</Button>
			</DialogActions>
		</Dialog>
		</form>
		
	);
}


const useStyles = makeStyles({
	textField: {
		width: "80%",
		margin: 20,
	},
	selectField: {
		width: "80%",
		margin: 20,
	}
});
