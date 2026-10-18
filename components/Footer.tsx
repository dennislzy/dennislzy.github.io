import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import { profile } from "@/lib/resumeData";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.dark", color: "white", py: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; MUI.
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton
              component={Link}
              href={`https://github.com/${profile.githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              size="small"
              sx={{ color: "white" }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              component={Link}
              href={`mailto:${profile.email}`}
              aria-label="Email"
              size="small"
              sx={{ color: "white" }}
            >
              <MailOutlineIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
