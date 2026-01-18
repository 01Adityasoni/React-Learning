import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  console.log("courses in cards", courses);


  function getCourses() {
    let allCourses = [];
    Object.values(courses).forEach(array => {
      if (Array.isArray(array)) {
        array.forEach(courseData => {
          allCourses.push(courseData);
        });
      }
    });
    return allCourses;
  }
  return (
    <div className="w-full flex flex-wrap justify-center gap-4 mb-4">   
        {
          getCourses().map((course) => (
            <Card key={course.id} course={course}/>
          ))
        }
    </div>
  )
}   
export default Cards;