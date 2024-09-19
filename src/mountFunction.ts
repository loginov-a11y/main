import {localStoreGet} from "~/src/asyncFunction";
import {useUserStore} from "~/store/UserStore";
import {useVariableStore} from "~/store/variableStore";
import {hrScript} from "~/src/hrScript";
import { getCookies } from "~/src/functions";
const loadStore = useVariableStore();
const userStore = useUserStore();

export async function initFunction() {
    userStore.user = await localStoreGet('user');
    loadStore.pageLoader = false;
    const route = useRoute();
    if (route.query.hh === null || getCookies('hh')) new hrScript();
}