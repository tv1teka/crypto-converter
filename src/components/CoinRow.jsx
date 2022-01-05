import '../App.css';

function CoinRow(props) {
    
    return (
        <div>
        <tr>
              <td className='TableCell img-cell'><img className="icon" src={props.items.imageUrl} alt="coin icon"></img></td>
              <td className='TableCell'>{props.items.name}</td>
              <td className='TableCell'>{props.items.fullName}</td>
              <td className='TableCell'>{props.items.price}</td>
              <td className='TableCell'>{props.items.volume24Hour}</td>
          </tr>
        </div>
    )
}


export default CoinRow