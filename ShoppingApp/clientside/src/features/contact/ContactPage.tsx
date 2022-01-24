import { Typography, Card, CardContent, Grid, TextField, Button} from "@mui/material";

export default function ContactPage() {
    return (
        <div className="App contact">
        <Typography gutterBottom variant = "h2" align= "center">
           </Typography>
        <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}}>
        <CardContent>
            <Typography gutterBottom variant="h4" align="center">Contact Us</Typography>
            <Typography gutterBottom color="textSecondary" variant="body2" component="p">Fill up the form and our team get back to you</Typography>
            <form>
            <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                    <TextField label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required/>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <TextField label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required/>
                </Grid>
                <Grid xs={12} item>
                    <TextField type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required/>
                </Grid>
                <Grid xs={12} item>
                    <TextField type="number" label="Phone" placeholder="Enter phone number" variant="outlined" fullWidth required/>
                </Grid>
                <Grid xs={12} item>
                    <TextField label="message" multiline rows={4} placeholder="Enter your message here" variant="outlined" fullWidth required/>
                </Grid>
                <Grid xs={12} item>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </form>
        </CardContent>
        </Card>
        </div>
    );
}