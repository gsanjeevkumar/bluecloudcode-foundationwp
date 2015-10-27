angular.module('starter.controllers', [])

.config( function( $ionicConfigProvider ){ 

	// Show "Back"
	$ionicConfigProvider.backButton.previousTitleText( false );

	// Show no text
//	$ionicConfigProvider.backButton.text( null );

	// Move Andriod tabs to top}|bottom
//	$ionicConfigProvider.tabs.position( 'bottom' );

})


.controller( 'HomeCtrl', function( $scope ){ 

})


.controller( 'ResortStatesCtrl', function( $scope, ResortStates ){

	// Avoid item level swipes
	$scope.listCanSwipe = false
	$scope.resortStates = ResortStates.data();

})


.controller( 'ResortsCtrl', function( $scope, $stateParams, Resorts, ResortStates, $rootScope ){ 

	$rootScope.state = ResortStates.get( $stateParams.stateAbbrev );

	$rootScope.resorts = Resorts.getByState( $stateParams.stateAbbrev );

	// Avoid item level swipes
	$rootScope.listCanSwipe = false
	$scope.listCanSwipe = false

})

.controller( 'ResortMapCtrl', function( $scope, $stateParams, Resorts, ResortStates, $rootScope ){ 

	$scope.resort = Resorts.getByCode( $stateParams.resortCode );
	
	var lat = $scope.resort.latitude;
	var lon = $scope.resort.longitude;

	function initialize() {
    
        var mapCanvas = document.getElementById('map');        
        var myLatlng = new google.maps.LatLng(lat, lon);

        var mapOptions = {
          center: new google.maps.LatLng(lat, lon),
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
		var marker = new google.maps.Marker({
      		position: myLatlng,
      		map: map,
      		title: $scope.resort.name
  		});
  		marker.setAnimation(google.maps.Animation.DROP);
  		//map.event.trigger(map, 'resize')
  		map.resize;
      }
      
      initialize();

	// Avoid item level swipes
	$scope.listCanSwipe = false

})


.controller( 'ResortDetailsCtrl', function( $scope, $stateParams, $ionicModal, Resorts ){ 

	$scope.resort = Resorts.getByCode( $stateParams.resortCode );

	$scope.resortGalleryImages   = $scope.resort.gallery;
	$scope.resortFloorplanImages = $scope.resort.floorplans;


	if( $scope.resortFloorplanImages.length <= 0 )
	{ 
		var element = document.getElementById( 'resort-floorplans' );

		element.parentNode.removeChild( element );

	} // endif

	$scope.showGoogleMap = function(){ 
		$scope.showModal( 'templates/resort-google-map-popover.html' );
	}

	$scope.showResortMap = function( index ){ 
		$scope.activeSlide = index;
		$scope.showModal( 'templates/resort-map-popover.html' );
	}

	$scope.showFloorplans = function( index ){ 
		$scope.activeSlide = index;
		$scope.showModal( 'templates/resort-floorplan-popover.html' );
	}

	$scope.showGallery = function( index ){ 
		$scope.activeSlide = index;
		$scope.showModal( 'templates/resort-gallery-popover.html' );
	}


	// Show Modal
	$scope.showModal = function( templateUrl ){ 
		$ionicModal.fromTemplateUrl(templateUrl, { 
			scope: $scope,
			animation: 'slide-in-up'

		}).then( function( modal ){ 
			$scope.modal = modal;
			$scope.modal.show();
		});
	}

	// Close the modal
	$scope.closeModal = function(){ 
		$scope.modal.hide();
		$scope.modal.remove();
	};

	$scope.renderHTML = function( html_code ){
		return $sce.trustAsHtml( html_code );
	};

})


.controller('MoreCtrl', function($scope, $rootScope, MoreMenu) {

  // For now using the Resorts list...
  $scope.moreMenu = MoreMenu.data();
  
  // Avoid item level swipes
  $scope.listCanSwipe = false

});