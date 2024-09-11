import {useChildrenVariableStore} from "../store/variableStore";
import {LOCAL_STORE_NAME} from "../src/constant";

export const objectChildrenItemDelete = (item: number) => {
    const varStore = useChildrenVariableStore();
    varStore.childrenList.splice(item, 1);
    if (varStore.childrenList.length === 0) {
        childrenLocalStoreSave(varStore.childrenList)
    }
}

export const objectChildrenItemAdd = (name: string, strong: string) => {
    const varStore = useChildrenVariableStore();
    if (varStore.childrenList.length <= 5) {
        varStore.childrenList.push([name, strong]);
    }
}

export const childrenLocalStoreSave = (childrenList: Object) => {
    localStorage.setItem(LOCAL_STORE_NAME, JSON.stringify(childrenList));
}