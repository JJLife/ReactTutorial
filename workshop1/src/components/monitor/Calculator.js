import React , { Component } from "react";

class Calculator extends Component {

    showOrders (orders) {
        console.log(orders);
        if(!orders || orders.length === 0) {
            return <li className="text-right text-muted title">ยังไม่ทำการสั่งซื้อค่ะ</li>
        }  else {
            return orders.map(order => {
                return(
                    <li key={order.product.id} className="text-right text-success title" style={{fontSize:15}}>
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity} THB 
                    <button className="btn btn-light btn-sm" onClick={() => this.props.onDelOrder(order.product)}>X</button>
                    </li>
                )
            })
        }

    }

    render() {
        const { totalPrice, orders } = this.props;
        return(
            <div>
                <h1 className="text-right">{totalPrice} THB</h1>
                <hr />
                <ul className="list-unstyled">
                    {this.showOrders(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title" onClick={() => this.props.onConfirmOrder()}>ยืนยัน</button>
                <button className="btn btn-block btn-secondary title" onClick={() => this.props.onCancelOrder()}>ยกเลิก</button>
            </div>
        )
    }
}

export default Calculator;