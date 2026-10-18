import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projectItems } from "@/lib/resumeData";
import { cardAccentList, cardAccentVars } from "@/theme/theme";

export default function ProjectsSection() {
  return (
    <Box id="projects" sx={{ bgcolor: "background.paper", py: { xs: 6, sm: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 5, textAlign: "center" }}>
          專案經歷
        </Typography>

        <Grid container spacing={3}>
          {projectItems.map((project, index) => {
            const hasRealLink = project.githubUrl !== "#";
            return (
              <Grid key={project.name} size={{ xs: 12, md: 6 }}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    ...cardAccentVars(cardAccentList[index % cardAccentList.length]),
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ color: "var(--card-accent-dark)" }}>
                      {project.name}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
                      {project.subtitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>

                    <List dense disablePadding sx={{ mb: 1.5 }}>
                      {project.role.map((item) => (
                        <ListItem key={item} disableGutters sx={{ py: 0.25 }}>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <CheckCircleOutlineIcon sx={{ fontSize: 16, color: "var(--card-accent)" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            slotProps={{ primary: { variant: "body2" } }}
                          />
                        </ListItem>
                      ))}
                    </List>

                    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap", mb: 2 }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: "color-mix(in srgb, var(--card-accent) 12%, transparent)",
                            color: "var(--card-accent-dark)",
                            borderColor: "color-mix(in srgb, var(--card-accent) 35%, transparent)",
                          }}
                        />
                      ))}
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        alignItems: "flex-start",
                        bgcolor: "color-mix(in srgb, var(--card-accent) 10%, transparent)",
                        borderRadius: 2,
                        p: 1.5,
                      }}
                    >
                      <TipsAndUpdatesOutlinedIcon
                        fontSize="small"
                        sx={{ color: "var(--card-accent-dark)", mt: 0.25 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {project.highlight}
                      </Typography>
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon fontSize="small" />}
                      href={project.githubUrl}
                      target={hasRealLink ? "_blank" : undefined}
                      rel={hasRealLink ? "noopener noreferrer" : undefined}
                      disabled={!hasRealLink}
                    >
                      {hasRealLink ? "查看原始碼" : "GitHub（待補）"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
