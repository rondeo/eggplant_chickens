mainApp.controller('AdminController', ['$scope', '$http', function($scope, $http){

  // **********
  // INITIALIZE VARIABLES
  // **********
  $scope.dates;
  $scope.createDateData;

  // **********
  // GET ORDER DATES
  // **********
  $scope.getDates = function(){
    $http({
      method: 'GET',
      url: '/dates',
    }).then(
      function(response){
        console.log("The response data: ", response.data);
        $scope.dates = {
          model: null,
          availableOptions: response.data
        };
      });
  }

  // *********
  // CREATE ORDER DATE
  // *********
  $scope.createOrderDate = function(){
    $http({
      method: 'POST',
      url: '/dates',
      data: {date: $scope.createDateData}
    }).then(
      function(response){
        $scope.getDates();
    })
  }

  // *********
  // DELETE ORDER DATE
  // *********
  $scope.deleteOrderDate = function(){
    console.log("The $scope.dates: ", $scope.dates);
    // $http({
    //   method: 'DELETE',
    //   url: '/dates',
    //   data: $scope.date
    // }).then(
    //   function(response){
    //     console.log("The response: ", response);
    //   }
    // )
  }


  // ***********
  // GET ORDERS
  // ***********

  $scope.getOrders = function(){
    $http({
      method: 'GET',
      url: '/orders',
      data: $scope.getOrderData
    })
  }



  // **********
  // EDIT ORDER
  // **********

  $scope.editOrder = function(){
    $http({
      method: 'GET',
      url: '/orders',
      data: $scope.editOrderData
    })
  }

  // **********
  // DELETE ORDER
  // **********

  $scope.deleteOrder = function(){
    $http({
      method: 'DELETE',
      url: '/orders',
      data: $scope.deleteOrderData
    })
  }





  // *********
  // ACTIVATE ORDER DATE
  // *********

  $scope.activateOrderDate = function(){
    $http({
      method: 'GET',
      url: '/activate',
      data: $scope.activateOrderDateData
    })
  }

  // *********
  // DEACTIVATE ORDER DATE
  // *********

  $scope.deactivateOrderDate = function(){
    $http({
      method: 'POST',
      url: '/activate',
      data: $scope.deactivateOrderDateData
    })
  }

  $scope.getDates();

}]);
