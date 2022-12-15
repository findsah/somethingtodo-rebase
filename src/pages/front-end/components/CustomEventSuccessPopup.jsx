
/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import errorWarn from '../../../assets/icons/errorWarn.svg'

const CustomEventSuccessPopup = (props) => {
    const { children, openSuccess, close, success, size, data, ...other } = props;

    return (
        <Dialog
            maxWidth={size}
            fullWidth
            aria-labelledby="title"
            open={openSuccess}
            className="custom_modal_success"
        >

            <DialogContent className="content_Wrapper_success">
                <div className="icon_check">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </div>
                <br />
                <p> {success}  </p>
                < div className='social_share'>
                    <p>Post your event on:</p>
                    <div className="social_icons">
                        <div className="social_icon">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div className="social_icon">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div className="social_icon">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                        <div className="social_icon">
                            <i class="fa fa-google" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>

                <div className='custom_footer'>

                    <button onClick={() => { close(false) }} className='edit_venue_btn'>EDIT VENUE</button>
                    <button onClick={() => { close(false) }} className='btn_primary'>FINISH</button>
                </div>

            </DialogContent>


        </Dialog>
    );
}


export default CustomEventSuccessPopup


