import React from 'react';
import { Button } from 'antd';

export default class TaskRows extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tasks = [];
        if (this.props.items.length > 0) {
            this.props.items.forEach(item => {
                tasks.push(
                    <div className="taskRow">
                        {item}
                        <Button 
                            className="taskButton" 
                            type="danger" 
                            onClick={() => this.props.removeTask(item)}
                            >Remove</Button>
                    </div>

                )
            })
        }
        return (
            <div>
                {tasks}
            </div>
        )
    }
}