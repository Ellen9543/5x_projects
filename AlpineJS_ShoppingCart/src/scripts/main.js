import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Alpine from "alpinejs";

Alpine.store("shared", {
  // items: [
  //   { no: "001", name: "老大", price: 20, img: "cat001.jpg" },
  //   { no: "002", name: "貝貝", price: 15, img: "cat002.jpg" },
  //   { no: "003", name: "老虎", price: 10, img: "cat003.jpg" },
  //   { no: "004", name: "胖胖", price: 8.5, img: "cat004.jpg" },
  //   { no: "005", name: "小花", price: 9.99, img: "cat005.jpg" },
  // ],
  items: {
    "001": { no: "001", name: "老大", price: 20, img: "cat001.jpg" },
    "002": { no: "002", name: "貝貝", price: 15, img: "cat002.jpg" },
    "003": { no: "003", name: "老虎", price: 10, img: "cat003.jpg" },
    "004": { no: "004", name: "胖胖", price: 8.5, img: "cat004.jpg" },
    "005": { no: "005", name: "小花", price: 9.99, img: "cat005.jpg" },
  },
});

Alpine.data("itemList", () => ({
  init() {
    console.log("cat!!!!!!!!");
  },

  get items() {
    return this.$store.shared.items;
  },

  addItem(no) {
    this.$dispatch("addcartsitem", { no });
  },
}));

Alpine.data("carts", () => ({
  cartsItem: {},

  get items() {
    return this.$store.shared.items;
  },

  get total() {
    let subtotal = 0;

    for (key in this.cartsItem) {
      subtotal += this.cartsItem[key]["price"] * this.cartsItem[key]["count"];
    }
    return Number.isInteger(subtotal) ? subtotal : subtotal.toFixed(2);
  },

  setItem({ detail }) {
    const no = detail.no;
    if (this.cartsItem[no]) {
      this.cartsItem[no]["count"]++;
    } else {
      this.cartsItem[no] = {
        name: this.items[no]["name"],
        price: this.items[no]["price"],
        count: 1,
      };
    }
  },

  delItem(key) {
    delete this.cartsItem[key];
  },

  resetCarts() {
    this.cartsItem = {};
  },
}));

Alpine.start();
