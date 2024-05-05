"use client"

import { forwardRef, useImperativeHandle, useMemo, useRef } from "react"

import NativeSelect, {
  NativeSelectProps,
} from "@modules/common/components/native-select"
import { Region } from "@medusajs/medusa"
import { City, State }  from 'country-state-city';
import { useAtom } from 'jotai'
import { atoms } from "@lib/atoms/atom";

const CitySelect = forwardRef<
  HTMLSelectElement,
  NativeSelectProps & {
    region?: Region
  }
>(({ placeholder = "City", region, defaultValue, ...props }, ref) => {
  const innerRef = useRef<HTMLSelectElement>(null)
  const [selectedState, setSelectedState] = useAtom(atoms.StateAtom);

  useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
    ref,
    () => innerRef.current
  )

  const cities = useMemo(() => City.getCitiesOfState("IN", selectedState), [selectedState]);
  return (
    <NativeSelect
      ref={innerRef}
      placeholder={placeholder}
      disabled={!selectedState}
      onChange={(e) => setSelectedState(e.target.value)}
      defaultValue={defaultValue}
      value={selectedState}
      {...props}
    >
      {cities.map(({ name }, index) => (
        <option key={index} value={name}>
          {name}
        </option>
      ))}
    </NativeSelect>
  )
})

CitySelect.displayName = "CountrySelect"

export default CitySelect