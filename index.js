let nomeHeroi = "Titan"; 
let power = 10000 ; 
let nivel = "";


if (power < 1000 ){
    nivel = "ferro";
}
else if (power < 2000){
    nivel = "bronze";
}
else if (power < 5000){
    nivel = "prata";
}
else if (power<7000){
    nivel= "ouro";
}
else if (power<8000){
    nivel= "platina";
}
else if (power<9000){
    nivel= "ascendente";
}
else if (power<10000){
    nivel= "imortal";
}
else { 
    nivel= "radiante";
}

console.log(`o heroi ${nomeHeroi} esta no nivel ${nivel}`);
