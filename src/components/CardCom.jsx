
import { Link } from 'react-router-dom'

const CardCom = ({path, letter}) => {
  console.log(letter)
  return (
    <div>
      <Link to={`${path}`}>
            <div href="#" className="max-w-72 hover:bg-gray-300 transition min-w-32 max-h-60 min-h-36 border flex justify-center items-center">
                <h5 className="text-2xl font-bold tracking-tight ">
                    {
                        letter
                    }
                </h5>
            </div>
        </Link>
    </div>
  )
}

export default CardCom
