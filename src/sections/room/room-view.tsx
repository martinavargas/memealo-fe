"use client";
import Draft from "@/components/draft";
import Deck from "@/components/deck";
import { useEffect, useState } from "react";

export default function RoomView() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const images: string[] = [
    "https://www.nacionrex.com/export/sites/debate/img/2023/08/05/memes-gatos-2.jpg_687446817.jpg",
    "https://images.hola.com/imagenes/mascotas/20191218155663/gatos-memes-divertidos-2019-gt/0-755-567/gato-tosiendo-z.jpg",
    "https://www.elpais.com.co/resizer/mBPF0ANIhK9C8OBjoh-0-3RA_5c=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/ES4YNNALTVAY3I5RENIXL5WIQI.jpg",
    "https://i.pinimg.com/236x/01/05/f0/0105f0af33c4296aff03661340c236c6.jpg",
    "https://imagenes.diariodenavarra.es/files/image_477_265/uploads/2021/02/18/60ae5c9db9f42.jpeg",
    "https://holatelcel.com/wp-content/uploads/2017/02/memes-gatos-1.jpg",
    "https://ih1.redbubble.net/image.2281149602.0789/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    "https://lanoticia.com/wp-content/uploads/2020/08/gato_png_crop1567201738546-jpg_673822677-1.jpg",
  ];

  const getDivPosition = (index: number): DOMRect | null => {
    const element = document.getElementById('selectedCard');
    const position = element ? element.getBoundingClientRect() : null;
    console.log("Posición del div con ID 'selectedCard':", position);
    return position;
  };


  const handleImageSelect = (index: number) => {
    setSelectedImage((prev) => (prev === index ? null : index));
  };

  const handleImageHover = (index: number) => {
    setHoveredImage(index);
    getDivPosition(index);
  };

  return (
    <div className="flex relative w-screen h-screen bg-[#2B2C48] m-0 p-0 overflow-hidden">
      <div className="flex-none w-5/12 h-[10vh] absolute top-[3vh] left-[2vw] md:w-4/12 md:h-[15vh] md:top-[8vh] md:left-1/2 md:translate-x-[-50%] border-solid border-2 border-gray-500 text-gray-500">
        Players
      </div>
      <div className="flex-none w-8/12 h-[30vh] absolute top-[22vh] left-1/2 translate-x-[-50%] md:w-4/12 md:h-[27vh] md:top-[26vh] border-solid border-2 border-gray-500 text-gray-500">
        Text
      </div>
      <div className="flex-none w-8/12 h-[34vh] absolute bottom-[5vh] right-[3vw] md:w-6/12 md:h-[46vh] md:bottom-0 md:left-1/2 md:translate-x-[-50%] border ">
      <Draft
        handleImageSelect={handleImageSelect}
        handleImageHover={handleImageHover}
        selectedImage={selectedImage}
        hoveredImage={hoveredImage}
        images={images}
      />
        <div className="flex-none w-[16vw] h-[16vh] absolute bottom-[5vh] left-[7vw] md:w-[12vw] md:h-[22vh] md:bottom-[23vh] md:left-1/2 border md:translate-x-[-50%]">
          <Deck />
        </div>
      </div>
      <div id='selectedCard' className="flex-none w-[27vw] h-[12vh] absolute bottom-0 left-[15vw] md:w-[9vw] md:h-[24vh] md:bottom-0 rounded-xl">
        
      </div>
      <div className="flex-none w-[27vw] h-[12vh] absolute bottom-[24vh] left-[1vw] md:w-[13vw] md:h-[43vh] md:m-3 md:bottom-[5vh] border-solid border-2 border-gray-500 text-gray-500">
        Special Cards
      </div>
      <div className="flex-none w-4/12 h-[10vh] absolute top-[3vh] right-[2vw] md:w-[22vw] md:h-[15vh] md:top-[2vw] md:right-[1vw] border-solid border-2 border-gray-500 text-gray-500">
        Achievement
      </div>
      <div className="flex-none w-[10vw] h-[10vh] absolute top-[45vh] right-[1vw] md:w-[22vw] md:h-3/4 md:bottom-[2vh] md:right-[1vw] md:top-auto md:text-[15px] border-solid border-2 border-gray-500 text-gray-500 text-[8px]">
        Mobile Button Chat/ Chat
      </div>
    </div>
  );
}
