const ProductSkeleton = () => {
  return (
    <div className="relative animate-pulse">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
        <span className="block h-full bg-gray-200"></span>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <span className="block bg-gray-200 h-4"></span>
        <span className="block bg-gray-200 h-4"></span>
      </div>
    </div>
  );
};

export default ProductSkeleton;
