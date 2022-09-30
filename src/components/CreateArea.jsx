import React,{ useState } from 'react'
import { IoIosAdd } from 'react-icons/io';
export default function CreateArea({submitButton,onAdd}) {
    const[isExpanded,setExanded]=useState(false);
    const [note,setNote]=useState({
        title:"",
        content:"",
    });
function handleChange(e)
{
    const{name,value}=e.target
    setNote(prevalue=>{
        return{
            ...prevalue,
            [name]:value,
        }
    })
}
function handleExpanded()
{
    setExanded(true);
}

function submitButton(event)
{
    onAdd(note);
    setNote({
        title:"",
        content:"",
    })
    event.preventDefault();
    
}




  return (
    <div>
        <form>
            
           {isExpanded &&( <input value={note.title}type="text" placeholder="Title" name="title"
            onChange={handleChange}/>
            )}
            <p>
                <textarea value={note.content}
                onClick={handleExpanded} name="content"
                placeholder="Take a note..."
                onChange={handleChange}
                rows={isExpanded ?3:1}></textarea>
            </p>
            <button onClick={submitButton}><IoIosAdd size={25}/></button>
        </form>
    </div>
    
  )
}
