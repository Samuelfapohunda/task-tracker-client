import List from './List'


type ListProps = {
    lists:  any,
   onDelete: any
   onToggle: any
}





const Lists :React.FunctionComponent<ListProps> = (props) => {
    const {lists, onDelete, onToggle} = props



  return (
    <>       
      {lists.map((list: any) => (
      <List key={list._id} 
      list={list}
      onDelete={onDelete}
      onToggle={onToggle}
      />
      ))}   
    </>
    
  )
}

export default Lists