import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import ContactUsSchema from "./schema"
import { ClipLoader } from "react-spinners"
import { Button } from "@medusajs/ui"

export const QuestionForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof ContactUsSchema>>({
    resolver: zodResolver(ContactUsSchema),
  })

  const onSubmit: SubmitHandler<z.infer<typeof ContactUsSchema>> = async (
    data
  ) => {
    console.log(data)    
    alert("Thank you for contacting us. We will get back to you shortly.",)
  }

  return (
    <div>
      <form
        className="bg-white  rounded-2xl px-4 py-2 lg:px-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl font-bold pb-4 ">
          CONTACT US FOR ANY QUESTIONS
        </h1>

        <div className="mb-2 flex flex-row gap-4 md:justify-between">
          <div className="mb-2 md:mb-0">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold pb-1 pl-1"
            >
              Your Name<span className="text-red-500">*</span>
            </label>
            <input
              className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                errors.name && "border-red-500"
              } rounded-2xl appearance-none focus:outline focus:shadow-outline  focus:outline-blue-300`}
              id="firstName"
              type="text"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="md:ml-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold pb-1 pl-1"
            >
              Your Email<span className="text-red-500">*</span>
            </label>
            <input
              className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                errors.root && "border-red-500"
              } rounded-2xl appearance-none focus:outline focus:shadow-outline  focus:outline-blue-300`}
              id="lastName"
              type="text"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-2 flex flex-row gap-4 md:justify-between">
          <div className="mb-2 md:mr-2 md:mb-0">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold pb-1 pl-1"
            >
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                errors.phone && "border-red-500"
              } rounded-2xl appearance-none focus:outline focus:shadow-outline  focus:outline-blue-300`}
              id="firstName"
              type="text"
              {...register("phone")}
            />
            {errors.name && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.phone?.message}
              </p>
            )}
          </div>
          <div className="md:ml-2">
            <label htmlFor="" className="block text-sm font-semibold pb-1 pl-1">
              Company
            </label>
            <input
              className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${
                errors.root && "border-red-500"
              } rounded-2xl appearance-none focus:outline focus:shadow-outline  focus:outline-blue-300`}
              id="company"
              type="text"
              {...register("company")}
            />
            {errors.company && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.company?.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="" className="block text-sm font-semibold pb-1 pl-1">
            Your Message
          </label>
          <textarea
            className=" rounded-2xl w-full p-2 h-40 text-md border-gray-300 border focus:border-blue-300
                            focus:outline-none border-gray-300resize-none overflow-auto"
            {...register("message")}
          />
        </div>
        <div className="pt-4 text-left text-black">
              <Button
                className="w-[150px] px-4 py-2 font-bold text-black focus:outline-none focus:shadow-outline"
                type="submit"
                variant="secondary"
              >
                {loading ? <ClipLoader size={14} className="" /> : 'ASK A QUETION'}
              </Button>
              {/* <p className="text-xs italic text-red-500 p-2">{contacterror}</p> */}
            </div>
      </form>
    </div>
  )
}
