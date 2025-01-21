import { Editor } from "@/components/editor";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen w-screen grid grid-rows-[max-content_1fr] justify-items-center">
      <Button>SysCode</Button>
      <Editor />
    </div>
  );
}
