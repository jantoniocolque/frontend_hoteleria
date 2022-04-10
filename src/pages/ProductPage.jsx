import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Product from "../components/Product";
import getData from "../assets/js/getData";

export default function ProductPage() {
    const { id } = useParams();
    const [list, setList] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getData(`/api/v1/product/${id}`)
            .then(data => {
                if (data) {
                    setIsLoading(false);
                    setList(data, console.log(data))
                }
            })
    }, [])
    return (
        <>
            {
                isLoading ? <h1>Cargando...</h1> :
                    <div className="wrapper">
                        <div className="container-producto">
                            <Product list={list} />
                        </div>
                    </div>
            }

        </>
    );
}

