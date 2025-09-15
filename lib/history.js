import { historyItems } from "./carts.js";
import { input } from "./input.js";

export const showHistory = async () => {
  let attach = true;
  while (attach) {
    console.log("========== HISTORY PESANAN ==========");

    if (historyItems.length === 0) {
      console.log("\nBelum ada riwayat pesanan.");
      console.log("\n0. Kembali");
      const select = await input("Masukkan opsi: ");
      if (select === 0) {
        attach = false;
      }
      continue;
    }
    console.clear();
    console.log("========== SEMUA PESANAN DETAIL ==========");
  
    historyItems.forEach((history, index) => {
      console.log(`\n${"=".repeat(50)}`);
      console.log(`PESANAN KE-${index + 1}`);
      console.log(`Order ID: #${history.id}`);
      console.log(`Tanggal: ${history.date}`);
      console.log("\nDetail Items:");
  
      // Tampilkan item dalam format tabel sederhana
      history.items.forEach((item, itemIndex) => {
        console.log(
          `${itemIndex + 1}. ${item.name} - ${item.amount}x - Rp${Number(
            item.price
          ).toLocaleString("id")} = Rp${Number(item.subtotal).toLocaleString(
            "id"
          )}`
        );
      });
  
      console.log(`\nTotal: ${history.totalFormatted}`);
    });
  
    console.log("\n0. Kembali");
    const select = await input("Masukkan opsi: ");
    if (select === -1) {
      attach = false;
    }
    continue;
  }
};
