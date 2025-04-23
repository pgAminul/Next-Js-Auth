import Image from "next/image";
import img from "@/public/banner.jpg";
export default function AllUser() {
  return (
    <div>
      <Image src={img} />
    </div>
  );
}
