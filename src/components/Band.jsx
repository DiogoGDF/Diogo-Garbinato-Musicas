import "./Band.css"

/* eslint-disable react/prop-types */
export default function Band (props) {
  return (
    <a href={props.spotify} target="_blank" rel="noreferrer">
      <img src={props.image} alt={`Foto da banda ${props.name}`} />
    </a>
  )
}
