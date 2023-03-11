import PropTypes from 'prop-types'


type ButtonProps = {
    color:  any,
    text:  any,
    onClick: any
}

const Button :React.FunctionComponent<ButtonProps> = (props) => {
const {color, text, onClick} = props



  return   <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>

}

Button.defaultProps = {
  color: 'steelblue'
}


export default Button