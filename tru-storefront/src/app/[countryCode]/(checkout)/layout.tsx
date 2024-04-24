import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Footer from "@modules/layout/templates/footer"
import MobileNav from "@modules/layout/templates/mobile-nav"
import Nav from "@modules/layout/templates/nav"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-white relative small:min-h-screen">
      <div className="h-full bg-white">
      <Nav />
      <MobileNav />
      </div>
      <div className="relative" data-testid="checkout-container">{children}</div>
      <div className=" w-full h-full flex items-center justify-center">
      <Footer />
      </div>
    </div>
  )
}
