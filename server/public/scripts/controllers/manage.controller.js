petApp.controller('ManageController', function(PetHotelService){
    console.log('in ManageController');
     let vm = this;
     vm.owner = [];

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
             vm.ownerIn = '';
         })
     }
});