import * as z from 'zod'

const ContactUsSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' }),
  company: z.string().optional().nullable(),
  message: z.string().min(1, { message: 'Message is required' }),
})

export type ContactUsSchema = z.infer<typeof ContactUsSchema>

export default ContactUsSchema
