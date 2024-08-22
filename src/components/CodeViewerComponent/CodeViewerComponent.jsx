import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";

function CodeViewerComponent({ code }) {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = monaco.editor.create(editorRef.current, {
      value: code,
      language: "javascript",
      readOnly: true,
      theme: "vs-dark",
    });

    // Formatear el código de manera automática
    editor.getAction("editor.action.formatDocument").run();

    return () => editor.dispose();
  }, [code]);

  return <div ref={editorRef} style={{ height: "400px", width: "600px" }} />;
}

export default CodeViewerComponent;
