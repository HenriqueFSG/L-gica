async function lagarta(){
    let lagarta = "()()()(00)"
    let espaco = " ";
    let lagarta2 = "( )( )( )(00)" 

    function sleep(ms){
        return new Promise( resolve => setTimeout(resolve, ms));
    }
    
    /* uma forma de fazer a cobra andar e mudar entre ela
    for(let i = 0; i < 5550; i++){
        lagarta = espaco + lagarta;
        console.log(lagarta);
        await sleep (70);
        console.clear();

        lagarta2 = espaco + lagarta2;
        console.log(lagarta2);
        await sleep (70);
        console.clear();
    }*/ 
    for(let i = 0; i < 5550; i++){
        console.log(i % 2 == 0? lagarta = espaco + lagarta:
            lagarta2 = espaco + lagarta2)
        await sleep (999);
        console.clear();

    }
}