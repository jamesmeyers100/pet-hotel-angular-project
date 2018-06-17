petApp.controller('ManageController', function(PetHotelService){
    console.log('in ManageController');
     let vm = this;
     vm.ownerArray = [];

     vm.addOwner = function(){
         console.log('in addOwner on ManageController');
         let ownerString = vm.ownerIn;
         let nameSplit = ownerString.split(' ');
         vm.owner = {
            first_name: nameSplit[0],
            last_name: nameSplit[1]
         };

         PetHotelService.addOwner = vm.owner;
         PetHotelService.postOwner()
         .then( function(){
             vm.getOwner();
             vm.ownerIn = '';
         })
     }

     vm.getOwner = function(){
         console.log('in ownerGET on ManageController');
         PetHotelService.getOwners()
         .then( function(response){
             console.log('in ownersGET on DashboardController')
             vm.ownerArray = PetHotelService.ownerResults
         })
         .catch( function(err){
             console.log('error in ownerGET on DashController', err)
         });// end getOwners
     }

     vm.deleteOwner = function(owner){
        console.log('in deleteOwner on MC', owner)
        PetHotelService.deleteOwner(owner)
        .then( function(){
            vm.getOwner();
        })
        .catch( function(err){
            console.log('error deleting on MC', err)
        })
     }// end deleteOwner
     vm.getOwner();
});