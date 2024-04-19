import { cn } from "@lib/utils"
import Image from "next/image"
const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <Image
          src={
            "https://drive.google.com/uc?id=1dO0QWEuvSixKxXhQrVrjWXCh3KBz4QB4"
          }
          width={1000}
          height={1000}
          alt="Logo"
          className={cn("w-[500px] h-[500px]")}
        />
      </div>
    </div>
  )
}

export default Hero
