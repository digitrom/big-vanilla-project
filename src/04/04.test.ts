test("should take old men older than 90", () => {
     const ages = [18, 20, 22, 1, 100, 90, 14];

     // const predicate = (age: number) => {
     //      return age > 90
     // }
     // const oldAges = ages.filter(predicate);

     const oldAges = ages.filter(age => age > 90); // то же самое что и код выше

     expect(oldAges.length).toBe(1);
     expect(oldAges[0]).toBe(100)
})

test("should take course cheaper than 160", () => {
     const courses = [
          {title: "CSS", price: 110},
          {title: "JS", price: 200},
          {title: "REACT", price: 150}
     ]

     // const cheapPredicate = (course: CoursesType) => {
     //      return course.price < 160
     // }
     // const cheapCourses= courses.filter(cheapPredicate);

     const cheapCourses= courses.filter(course => course.price < 160);// то же самое что и код выше

     expect(cheapCourses.length).toBe(2);
     expect(cheapCourses[0].title).toBe("CSS");
     expect(cheapCourses[1].title).toBe("REACT")
})

test("get only completed tasks", ()=> {
     const tasks = [
         {id: 1, title: "Bred", isDone: true},
         {id: 2, title: "Milk", isDone: false},
         {id: 3, title: "Salt", isDone: true},
         {id: 4, title: "Sugar", isDone: false}
     ]

/*          const completedTasks = tasks.filter(function(task) {
          return task.isDone === true
     })*/
     const completedTasks = tasks.filter(task => task.isDone)

     expect(completedTasks.length).toBe(2);
     expect(completedTasks[0].id).toBe(1);
     expect(completedTasks[1].id).toBe(3);



})

test("get only uncompleted tasks", ()=> {
     const tasks = [
          {id: 1, title: "Bred", isDone: true},
          {id: 2, title: "Milk", isDone: false},
          {id: 3, title: "Salt", isDone: true},
          {id: 4, title: "Sugar", isDone: false}
     ]
     const uncompletedTasks = tasks.filter(task => !task.isDone)
/*     const uncompletedTasks = tasks.filter(function(task) {
          return task.isDone === false
     })*/

     expect(uncompletedTasks.length).toBe(2);
     expect(uncompletedTasks[0].id).toBe(2);
     expect(uncompletedTasks[1].id).toBe(4);



})