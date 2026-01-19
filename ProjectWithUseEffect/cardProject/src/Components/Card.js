import {FcLike , FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";



const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

function clickHandler() {
  if(likedCourses.includes(course.id)) {
    // already liked, so unlike it
    setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
    toast.warning("Like removed");
  } else {
    // not liked, so like it
    if(likedCourses.length === 0) {
      setLikedCourses([course.id]);
    } else {
      setLikedCourses((prev) => [...prev , course.id]);
    }
    toast.success("Liked Successfully");
  }
}


  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden text-white flex flex-col gap-2 p-2'>
      <div className='relative'>
        <img src={course.image.url} alt={course.title} />

         <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
        <button onClick={clickHandler}>
          {
            likedCourses.includes(course.id) ? (<FcLike fontSize={30}/>) : (<FcLikePlaceholder fontSize={30}/>) 
          }
        </button>
      </div>
      </div>
      <div className="p-4">
        <p className='font-semibold'>{course.title}</p>
        <p className='mt-2'>
          {
          course.description.length > 100 ? (course.description.substring(0, 100) + "...") : (course.description)
          }
          </p>
      </div>
    </div>
  )
}
export default Card;