import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Layout, Space } from "antd";

import HeaderComponent from "./layout/Header";
import AppRouter from "./AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size={[0, 48]}
      >
        <Layout>
          <HeaderComponent />
          <AppRouter />
        </Layout>
      </Space>
    </BrowserRouter>
  );
}

export default App;

// import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

// import "./App.css";
// import PdfFile from "./pdfdownload/PdfFile";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header" style={{ height: "100vh" }}>
//         <PDFViewer width={500} height={500}>
//           <PdfFile />
//         </PDFViewer>
//         <PDFDownloadLink document={<PdfFile />} fileName="test.pdf">
//           {({ blob, url, loading, error }) =>
//             loading ? "Loading document..." : <button>Descargar</button>
//           }
//         </PDFDownloadLink>
//       </header>
//     </div>
//   );
// }

// export default App;
