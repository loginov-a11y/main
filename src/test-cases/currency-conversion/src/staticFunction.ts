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
    console.log('item',item)
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

export function convert (currency = 0) {
    console.log('currency',currency)
    const variableStore = useConversionVariableStore();
    if (currency && variableStore.selectTwo !== variableStore.selectOne) {
        variableStore.outputCurrency.value = (currency / variableStore.currencyAll[`${variableStore.selectTwo}-${variableStore.selectOne}`]);
    }
}