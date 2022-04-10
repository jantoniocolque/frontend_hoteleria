import "./HeaderProduct.css";
import { useNavigate } from "react-router-dom";
function HeaderProduct({ product, pathGoBack }) {
    const history = useNavigate();
    const handleIconGoBack = () => {
        history(pathGoBack);
    }
    return (
        <div className="product__header">
            <div className="product__header-title-category">
                <p>{product.category?.title}</p>
                <h2>{product.name}</h2>
            </div>
            <div className="product__ubication-back">
                <i class="product__ubication-back-icon fas fa-chevron-left" onClick={handleIconGoBack}></i>
            </div>
        </div>
    )
}

export default HeaderProduct;