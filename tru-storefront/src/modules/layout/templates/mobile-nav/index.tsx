"use client"

import { clx } from "@medusajs/ui";
import { Suspense, useEffect, useState } from "react";
import Modal from "@modules/layout/components/modal";
import IconMenu from "@modules/layout/components/menu-svg";
import SearchBarSm from "@modules/layout/components/search-bar-sm";
import TabsMobile from "@modules/layout/components/tabs-mobile";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import CartButton from "@modules/layout/components/cart-button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.classList.toggle("sidebar-open", isOpen);
    return () => document.body.classList.remove("sidebar-open");
  }, [isOpen]);

  return (
    <div className="sm:block md:block lg:hidden sticky top-0 inset-x-0 z-50">
      <header className={clx(
          "relative flex h-[60px] md:h-[60px] flex-row mx-auto border-b duration-200 bg-gradient-to-r from-[#f8e4c4] to-[#f5efe7] border-ui-border-base"
        )}>
        <div className="flex items-center w-full h-full">
          <button
            onClick={toggleSidebar}
            className="flex flex-row items-center justify-start pl-4 text-2xl"
          >
            <IconMenu />
            <p className="ml-2 text-sm md:text-xl">Menu</p>
          </button>
          <div className="flex-grow flex justify-center">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <Image
                src={
                  "https://drive.google.com/uc?id=1dO0QWEuvSixKxXhQrVrjWXCh3KBz4QB4"
                }
                width={500}
                height={500}
                alt="Logo"
                className={clx("w-full h-[50px]")}
              />
            </LocalizedClientLink>
          </div>
          <div className="flex items-end justify-end pr-4">
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <FaCartShopping /> (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={toggleSidebar}>
          <nav>
            <div className="">
              <SearchBarSm />
            </div>
            <div>
              <TabsMobile isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </nav>
        </Modal>
      </header>
    </div>
  );
};

export default MobileNav;
