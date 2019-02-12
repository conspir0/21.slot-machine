class Wallet {
    constructor(money) {
        let _money = money;
        // Actual money in gamer wallet
        this.getWalletValue = () => _money;
        
        //Does gamer have enough money?
        this.checkCanPlay = value => {
            if(_money >= value) return true;
            return false;
        }
        
        // Add or remove money fro wallet
        this.changeWallet = (value, type = "+") => {
            if(typeof value === 'number' && !isNaN(value)) {
                if(type === "+") {
                    return _money += value;
                } else if(type === "-") {
                    return _money -= value;
                } else {
                    throw new Error('Wrong value!');
                }
            } else {
                console.log(typeof value);
                throw new Error('Wrong value!');
            }
        }
    }
}

//const wallet = new Wallet (200);