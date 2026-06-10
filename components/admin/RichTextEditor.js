import { useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import LinkExtension from '@tiptap/extension-link';
import ImageExtension from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';

// A single toolbar button.
function Btn({ onClick, active, disabled, title, children }) {
    return (
        <button
            type="button"
            onMouseDown={(e) => e.preventDefault()} // keep editor selection
            onClick={onClick}
            disabled={disabled}
            title={title}
            className={`rte-btn${active ? ' is-active' : ''}`}
        >
            {children}
        </button>
    );
}

export default function RichTextEditor({ initialContent = '', onChange }) {
    const fileInputRef = useRef(null);

    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({ heading: { levels: [2, 3, 4] } }),
            Underline,
            LinkExtension.configure({ openOnClick: false, autolink: true }),
            ImageExtension.configure({ inline: false }),
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Placeholder.configure({ placeholder: 'Write your article here…' }),
        ],
        content: initialContent || '',
        onUpdate: ({ editor }) => onChange && onChange(editor.getHTML()),
        editorProps: { attributes: { class: 'rte-content' } },
    });

    if (!editor) return null;

    const setLink = () => {
        const previous = editor.getAttributes('link').href;
        const url = window.prompt('Link URL:', previous || 'https://');
        if (url === null) return; // cancelled
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    };

    const handleImagePick = async (e) => {
        const file = e.target.files && e.target.files[0];
        e.target.value = ''; // allow re-picking the same file later
        if (!file) return;
        try {
            const res = await fetch('/api/admin/upload', {
                method: 'POST',
                headers: { 'Content-Type': file.type, 'x-filename': file.name },
                body: file,
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Upload failed');
            editor.chain().focus().setImage({ src: data.url, alt: file.name }).run();
        } catch (err) {
            alert('Failed to upload image: ' + err.message);
        }
    };

    return (
        <div className="rte">
            <div className="rte-toolbar">
                <Btn title="Bold" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></Btn>
                <Btn title="Italic" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></Btn>
                <Btn title="Underline" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}><u>U</u></Btn>
                <Btn title="Strikethrough" active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}><s>S</s></Btn>
                <span className="rte-sep" />
                <Btn title="Paragraph" active={editor.isActive('paragraph')} onClick={() => editor.chain().focus().setParagraph().run()}>P</Btn>
                <Btn title="Heading H2" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Btn>
                <Btn title="Heading H3" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Btn>
                <span className="rte-sep" />
                <Btn title="Bullet list" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</Btn>
                <Btn title="Numbered list" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</Btn>
                <Btn title="Quote" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>❝</Btn>
                <span className="rte-sep" />
                <Btn title="Align left" active={editor.isActive({ textAlign: 'left' })} onClick={() => editor.chain().focus().setTextAlign('left').run()}>⬅</Btn>
                <Btn title="Align center" active={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()}>↔</Btn>
                <Btn title="Align right" active={editor.isActive({ textAlign: 'right' })} onClick={() => editor.chain().focus().setTextAlign('right').run()}>➡</Btn>
                <span className="rte-sep" />
                <Btn title="Insert/edit link" active={editor.isActive('link')} onClick={setLink}>🔗</Btn>
                <Btn title="Insert image" onClick={() => fileInputRef.current && fileInputRef.current.click()}>🖼 Image</Btn>
                <span className="rte-sep" />
                <Btn title="Undo" disabled={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()}>↺</Btn>
                <Btn title="Redo" disabled={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()}>↻</Btn>
            </div>

            <EditorContent editor={editor} />

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImagePick}
            />

            <style jsx global>{`
                .rte { border: 1px solid #d9d2c5; border-radius: 8px; background: #fff; }
                .rte-toolbar {
                    display: flex; flex-wrap: wrap; gap: 4px; align-items: center;
                    padding: 8px; border-bottom: 1px solid #ece6da; background: #faf7f1;
                    border-radius: 8px 8px 0 0;
                }
                .rte-btn {
                    min-width: 32px; height: 30px; padding: 0 8px;
                    border: 1px solid #ddd5c7; border-radius: 5px; background: #fff;
                    color: #3d3428; font-size: 13px; cursor: pointer; line-height: 1;
                }
                .rte-btn:hover { background: #f1ebe0; }
                .rte-btn.is-active { background: #b8952e; color: #fff; border-color: #b8952e; }
                .rte-btn:disabled { opacity: .4; cursor: not-allowed; }
                .rte-sep { width: 1px; height: 20px; background: #e0d9cb; margin: 0 4px; }
                .rte-content { min-height: 320px; padding: 16px 18px; outline: none; line-height: 1.7; color: #3d3428; }
                .rte-content:focus { outline: none; }
                .rte-content p.is-editor-empty:first-child::before {
                    content: attr(data-placeholder); color: #aaa; float: left; height: 0; pointer-events: none;
                }
                .rte-content h2 { font-size: 1.6em; margin: .8em 0 .4em; }
                .rte-content h3 { font-size: 1.3em; margin: .8em 0 .4em; }
                .rte-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 12px 0; }
                .rte-content blockquote { border-left: 3px solid #b8952e; margin: 1em 0; padding: .2em 1em; color: #6b5e4e; }
                .rte-content ol { padding-left: 1.4em; margin: .6em 0; }
                /* WYSIWYG: show the same brand lotus bullet while editing */
                .rte-content ul { list-style: none; padding-left: 0; margin: .6em 0; }
                .rte-content ul li { position: relative; padding-left: 34px; }
                .rte-content ul li::before {
                    content: ''; position: absolute; left: 0; top: 3px;
                    width: 21px; height: 22px;
                    background: url('/images/icon/lotus.svg') no-repeat center / contain;
                }
                .rte-content ul li > p { margin: 0; }
                .rte-content a { color: #b8952e; text-decoration: underline; }
            `}</style>
        </div>
    );
}
