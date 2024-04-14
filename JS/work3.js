const url = "https://purpleschool.ru/course/javascript";

function getUrlParts(url){
    const [protocol, _ ,host, ...path] = url.split("/");
    console.log(protocol, _,host, path);
    console.log(`protocol: ${protocol.split(":")[0]}`);
    console.log(`domen: ${host}`);
    console.log(`путь внутри сайта: /${path.join("/")}`);

}
getUrlParts(url);
