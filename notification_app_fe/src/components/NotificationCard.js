import { Card, CardContent, Typography } from "@mui/material";

function NotificationCard({ notification, viewed }) {
  return (
    <Card
      sx={{
        marginBottom: 2,
        backgroundColor: viewed ? "#f5f5f5" : "#ffffff",
      }}
    >
      <CardContent>
        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Message}
        </Typography>

        <Typography variant="body2">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;