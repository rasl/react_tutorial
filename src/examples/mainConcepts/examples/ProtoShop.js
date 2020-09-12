import React from "react";

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function ProductCategoryRow(props) {
    return (
        <div className="ProductCategoryRow">
            {props.name}
        </div>
    );
}

function ProductRow(props) {
    const name = props.product.name;
    const price = props.product.price;
    const isStocked = props.product.stocked;
    return (
        <div className="ProductRow">
            <span style={{color: (isStocked ? 'black' : 'red')}}>{name}</span> {price}
        </div>
    );
}

function SearchBar(props) {
    return (
        <div className="FilterableProductTable">
            <input type="text" placeholder="Search..." value={props.needle} onChange={props.handleChangeNeedle}/> <br/>
            <label><input type="checkbox" checked={props.inStocked} onChange={props.handleChangeInStocked}/>Only show
                products in stock</label>
        </div>
    );
}

function ProductTable(props) {
    const products = props.products;
    const inStocked = props.inStocked;
    const needle = props.needle;
    let categories = [];
    let list = [];
    products.forEach((product) => {
        if (product.name.indexOf(needle) === -1) {
            return;
        }
        if (inStocked && !product.stocked) {
            return;
        }
        if (undefined === categories[product.category]) {
            list.push((<ProductCategoryRow name={product.category} key={product.category}/>));
            categories[product.category] = true;
        }
        list.push((<ProductRow product={product} key={product.name}/>));
    });
    return (
        <div className="ProductTable">
            <div><span>Name</span> <span>Price</span></div>
            {list}
        </div>
    );
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            needle: '',
            inStocked: false,
        }
    }

    handleChangeNeedle = (e) => {
        this.setState({
            needle: e.target.value
        });
    }

    handleChangeInStocked = (e) => {
        this.setState({
            inStocked: e.target.checked
        });
    }

    render() {
        return (
            <div className="FilterableProductTable">
                <SearchBar needle={this.state.needle} inStocked={this.state.inStocked}
                           handleChangeNeedle={this.handleChangeNeedle}
                           handleChangeInStocked={this.handleChangeInStocked}
                />
                <ProductTable products={this.props.products} needle={this.state.needle}
                              inStocked={this.state.inStocked}/>
            </div>
        );
    }
}

export default class ProtoShop extends React.Component {
    render() {
        return (
            <FilterableProductTable products={products}/>
        );
    }
}