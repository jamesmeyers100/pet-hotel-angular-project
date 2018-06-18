petApp.service('PetHotelService', function($http){
    console.log('inPetHotelService');
    
    let sv = this;
    sv.results = [];
    sv.ownerResults = [];

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

    sv.getOwners = function(){
        return $http({
            method: 'GET',
            url: '/manage'
        })
        .then(function(response){
            console.log('ownerGET', response.data);
            sv.ownerResults = response.data;
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
    }// end ownerPOST

    //clientDelete
    sv.deleteClient = function(pet){
        console.log(pet);
        return $http({
            method: 'DELETE',
            url: '/pethotel/' + pet
        })
        .then(function(response){
        }).catch(function(error){
            console.log('error', error)
        })
    }// end clientDelete

    //start checkIn
    sv.checkIn = function(){
        return $http({
            method: 'PUT',
            url: '/pethotel',
            data: sv.petUpdate
        }).then(function (response) {
            console.log('Got response from server with:', response);
        }).catch(function (error) {
            console.log('error changing ready to transfer', error);
        })
    }
    //ownerDelete
    sv.deleteOwner = function(owner){
        console.log('in deleteOwner on service', owner)
        return $http({
            method: 'DELETE',
            url: '/manage/' + owner.id
        })
        .then(function(response){
        }).catch(function(error){
            console.log('error', error)
        });
    }
})  