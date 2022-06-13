import{IoMdHelpCircle} from 'react-icons/io';
import {RiCloseCircleFill} from'react-icons/ri';
import * as React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <RiCloseCircleFill size={"20px"}/>
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <button onClick={handleClickOpen}>
          <IoMdHelpCircle size={"20px"}/>
        </button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            FAQ
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
                <h3><b>Supported files</b></h3>
              <p>As for now, the only supported files are .gltf & .glb. We will be looking to integrate
              .fbx, .obj and other file formats in the near future.</p>
            </Typography>
            <Typography gutterBottom>
                <h3><b>Is there a limit in adding animations?</b></h3>
              <p>No, you can add as many animations as you'd like to your model.</p>
            </Typography>
            <Typography gutterBottom>
                <h3><b>Why is my model not supported, even being the correct format?</b></h3>
              <p>Currently all the animations are meant for mixamo characters, loading a model that is different
              from the Mixamo characters, will result in jittery & bugged animations.</p>
            </Typography>
            <Typography gutterBottom>
                <h3><b>What is the community hub?</b></h3>
              <p>Once you are done animating, you are ready to download your file. If you like, you are able to share
                your model with the community by clicking on the "upload"-button on top of the page.
              </p>
            </Typography>
          </DialogContent>
          
        </BootstrapDialog>
      </div>
    );
  }
// export default function HelpPanel(){

//     return(
//         <div>
//             <button onClick={()=>OpenHelp()}><IoMdHelpCircle size={"20px"}/></button>
//         </div>
//     )
// }