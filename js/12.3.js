const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"], students: [],
            capacityLeft: 2,
        }, {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics", "biology" ], students: [],
            capacityLeft: 2,
        }, ],
    students: [
        {
            id: 10,
            name: "Jennifer", age: 20,
        }, {
            id: 11,
            name: "Howard", age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy", age: 86,
        }, {
            id:13,
            name: "Houston", age: 21,
        }, ],
       findPerson:function (type, id) {
            let result =this[type].find(person=>(person.id===id))
             if(result){
               return result;
              }else {
               return "Person doesn't exist";
             }
              },
       assignPerson:function (id,subject) {
        let sub = subject
        // let student = this.findPerson('students',id);
        let teacher =this['teachers'].find(person=>(person.subjects.find(subject=>(subject===sub))));
        let teacherList = school.teachers

       let avaibleTeachers = [];
        for(let i=0;i<teacherList.length;i++){
            if(teacherList[i].subjects.includes(subject)&& teacherList[i].capacityLeft>0){
                avaibleTeachers.push(teacherList[i])
            }

        }
        for(let i = 0;i<avaibleTeachers.length; i++){
            if(avaibleTeachers[i].capacityLeft>0){

           // teacher.students.push(student);
           avaibleTeachers[i].students.push(id)
            avaibleTeachers[i].capacityLeft--;
           return avaibleTeachers[i]
            }



        }
           return 'no available  teachers left';
        },
        assignTeacherSubject:function(id,subject){
        let teacher = this.findPerson('teachers',id);
        if(!teacher.subjects.includes(subject)){
            teacher.subjects.push(subject);
        }else{
            return 'This subject exist'
        }
        },
        addStudent:function(name,id,age) {
        if(this.findPerson('students',id).id!==id){
            this['students'].push({
                id:id,name:name,age:age
            });
            console.log('studendt added')
        }else{
            return 'Id allready in use'
        }
        }
};
//
// console.log(school.findPerson('students',10))
// console.log(school.findPerson('teachers',2))
console.log(school.assignPerson(10,"biology"))
console.log(school.assignPerson(11,"biology"))
console.log(school.assignPerson(12,"biology"))
console.log(school.assignPerson(13,"biology"))
console.log(school.assignPerson(14,"biology"))
// school.assignTeacherSubject(1,'blabla')
// console.log(school.addStudent('bla bla',15,31))
// console.log(school.addStudent('bla bla1',15,21))
// console.log(school.assignTeacherSubject(1,'blabla'))
// console.log(school)
