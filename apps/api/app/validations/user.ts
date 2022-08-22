import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const firstNameRules = schema.string({ trim: true }, [rules.maxLength(20)])
export const lastNameRules = schema.string({ trim: true }, [rules.maxLength(20)])
export const emailRules = schema.string({ trim: true }, [
  rules.maxLength(20),
  rules.email(),
  rules.unique({ table: 'users', column: 'email' }),
])
export const passwordRules = schema.string({ trim: true }, [
  rules.minLength(6),
  rules.maxLength(20),
  rules.confirmed(),
])