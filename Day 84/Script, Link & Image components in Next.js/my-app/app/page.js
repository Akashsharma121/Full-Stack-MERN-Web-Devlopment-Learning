import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300 relative">
     <Image className="mx-auto object-fill" fill={true}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s" alt="" />
    </div>
  );
}
