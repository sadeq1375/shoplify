import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          incidunt, reiciendis impedit qui ab iure nesciunt optio dolorum quos.
          Ratione recusandae eligendi minima numquam beatae ut, veritatis
          quaerat molestiae rerum aliquam hic distinctio perferendis est
          exercitationem harum amet quam explicabo ex eius inventore ipsa quas
          iure. Quam iure minus magnam?
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm font-medium">
          <h4 className="mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
            unde vero sapiente cupiditate vitae soluta, tempore possimus
            deleniti nostrum itaque cumque error repellat non rerum. Amet odit
            nulla vero possimus, quae error facere? Tempore odit totam enim
            voluptas ratione minus doloremque eaque sequi ab, quas est nam,
            nobis, numquam tempora!
          </p>
        </div>
        <div className="text-sm font-medium">
          <h4 className="mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
            unde vero sapiente cupiditate vitae soluta, tempore possimus
            deleniti nostrum itaque cumque error repellat non rerum. Amet odit
            nulla vero possimus, quae error facere? Tempore odit totam enim
            voluptas ratione minus doloremque eaque sequi ab, quas est nam,
            nobis, numquam tempora!
          </p>
        </div>
        <div className="text-sm font-medium">
          <h4 className="mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
            unde vero sapiente cupiditate vitae soluta, tempore possimus
            deleniti nostrum itaque cumque error repellat non rerum. Amet odit
            nulla vero possimus, quae error facere? Tempore odit totam enim
            voluptas ratione minus doloremque eaque sequi ab, quas est nam,
            nobis, numquam tempora!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
