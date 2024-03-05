import { FC, ReactElement, useCallback } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { Modal as MuiModal } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useAppDispatch } from "../hooks";
import { UnknownAction } from "@reduxjs/toolkit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //add some sx:, md: to this
  width: 400,
  bgcolor: "background.paper",

  p: 4,
  borderRadius: 2,
};

type Modal = {
  setOpenForm: (value: boolean) => UnknownAction;
  openForm: boolean;
  FormComponent: ReactElement;
};

const Modal: FC<Modal> = (props): React.ReactElement => {
  const { setOpenForm, openForm, FormComponent } = props;

  const dispatch = useAppDispatch();

  const handleOnCloseForm = useCallback(() => {
    dispatch(setOpenForm(false));
  }, [dispatch, setOpenForm]);

  return (
    <div>
      <MuiModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openForm}
        onClose={handleOnCloseForm}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openForm}>
          <Box sx={style}>{FormComponent}</Box>
        </Fade>
      </MuiModal>
    </div>
  );
};

export { Modal };
