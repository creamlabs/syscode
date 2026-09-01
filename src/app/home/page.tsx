import type { Metadata } from "next";
import { Editor } from "@/components/editor";

export const metadata: Metadata = {
  title: "Design workspace",
  description: "Build and explore a system architecture on the SysCode canvas.",
};

export default function WorkspacePage() {
  return <Editor />;
}
