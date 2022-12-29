import './ShoppingCart.css';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tooltip from '@mui/material/Tooltip';
import IndeterminateCheckBoxTwoToneIcon from '@mui/icons-material/IndeterminateCheckBoxTwoTone';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import './Cart.css';

function Cart() {
  return (
    <div className="add">
    
       <div className='cd'>
        <Typography variant="h5" gutterBottom>
       AHMED_MAHER
      
        </Typography> 
       
      <Typography variant="h5" gutterBottom>
      93.00
      
        </Typography>
        <Typography variant="h5" gutterBottom>
   qtry   3
      
        </Typography>
        <Typography className='d' variant="h5" gutterBottom >
10000

    </Typography>
  </div>
  
  
  <div className='Delete'>
  <Tooltip > 
  <IconButton>
  <AddCircleIcon/>
  </IconButton>
  </Tooltip>
  <input type={Number} width="10"></input>
  <Tooltip>
  <IconButton>
  <RemoveIcon/>
  </IconButton>
  </Tooltip>
      <Tooltip >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
    </div>   
 
  );
}

export default Cart;