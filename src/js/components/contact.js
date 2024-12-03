import emailjs from '@emailjs/browser';

export function initContact() {
  const contact = document.getElementById('contact');
  
  // EmailJS configuration
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  
  const contactHtml = `
    <!-- Previous HTML remains the same -->
    ${contact.innerHTML}
  `;

  contact.innerHTML = contactHtml;

  // Form submission handler
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    try {
      const formData = new FormData(form);
      const templateParams = {
        to_email: 'azrraelcomics@gmail.com',
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        company: formData.get('company'),
        phone: formData.get('phone'),
        message: formData.get('message')
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );

      // Show success message
      alert('Mensaje enviado correctamente');
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Por favor, intente nuevamente.');
    } finally {
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    }
  });
}