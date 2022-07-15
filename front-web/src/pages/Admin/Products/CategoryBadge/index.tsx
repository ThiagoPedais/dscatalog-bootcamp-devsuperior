import './styles.scss'

type Props = {
    name: string;
}


export default function Categorybadge( {name} : Props) {
  return (
    <div className="category-badge-container">{name}</div>
  )
}
