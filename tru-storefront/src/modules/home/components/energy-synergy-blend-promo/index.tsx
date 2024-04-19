import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const EnergySynergyBlendPromo = () => {
  return (
    <div className="py-8 px-2 flex flex-col md:flex-row lg:flex-row lg:px-[150px] lg:py-16">
      <div className="w-full bg-green-700 text-white flex flex-col items-center justify-center p-4 lg:w-1/2 md:w-1/2">
        <h1 className="text-4xl font-bold text-center pb-4">
          Energy Synergy Blend 100% Therapeutic
        </h1>
        <p className="text-lg font-medium text-center pb-6">
          Our Energy Blend is a carefully crafted combination of essential oils
          designed to help boost your energy levels and promote feelings of
          alertness and focus. This powerful blend is perfect for individuals
          who need a little extra support to power through a busy day or who
          want to get the most out of their workout.
        </p>
        <LocalizedClientLink
          className="bg-white text-lg text-black p-2 hover:font-bold"
          href={"/"}
        >
          BUY NOW
        </LocalizedClientLink>
      </div>
      <div className="w-full lg:w-1/2 md:w-1/2">
        <Image
          src={
            "https://drive.google.com/uc?id=1PDmFXrxeHAIK0gcegNt8_f9P2ONRjgho"
          }
          alt={"detox"}
          height={5000}
          width={5000}
          className="object-fit w-full h-full"
        />
      </div>
    </div>
  )
}

export default EnergySynergyBlendPromo
