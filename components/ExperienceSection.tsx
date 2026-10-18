import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { experienceItems } from "@/lib/resumeData";

export default function ExperienceSection() {
  return (
    <Box id="experience" sx={{ bgcolor: "background.default", py: { xs: 6, sm: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 5, textAlign: "center" }}>
          工作經歷
        </Typography>

        <Stack
          spacing={0}
          sx={{
            maxWidth: 720,
            mx: "auto",
            borderLeft: { sm: "2px solid" },
            borderColor: { sm: "secondary.main" },
          }}
        >
          {experienceItems.map((item) => (
            <Box key={item.company} sx={{ position: "relative", pl: { sm: 4 }, pb: 4 }}>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  position: "absolute",
                  left: -7,
                  top: 6,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: "secondary.main",
                }}
              />
              <Card variant="outlined">
                <CardContent>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={0.5}
                    sx={{ justifyContent: "space-between", alignItems: { sm: "center" }, mb: 1 }}
                  >
                    <Typography variant="h6">
                      {item.company} · {item.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.period}
                    </Typography>
                  </Stack>
                  <List dense disablePadding>
                    {item.bullets.map((bullet) => (
                      <ListItem key={bullet} disableGutters sx={{ py: 0.25 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <FiberManualRecordIcon sx={{ fontSize: 8, color: "text.secondary" }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={bullet}
                          slotProps={{ primary: { variant: "body2", color: "text.secondary" } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
