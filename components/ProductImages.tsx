"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://dkstatics-public.digikala.com/digikala-products/4facfdc3d6617599e7959dda59b640606435424f_1633284324.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 2,
    url: "https://dkstatics-public.digikala.com/digikala-products/c56be4c5fd7dd9001b2e52f257d9e566c14fa1b1_1633284377.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 3,
    url: "https://dkstatics-public.digikala.com/digikala-comment-files/4ae21aa1c4c8df3993a59d4c6ca7879ba3aba439_1673692510.jpg?x-oss-process=image/resize,m_lfit,h_1024,w_1024/quality,q_80",
  },
  {
    id: 4,
    url: "https://dkstatics-public.digikala.com/digikala-comment-files/ce66b14b4447af41e8810e0844aab0419a22db04_1692875050.jpg?x-oss-process=image/resize,m_lfit,h_1024,w_1024/quality,q_80",
  },
];
const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          className="object-cover rounded-md"
          sizes="50vw"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              className="object-cover rounded-md"
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
