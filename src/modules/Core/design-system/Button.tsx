import "../styles/Button.css"

interface Props {
  children: JSX.Element | string;
  handleClick: (event: React.MouseEvent) => void;
}

const Button = ({children, handleClick}: Props) => {
  return <button className="button" onClick={handleClick}>{children}</button>
}

export default Button