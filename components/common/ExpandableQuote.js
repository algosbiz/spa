import React, { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function CaretIcon() {
    return (
        <svg className="quote-toggle__caret" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// Long Google reviews push the rest of the slide off screen on phones, so the quote is
// clamped to a few lines and only reveals a toggle when lines are actually hidden.
// State stays local: re-rendering the parent would re-run Swiper's param diffing.
export default function ExpandableQuote({ text, onExpandChange, onMeasure }) {
    const textId = useId();
    const textRef = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const [truncated, setTruncated] = useState(false);

    // Only measurable while clamped: expanding removes the overflow we are looking for.
    useIsomorphicLayoutEffect(() => {
        const element = textRef.current;
        if (!element || expanded) return undefined;

        const measure = () => {
            const overflows = element.scrollHeight - element.clientHeight > 1;
            setTruncated((current) => (current === overflows ? current : overflows));
            if (onMeasure) onMeasure();
        };

        measure();

        if (typeof ResizeObserver === 'undefined') return undefined;
        const observer = new ResizeObserver(measure);
        observer.observe(element);
        return () => observer.disconnect();
    }, [expanded, text, onMeasure]);

    // Revealing the toggle makes the slide taller than it was when the measure
    // above ran, so the slider has to be told again once the button is on screen
    // -- otherwise it keeps the shorter height and clips the longest review.
    useEffect(() => {
        if (onMeasure) onMeasure();
    }, [truncated, onMeasure]);

    const didMount = useRef(false);
    useEffect(() => {
        if (!didMount.current) {
            didMount.current = true;
            return;
        }
        if (onExpandChange) onExpandChange(expanded);
    }, [expanded, onExpandChange]);

    const toggle = useCallback(() => setExpanded((current) => !current), []);

    return (
        <>
            <p id={textId} ref={textRef} className={`text${expanded ? ' is-expanded' : ''}`}>{text}</p>
            {truncated && (
                <button
                    type="button"
                    className="quote-toggle"
                    aria-expanded={expanded}
                    aria-controls={textId}
                    onClick={toggle}
                >
                    <span className="quote-toggle__label">{expanded ? 'Read less' : 'Read more'}</span>
                    <CaretIcon />
                </button>
            )}
        </>
    );
}
