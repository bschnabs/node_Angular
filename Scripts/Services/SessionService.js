var SessionService = function($cookies){
  this.token = undefined;

  this.getToken = function(){
    if(!$cookies.node_angularToken){
      if(!this.token){
        return undefined;
      }
      this.setToken(this.token);
    }
    return $cookies.node_angularToken;
  }

  this.setToken = function(token){
    this.token = token;
    $cookies.node_angularToken = token;
  }

  this.apiUrl = 'http://localhost:64463';
}

SessionService.$inject = ['$cookies']
