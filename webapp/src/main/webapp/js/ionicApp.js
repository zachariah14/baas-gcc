angular.module('ionicApp', ['ionic'])


	.directive('menuClose', function($state, $ionicHistory) {
		return {
			restrict: 'AC',
			priority: 1,
			terminal: true,
			link: function($scope, $element, $attrs) {
				console.log("My menu-closes!");
				$element.bind('click', function() {

					var href = null;
					// Convert the current state to an href
					var currentHref = $state.href($ionicHistory.currentStateName());
					var sideMenuCtrl = $element.inheritedData('$ionSideMenusController');

					// If couldn't get the side menu delegate skip the rest
					// Perhaps menu-close-smart was used in app without sidemenu
					if(!sideMenuCtrl) {
						return;
					}

					// Get the href if used with `ui-sref`
					if($attrs.uiSref) {
						href = $state.href($attrs.uiSref);
					}

					if($attrs.href) {
						href = $attrs.href;
					}

					if(href === currentHref) {
						// Already on the current view, just close the side menu
						sideMenuCtrl.close();
					} else {
						// Going to a new view
						$ionicHistory.nextViewOptions({
							historyRoot: true,
							disableAnimate: true,
							expire: 300
						});
						sideMenuCtrl.close();
					}

				});
			}
		};
	})
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('eventmenu', {
				url: "/event",
				abstract: true,
				templateUrl: "templates/event-menu.html"
			})
			.state('eventmenu.home', {
				url: "/home",
				views: {
					'menuContent' :{
						templateUrl: "templates/home.html"
					}
				}
			})
			.state('eventmenu.checkin', {
				url: "/check-in",
				views: {
					'menuContent' :{
						templateUrl: "templates/check-in.html",
						controller: "CheckinCtrl"
					}
				}
			})
			.state('eventmenu.attendees', {
				url: "/attendees",
				views: {
					'menuContent' :{
						templateUrl: "templates/attendees.html",
						controller: "AttendeesCtrl"
					}
				}
			})

			.state('eventmenu.attendee', {
				url: "/attendee/:id",
				views: {
					'menuContent' :{
						templateUrl: "templates/attendee.html"
					}
				}
			})

		$urlRouterProvider.otherwise("/event/attendees");
	})

	.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
		$scope.attendees = [
			{ firstname: 'Nicolas', lastname: 'Cage' },
			{ firstname: 'Jean-Claude', lastname: 'Van Damme' },
			{ firstname: 'Keanu', lastname: 'Reeves' },
			{ firstname: 'Steven', lastname: 'Seagal' }
		];

		$scope.toggleLeft = function() {
			$ionicSideMenuDelegate.toggleLeft();
		};
	})

	.controller('CheckinCtrl', function($scope) {
		$scope.showForm = true;

		$scope.shirtSizes = [
			{ text: 'Large', value: 'L' },
			{ text: 'Medium', value: 'M' },
			{ text: 'Small', value: 'S' }
		];

		$scope.attendee = {};
		$scope.submit = function() {
			if(!$scope.attendee.firstname) {
				alert('Info required');
				return;
			}
			$scope.showForm = false;
			$scope.attendees.push($scope.attendee);
		};

	})

	.controller('AttendeesCtrl', function($scope) {

		$scope.activity = [];
		$scope.arrivedChange = function(attendee) {
			var msg = attendee.firstname + ' ' + attendee.lastname;
			msg += (!attendee.arrived ? ' has arrived, ' : ' just left, ');
			msg += new Date().getMilliseconds();
			$scope.activity.push(msg);
			if($scope.activity.length > 3) {
				$scope.activity.splice(0, 1);
			}
		};

	});