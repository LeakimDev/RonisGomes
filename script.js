const text = [
"Assistente Administrativo Profissional",
"Especialista em Excel e Power BI",
"Experiência Fiscal e Faturamento",
"Perfil Analítico e Estratégico"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){
current = text[i];

if(isDeleting){
j--;
}else{
j++;
}

document.getElementById("typing").innerHTML = current.substring(0,j);

if(!isDeleting && j === current.length){
isDeleting = true;
setTimeout(type,1200);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i++;
if(i === text.length) i = 0;
}

setTimeout(type,isDeleting?40:70);
}

type();
