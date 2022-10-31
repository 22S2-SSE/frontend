const WaitingListItem = ({name, message, image}) => {
  return (
    <div className='flex mb-4 h-20 space-x-4 w-full'>
      <img src={image} alt="" className=' rounded-full' />
      <div className='flex flex-col justify-evenly'>
        <div className=' text-xl font-semibold text-left'>
          {name}
        </div>
        <div className=' text-base text-left'>
          {message}
        </div>    
      </div>
    </div>
  )
}

export default WaitingListItem