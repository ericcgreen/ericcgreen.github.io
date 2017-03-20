angular
  .module("portfolioApp", ["ui.router"])
  .config(["$stateProvider", RouterFunction])
  .controller("WelcomeCtrl", [WelcomeController])
  .controller("PortfolioIndexCtrl", ["$state", "$stateParams", PortfolioIndexController])
  .controller("ResumeShowCtrl", ["$state", "$stateParams", ResumeShowController])
  .controller("AboutShowCtrl", ["$state", "$stateParams", AboutShowController])
  .controller("ProjectsShowCtrl", ["$state", "$stateParams", ProjectsShowController])

function RouterFunction($stateProvider){
  $stateProvider
  .state("welcome", {
    url: "/#/",
    templateUrl: "js/ng-views/welcome.html",
    controller: "WelcomeCtrl",
    controllerAs: "vm"
  })
  .state("portfolioIndex", {
    url: "/portfolio",
    templateUrl: "js/ng-views/index.html",
    controller: "PortfolioIndexCtrl",
    controllerAs: "vm"
  })
  .state("resumeShow", {
    url: "/portfolio/resume",
    templateUrl: "js/ng-views/resume.html",
    controller: "AboutShowCtrl",
    controllerAs: "vm"
  })
  .state("aboutShow", {
    url: "/portfolio/about",
    templateUrl: "js/ng-views/about.html",
    controller: "ResumeShowCtrl",
    controllerAs: "vm"
  })
  .state("projectsShow", {
    url: "/portfolio/projects",
    templateUrl: "js/ng-views/projects.html",
    controller: "ProjectsShowCtrl",
    controllerAs: "vm"
  })
}

function WelcomeController() {

}

function PortfolioIndexController($state, $stateParams) {

}

function ResumeShowController($state) {

}

function AboutShowController($state) {

}

function ProjectsShowController($state) {

}
