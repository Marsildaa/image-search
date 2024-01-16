import { useState } from "react";
import { Props } from "../common/Interface";
import "./../css/PexelsImages.css";
import ImageDisplay from "./ImageDisplay";
import { Pagination, Typography } from "@mui/material";

const PexelsImages = (props: Props) => {
  const [openedImageLink, setOpenedImageLink] = useState<string>("");
  return (
    <>
      {props.data.photos && (
        <>
          <div className="gallery">
            {props.data.photos.map((image: any) => {
              return (
                <div className="item">
                  <img
                    className="image"
                    src={image.src.medium}
                    onClick={() => setOpenedImageLink(image.src.large)}
                  />
                </div>
              );
            })}
            <ImageDisplay
              imageLink={openedImageLink}
              closeModal={setOpenedImageLink}
            />
          </div>
          {props.data.photos.length > 0 ? (
            <Pagination
              count={Math.ceil(props.data.total_results / props.data.per_page)}
              page={props.page}
              onChange={(e, value) => props.setPage(value)}
            />
          ) : (
            <Typography fontSize={24} textAlign="center">
              No images available for this search!
            </Typography>
          )}
        </>
      )}
    </>
  );
};

export default PexelsImages;
