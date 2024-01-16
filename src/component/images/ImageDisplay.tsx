import { Modal } from "@mui/material";
import "./../css/ImageDisplay.css";

interface Props {
  imageLink: string;
  closeModal: (val: string) => void;
}

const ImageDisplay = (props: Props) => {
  return (
    <Modal
      open={!!props.imageLink}
      onClose={() => props.closeModal("")}
      className="center-container modal"
    >
      <img className="img" src={props.imageLink} />
    </Modal>
  );
};
export default ImageDisplay;
