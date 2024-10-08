"use client";

import { Color } from "@tiptap/extension-color";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import CodeBlock from "@tiptap/extension-code-block";
import Code from "@tiptap/extension-code";
import { MenuBar } from "./menubar";
import { BubbleMenuTipTap } from "./bubblemenu";
import { FloatingMenuTipTap } from "./floatingmenu";
import { content } from "./defaultcontent";

const TipTap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Paragraph.configure({
        HTMLAttributes: {
          class: "tiptap__para",
        },
      }),
      Heading.configure({
        HTMLAttributes: {
          class: "tiptap__heading",
        },
      }),
      Code,
      CodeBlock,
      Color,
    ],
    content,
  });

  return (
    <>
      {editor && <BubbleMenuTipTap editor={editor} />}
      {editor && <FloatingMenuTipTap editor={editor} />}
      <MenuBar editor={editor!} />
      <EditorContent editor={editor} controls contextMenu="default" />
    </>
  );
};

export default TipTap;
