
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'
const BCard = ({bname,price,qty,city}) => {
  return (
    <div>
        <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <CardContent>
      <CardHeader>{bname}</CardHeader>
      <CardMeta>
        <span className='date'>{price}</span>
      </CardMeta>
      <CardDescription>
       {city}
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <a>
        <Icon name='user' />
        {qty}
      </a>
    </CardContent>
  </Card>
    </div>
  )
}

export default BCard;
