// import { useState } from "react";
import "dayjs/locale/es-mx";
import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Form,
  Image,
  Input,
  // Modal,
  Row,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

import "dayjs/locale/es";
import esES from "antd/locale/es_ES";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

dayjs.extend(localizedFormat);

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onFinish = async (values) => {
  const formData = new FormData();
  for (let key in values) {
    formData.append(key, values[key]);
  }
  // fileList.forEach((file) => {
  //   formData.append('files', file);
  // });

  // console.log("Success:");
  // for (let obj of formData) {
  //   console.log(obj);
  // }
  // const res = await fetch('http://localhost:8000/prueba', {
  //   method: 'POST',
  //   body: formData
  // })

  // console.log(res)

  console.log("enviando al servidor", values);
};

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const acceptFiles = ".jpg, .png, .jpeg";

const PageHome = () => {
  // const [fileList, setFileList] = useState([]);
  // const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [isHorizontal, setIsHorizontal] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const normFile = (e) => {
    console.log(e);
    if (e.fileList.length >= 1 && acceptFiles.includes(e.file.name.split(".")[1])) {
      getBase64(e.file).then((result) => {
        setPreviewImage(result);
      });
      console.log(e.file);
      return e.file;
    }
    return undefined;
  };

  // const handlePreview = async (file) => {
  //   console.log(file);
  //   if (!file.url && !file.preview) {
  //     // file.preview = await getBase64(file.originFileObj);
  //   }
  //   // setPreviewImage(file.url || file.preview);
  //   const response = await getBase64(file.originFileObj);
  //   // setPreviewImage(file.thumbUrl);
  //   setPreviewImage(response);
  //   setPreviewOpen(true);
  //   // setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  // };

  // const handleCancel = () => setPreviewOpen(false);

  const props = {
    onRemove: (file) => {
      setPreviewImage(null);
      // const index = fileList.indexOf(file);
      // const newFileList = fileList.slice();
      // newFileList.splice(index, 1);
      // setFileList(newFileList);
    },
    beforeUpload: (file) => {
      // setFileList([file]);
      return false;
    },
    // fileList,
  };

  // const hasWindow = typeof window !== "undefined";
  function s() {
    const match = window.matchMedia("(min-width: 768px)").matches;
    console.log("listener");
    console.log(match);
    setIsHorizontal(match);
  }

  useEffect(() => {
    console.log("effect");
    const match = window.matchMedia("(min-width: 768px)");
    match.addEventListener("change", s);

    return () => {
      match.removeEventListener("change", s);
    };
  }, []);

  return (
    <>
      <Row justify="space-around">
        <Col span={10}>
          <h1>Registro de Comprobante</h1>
          <Form
            name="basic"
            labelCol={{ sm: 24, md: 8 }}
            wrapperCol={{ sm: 24, md: 16 }}
            layout={!isHorizontal ? "vertical" : "horizonal"}
            labelWrap
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Numero de comprobante"
              name="number"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese un valor",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="RUC"
              name="ruc"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese un valor",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Descripcion"
              name="descripcion"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese un valor",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Sub total"
              name="subtotal"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese un valor",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Total"
              name="total"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese un valor",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="IGV"
              name="igv"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese un valor",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Fecha"
              name="fecha"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese un valor",
                },
              ]}
            >
              <ConfigProvider locale={esES}>
                <DatePicker format="l" style={{ width: "100%" }} />
              </ConfigProvider>
            </Form.Item>

            <Form.Item
              label="imagen"
              valuePropName="list"
              name="imagen"
              getValueFromEvent={normFile}
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese un archivo válido ( png, jpg, jpeg)",
                },
              ]}
              // wrapperCol={{
              //   flex: 1,
              // }}
            >
              <Upload
                {...props}
                // listType="picture"
                maxCount={1}
                accept={acceptFiles}
                // onPreview={handlePreview}
              >
                <Button icon={<UploadOutlined />} style={{ width: "100%" }}>
                  <span style={{ overflow: "hidden" }}>Seleccione una imagen</span>
                </Button>
              </Upload>
            </Form.Item>

            <Form.Item
            // wrapperCol={{
            //   span: 8,
            //   offset: 8,
            // }}
            >
              <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                Guardar
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Divider
          type="vertical"
          style={{ height: "calc( 100vh - 88px )", margin: "12px 0" }}
        />
        <Col span={10}>
          <h1>Vista Previa</h1>
          {previewImage && (
            <Image
              height="75vh"
              width="100%"
              style={{ objectFit: "contain" }}
              src={previewImage}
            />
            // <img
            //   alt="example"
            //   style={{
            //     height: "75vh",
            //   }}
            //   src={previewImage}
            // />
          )}
        </Col>
      </Row>
    </>
  );
};

export default PageHome;
