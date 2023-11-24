function loadUser(){
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange= function(){
        if((xhr.readyState===4)&&(xhr.status===200)){
            setUserInfo(xhr.responseText);
        }
    };
    xhr.open("GET","data.json",true);
    xhr.send()
}

function setUserInfo(info){
    document.getElementById('info').innerHTML=info;
}