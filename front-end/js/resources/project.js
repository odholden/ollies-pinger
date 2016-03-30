angular
  .module("yearbookApp")
  .factory("Project", Project);

Project.$inject = ['$resource'];

function Project($resource) {
  var Project = $resource("http://localhost:3000/projects/:id", null, {
    "update": {method: "PATCH"}
  })
  return Project;
}