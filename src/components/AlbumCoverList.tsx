import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import type { Photo } from "react-photo-album";

export interface Props {
  photos: Photo[];
}

export default function AlbumCoverList({ photos }: Props) {
  return (
    <RowsPhotoAlbum
      photos={photos}
      targetRowHeight={200}
      rowConstraints={{
        maxPhotos: 2,
      }}
      render={{
        // image: (props) => <div {...{className: 'ablum-cover-card'}}> <img {...props} /></div>,
        extras: (_, { photo, index }) => (
          <div className="ablum-cover-title">{photo.title}</div>
        ),

        link: props => (
          <a
            {...props}
            className={props.className + " ablum-cover-card"}
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
  );
}
