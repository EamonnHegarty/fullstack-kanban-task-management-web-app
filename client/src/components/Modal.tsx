import { FC, ReactElement } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { Modal as MuiModal } from "@mui/material";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //add some sx:, md: to this
  width: 400,
  bgcolor: "background.paper",
  border: "0.5px solid #000",
  p: 4,
};

type Modal = {
  setOpenCreateBoard: React.Dispatch<React.SetStateAction<boolean>>;
  openCreateBoard: boolean;
  FormComponent: ReactElement;
};

const Modal: FC<Modal> = (props): React.ReactElement => {
  const { setOpenCreateBoard, openCreateBoard, FormComponent } = props;

  return (
    <div>
      <MuiModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCreateBoard}
        onClose={() => setOpenCreateBoard(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openCreateBoard}>
          <Box sx={style}>{FormComponent}</Box>
        </Fade>
      </MuiModal>
    </div>
  );
};

export { Modal };
