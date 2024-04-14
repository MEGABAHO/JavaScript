const operations = [1000,-700,300,-500,10000];
let balanceIn = 100;
let revenue = 0;

function indexOfOperation(){
    for (let IOO in operations) {
        balanceIn = balanceIn + operations[IOO];
        if (balanceIn < 0)
            console.log(balanceIn+" decouvert")
        else {
            console.log(balanceIn);
            revenue = balanceIn / IOO;
        }
    }
    console.log( "revenueMoynne "+revenue)

}
indexOfOperation();


