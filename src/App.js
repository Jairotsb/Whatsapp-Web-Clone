import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  List,
  ListItem,
  IconButton,
  InputBase,
  TextField
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from '@material-ui/icons/Send';
import ImageIcon from "@material-ui/icons/Image";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import MicIcon from '@material-ui/icons/Mic'


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 50px",
    //zIndex: 999,
    position: "absolute",
  },
  card: {
    display: "flex",
    height: "calc(100vh - 50px)",
    borderRadius: '0px'
  },
  rightBorder: {
    //width: 'calc(100vh - 50vh)',
    borderRight: "solid #d0D0D0 1px",
  },
  background: {
    position: "absolute",
    height: 100,
    width: "100%",
    top: 0,
    background: "#7159C1"
  },
  rightContainer: {
    background: "url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flex: 1
  },
  heightAdjust: {
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    background: "#9de1fe",
    padding: 20
  },
  information: {
    color: "#444",
    borderRadius: '0px !important',
  },

  inputArea: {
    //    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#dddbd1',
    borderRadius: '0px',
    height: '62px'
    //width: '100%',
  },

  input: {
    marginLeft: theme.spacing(1),
    //    flex: 1,
    paddingLeft: '15px',
    borderRadius: '20px',
    background: 'white',
    padding: '3px',
    width: '90%',
    height: '42px'
  },

  content: {
    paddingTop: '15px',
    borderTop: '1px solid #30383d',
    display: 'block'
  },

  name: {
    //marginTop: '-1px',
    paddingLeft: '10px',
    fontWeight: 'bold',
    display: 'block'
  },
  msg: {
    fontSize: '10pt',
    fontWeight: '100',
    display: 'block',
    paddingLeft: '10px',
    paddingTop: '5px'
  },
  users: {
    height: '70px',
    paddingRight: '15px'
  },
  options: {
    float: 'right',
    diplay: 'block'
  }
}))

export default function App() {

  const classes = useStyles()
  const [iconChange, setIconChange] = React.useState([])


  const list = [
    { id: 1, name: "Diego", text: "Olá mundo", image: 'none' },
    { id: 2, name: "Jairo", text: "Boa tarde", image: 'none' },
    { id: 3, name: "Willian", text: "Boa noite", image: 'none' },
    { id: 4, name: "Jorge", text: "Material-ui its good", image: 'none' }
  ]


  const LeftContainer = () => (
    <Grid item xs={3}>
      <CardHeader
        className={classes.rightBorder}
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar} />
        }>
        <TripOriginIcon />
      </CardHeader>


      <Paper className={classes.paper} elevation={0}>
        <Typography className={classes.information} variant="subheader">
          Aproveite o WhatsApp!
        </Typography>
      </Paper>
      <List>
        {list.map(item => (
          <>
            <ListItem className={classes.users}>
              <Avatar className={classes.avatar}>{item.image === 'none' ? <PersonOutlineIcon /> : item.image}</Avatar>
              <ListItem className={classes.content}>
                <Typography className={classes.name} variant="p">{item.name}</Typography>
                <Typography className={classes.msg} variant="p">{item.text}</Typography>
              </ListItem>
            </ListItem>
          </>
        ))}
      </List>
    </Grid>
  );

  return (
    <>
      <div className={classes.background} />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <Grid container>
              <LeftContainer classes={classes} />
              <Grid className={classes.heightAdjust} item xs={9}>
                <CardHeader avatar={
                  <Avatar className={classes.avatar}>
                    <ImageIcon />
                  </Avatar>
                }
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Diego"
                />
                <CardContent className={classes.rightContainer} />
                <Paper component="form" className={classes.inputArea}>
                  <InputBase
                    onChange={e => setIconChange(e.target.value)}
                    className={classes.input}
                    align={"center"}
                    placeholder="Digite uma mensagem"
                    inputProps={{ 'aria-label': 'Digite uma mensagem' }}
                  />
                  {iconChange === '' ? <MicIcon style={{ marginLeft: '30px' }}/> : <SendIcon style={{ marginLeft: '30px' }} />}

                </Paper>
              </Grid>
            </Grid>
          </Card>

        </Grid>
      </Grid>
    </>
  )
}