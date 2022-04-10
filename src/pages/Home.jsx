import { useState, useEffect } from "react";
import { SearchForm } from "../components/SearchForm";
import Content from "../components/Content";
import getData from "../assets/js/getData";
export default function Home({ toggle }) {
    const [products, setProducts] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [categorys, setCategorys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);
    // const [productsFilter, setProductsFilter] = useState([]);
    const handleRangeDates = (dateIn, dateOut) => {
        setStartDate(dateIn);
        setEndDate(dateOut);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const location = document.querySelector(".container-location__title");
        if (startDate === "" && endDate === "" && location.value !== "") {
            getData(`/api/v1/location/${location.getAttribute("id")}`)
                .then((location) => {
                    if (location) {
                        setIsLoadingProducts(false);
                    }
                    setProducts(location.products);
                })
        }
        if (startDate !== "" && endDate !== "" && location.value !== "") {
            let auxIn = new Date(startDate);
            let auxOut = new Date(endDate);
            auxIn = auxIn.toLocaleDateString().split("/")[2] + "-" + (auxIn.toLocaleDateString().split("/")[1] < 10 ? "0" + auxIn.toLocaleDateString().split("/")[1] : auxIn.toLocaleDateString().split("/")[1]) + "-" + (auxIn.toLocaleDateString().split("/")[0] < 10 ? "0" + auxIn.toLocaleDateString().split("/")[0] : auxIn.toLocaleDateString().split("/")[0]);
            auxOut = auxOut.toLocaleDateString().split("/")[2] + "-" + (auxOut.toLocaleDateString().split("/")[1] < 10 ? "0" + auxOut.toLocaleDateString().split("/")[1] : auxOut.toLocaleDateString().split("/")[1]) + "-" + (auxOut.toLocaleDateString().split("/")[0] < 10 ? "0" + auxOut.toLocaleDateString().split("/")[0] : auxOut.toLocaleDateString().split("/")[0]);
            getData(`/api/v1/product/search?city=${location.value.split(",")[0]}&dateIn=${auxIn}&dateOut=${auxOut}`)
                .then((data) => {
                    if (data) {
                        setIsLoadingProducts(false);

                    }
                    setProducts(data);
                })
        }

    }
    const handleClickCategory = (e) => {
        getData(`/api/v1/product/category?name=${e.target.id}`)
            .then((data) => {
                if (data) {
                    setIsLoadingProducts(false);

                }
                setProducts(data);
            })
    }
    useEffect(() => {
        getData("/api/v1/product")
            .then((data) => {
                if (data) {
                    setIsLoadingProducts(false);
                }
                setProducts(data);
            })
        getData("/api/v1/category")
            .then((data) => {
                if (data) {
                    setIsLoading(false);

                }
                setCategorys(data);
            })
        // setProductsFilter(db)
    }, [])
    // useEffect(() => {
    //     setI
    //     setIsLoadingProducts(true);
    // }, [products])
    useEffect(() => {
        // setProductsFilter([]);
        getData("/api/v1/product")
            .then((data) => {
                setProducts(data);
            })
    }, [toggle])
    return (

        <div className="wrapper">
            <SearchForm handleSubmit={handleSubmit} handleRangeDates={handleRangeDates} />
            <Content handleClickCategory={handleClickCategory} products={products} categorys={categorys} isLoading={isLoading} isLoadingProducts={isLoadingProducts} />
        </div>
    );
}