export function setCookies(time: number, cookiesName: string, params: any) {
    let now = new Date();
    now.setMinutes(time + now.getMinutes());
    document.cookie = `${cookiesName}=${params}; expires=${now.toUTCString()};`;
}

export function getCookies(cookiesName: string) {
    let cookie = document.cookie.split('; ').find(row => row.startsWith(cookiesName + '='));
    return cookie ? cookie.split('=')[1] : null;
}