petApp.service('PetHotelService', function($http){
    console.log('inPetHotelService');
    
    let sv = this;
    sv.results = [];
    
    sv.postPet = function(){
        console.log('in postPet in PetHotelService');
        return $http({
            method: 'POST',
            url: '/pethotel',
            data: sv.newAnimal
        })
        .then( function(response){
            console.log('back with', response.data)
            sv.results = response.data;
        })
        .catch( function(error){
            console.log('back with an error', error)
        })
    }
})