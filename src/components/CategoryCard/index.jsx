import React from "react";

import "./CategoryCard.css";

class CategoryCard extends React.Component {
    render() {
        return (
            <>
                <div className="category-card bg-animation-card">
                    <div className="category-card__img">
                        <img src={this.props.category.urlImage} onClick={this.props.handleClickCategory} id={this.props.category.title} width='100%' />
                    </div>
                    <div className="category-card__content" >
                        <h4 id={this.props.category.title} onClick={this.props.handleClickCategory}>{this.props.category.title}</h4>
                        <p id={this.props.category.title} onClick={this.props.handleClickCategory} className="category-card_content-hoteles">{this.props.cantidad} {this.props.subtitle}</p>
                    </div>
                </div>
            </>
        );
    }
}

export { CategoryCard };