import { TransactionAction, TransactionActions, Transaction } from "../model";
import createReducer from "./createReducer";

export const transactionList = createReducer<Transaction[]>([], {
	[TransactionActions.ADD_TRANSACTION](state: Transaction[], action: TransactionAction) {
		return [...state, action.payload];
	},
	[TransactionActions.DELETE_TRANSACTION](state: Transaction[], action: TransactionAction) {
		// remove all transactions with the given id
		return state.filter(t => t.id !== action.payload);
	},
});
