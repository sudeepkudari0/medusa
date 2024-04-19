import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const DetoxSynergyBlendPromo = () => {

    return (
        <div className="py-8 px-2 flex flex-col md:flex-row lg:flex-row lg:px-[150px] lg:py-16">
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
          <div className="w-full bg-green-700 text-white flex flex-col items-center justify-center p-4 lg:w-1/2 md:w-1/2">
            <h1 className="text-4xl font-bold text-center pb-4">
              De-tox Synergy Blend 100% Therapeutic
            </h1>
            <p className="text-lg font-medium text-center pb-6">
              De-Tox Synergy Blend is a specially formulated blend of essential
              oils that are known for their detoxifying and purifying
              properties. This blend is designed to support the body’s natural
              detoxification processes, helping to eliminate toxins, boost
              energy levels, and promote overall well-being.
            </p>
            <LocalizedClientLink className="bg-white text-lg text-black p-2 hover:font-bold" href={"/"} >
              BUY NOW
            </LocalizedClientLink>
          </div>
        </div>
    )
}

export default DetoxSynergyBlendPromo