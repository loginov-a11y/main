import {getCurrency} from "../src/asyncFunction";
import {searchBaseCurrency, sortCurrency} from "../src/staticFunction";
import { useConversionVariableStore } from "../store/variableStore";

export async function startFunction() {
    const varStore = useConversionVariableStore();
    varStore.fullCurrencyList = await getCurrency('https://status.neuralgeneration.com/api/currency');
    varStore.currencyList = varStore.fullCurrencyList.currencyAll;
    varStore.baseCurrency = searchBaseCurrency(varStore.fullCurrencyList.currencyName);
    varStore.sortCurrencyList = sortCurrency(varStore.baseCurrency, varStore.fullCurrencyList.currencyAll);
    varStore.currencyNameList = Object.keys(varStore.fullCurrencyList.currencyName)
}
