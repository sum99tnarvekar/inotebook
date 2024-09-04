import React  from "react";

export default function NoteItem(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <span>{props.tag}</span>
        </div>

    )
}