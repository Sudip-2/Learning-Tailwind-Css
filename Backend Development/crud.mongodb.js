use('CrudMongoDb')
// Create
// db.createCollection("VAC_Courses")
// db.VAC_Courses.insertMany([
//     { name: "Operating Systems", assignment: [2, 4, 5, 1], classes: 4, topics: ["Memory Management", "Processes", "Threads", "Scheduling"] },
//     { name: "Data Structures", assignment: [3, 6, 2], classes: 5, topics: ["Arrays", "Linked Lists", "Trees", "Graphs"] },
//     { name: "Algorithms", assignment: [7, 4, 8, 9], classes: 3, topics: ["Sorting", "Dynamic Programming", "Greedy"] },
//     { name: "Database Management", assignment: [5, 3, 6], classes: 4, topics: ["SQL", "Normalization", "Indexes", "Transactions"] },
//     { name: "Web Development", assignment: [1, 2], classes: 6, topics: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
//     { name: "Cloud Computing", assignment: [3, 5, 7], classes: 5, topics: ["AWS", "Azure", "Google Cloud", "Virtualization"] },
//     { name: "Machine Learning", assignment: [4, 9, 6], classes: 4, topics: ["Supervised Learning", "Unsupervised Learning", "Neural Networks"] },
//     { name: "Artificial Intelligence", assignment: [8, 5], classes: 3, topics: ["Search Algorithms", "Knowledge Representation", "Planning"] },
//     { name: "Computer Networks", assignment: [2, 3, 5], classes: 4, topics: ["OSI Model", "TCP/IP", "Routing", "Switching"] },
//     { name: "Software Engineering", assignment: [6, 4, 5], classes: 3, topics: ["Agile", "Scrum", "Version Control"] }
// ]);


// Read
let a = db.VAC_Courses.find({assignment:5})
// console.log(a.toArray())

// let b = db.VAC_Courses.findOne({assignment:5})
// console.log(b)

// Update
// db.VAC_Courses.updateOne({classes:2},{$set:{classes:10}})

// "set" is an atomic operators are used to perform operations that are guaranteed to be 
// completed entirely or not at all, ensuring data integrity

// db.VAC_Courses.updateMany({classes:2},{$set:{classes:10}})

// Delete
// db.VAC_Courses.deleteOne({classes:10})
// db.VAC_Courses.deleteMany({classes:{$in:[2,3,4,5,10]}})

// MongoDB "query" operators, which are used to filter documents in collections during a query

// let c = db.VAC_Courses.find({assignment:{$eq:4}}) // Matches values that are equal to a specified value.
// console.log(c)
// let d = db.VAC_Courses.find({assignment:{$gt:4}}) // Matches values that are greater than a specified value.
// console.log(d)
// let d = db.VAC_Courses.find({assignment:{$gte:4}}) // Matches values that are greater than or equal to a specified value.
// console.log(d)
// let e = db.VAC_Courses.find({assignment:{$in:[1,2]}}) // Matches any of the values specified in an array.
// console.log(e)
// let f = db.VAC_Courses.find({assignment:{$lt:2}}) // Matches values that are less than a specified value.
// console.log(f)
// let g = db.VAC_Courses.find({assignment:{$lte:2}}) // Matches values that are less than or equal to a specified value.
// console.log(g)
// let i = db.VAC_Courses.find({assignment:{$ne:2}}) // Matches all values that are not equal to a specified value.
// console.log(i)
// let j = db.VAC_Courses.find({assignment:{$nin:[1,2,3,4]}}) // Matches none of the values specified in an array.
// console.log(j)

// db.VAC_Courses.find({},{assignment:1}) to get columns set _id to 0 to remove  

// Projection Operators

// $elemMatch
// Purpose: Used to match specific elements in an array that meet certain criteria.
// db.VAC_Courses.find({assignment: {$elemMatch: {$gt:4}}}, {name: 1, _id: 0})

// $ (Positional Operator)
// Purpose: Used to update a specific element in an array based on a query condition.


//  $slice
// Purpose: Used to return a limited number of elements from an array when querying.
// db.VAC_Courses.find({},{topics:{$slice:2}})

// db.VAC_Courses.insertMany([
//     { name: "Operating Systems", assignment: [2, 4, 5, 1], classes: 4, topics: ["Memory Management", "Processes", "Threads", "Scheduling"] },
//     { name: "Data Structures", assignment: [3, 6, 2], classes: 5, topics: ["Arrays", "Linked Lists", "Trees", "Graphs"] },
//     { name: "Algorithms", assignment: [7, 4, 8, 9], classes: 3, topics: ["Sorting", "Dynamic Programming", "Greedy"] },
//     { name: "Database Management", assignment: [5, 3, 6], classes: 4, topics: ["SQL", "Normalization", "Indexes", "Transactions"] },
//     { name: "Web Development", assignment: [1, 2], classes: 6, topics: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
//     { name: "Cloud Computing", assignment: [3, 5, 7], classes: 5, topics: ["AWS", "Azure", "Google Cloud", "Virtualization"] },
//     { name: "Machine Learning", assignment: [4, 9, 6], classes: 4, topics: ["Supervised Learning", "Unsupervised Learning", "Neural Networks"] },
//     { name: "Artificial Intelligence", assignment: [8, 5], classes: 3, topics: ["Search Algorithms", "Knowledge Representation", "Planning"] },
//     { name: "Computer Networks", assignment: [2, 3, 5], classes: 4, topics: ["OSI Model", "TCP/IP", "Routing", "Switching"] },
//     { name: "Software Engineering", assignment: [6, 4, 5], classes: 3, topics: ["Agile", "Scrum", "Version Control"] }
// ]);

// db.VAC_Courses.aggregate([{$match: {name:"Operating Systems" }}])
// db.VAC_Courses.aggregate([{$group: {_id: "$classes",topic: {$push:{assignment:"$assignment",name:"$name"}}}}])
// db.VAC_Courses.aggregate([{$group: {
//   _id: "$classes",
//   courseDetails: {
//     $push: "$$ROOT" // Root gives all the document 
//   }
// }}])