import {FcLike} from "react-icons/fc";



const Card = (props) => {
  let course = props.course;
  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden text-white flex flex-col gap-2 p-2'>
      <div>
        <img src={course.image.url} alt={course.title} />
      </div>
      <div>
        <button>
          <FcLike size={"1.5em"}/>
        </button>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  )
}
export default Card;