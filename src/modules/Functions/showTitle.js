
export const showTitle = (val = '') => {

    const title = document.querySelector('title');
    title.textContent = (['Мужчинам', 'Женщинам', 'Детям'].some(item => item === val)) ?
        `Lomoda ${val}` :  (val === 'Lomoda') ?
            'Lomoda' : `${val}`;
}