import { Button } from "@/components/ui/button";
import { Editor } from "@/features/editor/components/editor";

export default function Home() {
  return (
    <div className="min-h-screen w-screen grid grid-rows-[max-content_1fr] justify-items-center">
      <Button>SysCode</Button>
      <Editor />
    </div>
  );
}
