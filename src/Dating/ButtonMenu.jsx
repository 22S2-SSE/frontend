import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplayIcon from '@mui/icons-material/Replay';
const ButtonMenu = () => {
  return (
    <div className=" flex justify-center space-x-5 relative -top-16">
      <div className=' bg-slate-50 w-14 h-14 rounded-full flex flex-col justify-center'>
        <IconButton aria-label="delete">
          <CloseIcon fontSize="large"/>
        </IconButton>
      </div>
      <div className=' bg-slate-50 w-14 h-14 rounded-full flex flex-col justify-center'>
      <IconButton color="secondary" aria-label="add an alarm">
        <ReplayIcon fontSize="large"/>
      </IconButton>
      </div>
      <div className=' bg-slate-50 w-14 h-14 rounded-full flex flex-col justify-center'>
      <IconButton color="primary" aria-label="add to shopping cart" >
        <FavoriteIcon color="error" fontSize="large"/>
      </IconButton>
      </div>
      
      
      
    </div>
  )
}

export default ButtonMenu