petApp.service('PetHotelService', function($http){
    console.log('inPetHotelService');
    
    let sv = this;
    sv.results = [];

    //GET
    sv.getPets = function(){
        return $http({
            method: 'GET',
            url: '/pethotel'
        })
        .then(function(response){
            console.log(response.data);
            sv.results = response.data;
        })
        .catch(function(err){
            console.log('error with service GET', err)
        })
    }//endGET
    
    // petPOST
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
    }// end petPOST

    //ownerPOST
    sv.postOwner = function(){
        console.log('in ownerPOST in PetHotelService')
        return $http({
            method: 'POST',
            url: '/manage',
            data: sv.addOwner
        })
        .then( function(response){
            console.log(response.data)
            sv.results = response.data;
        })
        .catch( function(err){
            console.log('Error', err)
        });// end ownerPost
    }

    //clientDelete
    
})