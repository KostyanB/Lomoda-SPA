import { useState, useEffect } from 'react';

export const usePageTitle = () => {
    const [pageTitle, setPageTitle] = useState('Lomoda')

    useEffect(() => {
        document.title = (['Мужчинам', 'Женщинам', 'Детям'].some(item => item === pageTitle)) ?
        `Lomoda ${pageTitle}` :  (pageTitle === 'Lomoda') ?
            'Lomoda' : `${pageTitle}`;
    });

    return { pageTitle, setPageTitle }
}