import { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Checklist from "@editorjs/checklist";
import List from "@editorjs/list";
import Quote from '@editorjs/quote';
import SimpleImage from "@editorjs/simple-image";
import Embed from '@editorjs/embed';

const EditorTool = () => {
    const [isEditorInitialized, setIsEditorInitialized] = useState(false);

    useEffect(() => {
        const waitForElement = async () => {
            while (!document.getElementById('editorjs')) {
                await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for 100 milliseconds
            }
        };

        const initializeEditor = async () => {
            await waitForElement();

            // Element with ID "editorjs" is now available
            new EditorJS({
                holder: 'editorjs',
                autofocus: true,
                placeholder: 'Let`s write an awesome story!',
                // Other Editor.js configuration options
                tools: {
                    header: Header,
                    image: SimpleImage,
                    embed: Embed,
                    checklist: {
                        class: Checklist,
                        inlineToolbar: true,
                    },
                    list: {
                        class: List,
                        inlineToolbar: true,
                        config: {
                            defaultStyle: 'unordered',
                        },
                    },
                    quote: {
                        class: Quote,
                        inlineToolbar: true,
                        shortcut: 'CMD+SHIFT+O',
                        config: {
                            quotePlaceholder: 'Enter a quote',
                            captionPlaceholder: 'Quote\'s author',
                        },
                    },
                },
            });

            setIsEditorInitialized(true);
        };

        if (!isEditorInitialized) {
            initializeEditor();
        }
    }, [isEditorInitialized]);

    return <div id="editorjs" className=""></div>;
};

export default EditorTool;
