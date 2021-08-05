import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import clsx from 'clsx'
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from '@material-ui/icons/Send';
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import InputBase from '@material-ui/core/InputBase';
import { Paper, Typography, Grid, Card, CardHeader, CardContent, Avatar, List, ListItem, ListItemText, IconButton } from "@material-ui/core";


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
    borderRight: "solid #d0D0D0 1px"
  },
  content: {
    marginTop: 0
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
    borderRadius: '0px'
  },

  avatar: {
    background: 'purple'
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
    width: '85%',
    height: '42px'
  },

  iconSend: {
    marginLeft: theme.spacing(3)

  }

}))

export default function App() {

  const classes = useStyles()

  const list = [
    { id: 1, name: "Diego", text: "Olá mundo", image: <ImageIcon /> },
    { id: 2, name: "Jairo", text: "Boa tarde", image: <WorkIcon /> },
    { id: 3, name: "Willian", text: "Boa noite", image: <WorkIcon /> },
    { id: 4, name: "Jorge", text: "Material-ui its good", image: <BeachAccessIcon /> }
  ]

  let title = 'Diego'
  const changeName = () => {
    CardHeader.title = 'Jairo'
  }

  const LeftContainer = () => (
    <Grid item xs={3}>
      <CardHeader
        className={classes.rightBorder}
        avatar={
          <Avatar aria-label="Recipe" clasName={classes.avatar}>J</Avatar>
        }
        title="Jairo Arcy" />
      <Paper className={classes.paper} elevation={0}>
        <Typography className={classes.information} variant="subheader">
          Aproveite o WhatsApp!
        </Typography>
      </Paper>
      <List>
        {list.map(item => (
          <ListItem>
            <Avatar className={classes.avatar}>{item.image}</Avatar>
            <ListItemText primary={item.name} secondary={item.text} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
  const RightContainer = () => (
    <Grid className={classes.heightAdjust} item xs={9}>
      <CardHeader avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          <ImageIcon onClick={changeName} />
        </Avatar>
      }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
      <CardContent className={[classes.rightContainer, classes.content]} />
      <Paper component="form" className={classes.inputArea}>
        <InputBase
          align={"center"}
          className={classes.input}
          placeholder="Digite uma mensagem"
          inputProps={{ 'aria-label': 'Digite uma mensagem' }}
        />
        <SendIcon className={classes.iconSend}/>
      </Paper>
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
              <RightContainer classes={classes} />
            </Grid>
          </Card>

        </Grid>
      </Grid>
    </>
  )
}