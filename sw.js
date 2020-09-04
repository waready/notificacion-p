
// Ciclo de vida del SW

self.addEventListener('install', event =>{

    console.log('sw: instaloando sw');
    
    const instalacion = new Promise ((resolve, reject) =>{
        setTimeout( ( ) =>{
            console.info('termino end');
            self.skipWaiting();
           resolve()
        }, 1);
    
        
    });
  

    event.waitUntil(
        instalacion
    );
});

//servis worked  se activa
self.addEventListener('activate', event =>{
    //borar cache viejo 

    console.log('sw344: activo y listo para actuiar');
});

//fecht 
self.addEventListener('fetch', event => {
    // console.log('SW:' , event.request.url );
    // if (event.request.url.includes('https://reqres.in/')){
    //     const resp = new Response(`{ok:false, mensaje:'jajajaja'}`);
    //     event.respondWith(resp);
    // }
});

//sync : recuperamos conexion a internet

self.addEventListener('sync', event =>{
    console.log('tenemos conexion!!');
    console.log(event);
    console.log(event.tag);
});

//push: notificaciones
self.addEventListener('push', event =>{
    console.log('notificacion sencillsa');

});