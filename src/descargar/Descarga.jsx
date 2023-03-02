import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "antd";
import { useEffect, useState } from "react";
import PdfFile from "../pdfdownload/PdfFile";
import TableDocument from "./TableDocument";

const Descarga = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <>
      {/* <PDFViewer width={500} height={500}>
        <PdfFile />
      </PDFViewer> */}
      {show ? (
        <PDFDownloadLink
          document={<PdfFile />}
          fileName="test.pdf"
          style={{ width: "100px" }}
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <Button type="primary" style={{ width: "130px" }}>
                Descargar
              </Button>
            )
          }
        </PDFDownloadLink>
      ) : (
        <Button loading type="primary" disabled style={{ width: "130px" }}>
          Descargar
        </Button>
      )}
      <div>Tabla</div>
      <TableDocument />
    </>
  );
};

export default Descarga;
