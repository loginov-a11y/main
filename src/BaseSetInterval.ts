export function timer(step:number, time: number) {
    async function waitInterval(callback, ms) {
        return new Promise(resolve => {
            let iteration = 0;
            const interval = setInterval(async () => {
                if (await callback(iteration, interval)) {
                    resolve();
                    clearInterval(interval);
                }
                iteration++;
            }, ms);
        });
    }
    function clearTimer (i) {
        return i === 10;
    }

    (async () => {
        console.log('start');
        await waitInterval(clearTimer, time);
        console.log('finish');
    })()
}