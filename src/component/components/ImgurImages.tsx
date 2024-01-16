import { useState } from "react";
import { Props } from "../common/Interface";
import { Pagination, Typography } from "@mui/material";
import ImageDisplay from "./ImageDisplay";

const ImgurImages = (props: Props) => {
  const [openedImageLink, setOpenedImageLink] = useState<string>("");

  return (
    <>
      {props.data.length > 0 ? (
        <div className="gallery">
          {props.data.map((image: any) => {
            if (!image.mp4) {
              if (!image.is_album) {
                return (
                  <div key={image.link} className="item">
                    <img
                      className="image"
                      src={image.link}
                      referrerPolicy="no-referrer"
                      onClick={() => setOpenedImageLink(image.link)}
                    />
                  </div>
                );
              } else {
                return image.images.map((img: any) => {
                  if (!img.mp4) {
                    return (
                      <div key={img.link} className="item">
                        <img
                          className="image"
                          src={img.link}
                          referrerPolicy="no-referrer"
                          onClick={() => setOpenedImageLink(img.link)}
                        />
                      </div>
                    );
                  }
                });
              }
            }
          })}
          <ImageDisplay
            imageLink={openedImageLink}
            closeModal={setOpenedImageLink}
          />
        </div>
      ) : props.data.length != undefined ? (
        <Typography fontSize={24} pt={2} textAlign="center">
          No images available for this search!
        </Typography>
      ) : (
        <></>
      )}

      {props.data.length > 0 && (
        <Pagination
          count={55}
          page={props.page}
          onChange={(e, value) => props.setPage(value)}
        />
      )}
    </>
  );
};

export default ImgurImages;
