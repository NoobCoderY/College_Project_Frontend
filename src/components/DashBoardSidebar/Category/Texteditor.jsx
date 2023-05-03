import React, { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function Texteditor({ shortdesc, setShortdesc }) {
  const editorRef = useRef();

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleupdate = () => {
    setShortdesc(editorRef.current.getContent());
  };

  return (
    <>
      <Editor
        apiKey="your-api-key"
        toolbar_mode="sliding"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={shortdesc}
        onBlur={() => handleupdate()}
        init={{
          height: 350,
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
