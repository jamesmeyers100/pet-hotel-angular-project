petApp.controller('DashboardController', function(PetHotelService){
    console.log('in DashboardController');
    let vm = this;
    vm.clientArray = [];

    PetHotelService.getPets()
    .then( function(response){
        console.log('in getPets in DashboardController')
        vm.clientArray = PetHotelService.results
        console.log(vm.clientArray)
    })
    .catch( function(err){
        console.log('error in dashboardGET', err)
    });

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
    PetHotelService.getPets();

    vm.deleteClient = function(){
        console.log('in DELETE on DashboardController');
        PetHotelService.deleteClient(client)
        .catch(function(err){
            console.log('error in DELETE on DashboardController')
        })
    }
});