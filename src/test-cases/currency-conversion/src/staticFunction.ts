import {useConversionVariableStore} from "../store/variableStore";

export function toUpperCase(string: string) {
    return string.toUpperCase();
}

export function sortCurrency(currItem: string, currList: Object) {
    const filter: any = [];
    Object.entries(currList).forEach(function ([key, value]) {
        if (key.indexOf(currItem) === 4) {
            filter.push(`1 ${key.split('-')[0].toUpperCase()} = ${value}`);
        }
    });
    return filter;
}

export function searchBaseCurrency(currList: Object) {
    return Object.keys(currList)[0];
}

export function select(item: any) {
    const observableCurren = useConversionVariableStore()
    let selectCurrency = '';
    if (typeof item === 'string') {
        selectCurrency = item;
    } else {
        selectCurrency = item.target.value;
    }
    observableCurren.sortCurrencyList = sortCurrency(selectCurrency, observableCurren.fullCurrencyList.currencyAll);
    observableCurren.baseCurrency = toUpperCase(selectCurrency);
}

