import { History } from "history";
import { combineReducers } from "redux";
import { Transaction } from "../model";
import * as transactionReducer from "./transaction";

export interface RootState {
	transactionList: Transaction[];
}

export default (history: History) =>
	combineReducers({
		...transactionReducer,
	});
