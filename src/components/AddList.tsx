import React, { useState} from 'react'
import axios from 'axios';


type AddProps = {
    onAdd: any
}



const AddList:React.FunctionComponent<AddProps> = (props) => {
    const {onAdd} = props
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)



    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()



        fetch("http://localhost:2500", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*"
            }, 
            body: JSON.stringify({
            name,
              date,
              reminder
            }),
          }).then((res) => res.json())
          .then((data) => {
            if(data.success===true){
              console.log(data);
            } 
          })



        if(!name) {
            alert('please add a task')
            return
        }

        onAdd({name, date, reminder})
        setName('')
        setDate('')
        setReminder(false)
       
    }

  return (


    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder='Add Task' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

         <div className='form-control'>
            <label>Day and Time</label>
            <input type="text" placeholder='Add Day and Time'  value={date} onChange={(e) => setDate(e.target.value)}    />
        </div>

        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder}   onChange={(e) => setReminder(e.currentTarget.checked)}    />
        </div>


        <input type="submit" value='Save'  className='btn btn-block' />
    </form>
  )
}

export default AddList