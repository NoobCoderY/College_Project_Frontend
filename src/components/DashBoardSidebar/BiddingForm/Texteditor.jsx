import React, { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import './BiddingFormDashboard.css'
export default function Texteditor({ description1, setDescription1 }) {
  const editorRef = useRef();

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleupdate = () => {
    setDescription1(editorRef.current.getContent());
  };

  return (
    <>
      <Editor
        apiKey="your-api-key"
        toolbar_mode="sliding"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={description1}
        onBlur={() => handleupdate()}
        init={{
          height: 250,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help" +
            " link image " +
            "table" +
            " media",

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}
