import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginTop: 8,
    color: "#051E3D",
    fontWeight: "700",
  },
  progressBar: {
    backgroundColor: "#051E3D",
    height: 2,
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  progressContainer: {
    marginTop: 20,
    width: 200,
    height: 2,
    backgroundColor: "#a1a1a1",
    position: "relative",
  },
  inputContainer: {
    marginVertical: 20,
    backgroundColor: "#e0e0e0",
    gap: 15,
    fontSize: 42,
    textAlign: "center",
    borderWidth: 1,
    padding: 25,
    width: "90%",
    borderRadius: 15,
    boxShadow: "5px 5px 20px 1px gray",
  },
  textContainer: {
    borderWidth: 1,
    padding: 7,
    paddingHorizontal: 10,
    fontSize: 25,
    height: 45,
    borderRadius: 7,
  },
  labelInput: {
    fontSize: 14,
    fontWeight: 600,
  },
  btnAmount: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 15,
    backgroundColor: "#008f26",
    flex: 0.5,
  },
  btnHome: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 7,
    backgroundColor: "#54aae3",
  },
  textBtn: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontWeight: 600,
  },
});

export const style2 = StyleSheet.create({
  modalStyle: {
    marginTop: 20,

    backgroundColor: "#9ba5b3",
    borderRadius: 20,
    padding: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "space-around",
  },
});

export const styleTable = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    marginHorizontal: "auto",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    // Fixed width for horizontal scroll
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlign: "center",
    width: 160,
  },
  header: {
    backgroundColor: "#e0e0e0",
    fontWeight: "bold",
  },
});

export const stylePagination = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    height: "100%",
  },
  pageContent: {
    fontSize: 24,
    fontWeight: "bold",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 8,
  },
  activeDot: {
    backgroundColor: "#007AFF",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});

export const genStyleImage = (wt: number, ht: number) => {
  return { width: wt * 0.2, height: ht * 0.1 };
};
