import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { ProductsActions } from "../store/productSlice";
import { useSelector } from 'react-redux';

const FetchProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(store => store.products);
    useEffect(() => {
        // if (fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        // fetch('https://dummyjson.com/products', { signal })
        //     .then(res => res.json())
        //     .then((data) => {
        //         // console.log(data.products);
        //         dispatch(ProductsActions.addInitialProducts(data.products));
        //     });

        // fetch('https://api.escuelajs.co/api/v1/products', { signal })
        //     .then(res => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         dispatch(ProductsActions.addInitialProducts(data));
        //     });


        return () => {
            controller.abort();
        };
    }, []);


    return <></>;
};

export default FetchProducts;