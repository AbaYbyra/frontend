import {useState, useEffect} from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

import pdf from '../../assets/pdfs/Pesquisa_Formas_de_reutilizacao_de_residuos.pdf'
export default function Artigos(props){
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(()=>{
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  },[])
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return(
    <>
      <SectionTitle theme={props.theme}>Artigos</SectionTitle>
      <section className="">
        <a href={pdf} target='_blank'>Abra o pdf aqui</a>
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </section>
    </>
  )
}