var obj = {Student:20};

var printAge = function(){
  return this.Student;
}

var bound = printAge.bind(obj);
console.log(bound());