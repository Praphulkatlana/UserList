import React,{ useState ,useEffect} from 'react'
import { SingleUser } from './singleUser'
import {baseapi} from './api'

export const Userslist=()=> {
    var count=0;
    const [result,setResult]=useState([])
    const [page, setpage] = useState(1)

    async function fetchUsers() {
        let api;
        api=`${baseapi}${page}`
        const response = await fetch(api);
        const users = await response.json();
        
        setResult([users.data])
        
      }

    useEffect(()=>{
       fetchUsers()
    },[page])

    return (
       <div>
       
       {result.map((user) => {
        return <SingleUser user={user} key={count+1}  />
    })
}
        <div class="ui pagination menu">

  <a className="active item" onClick={()=>setpage(1)}>
    1
  </a>
  
  <a className="active item" onClick={()=>setpage(2)}>2</a>
   
</div>
</div>
    )
}

export default Userslist;