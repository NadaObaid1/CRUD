var courseName = document.getElementById('courseName')
var courseCategory = document.getElementById('courseCategory')
var coursePrice = document.getElementById('coursePrice')
var courseDescription = document.getElementById('courseDescription')
var courseCapacity = document.getElementById('courseCapacity')
var addbtn = document.getElementById('click')
var data = document.getElementById('data')
var search = document.getElementById('search')
var update = document.getElementById('update')
var currentIndex = 0

update.style.display = 'none'

var courses = []

addbtn.onclick = function(e){
    e.preventDefault()
    AddCoures()
    RestInput()
    displayData()
    console.log(courses)

}

// create data
function AddCoures(){
    var course = {
        courseName : courseName.value,
        courseCategory : courseCategory.value,
        coursePrice : coursePrice.value,
        courseDescription : courseDescription.value,
        courseCapacity : courseCapacity.value
    }
    courses.push(course)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Are Success Add',
        showConfirmButton: false,
        timer: 1500
      })
}
function RestInput(){
    courseName.value = ''
    courseCategory.value = ''
    coursePrice.value = ''
    courseDescription.value = ''
    courseCapacity.value = ''
}

//read data
function displayData(){
    var result = ''
    for(var i = 0; i<courses.length; i++){
        result += `
        <tr>
        <td>${i+1}</td>
        <td>${courses[i].courseName}</td>
        <td>${courses[i].courseCategory}</td>
        <td>${courses[i].coursePrice}</td>
        <td>${courses[i].courseDescription}</td>
        <td>${courses[i].courseCapacity}</td>
        <td><button class="btn btn-info">update</button></td>
        <td><button class="btn btn-danger" onclick = "deleteCourse(${i})">delete</button></td>
        </tr>
       `
    }
data.innerHTML = result
}

// delete all
document.getElementById('deleteBtn').onclick = function(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            courses = []
            data.innerHTML = ''
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

//delete course
function deleteCourse(index){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            courses.splice(index, 1)
            displayData()
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

//search
search.onkeyup = function(){
    var result = ''
    console.log(search.value)
    for(var i = 0; i<courses.length; i++){
        if(courses[i].courseName.toLowerCase().includes(search.value.toLowerCase())){
        result += `
        <tr>
        <td>${i+1}</td>
        <td>${courses[i].courseName}</td>
        <td>${courses[i].courseCategory}</td>
        <td>${courses[i].coursePrice}</td>
        <td>${courses[i].courseDescription}</td>
        <td>${courses[i].courseCapacity}</td>
        <td><button class="btn btn-info" onclick = "updateCourse(${i})>update</button></td>
        <td><button class="btn btn-danger" onclick = "deleteCourse(${i})">delete</button></td>
        </tr>
        `
        }
data.innerHTML = result
}}

//update data
function getCourse(index){
    console.log(index)
    currentIndex = index
    var course = courses[index]
    courseCategory.value = course.courseCategory
    coursePrice.value = course.coursePrice
    courseDescription.value = course.courseDescription
    courseCapacity.value = course.courseCapacity
    update.style.display = 'inline'
    addbtn.style.display = 'none'

}

update.onclick = function(e){
    e.preventDefault()
    updateCourse()
    displayData()
    update.style.display = 'none'
    addbtn.style.display = 'inline'
    RestInput()

}

function updateCourse(){
    var course = {
        courseName : courseName.value,
        courseCategory : courseCategory.value,
        coursePrice : coursePrice.value,
        courseDescription : courseDescription.value,
        courseCapacity : courseCapacity.value
    }
    var preIndex = courses[currentIndex].courseName
    courses[currentIndex].courseName = course.courseName
    courses[currentIndex].courseCategory = course.courseCategory
    courses[currentIndex].coursePrice = course.coursePrice
    courses[currentIndex].courseDescription = course.courseDescription
    courses[currentIndex].courseCapacity = course.courseCapacity

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '${preIndex} Success update',
        showConfirmButton: false,
        timer: 1500
      })
}