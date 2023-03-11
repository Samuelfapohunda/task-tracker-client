import {Close} from '@material-ui/icons'

type ListsProps = {
  list:  any, 
  onDelete: any,
  onToggle: any
}

const List: React.FunctionComponent<ListsProps> = (props) => {
  const {list, onDelete, onToggle} = props
  return (
    <div className={`task ${list.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(list._id)}>
    <h3>{list.name}<Close style={{
      color: 'red', cursor: 'pointer'
    }} onClick={() => onDelete(list._id)}/>
    
    </h3>  
   <p>{list.date}</p>
    </div>
  )
}

export default List