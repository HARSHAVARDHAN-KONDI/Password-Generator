let pass=document.getElementById("pass");
let copy=document.getElementById("cpy");
let u="ABCDEFGHIJKLMNOPQESTUVWXYZ";
let l="abcdefghijklmnopqrstuvwxyz";
let s="!@#$%^&*()?<>{}";
let n="0123456789";

let length=12;
function generatepass()
{
    let password="";
    let i=0;
while(i<12)
{
    let t=Math.floor(Math.random()*4);
    if(t==0)
    password+=u[Math.floor(Math.random()*u.length)];
    if(t==1)
    password+=l[Math.floor(Math.random()*l.length)];
    if(t==2)
    password+=s[Math.floor(Math.random()*s.length)];
    if(t==3)
    password+=n[Math.floor(Math.random()*n.length)];
    i++;
}

pass.value=password;
}

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(pass.value);
});
