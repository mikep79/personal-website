myApp.controller('InfoController', function(GithubService){
    // console.log('in InfoController');
    var vm = this;

    vm.user = GithubService.user;

    GithubService.githubProfile();

});