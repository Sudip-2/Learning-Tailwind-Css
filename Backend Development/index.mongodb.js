use('Sigma');

// Insert a few documents into the sales collection.
db.getCollection('Courses').insertMany([
    {"name": "sudip", "Course": "BCA"},
    {"name": "amit", "Course": "BCA"},
    {"name": "raj", "Course": "BCA"},
    {"name": "suman", "Course": "BCA"},
    {"name": "priya", "Course": "BCA"},
    {"name": "rohit", "Course": "BCA"},
    {"name": "kavita", "Course": "BCA"},
    {"name": "nisha", "Course": "BCA"},
    {"name": "vikram", "Course": "BCA"},
    {"name": "deepak", "Course": "BCA"}
  ]);

  console.log(`Done Inserting Data`)