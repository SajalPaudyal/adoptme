export default function OptimizedImage({
  image,
  alt,
  width,
  height,
  classname
}: {
  image: string;
  alt: string;
  width?: number;
  classname?:string;
  height?:number;
}) {
  return (
      <img src={image} alt={alt} loading="lazy" width={width} height={height} className={classname}></img>
  );
}
