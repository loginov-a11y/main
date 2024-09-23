import { useVariableStore } from "~/store/variableStore";
import {getCookies, setCookies} from "~/src/cookiesFunction";
import {localStoreSet} from "~/src/storageFunction";
import {useHrStore} from "~/store/HrStore";
import { localStoreGet } from "~/src/storageFunction";

const loadStore = useVariableStore();
const hrStore = useHrStore();

export class hrScript {
    constructor() {
        hrStore.hrManager = true;
        (async function () {
            const hrNameSave = await localStoreGet('hh');
            if(hrNameSave) {
                hrStore.hrName = hrNameSave;
                hrStore.hrWelcomeModal = false;
            }
        })();
        setCookies(60,'hh',true);
        navigateTo("/");
        if (getCookies('hh')) {
            hrStore.hrManager = true;
        }
        setTimeout(()=>{
            localStoreSet('hh','');
        },10000)
    }
}


// приветствие открыть модалку попросить представится
// рассказать про сайт объяснить зачем он нужен
// показать адаптивность к времени дня
// показать решебник объяснить что там за примеры
// показать тестовые задачи и показать где они находятся в коде
// показать it кухню
// попрощаться и предложить отправить сообщение с обратной связью