import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";
import FormField from '../common/FormField';
import { ProductFormFields } from './ProductFormFields'
import { connect } from "react-redux"
class ProductForm extends Component {

    renderFields (ProductFormFields) {
        return ProductFormFields.map(( { label, name , type, required} ) => <Field key={name} label={label} name={name} type={type} required={required} component={FormField}/> )
    }

    render () {
        const { onProductSubmit } = this.props
        return ( 
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}> 
                    {this.renderFields(ProductFormFields)}
                    <button className="btn btn-block btn-info title" type="submit"> 
                        บันทึก
                    </button>
                </form>
            </div>
        )
    }
}

const validate = values => {
    const errors = {};
    ProductFormFields.forEach( ({name, required}) => {
        if(!values[name] && required ) {
             errors[name] = 'Please Fill Data'
        }
    });
    return errors; 
}



ProductForm = reduxForm({ validate, form : "productForm"})(ProductForm)


function mapStateToProps({ products }) {
    if( products && products.id ) {
        return { initialValues : products }; 
    }
    else  {
        return {};
    }
}
  
export default connect(mapStateToProps)(ProductForm);