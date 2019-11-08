import React from 'react';

class ItemCard extends React.Component {

    render() {
    
        const { item } = this.props;  
        let { completedValue } = "";
        let { style_card } = "";
        
        if (item.completed == true) {
            completedValue = "Completed";
            style_card = "style_green";
        }
        else {
            completedValue = "Pending";
            style_card = "style_red";
        }

        return (

            <div class="white card todo-list-link pink-lighten-3">
            <div class="row">
                <div className="card-content grey-text text-darken-3">
                    <span class="col s12" id="description" >{item.description} </span>
                    <span class="col s3" id="assigned_to"> Assigned to: {item.assigned_to}</span>
                    <span id="due_date" >{item.due_date} </span>
                    <span id="completed" class = {style_card}> {completedValue} </span>      
                 </div>
            </div>
            </div>
            
        );
                }
}
export default ItemCard;