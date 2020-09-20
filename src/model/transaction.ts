export interface Transaction {
  id: number;
  name: string;
  description: string;
  date: Date;
  amount: number;
  currency: string;
}

export enum TransactionCurrency {
  TRY = "TRY",
  USD = "USD",
  EUR = "EUR"
}

export enum TransactionActions {
  ADD_TRANSACTION = "ADD_TRANSACTION",
  DELETE_TRANSACTION = "DELETE_TRANSACTION"
}

interface TransactionActionType<T, P> {
  type: T;
  payload: P;
}

export type TransactionAction =
  | TransactionActionType<typeof TransactionActions.ADD_TRANSACTION, Transaction>
  | TransactionActionType<typeof TransactionActions.DELETE_TRANSACTION, number>
;
