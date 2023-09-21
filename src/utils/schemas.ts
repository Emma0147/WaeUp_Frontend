import { z } from 'zod';
import { departments, faculties, levels } from '@/utils/variables';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  'images/jpeg',
  'images/jpg',
  'images/png',
  'images/webp'
];

export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please input a valid email address' })
    .max(50, { message: 'Must contain at most 50 characters' }),
  password: z
    .string()
    .min(4, { message: 'Must contain at least 4 characters' })
    .max(20, { message: 'Must contain at most 20 characters' })
});

export const RegisterSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: 'Must contain at least 2 characters' })
      .max(15, { message: 'Must contain at most 15 characters' })
      .regex(/[a-zA-z]/, { message: 'Must contain alphabets only' }),
    lastName: z
      .string()
      .min(2, { message: 'Must contain at least 2 characters' })
      .max(15, { message: 'Must contain at most 15 characters' })
      .regex(/[a-zA-z]/, { message: 'Must contain alphabets only' }),
    email: z
      .string()
      .email({ message: 'Please input a valid email address' })
      .max(40, { message: 'Must contain at most 40 characters' }),
    phone: z.coerce.number(),
    gender: z.enum(['Male', 'Female']),
    faculty: z.enum(['Management Science']),
    level: z.enum(['100', '200', '300', '400', '500']),
    department: z.enum([
      'Accounting',
      'Business Administration',
      'Banking',
      'Insurance'
    ]),
    matricNo: z.coerce.number(),
    // age: z.coerce.number(),
    // .min(11, { message: 'must be a valid phone number' })
    // .max(11, { message: 'must be a valid phone number' }),
    password: z
      .string()
      .min(4, { message: 'Must contain at least 4 characters' })
      .max(20, { message: 'Must contain at most 20 characters' }),
    confirmPassword: z
      .string()
      .min(4, { message: 'Must contain at least 4 characters' })
      .max(20, { message: 'Must contain at most 20 characters' })
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords do not match',
        path: ['confirmPassword']
      });
    }
  });

export const QuestionsSchema = z.object({
  question: z
    .string()
    .min(4, { message: 'Question can not be less than 4 characters' }),
  answer: z.enum(['A', 'B', 'C', 'D']),
  options: z.object({
    A: z.string().nonempty(),
    B: z.string().nonempty(),
    C: z.string().nonempty(),
    D: z.string().nonempty()
  })
});

export const QuestionsSchema1 = z.object({
  faculty: z.enum(faculties),
  department: z.enum(departments),
  level: z.enum(levels),
  course: z.string().nonempty(),
  q: z
    .object({
      question: z
        .string()
        .min(4, { message: 'Question can not be less than 4 characters' }),
      answer: z.enum(['A', 'B', 'C', 'D']),
      options: z.object({
        A: z.string().nonempty(),
        B: z.string().nonempty(),
        C: z.string().nonempty(),
        D: z.string().nonempty()
      })
    })
    .array()
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type QuestionsSchemaType = z.infer<typeof QuestionsSchema>;
export type QuestionsSchemaType1 = z.infer<typeof QuestionsSchema1>;
export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

// computer  monitors, game consoles
