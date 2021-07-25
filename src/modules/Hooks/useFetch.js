import { useEffect, useState } from 'react';

export const useFetch = () => {

    const [responce, setResponce] = useState(null);
    const [error, setError] = useState(null);
    const [menList, setMenList] = useState(null);
    const [womenList, setWomenList] = useState(null);
    const [kidsList, setKidsList] = useState(null);

    const handleLists = res => {
        setResponce(res);
        setMenList(res.filter(el => el.category === 'men'));
        setWomenList(res.filter(el => el.category === 'women'));
        setKidsList(res.filter(el => el.category === 'kids'));
    };

    useEffect(() => {
        (async() => {
            try {
                const json = await fetch('../../db/db.json');
                const res = await json.json();
                handleLists(res);
            } catch (err) {
                setError(err);
            }
        })();
    }, []); // пустой массив чтобы запустилась 1 раз

    return { responce, error, menList, womenList, kidsList };
};