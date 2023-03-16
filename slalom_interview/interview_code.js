

//take in a number (positive), determine if it is a palindrome

//121
//456, 654

//return true or false

//code starts here -----

//test #1: 121, "121"


/**
 * let result = false
 * let str = "" + num
 * 
 * if (str.length === 1) return true
 * 
 * for (let i = 0; i < str.length; i++) {
 *  let leftIndex = i
 *  let rightIndex = i
 * 
 *  while (leftIndex >= 0 and rightIndex < str.length) {
 *      if (str[leftIndex] != str[rightIndex]) return false
 *      leftIndex--
 *      rightIndex++    
 *  }
 *  
 * }
 * 
 * return true
 */


//array of numbers sorted in ascending, target (if found, return true, else false)

// [1,2,3,4,5] target is 2 
//rightPtr = 2, leftPtr = 0

/**
 * let leftPtr = 0
 * let rightPtr = array.length - 1
 * 
 * while (leftPtr <= rightPtr) {
 * 
 *  let mid = Math.floor((leftPtr + rightPtr) / 2)
 * 
 *  if (array[mid] === target) return true
 * 
 *  if (target < array[mid]) {
 *      rightPtr = mid
 *  }
 * 
 *  if (target > array[mid]) {
 *      leftPtr = mid
 *  }
 * 
 * }
 * 
 * return false
 */




//student registration database

/**
 * Table: Enrollments(CRN, SID, TeacherName, classID)
 * Table: Students(SID, Major, GradeLevel, Department)
 * Table: Class(classID, TeacherName, Department)
 * 
 * Primary keys: 
 *  Students: SID
 *  Enrollments: SID, CRN
 *  Class: classID
 * 
 * Foreign Keys on Enrollments Table:
 *  SID refers to Students(SID)
 *  classID refers to Class(classID)
 * 
 *  query all students who are computer science majors and are enrolled in a class
 * taught by a professor with last name "Smith"?
 * 
 *  select SID
 *  Students s inner join Enrollments e
 *  where s.Major = 'Computer Science' and e.TeacherName = 'Smith'
 */



