import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    fontWeight: "bold",
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
});

const HeaderTable = ({ header }) => {
  return (
    <View style={styles.fila}>
      {header.map((item, index) => (
        <View
          style={[
            styles.celda,
            index === header.length - 1 ? styles.ultimaCelda : {},
          ]}
          key={item.key}
        >
          <Text style={{ fontSize: 14 }}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default HeaderTable;
