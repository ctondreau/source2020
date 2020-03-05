import React from 'react';

export default class ButtonBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let buttons;
        if(this.props.question){
            if(atob(this.props.question.type)=="boolean"){
                buttons = 
                <div>
                  <button className="buttons" type="link" onClick = {()=>this.props.check("True")}>A) True</button>
                  <button className="buttons" type="link" onClick = {()=>this.props.check("False")}>B) False</button>
                </div>
              }
              else{
                function shuffle(array) {
                  array.sort(() => Math.random() - 0.5);
                }
                let ans = this.props.question.incorrect_answers;
                ans.push(this.props.question.correct_answer)
                shuffle(ans)
                buttons = 
                  <div>
                    <button className="buttons" type="link" onClick = {()=>this.props.check(atob(ans[0]))}>A) {atob(ans[0])}</button>
                    <button className="buttons" type="link" onClick = {()=>this.props.check(atob(ans[1]))}>B) {atob(ans[1])}</button>
                    <button className="buttons" type="link" onClick = {()=>this.props.check(atob(ans[2]))}>C) {atob(ans[2])}</button>
                    <button className="buttons" type="link" onClick = {()=>this.props.check(atob(ans[3]))}>D) {atob(ans[3])}</button>
                  </div>
              }
        }

        return(
            <div>
                {buttons}
            </div>
        )
    }
}