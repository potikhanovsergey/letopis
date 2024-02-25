"use client";
import "@mantine/tiptap/styles.css";

import { RichTextEditor as MantineRTE } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import { FC } from "react";
import StarterKit from "@tiptap/starter-kit";
import { Input } from "@mantine/core";
import { RichTextEditorProps } from "./typings";
import Link from "@tiptap/extension-link";

const RichTextEditor: FC<RichTextEditorProps> = ({
  value,
  label,
  description,
  error,
  onChange,
}) => {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: value,
    onUpdate: ({ editor }) => {
      if (onChange) {
        const string = editor.getHTML();
        onChange(string);
      }
    },
  });

  return (
    <Input.Wrapper label={label} description={description} error={error}>
      <MantineRTE editor={editor}>
        <MantineRTE.Toolbar sticky stickyOffset={60}>
          <MantineRTE.ControlsGroup>
            <MantineRTE.Bold />
            <MantineRTE.Italic />
            <MantineRTE.Underline />
            <MantineRTE.Strikethrough />
            <MantineRTE.ClearFormatting />
            <MantineRTE.Highlight />
          </MantineRTE.ControlsGroup>

          <MantineRTE.ControlsGroup>
            <MantineRTE.H1 />
            <MantineRTE.H2 />
            <MantineRTE.H3 />
          </MantineRTE.ControlsGroup>

          <MantineRTE.ControlsGroup>
            <MantineRTE.Blockquote />
            <MantineRTE.Hr />
            <MantineRTE.BulletList />
            <MantineRTE.OrderedList />
          </MantineRTE.ControlsGroup>

          <MantineRTE.ControlsGroup>
            <MantineRTE.Link />
            <MantineRTE.Unlink />
          </MantineRTE.ControlsGroup>

          <MantineRTE.ControlsGroup>
            <MantineRTE.AlignLeft />
            <MantineRTE.AlignCenter />
            <MantineRTE.AlignJustify />
            <MantineRTE.AlignRight />
          </MantineRTE.ControlsGroup>

          <MantineRTE.ControlsGroup>
            <MantineRTE.Undo />
            <MantineRTE.Redo />
          </MantineRTE.ControlsGroup>
        </MantineRTE.Toolbar>

        <MantineRTE.Content />
      </MantineRTE>
    </Input.Wrapper>
  );
};

export default RichTextEditor;
