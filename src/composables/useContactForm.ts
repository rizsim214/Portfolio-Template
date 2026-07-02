import { ref } from 'vue'

const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL

export function useContactForm() {
  const formData = ref({
    name: '',
    email: '',
    message: '',
  })

  const submitted = ref(false)
  const isSubmitting = ref(false)
  const submitError = ref('')

  const resetForm = () => {
    formData.value = {
      name: '',
      email: '',
      message: '',
    }
  }

  const handleSubmit = async () => {
    submitted.value = false
    submitError.value = ''
    isSubmitting.value = true

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.value.name,
          email: formData.value.email,
          message: formData.value.message,
          _subject: `Portfolio contact from ${formData.value.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      submitted.value = true
      resetForm()
    } catch {
      submitError.value = 'Message could not be sent right now. Please email me directly instead.'
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    formData,
    handleSubmit,
    isSubmitting,
    recipientEmail,
    submitted,
    submitError,
  }
}
