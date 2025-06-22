import Inputmask from 'inputmask';

export function initForm() {
  const phoneInputs = document.querySelectorAll('.phone-mask');
  if (phoneInputs.length) {
    new Inputmask('+7 (999) 999-99-99').mask(phoneInputs);
  }

  const contactForm = document.querySelector('.contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const successMessage = this.querySelector('.success-message');

    successMessage.classList.add('visible');
    setTimeout(() => {
      successMessage.style.display = 'flex';
      this.reset();

      setTimeout(() => {
        successMessage.style.display = 'none';
        successMessage.classList.remove('visible');
      }, 3000);
    }, 500);
  });
}