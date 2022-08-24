import {Fragment, useState} from 'react';
import LoggedInHeader from '../../components/header/loggedheader' 
import Notes from '../../components/notes';


const NotesScreen = ()=>{
  const [isOpen, setIsOpen] = useState('');
    return(
      <Fragment>
        <LoggedInHeader setIsOpen={setIsOpen}/>
        <Notes setIsOpen = {setIsOpen} isOpen = {isOpen}/>
      </Fragment>
    )
}

export default NotesScreen