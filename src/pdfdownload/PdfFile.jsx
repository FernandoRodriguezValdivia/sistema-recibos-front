import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

import HeaderTable from "./components/HeaderTable";
import BodyTable from "./components/BodyTable";

const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 30,
  },
  tabla: {
    flexDirection: "column",
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
  },
});

const header = [
  {
    label: "N° Comprobante",
    key: "Comprobante",
  },
  {
    label: "RUC",
    key: "RUC",
  },
  {
    label: "Descripcion",
    key: "Descripcion",
  },
  {
    label: "Subtotal",
    key: "Subtotal",
  },
  {
    label: "Total",
    key: "Total",
  },
  {
    label: "IGV",
    key: "IGV",
  },
  {
    label: "Fecha",
    key: "Fecha",
  },
];

const data = [
  {
    Comprobante: "1c",
    RUC: "1r",
    Descripcion:
      "alguna descripcion alguna descripcion alguna descripcion alguna descripcion alguna descripcion alguna descripcion alguna descripcion alguna descripcion alguna descripcion ",
    Subtotal: "1s",
    Total: "1t",
    IGV: "1i",
    Fecha: "1f",
  },
  {
    Comprobante: "2c",
    RUC: "2r",
    Descripcion: "2d",
    Subtotal: "2s",
    Total: "2t",
    IGV: "2i",
    Fecha: "2f",
  },
  {
    Comprobante: "3c",
    RUC: "3r",
    Descripcion: "3d",
    Subtotal: "3s",
    Total: "3t",
    IGV: "3i",
    Fecha: "3f",
  },
  {
    Comprobante: "4c",
    RUC: "4r",
    Descripcion: "4d",
    Subtotal: "4s",
    Total: "4t",
    IGV: "4i",
    Fecha: "4f",
  },
  {
    Comprobante: "1c",
    RUC: "1r",
    Descripcion: "1d",
    Subtotal: "1s",
    Total: "1t",
    IGV: "1i",
    Fecha: "1f",
  },
  {
    Comprobante: "2c",
    RUC: "2r",
    Descripcion: "2d",
    Subtotal: "2s",
    Total: "2t",
    IGV: "2i",
    Fecha: "2f",
  },
  {
    Comprobante: "3c",
    RUC: "3r",
    Descripcion: "3d",
    Subtotal: "3s",
    Total: "3t",
    IGV: "3i",
    Fecha: "3f",
  },
  {
    Comprobante: "4c",
    RUC: "4r",
    Descripcion: "4d",
    Subtotal: "4s",
    Total: "4t",
    IGV: "4i",
    Fecha: "4f",
  },
  {
    Comprobante: "1c",
    RUC: "1r",
    Descripcion: "1d",
    Subtotal: "1s",
    Total: "1t",
    IGV: "1i",
    Fecha: "1f",
  },
  {
    Comprobante: "2c",
    RUC: "2r",
    Descripcion: "2d",
    Subtotal: "2s",
    Total: "2t",
    IGV: "2i",
    Fecha: "2f",
  },
  {
    Comprobante: "3c",
    RUC: "3r",
    Descripcion: "3d",
    Subtotal: "3s",
    Total: "3t",
    IGV: "3i",
    Fecha: "3f",
  },
  {
    Comprobante: "4c",
    RUC: "4r",
    Descripcion: "4d",
    Subtotal: "4s",
    Total: "4t",
    IGV: "4i",
    Fecha: "4f",
  },
  {
    Comprobante: "1c",
    RUC: "1r",
    Descripcion: "1d",
    Subtotal: "1s",
    Total: "1t",
    IGV: "1i",
    Fecha: "1f",
  },
  {
    Comprobante: "2c",
    RUC: "2r",
    Descripcion: "2d",
    Subtotal: "2s",
    Total: "2t",
    IGV: "2i",
    Fecha: "2f",
  },
  {
    Comprobante: "3c",
    RUC: "3r",
    Descripcion: "3d",
    Subtotal: "3s",
    Total: "3t",
    IGV: "3i",
    Fecha: "3f",
  },
  {
    Comprobante: "4c",
    RUC: "4r",
    Descripcion: "4d",
    Subtotal: "4s",
    Total: "4t",
    IGV: "4i",
    Fecha: "4f",
  },
  {
    Comprobante: "1c",
    RUC: "1r",
    Descripcion: "1d",
    Subtotal: "1s",
    Total: "1t",
    IGV: "1i",
    Fecha: "1f",
  },
  {
    Comprobante: "2c",
    RUC: "2r",
    Descripcion: "2d",
    Subtotal: "2s",
    Total: "2t",
    IGV: "2i",
    Fecha: "2f",
  },
  {
    Comprobante: "3c",
    RUC: "3r",
    Descripcion: "3d",
    Subtotal: "3s",
    Total: "3t",
    IGV: "3i",
    Fecha: "3f",
  },
  {
    Comprobante: "4c",
    RUC: "4r",
    Descripcion: "4d",
    Subtotal: "4s",
    Total: "4t",
    IGV: "4i",
    Fecha: "4f",
  },
  {
    Comprobante: "1c",
    RUC: "1r",
    Descripcion: "1d",
    Subtotal: "1s",
    Total: "1t",
    IGV: "1i",
    Fecha: "1f",
  },
  {
    Comprobante: "2c",
    RUC: "2r",
    Descripcion: "2d",
    Subtotal: "2s",
    Total: "2t",
    IGV: "2i",
    Fecha: "2f",
  },
  {
    Comprobante: "3c",
    RUC: "3r",
    Descripcion: "3d",
    Subtotal: "3s",
    Total: "3t",
    IGV: "3i",
    Fecha: "3f",
  },
  {
    Comprobante: "4c",
    RUC: "4r",
    Descripcion: "4d",
    Subtotal: "4s",
    Total: "4t",
    IGV: "4i",
    Fecha: "4f",
  },
  {
    Comprobante: "1c",
    RUC: "1r",
    Descripcion: "1d",
    Subtotal: "1s",
    Total: "1t",
    IGV: "1i",
    Fecha: "1f",
  },
  {
    Comprobante: "2c",
    RUC: "2r",
    Descripcion: "2d",
    Subtotal: "2s",
    Total: "2t",
    IGV: "2i",
    Fecha: "2f",
  },
  {
    Comprobante: "3c",
    RUC: "3r",
    Descripcion: "3d",
    Subtotal: "3s",
    Total: "3t",
    IGV: "3i",
    Fecha: "3f",
  },
  {
    Comprobante: "4c",
    RUC: "4r",
    Descripcion: "4d",
    Subtotal: "4s",
    Total: "4t",
    IGV: "4i",
    Fecha: "4f",
  },
  {
    Comprobante: "1c",
    RUC: "1r",
    Descripcion: "1d",
    Subtotal: "1s",
    Total: "1t",
    IGV: "1i",
    Fecha: "1f",
  },
  {
    Comprobante: "2c",
    RUC: "2r",
    Descripcion: "2d",
    Subtotal: "2s",
    Total: "2t",
    IGV: "2i",
    Fecha: "2f",
  },
  {
    Comprobante: "3c",
    RUC: "3r",
    Descripcion: "3d",
    Subtotal: "3s",
    Total: "3t",
    IGV: "3i",
    Fecha: "3f",
  },
  {
    Comprobante: "4c",
    RUC: "4r",
    Descripcion: "4d",
    Subtotal: "4s",
    Total: "4t",
    IGV: "4i",
    Fecha: "4f",
  },
];

const PdfFile = () => {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 14 }}>Libro de facturas</Text>
        </View>
        <View style={styles.tabla}>
          <HeaderTable header={header} />
          <BodyTable header={header} data={data} />
        </View>
      </Page>
    </Document>
  );
};

export default PdfFile;
