function getCapital(capital) {
    return function (interest) {
        return (capital * interest) / 100;
    }
}

const business1 = getCapital(100) // apni callpona korche apnar bondhu apnake 100 tk debe//
console.log(business1) // javascript ar closure mane holo extra memory take // are output ase na// zokhon amra call korbo tokhon pabo
const profit = business1(25)
console.log(profit)