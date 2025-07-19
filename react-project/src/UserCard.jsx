
const UserCard = ({userId,title,body}) => {

  return (
    <div className="cont">
         <h1>UserId : {userId}</h1>
         <h2>Title : {title}</h2>
         <h2>Body : {body}</h2>
    </div>
  )
}

export default UserCard;