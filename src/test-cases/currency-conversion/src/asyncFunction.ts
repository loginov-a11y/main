export async function getCurrency(url: string) {
    const response = await fetch(url),
        tempObj:any = {},
        data = await response.json();
    for (let item in data) {
        let currencyName: any = item.split('-')[0];
        if (!tempObj[currencyName]) {
            tempObj[currencyName] = item;
        }
    }
    return {
        currencyName: tempObj,
        currencyAll: data
    };
}

