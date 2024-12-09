import * as React from "react";

import image1 from "../../images/Image1.jpg";
import image2 from "../../images/Image2.jpg";
import image3 from "../../images/Image3.jpg";
import image5 from "../../images/Image5.jpg";

export default function ImageList() {
  return (
    <div className="grid max-w-fit mx-auto  md:grid-cols-2 gap-8 p-8 justify-center items-center ">
      <img
        className="max-w-[650px] rounded-lg aspect-video mx-auto"
        src={image1}
      />
      <img
        className="max-w-[650px] rounded-lg aspect-video mx-auto"
        src={image2}
      />

      <img
        className="max-w-[650px] rounded-lg aspect-video mx-auto"
        src={image3}
      />
      <img
        className="max-w-[650px] rounded-lg aspect-video mx-auto"
        src={image5}
      />
    </div>
  );
}
