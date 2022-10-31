import WaitingListItem from "./WaitingListItem"
import ButtonMenu from './ButtonMenu'
import a from '../assets/dating/girls/a.jpg'
import b from '../assets/dating/girls/b.jpg'
import d from '../assets/dating/girls/d.jpg'
import c from '../assets/dating/girls/c.jpg'
import e from '../assets/dating/girls/e.jpg'

const Dating = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="w-full h-20 bg-gradient-to-b from-blue-300 " style={{
        minHeight: "25vh",
      }}></div>
      {/* Content */}
      <div className="flex px-10">
        {/* Waiting List */}
        <div className=" basis-1/4">
          <WaitingListItem image={a} name={"Anika"} message={"Oh i don't like fish"}/>
          <WaitingListItem image={b} name={"Lili"} message={"I really miss you."}/>
          <WaitingListItem image={d} name={"Shreya"} message={"Hello"}/>
          <WaitingListItem image={c} name={"Lilly"} message={"If I were a stop light, I’d turn"}/>
          <WaitingListItem image={e} name={"Monika"} message={"How about a movie and then…"}/>
        </div>

        {/* Images */}
        <div className=" basis-1/2">
          <img src={a} alt="" className=" mx-auto" style={{
            width: '550px',
            height: '550px'
          }}/>
          <ButtonMenu />
        </div>

        {/* Detail Information */}
        <div className=" basis-1/4 bg-slate-400">
          3
        </div>


      </div>
    </div>
  )
}

export default Dating