var getUser = function(id, callback) {

    var arr = [ {id: '123', name: 'andre'}, {id: '321', name: 'andre'}];

    return Promise.resolve( arr.filter(f=> f.id == id)[0].name).then(value => {
      callback(value)
    });
};

console.log('starting user1');
getUser('123', function (user1) {
  console.log('user1', user1);
});

console.log('starting user2');
getUser('321', function (user2) {
  console.log('user2', user2);
});

var sum = 1 + 2;
console.log('The sum is ' + sum);