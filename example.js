#!/opt/jdk1.8.0/bin/jjs 
function createFunc(value) function() value
function iface(map) {
  var ifaceImpl = {}
  for (key in map) ifaceImpl[key] = createFunc(map[key]);
  return ifaceImpl;
}
var Person = Packages.Person;

var someoneElse = new Person(iface({
  "firstname": "Someone",
  "lastname": "Else",
  "petNames":["Fluffy","Pickle"],
  "favouriteNumber":5
}));

Person.print(someoneElse);

var benji = new Person(iface(JSON.parse(`cat benji.json`))); 

Person.print(benji);
