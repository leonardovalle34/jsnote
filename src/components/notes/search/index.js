import  React, {Fragment, useState} from 'react';
import {Input , Collumn, Column} from "rbx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons"

function Search(props){
    const [query,setQuery] = useState("");

    const handleKeyDown = (e)=>{
        if(e.key === "Enter"){
            props.searchNote(query)
        }
    }
    return (
        <>
            <Column.Group>
                <Column size="9" offset={1}>
                    <Input type="text"
                            name={query}
                            value={query}
                            placeholder = "Search Note"
                            onChange = {(e)=>setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            >
                    </Input>
                </Column>
                <Column mobile={2} size={1}>
                    <a href="#" onClick={() => {
                        props.fetchNotes()
                        setQuery('')
                    }}>
                        <FontAwesomeIcon
                            icon={faTimes}
                            color="grey"
                            className='is-pulled-left'/>
                    </a>
                </Column>
            </Column.Group>
        </>
    )

}

export default  Search 