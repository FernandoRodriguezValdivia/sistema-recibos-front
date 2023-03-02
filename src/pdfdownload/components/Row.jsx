import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
  },
  celda: {
    width: "14.2857%",
    borderRightWidth: 1,
    borderRightColor: "#999",
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  ultimaCelda: {
    borderRightWidth: 0,
  },
  ultimaFila: {
    borderBottomWidth: 0,
  },
});

const Row = ({ row, isLast, header }) => {
  return (
    <View style={[styles.fila, isLast ? styles.ultimaFila : {}]}>
      {header.map((item, index) => (
        <View
          key={index}
          style={[
            styles.celda,
            index === header.length - 1 ? styles.ultimaCelda : {},
          ]}
        >
          <Text style={{ fontSize: 12 }}>{row[item.key]}</Text>
        </View>
      ))}
    </View>
  );
};

export default Row;
