
import React from "react";
import { Card, Container,Grid,Button } from "@mui/material";
import axios from "axios";



function Profile(){

    const[userData, setUserData] = React.useState('')

    const dashboardApiCall = React.useCallback( async () => {
        const res = await fetch("http://localhost:4000/userdashboard", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": 'application/json',
          },
          credentials: "include"
        })
    
        let data = await res.json();
        setUserData(data.user)
        console.log(userData)
    
    },[])

    React.useEffect(() => {
        dashboardApiCall()
    },[dashboardApiCall])
    

    return(
        <>
            <Container maxWidth="md" style={{display:'flex',justifyContent:'center',alignItem:'center'}}>
                <Card elevation={4} style={{marginTop:'20px',marginBottom:'20px',padding:'20px'}}>
                    <Grid item container xs={12}>
                        <Grid item xs={12}>
                            <div style={{ textAlign:'center',fontSize: '30px',color:'grey' }}> Profile Details</div>
                        </Grid>
                        <Grid item xs={12}>
                            <div class="d-flex">
                                <div>Name:</div>
                                <div style={{marginLeft: '5px',color: 'grey'}}>{userData.name}</div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div class="d-flex">
                                <div>Email:</div>
                                <div style={{marginLeft: '5px',color: 'grey'}}>{userData.email}</div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div class="d-flex">
                                <div>Role:</div>
                                <div style={{marginLeft: '5px',color: 'grey'}}>{userData.role}</div>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </>
    )
}

export default Profile;