export default function PhotoRibbon() {
  const images = [
    { src: "/images/advertisement/12.jpg", alt: "Image 1" },

    { src: "/images/films-and-theatre/8.jpg", alt: "Image 2" },
    { src: "/images/baptisms/33.jpg", alt: "Image 3" },
    { src: "/images/films-and-theatre/100.jpg", alt: "Image 4" },
    { src: "/images/portraits/4.jpg", alt: "Image 5" },
    { src: "/images/advertisement/21.jpg", alt: "Image 6" },
    { src: "/images/weddings/1002.jpg", alt: "Image 7" },

    { src: "/images/portraits/15.jpg", alt: "Image 8" },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 md:grid-cols-8 w-full gap-0">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
