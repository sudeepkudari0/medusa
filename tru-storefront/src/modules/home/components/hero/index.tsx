import { cn } from "@lib/utils"
import Image from "next/image"
const Hero = () => {
  return (
    <div className="h-[100vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <Image 
        src="https://drive.google.com/uc?id=1kar4u9NfrdE43B-MuiK4MMrBdzLxD5ja"
        alt="Hero"
        width={1972}
        height={1024}
        className="w-full h-full object-cover "
        />
    </div>
  )
}

export default Hero
