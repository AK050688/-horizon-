import React from "react";
import Background from "../../assets/footer-bg.webp";

const galleryData = [
  [
    "https://picsum.photos/400/600?random=10",
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=11",
    "https://picsum.photos/400/300?random=6",
  ],
  [
    "https://picsum.photos/400/300?random=14",
    "https://picsum.photos/400/600?random=16",
    "https://picsum.photos/400/300?random=18",
    "https://picsum.photos/400/300?random=1",
  ],
  [
    "https://picsum.photos/400/600?random=19",
    "https://picsum.photos/400/300?random=20",
    "https://picsum.photos/400/300?random=29",
    "https://picsum.photos/400/300?random=21",
  ],
  [
    "https://picsum.photos/400/300?random=22",
    "https://picsum.photos/400/600?random=23",
    "https://picsum.photos/400/300?random=24",
    "https://picsum.photos/400/300?random=5",
  ],
];

const Gallery = () => {
  return (
    <div className="gallery-container min-h-screen h-full">
      <div
        className="gallery sm:py-16 sm:px-8 py-8 px-4"
        style={{
          backgroundColor: "#2d3748",
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "white",
        }}
      >
        <p className="font-semibold sm:text-4xl text-2xl">Gallery</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 sm:px-8 px-4">
        {galleryData.map((columnImages, index) => (
          <div key={index} className="grid gap-4">
            {columnImages.map((src, imgIndex) => (
              <div key={imgIndex} className="overflow-hidden">
                <img
                  className="h-auto max-w-full rounded-lg hover:scale-110 transition duration-500 ease-in-out cursor-pointer"
                  src={src}
                  alt={`Gallery image ${imgIndex + 1} in column ${index + 1}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
