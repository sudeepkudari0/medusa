"use client"

import { forwardRef, useImperativeHandle, useMemo, useRef } from "react"

import NativeSelect, {
  NativeSelectProps,
} from "@modules/common/components/native-select"
import { Region } from "@medusajs/medusa"
import { State }  from 'country-state-city';
import { useAtom } from 'jotai'
import { atoms } from "@lib/atoms/atom";

const StateSelect = forwardRef<
  HTMLSelectElement,
  NativeSelectProps & {
    region?: Region
  }
>(({ placeholder = "State", region, defaultValue, ...props }, ref) => {
  const innerRef = useRef<HTMLSelectElement>(null)
  const [selectedState, setSelectedState] = useAtom(atoms.StateAtom);

  useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
    ref,
    () => innerRef.current
  )

  const states = useMemo(() => State.getStatesOfCountry("IN"), []);
  console.log(selectedState)
  return (
    <NativeSelect
      ref={innerRef}
      placeholder={placeholder}
    //   defaultValue={defaultValue}
      {...props}
    >
      {states.map(({ name, isoCode }, index) => (
        <option key={index} value={name +"-" + isoCode}>
          {name}
        </option>
      ))}
    </NativeSelect>
  )
})

StateSelect.displayName = "CountrySelect"

export default StateSelect