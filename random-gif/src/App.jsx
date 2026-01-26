import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return(
    <div className="w-full h-screen flex flex-col background relative items-center">
      <h1 className="w-11/12 text-center mt-[25px] text-xl absolute bg-white rounded-lg font-bold ">Random GIF</h1>
    <div className="flex flex-col w-full items-center mt-20 gap-10">
    <Random />
    <Tag />
    </div>
    </div>
  )
}
