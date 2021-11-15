"use strict";
var admin = 'ADMIN';
var names;
(function (names) {
    names[names["COLIN"] = 4] = "COLIN";
    names[names["JACK"] = 100] = "JACK";
    names[names["JOHNNY"] = 101] = "JOHNNY";
    names[names["BOBBY"] = 102] = "BOBBY";
})(names || (names = {}));
; //will increment after every name 
var object1 = {
    name: 'Colin',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
};
var object2 = {
    siblings: names.BOBBY
};
object1.role.push('admin');
// object1.role = [0, 'asdf', 'asdfasdf'] not allowed
// object1.role = [] empty array not allowed in tuples
// object1.role[1] = 10 not allowed
var favoriteActivities;
// let favoriteActivities: any[]
favoriteActivities = ['Sports'];
console.log(object1.name);
for (var _i = 0, _a = object1.hobbies; _i < _a.length; _i++) { //detects that hobbies is array of strings
    var iterator = _a[_i];
    console.log(iterator.toUpperCase());
    // console.log(iterator.localeCompare()); //wrong, since type is not string!!
}
//tuple - fixed length array and fixed type
