import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import { profile } from "@/lib/resumeData";

export default function AboutSection() {
  return (
    <Box id="about" sx={{ bgcolor: "background.default", pt: { xs: 8, sm: 10 }, pb: { xs: 6, sm: 8 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          sx={{ alignItems: "center" }}
        >
          <Avatar
            sx={{
              width: 128,
              height: 128,
              bgcolor: "primary.main",
              fontSize: "3rem",
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            {profile.name.charAt(0)}
          </Avatar>

          <Stack spacing={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Box>
              <Typography variant="h3" sx={{ color: "primary.main" }}>
                {profile.name}
              </Typography>
              <Chip
                label={profile.title}
                color="secondary"
                size="small"
                sx={{ mt: 1, fontWeight: 600 }}
              />
            </Box>

            <Stack spacing={0.5}>
              {profile.education.map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center", justifyContent: { xs: "center", md: "flex-start" } }}
                >
                  <SchoolOutlinedIcon fontSize="small" sx={{ color: "text.secondary" }} />
                  <Typography variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
              {profile.summary}
            </Typography>

            <Stack direction="row" spacing={1.5} sx={{ justifyContent: { xs: "center", md: "flex-start" } }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<MailOutlineIcon />}
                href={`mailto:${profile.email}`}
              >
                聯絡我
              </Button>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<GitHubIcon />}
                href={`https://github.com/${profile.githubUser}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
