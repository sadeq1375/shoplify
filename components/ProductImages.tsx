import Image from "next/image";

const images = [
  {
    id: 1,
    url: "https://dkstatics-public.digikala.com/digikala-products/4facfdc3d6617599e7959dda59b640606435424f_1633284324.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 2,
    url: "https://dkstatics-public.digikala.com/digikala-products/4facfdc3d6617599e7959dda59b640606435424f_1633284324.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 3,
    url: "https://dkstatics-public.digikala.com/digikala-products/4facfdc3d6617599e7959dda59b640606435424f_1633284324.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
  {
    id: 4,
    url: "https://dkstatics-public.digikala.com/digikala-products/4facfdc3d6617599e7959dda59b640606435424f_1633284324.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
  },
];
const ProductImages = () => {
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src="https://dkstatics-public.digikala.com/digikala-products/4facfdc3d6617599e7959dda59b640606435424f_1633284324.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
          alt=""
          fill
          className="object-cover rounded-md"
          sizes="50vw"
        />
      </div>
      <div>
        <div className="w-1/4 h-32 relative gap-4 mt-8">
          <Image
            src="https://dkstatics-public.digikala.com/digikala-products/4facfdc3d6617599e7959dda59b640606435424f_1633284324.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
            alt=""
            fill
            className="object-cover rounded-md"
            sizes="30vw"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
