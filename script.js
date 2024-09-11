const getUser=async()=>{

    let user=""
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    // console.log(res)

    
    const result=await res.json()
    console.log(result)

    result.forEach((item)=>{
        user+=`
       
            <div class="border">
                <p>${item.id}</p>
                <p>${item.name}</p>
                <p>${item.username}</p>
                <p>${item.phone}</p>
                <p>${item.website}</p>
                <p>${item.email}</p>
            </div>
        
        `
    })

    root.innerHTML=user

}
