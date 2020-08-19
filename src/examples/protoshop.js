import React from "react";

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function FilterableProductTable(props) {
    return (
        <div className="FilterableProductTable">
            <SearchBar/>
            <ProductTable products={props.products}/>
        </div>
    );
}

function SearchBar(props) {
    return (
        <div className="FilterableProductTable">
            <input placeholder="Search..."/> <br/>
            <label><input type="checkbox"/>Only show products in stock</label>
        </div>
    );
}

function ProductTable(props) {
    const products = props.products;
    return (
        <div className="ProductTable">
            <div><span>Name</span> <span>Price</span></div>
            <ProductCategoryRow/>
            {products.map(product => {
                return (<ProductRow product={product}/>);
            })}
        </div>
    );
}

function ProductCategoryRow(props) {
    return (
        <div className="ProductCategoryRow">
        </div>
    );
}

function ProductRow(props) {
    const name = props.product.name;
    const price = props.product.price;
    const isStocked = props.product.stocked;
    return (
        <div className="ProductRow">
            <span style={{color:(isStocked?'black':'red')}}>{name}</span> {price}
        </div>
    );
}

export class ProtoShop extends React.Component {
    render() {
        return (
            <FilterableProductTable products={products}/>
        );
    }
}