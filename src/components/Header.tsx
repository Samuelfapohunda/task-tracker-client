import Button from './Button'



type TitleProps = {
    title: string,
    onAdd: any,
    showAdd: any
}
const Header: React.FunctionComponent<TitleProps> = (props) => {
  const {title, onAdd, showAdd } = props



    return (
    <header className='header'>
        <h1>{title}</h1>
      <Button onClick={onAdd} 
      text={showAdd ? 'Close' : 'Add'} 
      color={showAdd ? 'red': 'green'}/>
        </header>
  )
}

Header.defaultProps = {
    title: "Services"
}


export default Header