
import img1 from './assets/bnews.png';
const Newsitems = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 py-2" style={{maxWidth:"350px"}}>
    <img src={src?src:img1} style={{heigth:"200px",width:"330px"}} className="card-img-top" alt="IMAGE NOT AVAILABLE!"></img>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    <p className="card-text">{description?description.slice(0,90):"News reports recent events and developments across various topics like politics, economics, sports, technology, health, entertainment, and culture."}</p>
      <a href={url} className="btn btn-primary">Get more Info </a>
    </div>
  </div>
  )
}

export default Newsitems
