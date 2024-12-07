const easyCountElement=document.getElementById("eas");
const mediumCountElement=document.getElementById("med");
const hardCountElement=document.getElementById("har");
const solvedCountElement=document.getElementById("sol");
const contestRatingElement=document.getElementById("con");
const globalRankElement=document.getElementById("glo");
const load=document.getElementById("load");
const user=document.getElementById("username");

function getCookie(name){
    const nameEQ=name+"=";
    const cookies=document.cookie.split(';');
    for(let i=0;i<cookies.length;i++){
        let cookie=cookies[i];
        while(cookie.charAt(0)==' ')cookie=cookie.substring(1,cookie.length);
        if(cookie.indexOf(nameEQ)==0)return cookie.substring(nameEQ.length,cookie.length);
    }
    return null;
}


function deleteCookie(name){
    document.cookie=name+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const userDataCookie=getCookie('userData');
if(!userDataCookie){
    window.location.href = '/root/pages/login.html';
}else{
    const userData=JSON.parse(userDataCookie);
    const leetcodeUsername=userData.leetcodeUsername;
    const codechefUsername=userData.codechefUsername;
    fetchlcData(leetcodeUsername);
    fetchccData(codechefUsername);

}


document.getElementById('logoutBtn').addEventListener('click',function(){
    deleteCookie('userData');
    window.location.href='/root/pages/login.html';
});


async function fetchlcData(leetcodeUsername) {
    const lc=document.getElementById("lcstat");
    const iframe=document.createElement("iframe");
    iframe.src=`https://leetcard.jacoblin.cool/${leetcodeUsername}?ext=heatmap`;
    iframe.style.width="600px";
    iframe.style.height="400px";
    iframe.style.border="none";
    lc.innerHTML="";
    lc.appendChild(iframe);
}

async function fetchccData(codechefUsername) {
    const lc=document.getElementById("ccstat");   
    lc.style.backgroundImage="url('asset/ccbg.png')"; 
    lc.style.backgroundSize="cover";               
    lc.style.backgroundPosition="center";       
    lc.style.border="none";      
    lc.style.borderRadius="5px"; 

}

    


