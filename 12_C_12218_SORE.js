console.log("[BARATIE RESTAURANT]");
console.log('_'.repeat(50));

// FUNGSI UNTUK MEMPROSES PEMBAYARAN
function processPayment(hargaTotal, bayar) {
  // periksa data di sini
  try {
    if (typeof hargaTotal !== "number" || typeof bayar !== "number") {
      throw "Both total price and amount given must be numbers";
    }

    if (bayar < hargaTotal) {
      throw "Amount given is less than the total price";
    }
    const kembalian = bayar - hargaTotal;
    console.log(`Transaction successful. Change to return: ${kembalian}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  } finally {
    console.log("Cleaning up resources...");
  }
}

// INISIALISASI DATA
const testCases = [
  { label: "[1]", total: 50, bayar: "fifty" },
  { label: "[2]", total: 50, bayar: 35 },
  { label: "[3]", total: 50, bayar: 218 } 
];

// PEMANGGILAN
testCases.forEach(({ label, total, bayar }) => {
  console.log(label);
  processPayment(total, bayar);
  console.log('_'.repeat(50));
});
