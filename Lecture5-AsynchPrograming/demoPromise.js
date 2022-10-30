// function start() {
//     console.log('Before promise');

//     const p = new Promise(executor);
//     p.then(onSuccess)
//     p.catch(onError)

//     console.log('After promise');
// }

// function executor(res, rej) {
//     setTimeout(res, 2000, 'Intentional error');
// }

// function onSuccess(res) {
//     console.log(res);
// }

// function onError(error) {
    
// }

// start();

function startBetter() {
    console.log('Better promise');

    new Promise((res, rej)=>{
        setTimeout(rej, 5000, 'Intentional error')
    }).then((result)=>{
        console.log(result);
    }).catch((error)=> {
        console.log('Encountered error: ', error);
    })

    console.log('After promise');
}

startBetter()