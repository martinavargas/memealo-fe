"use client";

interface DraftProps {
  handleImageSelect: (index: number) => void;
  handleImageHover: (index: number, position: DOMRect | null) => void; // Ajuste aquí
  selectedImage: number | null;
  hoveredImage: number | null;
  images: string[];
}

const Draft = ({
  handleImageSelect,
  handleImageHover,
  selectedImage,
  hoveredImage,
  images,
}: DraftProps) => {

  const getImagePosition = (index: number): DOMRect | null => {
    const element = document.getElementById(`card-${index}`);
    return element ? element.getBoundingClientRect() : null;
  };

  const finalPosition = { x: 173.390625, y: 539.609375 };

  const calculateAnimation = (position: DOMRect | null): string => {
  if (!position) return "";

  const calculateDeltas = () => ({
    deltaX: finalPosition.x - position.left,
    deltaY: finalPosition.y - position.top,
  });

  const calculateDeltasExactly = () => ({
    deltaX: finalPosition.x- (position.left - 30),
    deltaY: finalPosition.y - (position.top + 60),
  });

  return `
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(${calculateDeltasExactly().deltaX}px, ${calculateDeltasExactly().deltaY}px);
    }
  `;
};

  return (
    <div className="absolute flex flex-row items-end justify-center min-w-full min-h-full bg-transparent">
      {images.map((image, index) => {
        const position = getImagePosition(index);

        return (
          <img
            key={index}
            id={`card-${index}`}
            src={image}
            alt={`Card ${index + 1}`}
            className={`w-[9vw] h-[24vh] object-cover rounded-xl border-solid border-2 border-slate-200 transition-transform ease-in-out duration-300 cursor-pointer 	${
              selectedImage === index ? "elevated" : ""
            }`}
            style={{
              marginLeft: `${index > 0 ? "-14.5" : "0.5"}vw`,
              transform: `translateY(${hoveredImage === index ? "-8" : "12"}px)`,
              zIndex: selectedImage === index ? images.length + 1 : images.length - index,
              animation: selectedImage === index ? `cardAnimation-${index} 0.5s ease-in-out forwards` : "",
            }}
            onMouseOver={() => {
              handleImageHover(index, position);
            }}
            onClick={() => {
              handleImageSelect(index);
            }}
          />
        );
      })}
      <style>
        {images.map((_, index) => (
          `@keyframes cardAnimation-${index} {${calculateAnimation(getImagePosition(index))}}`
        ))}
      </style>
    </div>
  );
};

export default Draft;