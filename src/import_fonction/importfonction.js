module.exports={

    deletelivrelocalstorage(i){
        let localStorageCart = JSON.parse(localStorage.getItem('commande')) || []
        localStorageCart.splice(i,1)
        localStorage.setItem('commande', JSON.stringify(localStorageCart));
    },
    chercher1 (id) {
        let localStorageCart = JSON.parse(localStorage.getItem('commande')) || []
        for (let i = 0; i < localStorageCart.length; i++) {
            if (localStorageCart[i].uniqid === id) {
                return i
            }
        }
    },

    sommecart (){
        let localStorageCart = JSON.parse(localStorage.getItem('commande')) || []
        let somme = 0
        for (let i = 0; i < localStorageCart.length; i++) {
            somme = somme+localStorageCart[i].prixlivre
        }
        return somme
    },
    clearLocalCommand(){
        let localStorageCart = []
        localStorage.setItem('commande', JSON.stringify(localStorageCart));
        console.log(localStorageCart);
    }
}