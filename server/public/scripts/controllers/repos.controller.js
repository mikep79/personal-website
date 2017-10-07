myApp.controller('ReposController', function(GithubService){
    // console.log('in Repos contr');
    var vm = this;

    vm.repos = GithubService.repos;

    GithubService.githubRepos();
    
});