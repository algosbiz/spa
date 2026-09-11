import { useState, useEffect, useRef } from 'react';

const EMPTY_FORM = {
    form_name: '',
    form_email: '',
    form_subject: '',
    form_phone: '',
    form_message: '',
    form_botcheck: '',
    turnstile_token: '',
};

// All three contact designs share this: same fields, same endpoint, same
// Turnstile handling and the same toast. Only the markup around it differs.
export default function useContactForm() {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const turnstileRef = useRef(null);
    const [submitting, setSubmitting] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    useEffect(() => {
        if (!toast.show) return;
        const timer = setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 5000);
        return () => clearTimeout(timer);
    }, [toast.show]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const resetTurnstile = () => {
        if (turnstileRef.current) turnstileRef.current.reset();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setToast({ show: false, message: '', type: '' });

        try {
            if (!formData.turnstile_token) {
                setToast({ show: true, message: 'Please complete the captcha verification.', type: 'error' });
                setSubmitting(false);
                return;
            }

            const response = await fetch('/api/contact/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setToast({ show: true, message: data.message || 'Message sent successfully!', type: 'success' });
                setFormData(EMPTY_FORM);
                resetTurnstile();
            } else {
                setToast({ show: true, message: data.message || 'Something went wrong. Please try again.', type: 'error' });
                resetTurnstile();
                setFormData((prev) => ({ ...prev, turnstile_token: '' }));
            }
        } catch (error) {
            setToast({ show: true, message: 'Network error. Please check your connection and try again.', type: 'error' });
        } finally {
            setSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData(EMPTY_FORM);
        resetTurnstile();
        setToast({ show: false, message: '', type: '' });
    };

    // Handlers the <Turnstile> widget needs, wired once here.
    const turnstileProps = {
        ref: turnstileRef,
        siteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA',
        onSuccess: (token) => setFormData((prev) => ({ ...prev, turnstile_token: token })),
        onError: () => setFormData((prev) => ({ ...prev, turnstile_token: '' })),
        onExpire: () => setFormData((prev) => ({ ...prev, turnstile_token: '' })),
        options: { theme: 'light' },
    };

    return { formData, handleChange, handleSubmit, handleReset, submitting, toast, setToast, turnstileProps };
}

// Field list shared by the designs, so a copy change lands in one place.
export const CONTACT_FIELDS = {
    name: { name: 'form_name', type: 'text', label: 'Name', placeholder: 'Your name', required: true, autoComplete: 'name' },
    email: { name: 'form_email', type: 'email', label: 'Email', placeholder: 'you@example.com', required: true, autoComplete: 'email' },
    subject: { name: 'form_subject', type: 'text', label: 'Subject', placeholder: 'What is this about?', required: true },
    phone: { name: 'form_phone', type: 'tel', label: 'Phone / WhatsApp', placeholder: '+62 …', required: false, autoComplete: 'tel' },
    message: { name: 'form_message', type: 'textarea', label: 'Message', placeholder: 'Tell us what you need and when you would like to come in.', required: true },
};
