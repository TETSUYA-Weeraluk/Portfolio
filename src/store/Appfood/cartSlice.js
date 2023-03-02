import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartIsOpen: false,
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    orderConfirm: false,
  },
  reducers: {
    cartToggle(state) {
      state.cartIsOpen = !state.cartIsOpen;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      //ประกาศตัวแปร เพื่อเช็คว่ามีรายการสินค้าเหมือนกันอยู่ในตะกร้าหรือไหม
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      // ถ้ารายการสินค้าไม่มีในตะกร้าให้ทำการ เพิ่มสินค้าเข้าไปในตะกร้า
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          totalPrice: newItem.price,
          price: newItem.price,
          quantity: 1,
          image: newItem.image,
        });
        state.totalAmount = state.totalAmount + newItem.price;
      } else {
        // ถ้ามีให้เพิ่มจำนวนของรายการนั้น +1
        existingItem.quantity++;
        // จำนวนเงินทั้งหมดของรายการสินค้า
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalAmount = state.totalAmount + newItem.price;
      }
    },
    removeItemFormCart(state, action) {
      const idItem = action.payload;
      const existingItem = state.items.find((item) => item.id === idItem.id);
      state.totalQuantity--;
      //ถ้ารายการสินค้าจำนวนเหลือเท่ากับ 1 ให้คัดเฉพาะ ID ที่ไม่เท่ากับ ที่ลบออก จะเหลือเพียงแค่ ID ที่ไม่ได้ลบ
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== idItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    //confirm Order และ reset รายการ
    onClickOrderConfirm(state, action) {
      state.orderConfirm = action.payload;
      state.totalQuantity = 0;
      state.totalAmount = 0;
      state.items = [];
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
