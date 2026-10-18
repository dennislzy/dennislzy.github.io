import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import { skillCategories, type SkillCategory } from "@/lib/resumeData";
import type { SvgIconComponent } from "@mui/icons-material";

const iconMap: Record<SkillCategory["icon"], SvgIconComponent> = {
  backend: DnsOutlinedIcon,
  frontend: WebOutlinedIcon,
  ai: PsychologyOutlinedIcon,
  database: StorageOutlinedIcon,
  devops: BuildCircleOutlinedIcon,
};

export default function SkillsSection() {
  return (
    <Box id="skills" sx={{ bgcolor: "background.paper", py: { xs: 6, sm: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 1, textAlign: "center" }}>
          技能
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 5, textAlign: "center" }}
        >
          後端開發為主，涵蓋前端、AI 應用與 DevOps 工具鏈
        </Typography>

        <Grid container spacing={3}>
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <Grid key={category.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardContent>
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2 }}>
                      <Avatar
                        variant="rounded"
                        sx={{ bgcolor: "primary.main", width: 40, height: 40 }}
                      >
                        <Icon fontSize="small" />
                      </Avatar>
                      <Typography variant="h6">{category.name}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                      {category.items.map((item) => (
                        <Chip key={item} label={item} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
