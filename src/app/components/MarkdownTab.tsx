import React, { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownEditor: React.FC = () => {
    const [markdown, setMarkdown] = useState(`Just a link: www.nasa.gov.`);

    const handleMarkdownChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(event.target.value);
    };

    return (
        <div className="p-4">
            <textarea
                className="w-full h-40 p-2 border border-gray-300 rounded"
                value={markdown}
                onChange={handleMarkdownChange}
            />
            <div className="mt-4">
                <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;
