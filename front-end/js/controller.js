angular
  .module("yearbookApp")
  .controller("YearbookController", YearbookController);

YearbookController.$inject = ["User", "Project"];

function YearbookController(User, Project) {
  var self = this;

  self.users        = User.query();
  self.projects     = Project.query();
  
  self.homepage     = true;
  self.userForm     = false;
  self.projectForm  = false;
  self.user         = false;
  self.project      = false;


  self.viewHomepage = function() {
    self.homepage     = true;
    self.userForm     = false;
    self.projectForm  = false;
    self.user         = false;
    self.project      = false;
  }

  self.toggleUserForm = function() {
    self.userForm == false ? self.userForm = true : self.userForm = false;
  }

  self.addUser = function() {
    if (self.user._id) {
      User.update({id: self.user._id}, self.user)
    } else {
      User.save(self.user, function(user) {
        self.users.push(user);
        self.user = false;
      })
    }
    self.toggleUserForm();
  }

  self.showUser = function(user) {
    self.homepage = false;
    var currentUser = User.get({id: user._id}, function(user) {
      self.user = user;
    });
  }

  self.deleteUser = function() {
    var index = self.users.indexOf(self.user);
    User.delete({id: self.user._id}, function() {
      self.users.splice(index, 1);
      self.viewHomepage();
    })
  }

  self.toggleProjectForm = function() {
    self.projectForm == false ? self.projectForm = true : self.projectForm = false;
  }

  self.showProject = function(project) {    
    self.project = project;
    self.user = false;
  }

  self.addProject = function() {
    if (self.project._id) {
      Project.update({id: self.project._id}, self.project);
    } else{
      self.project.userId = self.user._id;
      Project.save(self.project, function(project) {
        self.user.projects.push(project);
        self.project = false;
      })
    }
    self.toggleProjectForm();
  }

  self.deleteProject = function() {
    var index = self.projects.indexOf(self.project);
    Project.delete({id: self.project._id}, function() {
      self.user.projects.splice(index, 1);
      self.viewHomepage();
    })
  }
}


















