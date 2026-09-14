// The number the business actually answers on. It is hard-coded in ~48 other
// places already; this module is the one new code should import, so the next
// change is a single edit rather than another sweep.
export const WHATSAPP_NUMBER = '6287863175144';

/**
 * Build a wa.me link, optionally with a message already typed into the chat.
 *
 * encodeURIComponent, not encodeURI: the message carries newlines and "&"
 * from the contact form, and encodeURI leaves both intact, which would end
 * the text parameter early and drop the rest of the message.
 */
export function whatsappLink(message) {
    const base = `https://wa.me/${WHATSAPP_NUMBER}`;
    const text = (message || '').trim();
    return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/**
 * Turn whatever the visitor typed into the contact form into an opening
 * message, so switching channels does not throw their effort away. Every
 * field is optional -- an empty form yields an empty string and the caller
 * gets a plain wa.me link.
 */
export function contactFormToWhatsappMessage(formData = {}) {
    const lines = [];
    const subject = (formData.form_subject || '').trim();
    const name = (formData.form_name || '').trim();
    const email = (formData.form_email || '').trim();
    const phone = (formData.form_phone || '').trim();
    const message = (formData.form_message || '').trim();

    lines.push(subject ? `Hi Spa Bali Moon, I'd like to ask about ${subject}.` : 'Hi Spa Bali Moon, I would like to make an enquiry.');
    if (message) lines.push('', message);

    const details = [];
    if (name) details.push(`Name: ${name}`);
    if (email) details.push(`Email: ${email}`);
    if (phone) details.push(`Phone: ${phone}`);
    if (details.length) lines.push('', ...details);

    return lines.join('\n');
}
