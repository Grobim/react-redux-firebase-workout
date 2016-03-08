import React, { PropTypes } from 'react';

export default class AddTodo extends React.Component {
  static propTypes = {
    addTodo : PropTypes.func.isRequired
  };

  render () {
    const {
      addTodo
    } = this.props;
    let input;

    return (
      <div className={'col-xs-12'}>
        <form className={'form-inline'} onSubmit={(e) => {
          e.preventDefault();
          if (input.value.trim()) {
            addTodo(input.value.trim());
            input.value = '';
          }
        }}>
          <div className={'form-group'}>
            <label htmlFor={'todo-title'} className={'sr-only'}>Title</label>
            <input type='text' id={'todo-title'} ref={node => {
              input = node;
            }} className={'form-control'} />
          </div>
          <button type={'submit'} className={'btn'}>Add Todo</button>
        </form>
      </div>
    );
  }
}
