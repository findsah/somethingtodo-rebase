/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import errorWarn from '../../../assets/icons/errorWarn.svg'

const CustomErrorPopUp = (props) => {
  const { children, openError, close, error, size, ...other } = props;

  return (
    <Dialog
      maxWidth={size}
      fullWidth
      aria-labelledby="title"
      open={openError}
      className="custom_modal_error"
    >

      <DialogContent className="content_Wrapper_error">
        <img src={errorWarn} alt="" width={"30px"} height={"30px"} />
        <p> {error}  </p>
        <button onClick={() => { close(false) }} className='btn_primary'>Okay</button>
      </DialogContent>


    </Dialog>
  );
}


export default CustomErrorPopUp


