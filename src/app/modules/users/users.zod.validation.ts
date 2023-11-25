import { z } from "zod";

const FullNameValidationSchema = z.object({
    firstName: z.string().max(20),
    lastName: z.string(),
});

const AdressValidationSchema = z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
});



export const UsersInterfaceValidationSchema = z.object({
    userId: z.number(),
    username: z.string(),
    password: z.string(),
    fullName: FullNameValidationSchema,
    age: z.number(),
    email: z.string(),
    isActive: z.boolean(),
    hobbies: z.array(z.string()),
    address: AdressValidationSchema,
});


