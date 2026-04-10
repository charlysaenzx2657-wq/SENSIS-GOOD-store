/* ============================================================
   SENSIS GOOD FF — contacto.js
   Contact form · Subject selector · WhatsApp redirect
   ============================================================ */

const WA_NUMBER_CONTACT = '526521038109';

document.addEventListener('DOMContentLoaded', () => {

  /* ── Subject buttons ─────────────────────────────────────── */
  document.querySelectorAll('.cf-subject').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cf-subject').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ── Form submit ─────────────────────────────────────────── */
  const sendBtn = document.getElementById('btnSendMsg');
  if (sendBtn) sendBtn.addEventListener('click', sendContactMessage);

});

function sendContactMessage() {
  const name    = document.getElementById('cfName').value.trim();
  const email   = document.getElementById('cfEmail').value.trim();
  const phone   = document.getElementById('cfPhone').value.trim();
  const msg     = document.getElementById('cfMsg').value.trim();
  const subject = document.querySelector('.cf-subject.active');
  const subjectTxt = subject ? subject.textContent.trim() : 'General';

  if (!name || !email || !msg) {
    alert('Por favor completa nombre, correo y mensaje.');
    return;
  }

  const waMsg = encodeURIComponent(
    `💬 *Contacto — SENSIS GOOD FF*\n\n` +
    `📌 *Asunto:* ${subjectTxt}\n` +
    `👤 *Nombre:* ${name}\n` +
    `📧 *Correo:* ${email}\n` +
    `📱 *Teléfono:* ${phone || 'No proporcionado'}\n\n` +
    `💬 *Mensaje:*\n${msg}`
  );

  const waURL = `https://wa.me/${WA_NUMBER_CONTACT}?text=${waMsg}`;

  // Show success
  document.getElementById('cfSuccess').classList.add('show');

  // Clear fields
  ['cfName','cfEmail','cfPhone','cfMsg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  // Open WhatsApp
  setTimeout(() => window.open(waURL, '_blank'), 500);
}
