import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import {sendForm} from '../actions'
import {bindActionCreators} from 'redux'
import _ from 'underscore';

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title for Post',
    name: 'title'
  },
  category: {
    type: 'input',
    label: 'Enter some Categories',
    name: 'category'
  },
  content: {
    type: 'input',
    label: 'Post Contents',
    name: 'content'
  }
}


class FormNew extends Component {
  renderField(field) {
    const {
      label,
      input,
      type,
      meta: {
        touched,
        error
      }
    } = field;
    const className = `form-group ${touched && error
      ? 'has-danger'
      : ''}`
    return (
      <div className={className}>
        <label>{label}
        </label>
        <div>
          <input {...input} className='form-control' placeholder={label} type={type}/>
          <div className='text-help'>
            {touched
              ? error
              : ''}
          </div>
        </div>
      </div>
    )
  }
  createField(value) {
    return (<Field
      key={value.name}
      name={value.name}
      type={value.type}
      component={this.renderField}
      label={value.label}/>)
  }
  onSubmit(values) {
    console.log(values)
    this.props.sendForm(values)
  }

  render() {
    return (
      <div className="class-name">
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          {Object.values(FIELDS).map(this.createField.bind(this))}
          <button className='btn btn-primary' type='submit'>Submit</button>
          <Link className='btn btn-primary' to='/'>
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}



function validate(values) {
  const errors = {};
  if(!values.title){
    errors.title = 'do something'
  }
  if(!values.category){
    errors.category = 'do something'
  }
  if(!values.content){
    errors.content = 'do something'
  }
  //if errors is empty, the form is fine to submit
  return errors;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sendForm
  }, dispatch)
}

export default reduxForm({form: 'blogForm', validate})(connect(null, mapDispatchToProps)(FormNew));
