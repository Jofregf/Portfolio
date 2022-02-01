import Layout from "../Components/Layout";
import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink =
  "https://raw.githubusercontent.com/usuario/nombreDelRepo/master/src/Assets/tucv.pdf";

export default function resume() {
  const [, setNumPages] = useState(null);
  const [pageNumber,] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const [width, setWidth] = useState(1000);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Layout>
        <div className="pdf-container">
          <Document className='prueba'file={resumeLink} onLoadSuccess={onDocumentLoadSuccess}>
            <Page className='prueba1' pageNumber={pageNumber} scale={width > 786 ? 1.5 : 0.6} />
          </Document>
        </div>
      </Layout>
    </div>
  );
}
