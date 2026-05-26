import dayjs from "dayjs";

interface MessageTimestampProps {
  data: {
    created_at: number | string;
  };
}

export default function MessageTimestamp({ data }: MessageTimestampProps) {
  const { created_at } = data;
  if (!created_at) return null;
  const t =
    typeof created_at === "number"
      ? dayjs.unix(created_at)
      : dayjs(created_at);
  if (!t.isValid()) return null;
  return (
    <span style={{ fontSize: 11, color: "var(--colorTextSecondary)" }}>
      {t.format("YYYY-MM-DD HH:mm:ss")}
    </span>
  );
}
