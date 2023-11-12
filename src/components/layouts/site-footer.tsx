import Image from "next/image"

import { footerConfig } from "@/config/footer"
import { Button } from "@/components/ui/button"

function SiteFooter() {
  return (
    <div className="h-[325px] w-full">
      <div className="fixed -z-10 h-[325px] w-full bg-backgroundhighlight" />
      <div className="container mx-auto flex justify-around">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Image
              src={"/images/logos/valve_logo.png"}
              width={176}
              height={50}
              alt="valve icon"
            />
            <Image
              src={"/images/logos/steam_logo.png"}
              width={176}
              height={50}
              alt="steam icon"
            />
          </div>
          <div className="">
            © 2023 Valve Corporation. All rights reserved. All trademarks are
            property of their respective owners in the US and other countries.
            <br />
            VAT included in all prices where applicable.
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {footerConfig.footer_1.map((footer) => (
            <div key={footer.id}>{footer.value}</div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {footerConfig.footer_2.map((footer) => (
            <div key={footer.id}>{footer.value}</div>
          ))}
        </div>

        <div className="flex gap-3">
          {footerConfig.footer_3.map((footer) => (
            <Button key={footer.id}>
              <footer.icon />
              <span className="sr-only">{footer.value}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SiteFooter
