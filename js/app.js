

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
    .then( reg =>{
    //   setTimeout(()=>{
    //     // reg.sync.register('posteo-gatitos');
    //     // console.log('tag - segver gatitos lijndis ');
    //   },3000)  
    Notification.requestPermission().then( result =>{

        console.log(result);
        reg.showNotification("Actividad de salud mental");
    })


    })
    

}

// fetch('https://reqres.in/api/users').
// then( resp => resp.text())
// .then(console.log);