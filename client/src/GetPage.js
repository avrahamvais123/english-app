import React, { useState, useEffect } from 'react';

const MyComponent = ({ url }) => {
    const [webpageContent, setWebpageContent] = useState('');

    useEffect(() => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                setWebpageContent(data);
            });
    }, []);

    return (
        <div>
            {webpageContent}
        </div>
    );
}

export default MyComponent;
