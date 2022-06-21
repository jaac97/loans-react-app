export function calculateTotal(quantity, term) {
    // Quantity
    // 0 - 1000 = 25%
    //1001 - 5000 = 20%
    //5001 - 10000 = 15%
    //+10000 = 10%
    // Term
    let quantityTotal;
    if(quantity <= 1000) {
        quantityTotal = quantity*0.25;
    }else if(quantity > 1000 && quantity <= 5000) {
        quantityTotal = quantity*0.20;
    }else if(quantity > 5000 && quantity <= 10000) {
        quantityTotal = quantity*0.15;
    }else {
        quantityTotal = quantity*0.10;

    }
    // Calcular el plazo
    // 3 / 5%
    // 6 = 10%
    // 12 = 15%
    // 24 = 20%
    let termTotal = 0;

    switch (term) {
        case 3:
            termTotal = quantity * 0.05
            break;
            case 6:
                termTotal = quantity * 0.10
            break;
            case 12:
                termTotal = quantity * 0.15
            break;
            case 24:
                termTotal = quantity * 0.20
            break;
        default:
            break;
    }
    return termTotal + quantityTotal + quantity;

}