const admin = 'ADMIN';
enum names { COLIN = 4, JACK = 100, JOHNNY, BOBBY }; //will increment after every name 

const object1: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]
} = {
  name: 'Colin',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
}

const object2 = {
  siblings: names.BOBBY
}

object1.role.push('admin')
// object1.role = [0, 'asdf', 'asdfasdf'] not allowed
// object1.role = [] empty array not allowed in tuples
// object1.role[1] = 10 not allowed

let favoriteActivities: string[];
// let favoriteActivities: any[]
favoriteActivities = ['Sports']

console.log(object1.name);

for (const iterator of object1.hobbies) { //detects that hobbies is array of strings
  console.log(iterator.toUpperCase());
  // console.log(iterator.localeCompare()); //wrong, since type is not string!!
}

//tuple - fixed length array and fixed type