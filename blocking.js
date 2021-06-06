
var getUserSync = function(id) {

    var arr = [ {id: '123', name: 'andre'}, {id: '321', name: 'andre'}];

    return Promise.resolve( arr.filter(f=> f.id == id)[0].name);
};

console.log('starting user1');
var user1 = getUserSync('123');
console.log('user1', user1);

console.log('starting user2');
var user2 = getUserSync('321');
console.log('user2', user2);

var sum = 1 + 2;
console.log('The sum is ' + sum);