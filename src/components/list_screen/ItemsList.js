import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ItemCard from './ItemCard';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';

class ItemsList extends React.Component {
    state = {
        CurrentSortingCriteria: "",
    }

    sortTask = () => {
       // this.props.todoList.items;
       this.setState({ CurrentSortingCriteria : true});
    }

    sortDueDate = () => {

    }

    sortStatus = () => {

    }

    render() {
        const todoList = this.props.todoList;
        const items = todoList.items;
        console.log("ItemsList: todoList.id " + todoList.id);
        return (

            <div className="todo-lists section">
            <div className="header_container">
                    <span className="list_item_task_header" onClick= {this.sortTask}> Task </span>
                    <span className="list_item_due_date_header" onClick= {this.sortDueDate}>Due Date</span>
                    <span className="list_item_status_header" onClick= {this.sortStatus}> Status </span>
            </div>

                {items && items.map(function(item) {
                    item.id = item.key;
                    return (
                        <ItemCard todoList={todoList} item={item} />
                    );})
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const todoList = ownProps.todoList;
    return {
        todoList,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'todoLists' },
    ]),
)(ItemsList);