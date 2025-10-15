import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="flex h-dvh w-full justify-center items-center">
      <CircularProgress color="primary" />
    </div>
  );
}
