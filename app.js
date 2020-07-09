(function (){

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuyitem= this;

        toBuyitem.buyItem= function (itemIndex){
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
        toBuyitem.items= ShoppingListCheckOffService.getItemsToBuy();
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var boughtItem=this;

        boughtItem.items = ShoppingListCheckOffService.getItemsBought();
    }

    function ShoppingListCheckOffService(){
        var service = this;

        //list to buy
        var toBuyItems=[
            {
                name: "Cookies",
                quantity: 5
            },
            {
                name: "Chips",
                quantity: 4
            },
            {
                name: "Sodas",
                quantity: 6
            },
            {
                name: "Juices",
                quantity: 5
            },
            {
                name: "Fruits",
                quantity: 10
            }
        ];
        console.log(toBuyItems);

        var boughtItems=[];


        service.buyItem = function (itemIndex){

            //var selectedItem= toBuyItems[itemIndex];
            console.log(toBuyItems[itemIndex]);

            boughtItems.push(toBuyItems[itemIndex]); 

            toBuyItems.splice(itemIndex,1);


        }

        service.getItemsToBuy = function (){
            return toBuyItems;
        }

        service.getItemsBought = function (){
            return boughtItems;
        }

    }

})();