import axios from "axios";
import React from "react";


function Blog(){


    // React.useCallback(() => {
    //     const apicall = () => {
    //         axios.get('http://localhost:4000/getAllBlog').then((res) =>{
    //             console.log(res);
    //         }).catch((err) => console.log(err))
    //     }
    // },[apicall])

    // React.useEffect(() => {
    //     apicall()
    // },[apicall])

    // React.useEffect(() => {
    //     if(!(localStorage.getItem('token'))){
    //         alert("Not login go for login")
    //     }
    // })

    return(
        <>
            <h2>Blogs Page</h2>
        </>
    )
}

export default Blog;