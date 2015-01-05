/**
 * Created by Tsunghan on 12/27/14.
 */

controllerModule.controller('friendsController', ['$scope', function($scope) {
    $scope.friendList = ['Vivian', 'Taiga'];
    $scope.deletedFlag = false;

    $scope.addFriend = function(friend) {
        $scope.friendList.push(friend);
        $scope.deletedFlag = false;
    };

    $scope.deleteFriend = function(friend) {
        $scope.deleted = $scope.friendList.splice($scope.friendList.indexOf(friend), 1)[0];
        $scope.deletedFlag = true;
    };
}]);