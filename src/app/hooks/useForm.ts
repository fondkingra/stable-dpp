import { useState, useCallback } from 'react';
import { ValidationErrors } from '../types';

export function useForm<T extends Record<string, any>>(
  initialValues: T,
  validate?: (values: T) => ValidationErrors
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setValue = useCallback((name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as string]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const setFieldValues = useCallback((updates: Partial<T>) => {
    setValues(prev => ({ ...prev, ...updates }));
  }, []);

  const validateForm = useCallback(() => {
    if (!validate) return {};
    const validationErrors = validate(values);
    setErrors(validationErrors);
    return validationErrors;
  }, [validate, values]);

  const handleSubmit = useCallback((onSubmit: (values: T) => void | Promise<void>) => {
    return async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setIsSubmitting(false);
        return;
      }

      try {
        await onSubmit(values);
        setSubmitted(true);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    };
  }, [values, validateForm]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
    setSubmitted(false);
  }, [initialValues]);

  return {
    values,
    errors,
    isSubmitting,
    submitted,
    setValue,
    setFieldValues,
    validateForm,
    handleSubmit,
    reset,
  };
}