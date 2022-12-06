import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton, Typography } from '@mui/material';

const CustoModal = (props) => {
  const { children, open, close, title, size, ...other } = props;

  return (
    <Dialog
      maxWidth={size}
      fullWidth
      aria-labelledby="title"
      open={open}
      className="custom_modal"
    >
      <DialogTitle className="header_wrapper" {...other}>
        <h2>   {title}</h2>

        {close ? (
          <IconButton
            aria-label="close"
            onClick={() => close(false)}
            className="icon_wrapper"

          >
            <i class="fa fa-times" aria-hidden="true"></i>

          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent className="content_Wrapper">
        {children}
      </DialogContent>

    </Dialog>
  );
}


export default CustoModal


// how to use this modal 
{/* 
//this is button to call modal 
<button onClick={() => { setOpen(true) }}>opem</button>

// this is modal body
<MuiModal open={open} close={setOpen} title="CREATE CUSTOM VENUE" >
// this is your content area
    <h1>kdfjkldj</h1>
</MuiModal> */}