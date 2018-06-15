petApp.controller('DashboardController', function(PetHotelService){
    console.log('in DashboardController');
    let vm = this;
    vm.clientArray = [];

    // vm.getPets = function(){
    //     console.log('in getPets in DashboardController')

    // }

    vm.postPet = function(){
        console.log('in postPet in DashboardController')
        vm.newPet = {
            name: vm.petNameIn,
            breed: vm.breedIn,
            color: vm.colorIn,
            owner: vm.selectIn,
            is_checked_in: 'IN'
        };
        console.log(vm.newPet)
        PetHotelService.newAnimal = vm.newPet;
        PetHotelService.postPet()
        .then( function(){
            vm.petNameIn = '',
            vm.breedIn = '',
            vm.colorIn = '',
            vm.selectIn = ''
        });
    }
});