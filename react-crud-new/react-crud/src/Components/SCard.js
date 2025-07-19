
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'
 
const SCard = ({id,title,image,category,removeData,updateCategory}) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <CardContent>
      <CardHeader>{id}</CardHeader>
     
      <CardDescription>
    {title}
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <a>
        <Icon name='user' />
        {category}
      </a>
    </CardContent>
 
     <button onClick={()=>removeData(id)}> Remove </button>
 
  </Card>
)
 
export default SCard;