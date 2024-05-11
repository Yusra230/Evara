
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { CategorySliceActions } from "../store/categorySlice";

const FetchCategories = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://api.escuelajs.co/api/v1/categories', { signal })
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                dispatch(CategorySliceActions.addCategories(data));
            });

        return () => {
            controller.abort();
        };
    }, []);

    return <></>;
};

export default FetchCategories;