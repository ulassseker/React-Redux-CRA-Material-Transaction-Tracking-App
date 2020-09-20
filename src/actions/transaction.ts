import { TransactionAction, TransactionActions, Transaction } from "../model";

export function addTransaction(transaction: Transaction): TransactionAction {
	return {
		type: TransactionActions.ADD_TRANSACTION,
		payload: transaction,
	};
}
export function deleteTransaction(transactionId: number): TransactionAction {
	return {
		type: TransactionActions.DELETE_TRANSACTION,
		payload: transactionId,
	};
}
