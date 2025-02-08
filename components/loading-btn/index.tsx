import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

type LoadingBtnProps = {
  loading: boolean;
  text: string;
} & React.ComponentProps<typeof Button>;

function LoadingBtn({ loading, text, ...others }: LoadingBtnProps) {
  return (
    <Button disabled={loading} {...others}>
      {loading ? <Loader2 className="animate-spin" /> : null}
      {text}
    </Button>
  );
}

export default LoadingBtn;
