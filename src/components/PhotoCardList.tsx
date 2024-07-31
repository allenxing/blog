import { RowsPhotoAlbum, ColumnsPhotoAlbum } from "react-photo-album";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export interface Props {
  photos: any[];
}

export default function Card({ photos }: Props) {
  const [index, setIndex] = useState(-1);
  return (
    <div className="my-6">
      {/* {title} */}
      {/* <p>{description}</p> */}
      <PhotoAlbum
        layout="rows"
        photos={photos}
        onClick={({ index }) => setIndex(index)}
        rowConstraints={{
          maxPhotos: 2,
        }}
        render={{
          // image: (props) => <div {...{className: 'ablum-photo'}}> <img {...props} /></div>,
          button: props => (
            <button
              {...props}
              className={props.className + " ablum-photo"}
              style={{
                ...props.style,
                boxShadow:
                  "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                width: "49%",
              }}
            />
          ),
        }}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
