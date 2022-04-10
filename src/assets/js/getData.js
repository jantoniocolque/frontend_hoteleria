export default async function getData (path){
    // const URL = "http://ec2-54-144-29-135.compute-1.amazonaws.com:8080"
    const URL = "http://localhost:8080"
    try{
        let response = await fetch(URL + path);
        if(response.status >= 400 && response.status < 500){
            return Promise.reject(new Error("Los recursos no fueron encontrados"))
        }
        if(response.status >= 500){
            return Promise.reject(new Error("Error en el servidor"))
        }
        if(response.status >= 200 && response.status < 300){
            let data = await response.json();
            return data;
        }
        return Promise.reject(new Error("Error desconocido"))
    }catch(error){
        console.log(error);
    }
}