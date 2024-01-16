import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  TextField,
  InputAdornment,
  Grid,
  Button,
  CardContent,
  Typography,
  Card,
} from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PexelsImages from "./images/PexelsImages";
import ImgurImages from "./images/ImgurImages";
import ImageService from "./common/ImageService";
import CustomLoader from "./common/CustomLoader";

const ImageProvider = () => {
  const [imageProvider, setImageProvider] = useState<string>("pexels");
  const [searchImage, setSearchImage] = useState<string>("");
  const [data, setData] = useState<any>();
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, [imageProvider, page]);

  const getData = () => {
    if (searchImage) {
      setLoading(true);
      if (imageProvider == "imgur") {
        ImageService.get.imgurImages(searchImage, page).then((response) => {
          setData(response);
          setLoading(false);
        });
      } else {
        ImageService.get.pexelImages(searchImage, page).then((response) => {
          setData(response);
          setLoading(false);
        });
      }
    }
  };

  return (
    <Box p={2}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 24, marginBottom: 2 }} color="black">
            Image Search
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel>Image Provider</InputLabel>
                <Select
                  value={imageProvider}
                  label="Image Provider"
                  onChange={(event: SelectChangeEvent) => {
                    setImageProvider(event.target.value);
                    setPage(1);
                  }}
                >
                  <MenuItem value={"imgur"}>Imgur</MenuItem>
                  <MenuItem value={"pexels"}>Pexels</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="start"
              alignItems="center"
              spacing={2}
              xs={6}
            >
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Search"
                  value={searchImage}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchImage(event.target.value)
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="space-between"
                xs={2}
              >
                <Grid item xs={1}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={getData}
                    disabled={!searchImage}
                  >
                    Search
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    sx={{ minWidth: "200px" }}
                    variant="contained"
                    color="error"
                    onClick={() => {
                      setSearchImage("");
                      setData({});
                    }}
                  >
                    Reset Search
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <CustomLoader loading={loading} />
      {data &&
        (imageProvider === "imgur" ? (
          <ImgurImages data={data} page={page} setPage={setPage} />
        ) : (
          <PexelsImages data={data} page={page} setPage={setPage} />
        ))}
    </Box>
  );
};

export default ImageProvider;
