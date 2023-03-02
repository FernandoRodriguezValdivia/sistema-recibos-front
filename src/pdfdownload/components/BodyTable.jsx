import Row from "./Row";

const BodyTable = ({ header, data }) => {
  return (
    <>
      {data.map((row, index) => (
        <Row
          key={index}
          row={row}
          header={header}
          isLast={index === data.length - 1}
        />
      ))}
    </>
  );
};

export default BodyTable;
