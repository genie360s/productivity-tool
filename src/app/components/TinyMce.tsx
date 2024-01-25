// EditorComponent.tsx
// import load env variables
import dotenv from 'dotenv';
import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
dotenv.config();

const EditorComponent: React.FC = () => {
    const editorRef = useRef<any>(null);
    const [content, setContent] = useState<string>("");

    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    const storeContent = () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent();
            localStorage.setItem("editorContent", content);
        }
    };

    const retrieveContent = () => {
        const storedContent = localStorage.getItem("editorContent");
        if (storedContent) {
            setContent(storedContent);
        }
    };

    return (
        <div className="container mx-auto my-8">
            <Editor
                apiKey={process.env.NEXT_PUBLIC_API_KEY}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={content || ""}
                init={{
                    height: 500,
                    menubar: false,
                    placeholder: "Start writing your journal !",
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'list checklist', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' + 'checklist' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist  outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700 hover:-translate-y-1 hover:duration-500"
                onClick={log}
            >
                Let&lsquo;s Start Writing !
            </button>
            <button
                className="bg-green-500 text-white px-4 py-2 mt-4 ml-4 rounded hover:bg-green-700 hover:-translate-y-1 hover:duration-500"
                onClick={storeContent}
            >
                save
            </button>
            <button
                className="bg-yellow-500 text-white px-4 py-2 mt-4 ml-4 hover:bg-yellow-700 rounded hover:-translate-y-1 hover:duration-500"
                onClick={retrieveContent}
            >
                Retrieve and Edit
            </button>
        </div>
    );
};

export default EditorComponent;
