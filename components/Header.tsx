import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import { profile } from "@/lib/resumeData";

const navItems = [
  { label: "關於我", href: "#about" },
  { label: "技能", href: "#skills" },
  { label: "經歷", href: "#experience" },
  { label: "專案", href: "#projects" },
];

export default function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(247, 248, 250, 0.85)",
        backdropFilter: "blur(8px)",
        color: "text.primary",
        borderBottom: "1px solid rgba(26, 33, 48, 0.08)",
      }}
    >
      <Toolbar sx={{ gap: 2, flexWrap: "wrap", py: 1 }}>
        <Typography
          component={Link}
          href="#top"
          variant="h6"
          sx={{ fontWeight: 700, color: "primary.main", textDecoration: "none", mr: "auto" }}
        >
          {profile.name}
        </Typography>

        <Stack direction="row" spacing={{ xs: 1.5, sm: 3 }} sx={{ flexWrap: "wrap" }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              underline="hover"
              color="inherit"
              sx={{ fontWeight: 500, fontSize: "0.95rem" }}
            >
              {item.label}
            </Link>
          ))}
        </Stack>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <IconButton
            component={Link}
            href={`https://github.com/${profile.githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            color="inherit"
            size="small"
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            component={Link}
            href={`mailto:${profile.email}`}
            aria-label="Email"
            color="inherit"
            size="small"
          >
            <MailOutlineIcon fontSize="small" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
