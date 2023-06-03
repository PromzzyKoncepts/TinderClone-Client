import '../Stylesheets/SwipeButtons.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import IconButton from '@mui/material/IconButton'

const SwipeButtons = () => {
  return (
    <div className='swipe-btns' >
      <IconButton className='button'>
        <ReplayRoundedIcon className='btn replay' />
      </IconButton>

      <IconButton className=''>
        <CloseRoundedIcon className='btn close' />
      </IconButton>

      <IconButton className=''>
        <StarRoundedIcon className=' btn star' />
      </IconButton>

      <IconButton className=''>
        <FavoriteRoundedIcon className='btn like' />
      </IconButton>

      <IconButton className=''>
        <BoltRoundedIcon className='btn flash' />
      </IconButton>
    </div>
  )
};

export default SwipeButtons;