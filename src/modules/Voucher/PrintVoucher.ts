import { jsPDF } from "jspdf";

interface Params {
  bikes: Bike[];
  user: User;
}

function PrintVoucher({ bikes, user }: Params) {
  const doc = new jsPDF();
  let count = 50;
  let totalCost = 0;
  doc.text("STORE BIKE'S TRAIL", 10, 10);
  doc.text("Llamar a: 944818207", 10, 20);
  doc.text(`Cliente: ${user.nombres} ${user.apellidos}`, 10, 30);
  doc.text("Fecha: " + user.fecha, 10, 40);
  bikes.forEach((elem) => {
    doc.text(
      "---------------------------------------------------------------",
      10,
      count
    );
    count += 10;
    doc.text("Moto: " + elem.nombre, 10, count);
    count += 10;
    doc.text("Precio: " + String(elem.precio) + "$", 10, count);
    count += 10;
    totalCost += elem.precio;
  });
  doc.text(
    "---------------------------------------------------------------",
    10,
    count
  );
  count += 10;
  doc.text("Precio Total: " + String(totalCost) + "$", 10, count);
  doc.save("voucher-reserva.pdf");
}

export default PrintVoucher;
