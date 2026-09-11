import useContactForm from './contact/useContactForm';
import ContactToast from './contact/ContactToast';
import DesignSplit from './contact/DesignSplit';
import DesignCard from './contact/DesignCard';
import DesignRail from './contact/DesignRail';
import DesignAtlas from './contact/DesignAtlas';
import MapPanel from './contact/MapPanel';

const defaultContactItems = [
    {
        icon: 'fa-phone-plus',
        title: 'Have any question?',
        href: 'tel:+6287863175144',
        text: 'Call/WA +62 878-6317-5144',
    },
    {
        icon: 'fa-envelope',
        title: 'Write email',
        href: 'mailto:info@spabalimoon.com',
        text: 'info@spabalimoon.com',
    },
    {
        icon: 'fa-location-dot',
        title: 'Visit anytime',
        text: 'Jl. Panggung Sari No. 30, Seminyak, Bali',
    },
];

const DESIGNS = {
    split: DesignSplit,
    card: DesignCard,
    rail: DesignRail,
    atlas: DesignAtlas,
};

const MAP_EMBED =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.3276299088775!2d115.15814147462666!3d-8.678060388355467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2471415de2293%3A0xe1802d70253e801f!2sSpa%20Bali%20Moon!5e1!3m2!1sen!2sid!4v1778467217568!5m2!1sen!2sid';

// "atlas" folds the map into the contact section itself, so it gets no separate
// map band underneath.
const HAS_MAP_BAND = (design) => design !== 'atlas';

export default function ContactForm({
    formSubTitle = 'Send us email',
    formTitle = 'Feel free to write',
    infoSubTitle = 'Need any help?',
    infoTitle = 'Get in touch',
    infoText = 'Spa Bali Moon offers high-quality traditional massages and spa therapies. Reach out to us to book your relaxing session.',
    contactItems = defaultContactItems,
    // "split" | "card" | "rail" — see components/sections/contact/.
    design = 'split',
}) {
    const form = useContactForm();
    const Design = DESIGNS[design] || DesignSplit;

    return (
        <>
            {/* The section keeps its .contact-details class, its pt-100 pb-100 and
                its place between the banner and the map: the torn-paper rhythm in
                _tear-rhythm.scss measures off exactly that, per design modifier. */}
            <section className={`contact-details contact-details--${design} pt-100 pb-100`}>
                <Design
                    formSubTitle={formSubTitle}
                    formTitle={formTitle}
                    infoSubTitle={infoSubTitle}
                    infoTitle={infoTitle}
                    infoText={infoText}
                    contactItems={contactItems}
                    embedSrc={MAP_EMBED}
                    {...form}
                />
            </section>

            {HAS_MAP_BAND(design) && <MapPanel embedSrc={MAP_EMBED} />}

            <ContactToast toast={form.toast} onClose={() => form.setToast((prev) => ({ ...prev, show: false }))} />
        </>
    );
}
