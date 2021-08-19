/*
You are given a list of projects and a list of dependencies (which is a list of pairs of
projects, where the second project is dependent on the first project). All of a project's dependencies
must be built before the project is. Find a build order that will allow the projects to be built. If
there is no valid build order, return an error.

EXAMPLE
Input:
  projects: a, b, c, d, e, f
  dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)

  Output: f, e, a, b, d, c
*/

// I - list of projects and dependencies
// O - order of projects
// C - Topological Sort Time and Space
// E - cycles in graph

// DS - graph,
// AP - topolocial sort
// TR - n/a

// add projects to graph
// add edges to project's graph
// add projects (with no dep.) to order holder
  // remove these projects and their edges, repeat

var Graph = require('./../util/Graph');

Graph.prototype.findNodeWithNoChildren = function () {
  //this should be helpful
};

var buildOrder = function (projects, dependencies) {
  let projectGraph = {};
  let numberOfProjects = projects.length;
  let projectOrder = [];
  addProjectsToGraph(projectGraph, projects);
  addEdgesToGraph(projectGraph, dependencies);
  return orderProjects(projectOrder, projectGraph, numberOfProjects);
};

const addProjectsToGraph = function(graph, projects) {
  for (let i = 0; i < projects.length; i++) {
    graph[projects[i]] = {};
  }
  return;
}

const addEdgesToGraph = function(graph, dependencies) {
  for (let i = 0; i < dependencies.length; i++) {
    graph[dependencies[i][1]][dependencies[i][0]] = 1;
  }
  return;
}

const orderProjects = function(orderArray, projectGraph, remainingProjects) {
  while (remainingProjects) {
    let removedProjects = [];
    for (let key in projectGraph) {
      if (Object.keys(projectGraph[key]).length === 0) {
        removedProjects.push(key);
        orderArray.push(key);
        delete projectGraph[key];
        remainingProjects--;
      }
    }
    for (let edge of removedProjects) {
      for (let key in projectGraph) {
        if (projectGraph[key][edge]) {
          delete projectGraph[key][edge];
        }
      }
    }
  }
  return orderArray;
}

module.exports = buildOrder;
