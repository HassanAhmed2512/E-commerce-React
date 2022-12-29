import './ShoppingCart.css';
import Typography from '@mui/material/Typography';
// import DeleteIcon from '@mui/icons-material/Delete';
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
// import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
// import Grid from '@mui/material/Grid';
// import Icon from '@mui/material/Icon';
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
 import Cart  from './Cart.jsx';
 import Footer  from './Footer.jsx';
 


function ShoppingCart() {
  return (

       
   
      
      
    <div className='ahmed'>
    <div className="parent">
  
   <div className='cd'>
       <Typography variant="h1" gutterBottom className='shop' >
   shopping cart
     
       </Typography> 
   </div> 
   <div className='cart'>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  <Cart/>
  </div>
  <br/>
  <div className='b'>
<Typography className='cmd' variant="h5" gutterBottom align='left'>
sub total

    </Typography>
    <Typography className='c' variant="h5" gutterBottom align='right'>
10000

    </Typography>
</div>
<div className='child'>
<button className='check'>
<Typography variant="h5" gutterBottom align='center'>
checkout

    </Typography>
    </button>
<a href='' className='av'>
<Typography variant="h6" gutterBottom align='center'>
or
<p className='hhh'>continueShopping </p>
    </Typography>
    </a>

</div>
 </div>   
 <Footer/>
 </div>
  );
}
export default ShoppingCart;

