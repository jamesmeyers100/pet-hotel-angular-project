petApp.controller('DashboardController', function(PetHotelService){
    console.log('in DashboardController');
    let vm = this;
    vm.clientArray = [];
    vm.ownerArray = [];

    vm.getPets = function(){
        PetHotelService.getPets()
        .then( function(response){
            // console.log('in getPets in DashboardController')
            vm.clientArray = PetHotelService.results
            console.log(vm.clientArray)
        })
        .catch( function(err){
            console.log('error in dashboardGET', err)
        });// end get Pets
    }

    vm.getOwners = function(){
        PetHotelService.getOwners()
        .then( function(response){
            // console.log('in ownersGET on DashboardController')
            vm.ownerArray = PetHotelService.ownerResults
            console.log(vm.ownerArray)
        })
        .catch( function(err){
            console.log('error in ownerGET on DashController', err)
        });// end getOwners
    
    vm.postPet = function(){
        console.log('in postPet in DashboardController')
        vm.newPet = {
            owner_id: vm.selectIn,
            name: vm.petNameIn,
            breed: vm.breedIn,
            color: vm.colorIn,
            is_checked_in: 'IN'

        };
        console.log(vm.newPet)
        PetHotelService.newAnimal = vm.newPet;
        PetHotelService.postPet()
        .then( function(){
            vm.getOwners();
            vm.getPets();
            vm.petNameIn = '',
            vm.breedIn = '',
            vm.colorIn = '',
            vm.selectIn = ''
    });
            // PetHotelService.getPets(); This doesn't go here, but it needs to happen somewhere eventually
        }
    }

 

    vm.deleteClient = function(pet){
        console.log('in DELETE on DashboardController', pet);
        PetHotelService.deleteClient(pet)
        .then( function(){
            vm.getOwners();
            vm.getPets();
        })
        .catch(function(err){
            console.log('error in DELETE on DashboardController')
        })
    }

    vm.checkInPet = function(thing){
        console.log(thing)
        let blob = thing.is_checked_in == 'IN' ? 'OUT' : 'IN';
        vm.transferData = {
            is_checked_in: blob,
            id: thing.pet_id
        };
        // PetHotelService.petUpdate = vm.transferData;
        PetHotelService.checkIn(vm.transferData)
        .then( function(){
            console.log('its working!')
            vm.getPets();
            vm.getOwners();
        })
    }
    
    vm.getPets();
    vm.getOwners();
});