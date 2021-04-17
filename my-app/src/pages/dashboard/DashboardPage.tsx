import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { Subject } from "../../shared/models";
import LinearProgressWithLabel from "../../shared/components/LinearProgressWithLabel";

export const subjects: (Subject & { due: string; taskName: string })[] = [
  {
    id: "subject-1",
    users: [],
    name: "Science",
    due: "19th Jan",
    taskName: "Plants and nature task",
  },
  {
    id: "subject-2",
    users: [],
    name: "Mathematics",
    due: "26th Jan",
    taskName: "Pythagoras task",
  },
  {
    id: "subject-3",
    users: [],
    name: "English",
    due: "12th Jan",
    taskName: "Shakespear task",
  },
];

export default function DashboardPage() {
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {subjects.map((subject: any) => (
            <Grid item xs={6}>
              <Card>
                <Typography variant="h3">{subject.name}</Typography>
                <Typography>{subject.due}</Typography>
                <Typography>{subject.taskName}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
        <LinearProgressWithLabel value={80} />
        <Grid container>
          <Grid item xs={12}>
            <img
              width="100%"
              alt="map"
              src="https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
