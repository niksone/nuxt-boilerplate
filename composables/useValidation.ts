import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import type { ZodRawShape, ZodTypeAny } from "zod";

type Field<Type> = {
  [Property in keyof Type]: Ref<any>;
};

type Attribute<Type> = {
  [Property in keyof Type as `${string & Property}Attrs`]: Ref<any>;
};

export const useValidation = <T extends Record<string, ZodTypeAny>>(
  schema: T
) => {
  const createTypedSchema = (schema: ZodRawShape) =>
    toTypedSchema(z.object(schema));

  const form = useForm({ validationSchema: createTypedSchema(schema) });
  const fields = {} as Record<string, Ref<any>>;
  const attributes = {} as Record<string, Ref<any>>;
  for (const field of Object.keys(schema)) {
    const [formField, formFieldAttribute] = form.defineField(field);
    fields[field] = formField;
    attributes[`${field}Attrs`] = formFieldAttribute;
  }

  const isValid = computed(() => form.meta.value.valid);

  return {
    ...form,
    ...(fields as Field<T>),
    ...(attributes as Attribute<T>),
    isValid,
  };
};

export const emailValidation = (message?: string) => {
  const { t } = useI18n();
  return z
    .string({ message: t("validations.requiredField") })
    .nonempty({ message: t("validations.requiredField") })
    .email(message || t("validations.invalidEmail"));
};

const uppercaseRegex = new RegExp(/[A-Z]/);
const lowercaseRegex = new RegExp(/[a-z]/);
const numberRegex = new RegExp(/[0-9]/);
const specialSymbolsRegex = new RegExp(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\]/);

export const passwordValidation = () => {
  const { t } = useI18n();
  return z
    .string({ message: t("validations.requiredField") })
    .nonempty({ message: t("validations.requiredField") })
    .min(8, { message: t("validations.invalidPassword") })
    .regex(lowercaseRegex, { message: t("validations.invalidPassword") })
    .regex(uppercaseRegex, { message: t("validations.invalidPassword") })
    .regex(numberRegex, { message: t("validations.invalidPassword") })
    .regex(specialSymbolsRegex, { message: t("validations.invalidPassword") });
};

export const nameValidation = () => {
  const { t } = useI18n();
  return z
    .string({ message: t("validations.requiredField") })
    .nonempty({ message: t("validations.requiredField") })
    .min(2, t("validations.nameMinCharacters", { count: 2 }))
    .max(50, t("validations.nameMaxCharacters", { count: 50 }));
};
