import Layout from "../Components/Layout";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs  } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink =
  "https://raw.githubusercontent.com/Jofregf/Portfolio/master/src/Assets/CV.pdf";

export default function resume() {


  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Layout>
        <div className="pdf-container">
          <Document file={resumeLink}>
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
          </Document>
        </div>
      </Layout>
    </div>
  );
}
