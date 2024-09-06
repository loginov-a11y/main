import {LOCAL_STORE_NAME} from "../src/constant";
export async function childrenLocalStoreGet() {
    return JSON.parse(localStorage.getItem(LOCAL_STORE_NAME)|| '{}');
}