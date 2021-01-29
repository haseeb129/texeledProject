import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import React, { Component } from "react";

class Test extends Component {
  state = {
    arr: [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
        //   sizes: "width:200px;height:300px",
      },
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
        //   sizes: "width:200px;height:300px",
      },
    ],
  };
  render() {
    return (
      <div>
        <h1>asas</h1>
        <ImageGallery
          items={this.state.arr}
          thumbnailPosition="right"
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={false}
        />
        )
      </div>
    );
  }
}

export default Test;

// const Test = () => {

//   React.useEffect(() => {
//     let shouldCancel = false;

//     const call = async () => {
//       //   const response = await axios.get(
//       //     "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
//       //   );
//       //   if (!shouldCancel && response.data && response.data.length > 0) {
//       //     setImages(
//       //       response.data.map((url) => ({
//       //         original: `${url}=w1024`,
//       //         thumbnail: `${url}=w100`,
//       //       }))
//       //     );
//       //   }
//       setImages();
//     };
//     call();
//     return () => (shouldCancel = true);
//   }, []);

//   return (
//     <div>
//       <h1>asas</h1>
//       images ? (
//       <ImageGallery items={images} thumbnailPosition="right" />) : null;
//     </div>
//   );
// };
// export default Test;
