import { CircularProgress, Dialog } from "@mui/material";

export interface CustomLoaderProps {
  loading: boolean;
}

const CustomLoader = ({ loading }: CustomLoaderProps) => {
  if (loading) {
    return (
      <Dialog
        open={loading}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
      >
        <CircularProgress size={64} />
      </Dialog>
    );
  } else {
    return null;
  }
};

export default CustomLoader;
