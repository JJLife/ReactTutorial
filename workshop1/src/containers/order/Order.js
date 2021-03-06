import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { connect } from "react-redux";
import { ordersFetch, orderDelete } from "../../actions";

class Order extends Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.ordersFetch();
    }

    delOrder(order) {
        this.props.orderDelete(order.id);
    }

    showOrders() {
        return this.props.orders && this.props.orders.map(order => {
            const date = new Date(order.orderedData);
            return (
                <div key={order.id} className="col-md-3">
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>X</button>
                    </p>
                    <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return (<li key={record.product.id} style={{fontSize:15}}>
                                {record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity} THB
                            </li>)
                        })}
                    </ul>
                    <p className="title">ยอดรวม {order.totalPrice} THB</p>
                </div>
            )
        })

    }

    render() {
        return (
            <div>
                <Header />
                    <div className="container-fluid">
                        <h1>รายการสั่งซื้อ</h1>
                        <div className="row">
                            {this.showOrders()}
                        </div>
                    </div>
                    <Footer company="JJames" email="kitunpra@gmail.com"/>
            </div>
        )
    }
}

function mapStatetoProps({ orders }) {
    return { orders};
}

export default connect(mapStatetoProps, { ordersFetch, orderDelete} )(Order);
