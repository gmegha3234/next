import wonders from "../wonders.js";
import Image from "next/image";
export default function PhotoPage({ params: { id } }) {
  const photo = wonders.find((p) => p.id == id);
  return (
    <div className="container my-10 mx-auto">
      <div className="w-1/2 mx-auto">
        <h1 className="text-centre text-green-50 font-bold my-4">
          {photo.name}
        </h1>
      </div>
      <Image
        src={photo.src}
        alt={photo.name}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white py-4">
        <h3>{photo.name}</h3>
      </div>
    </div>
  );
}
