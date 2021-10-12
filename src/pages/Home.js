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
  Icon
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from '@material-ui/icons/Send';
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MicIcon from '@material-ui/icons/Mic'
import ChatIcon from '@material-ui/icons/Chat';
import MoodIcon from '@material-ui/icons/Mood';
import AttachFileIcon from '@material-ui/icons/AttachFile';


const useStyles = makeStyles((theme) => ({
  '@global': {
    'body': {
      margin: 0,
      padding: 0,
      fontFamily: 'Heveltica, sans-serif'
    }
  },
  root: {
    position: "absolute",
    padding: "20px 200px",
    //zIndex: 999,
  },
  card: {
    display: "flex",
    //width: '80%',
    height: "calc(100vh - 50px)",
    borderRadius: '0px',

  },
  rightBorder: {
    //width: 'calc(100vh - 90vh)',
    borderRight: "solid #d0D0D0 1px",
    background: '#ededed',
    height: '58.99px'
  },
  background: {
    position: "absolute",
    height: '150px',
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
    //width: '50% !important',
    display: "flex",
    flexDirection: "column",
    background: '#ededed',
  },
  paper: {
    background: "#9de1fe",
    padding: 20
  },
  information: {
    color: "black",
    borderRadius: '0px !important',
  },

  inputArea: {
    //    padding: '2px 4px',
    display: 'flex',
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ededed',
    borderRadius: '0px',
    height: '62px'
    //width: '100%',
  },

  input: {
    marginLeft: theme.spacing(1),
    //    flex: 1,
    paddingLeft: '15px',
    borderRadius: '20px',
    background: '#fff',
    width: '770px',
    height: '42px'
  },

  content: {
    paddingTop: '15px',
    borderTop: '1px solid #e6e6ee',
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
  },
  actButton: {
    color: '#787d80',
    padding: 0,
    margin: '10px 20px 0px 0px'
  },
  actUserButton: {
    color: '#a0a4a6',
    padding: 0,
    marginLeft: '15px'
  },
  clipIcon: {
    transform: 'rotate(45deg)',
    marginRight: '10px'
  },
  actLeftButton: {
    color: '#6f7478',
    padding: 0,
    marginLeft: '9px',
  },
  modIcon: {
    margin:0
  },

  sizeIcon: {
    fontSize: '20pt'
  }
}))

export default function App() {

  const classes = useStyles()
  const [iconChange, setIconChange] = React.useState([])

  const list = [
    { id: 1, name: "Diego", text: "Olá mundo", image: 'none' },
    { id: 2, name: "Jairo", text: "Boa tarde", image: 'none' },
    { id: 3, name: "Willian", text: "Boa noite", image: 'none' },
    { id: 4, name: "Jorge", text: "...", image: 'none' }
  ]

  const LeftContainer = () => (
    <Grid item xs={4}>
      <Grid item xs={12}>
        <CardHeader

          className={classes.rightBorder}

          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} />
          }
          action={
            <>
              <IconButton className={classes.actButton} title="status">
                <DonutLargeIcon />
              </IconButton>
              <IconButton className={classes.actButton}>
                <ChatIcon />
              </IconButton>
              <IconButton className={classes.actButton}>
                <MoreVertIcon />
              </IconButton>
            </>
          }
        />
      </Grid>


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
              <Grid className={classes.heightAdjust} item xs={8}>
                <CardHeader style={{ height: '58.99px' }} avatar={
                  <Avatar className={classes.avatar} />
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
                  <IconButton className={[classes.actLeftButton, classes.modIcon]} >
                    <MoodIcon className={classes.sizeIcon}/>
                  </IconButton>
                  <IconButton className={[classes.actLeftButton, classes.clipIcon]}>
                    <AttachFileIcon className={classes.sizeIcon}/>
                  </IconButton>
                  <InputBase
                    onChange={e => setIconChange(e.target.value)}
                    className={classes.input}
                    align={"center"}
                    placeholder="Digite uma mensagem"
                    inputProps={{ 'aria-label': 'Digite uma mensagem' }}
                  />
                  <IconButton className={classes.actUserButton} >{iconChange == '' ? <MicIcon className={classes.sizeIcon}/> : <SendIcon className={classes.sizeIcon} style={{color: '#6f7478' }} />}</IconButton>
                </Paper>
              </Grid>
            </Grid>
          </Card>

        </Grid>
      </Grid>
    </>
  )
}