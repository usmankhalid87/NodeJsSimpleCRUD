import logo from "./logo.svg";
import { Grow, Grid, Container, AppBar, Typography } from "@material-ui/core";
import Student from "./components/showStudents/showStudent.js";
import CreateStudent from "./components/createStudent/createStudent.js";
import "./App.css";
import useStyles from "./styles.js";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" allign="center">
            Students Management
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" allignItem="strect">
              <Grid item xs={12} sm={7}>
                <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                >
                  <Student />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar
                  className={classes.appBar}
                  position="static"
                  color="inherit"
                >
                  <CreateStudent />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
