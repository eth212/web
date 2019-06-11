window.onload = () => {
  console.log("lets go");

  //creating the construction router
  var Router = function(name, routes) {
    return {
      name: name,
      routes: routes
    }
  };
  var view = document.getElementById("view");
  var myFirstRouter = new Router(myFirstRouter, [
    {
    path: "/web/",
    name: 'root'
  },
  {
    path: '/web/#home',
    name: 'Home'
  },
  {
    path: '/web/#about',
    name: 'About'
  },
  {
    path: '/web/#projects',
    name: 'Projects'
  },
  {
  path: '/web/#contact',
  name: 'Contact'
  },
  ]);
  var currentPath = window.location.pathname;
  if(currentPath == '/'){
    view.innerHTML = 'root';
  } else {
    var route = myFirstRouter.routes.filter(function(r) {
      return r.path === currentPath})[0];
      if(route){
        view.innerHTML = 'this is the ' + route.name + ' path';
      }
      else{
        view.innerHTML = '404 Error cannot find the page';
      }
    }

  };
