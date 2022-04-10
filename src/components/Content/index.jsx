import { useState, useEffect } from "react";
import { CategoryCard } from "../CategoryCard/index";
import Recomendations from "../Recomendations";
import "./Content.css";
import db from "../Recomendations/cards.json";
import ContentLoader from "react-content-loader";
export default function Content({ handleClickCategory, products, categorys, isLoading, isLoadingProducts }) {
    return (
        <>
            <div className="content-superior">
                <div className="content_category-cards-titulo">
                    <h2 className="content_category-title">Buscar por tipo de alojamiento</h2>
                </div>
                <div className="content_category-cards">
                    {
                        isLoading || categorys.length === 0 ?
                            <>
                                <ContentLoader
                                    width={330}
                                    height={280}
                                    viewBox="0 0 380 330"
                                    backgroundColor="#f0f0f0"
                                    foregroundColor="#dedede"
                                >
                                    <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
                                    <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
                                    <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
                                </ContentLoader>
                                <ContentLoader
                                    width={330}
                                    height={280}
                                    viewBox="0 0 380 330"
                                    backgroundColor="#f0f0f0"
                                    foregroundColor="#dedede"
                                >
                                    <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
                                    <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
                                    <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
                                </ContentLoader>
                                <ContentLoader
                                    width={330}
                                    height={280}
                                    viewBox="0 0 380 330"
                                    backgroundColor="#f0f0f0"
                                    foregroundColor="#dedede"
                                >
                                    <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
                                    <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
                                    <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
                                </ContentLoader>
                                <ContentLoader
                                    width={330}
                                    height={280}
                                    viewBox="0 0 380 330"
                                    backgroundColor="#f0f0f0"
                                    foregroundColor="#dedede"
                                >
                                    <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
                                    <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
                                    <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
                                </ContentLoader>
                            </>
                            :
                            categorys.map((category) => {
                                return (
                                    <CategoryCard
                                        key={category.categoryId}
                                        category={category}
                                        cantidad={"896502"}/*Estaria bueno que devuelva la cantidad desde BACKEND y paginacion*/
                                        handleClickCategory={handleClickCategory}
                                        subtitle={category.title === "Hotel" || category.title === "Hostal" ? category.title + "es" : category.title + "s"}
                                        isLoading={isLoading}
                                    />
                                );
                            })
                    }
                </div>
            </div>
            <div className="content_recomendaciones">
                <Recomendations products={products} isLoadingProducts={isLoadingProducts} />
            </div>
        </>
    );
}
