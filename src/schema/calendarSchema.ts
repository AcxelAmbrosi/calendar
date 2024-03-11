import { z } from "zod";

export const calendarSchema = z.object({
  city: z
    .string()
    .min(2, { message: "City must contain more than 2 characters" })
    .max(15, "The city must contain a maximum of 15 characters"),
  title: z
    .string()
    .min(2, { message: "Title must contain more than 3 characters" })
    .max(15, "The title must contain a maximum of 15 characters"),
  note: z
    .string()
    .max(30, { message: "The note must contain a maximum of 30 characters" }),
  hours: z.string().refine((value) => /^[0-1]?[0-9]$|^2[0-3]$/.test(value), {
    message: "La hora debe estar en el rango de 0 a 23",
  }),
  minutes: z.string().refine((value) => /^[0-5]?[0-9]$/.test(value), {
    message: "Los minutos deben estar en el rango de 0 a 59",
  }),
});
