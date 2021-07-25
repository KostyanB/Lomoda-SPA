import { useState } from 'react';

export const usePageName = () => {
    const [ pageName, setPageName ] = useState('');

    return { pageName, setPageName };
}