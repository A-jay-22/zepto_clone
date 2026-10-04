import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import { useEffect } from "react";

const InvoiceGenerate = () => {
  const invoice = useSelector((state) => state.invoice.invoice);

  const invoiceRef = useRef(null);

  // const downloadInvoice = async () => {
  //   const element = invoiceRef.current;

  //   if (!element) return;

  //   const canvas = await html2canvas(element, {
  //     scale: 2, // improves quality
  //       useCORS: true,
  //       backgroundColor: "#ffffff",

  //   });

  //   const imgData = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF({
  //     orientation: "portrait",
  //     unit: "px",
  //     format: "a4",
  //   });

  //   const imgProps = pdf.getImageProperties(imgData);

  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

  //   pdf.save("invoice.pdf");
  // };

  // useEffect(() => {
  //   if (!invoice) return;

  //   const timer = setTimeout(() => {
  //     downloadInvoice();
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, [invoice]);

  const downloadInvoice = () => {
    if (!invoice) return;

    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(22);
    doc.text("INVOICE", 14, y);

    y += 10;
    doc.setFontSize(12);
    doc.text(`Invoice No: ${invoice.invoiceNo}`, 14, y);

    y += 7;
    doc.text(`Date: ${invoice.date}`, 14, y);

    y += 15;

    doc.setFontSize(15);
    doc.text("Customer Details", 14, y);

    y += 8;
    doc.setFontSize(12);
    doc.text(`Name: ${invoice.customer}`, 14, y);

    y += 7;
    doc.text(`Email: ${invoice.email}`, 14, y);

    y += 7;
    doc.text(`Phone: ${invoice.phone}`, 14, y);

    y += 7;
    doc.text(`Address: ${invoice.address}`, 14, y);

    y += 15;

    doc.setFontSize(14);
    doc.text("Items", 14, y);

    y += 10;

    doc.setFont(undefined, "bold");
    doc.text("Product", 14, y);
    doc.text("Qty", 100, y);
    doc.text("Price", 130, y);
    doc.text("Total", 170, y);

    doc.setFont(undefined, "normal");
    y += 8;

    invoice.items.forEach((item) => {
      doc.text(item.name, 14, y);
      doc.text(String(item.quantity), 100, y);
      doc.text(`₹${item.price}`, 130, y);
      doc.text(`₹${item.price * item.quantity}`, 170, y);

      y += 8;
    });

    y += 10;

    doc.text(`Subtotal : ₹${invoice.subtotal}`, 14, y);

    y += 7;
    doc.text(`Tax : ₹${invoice.tax}`, 14, y);

    y += 7;
    doc.text(`Shipping : ₹${invoice.shipping}`, 14, y);

    y += 10;

    doc.setFont(undefined, "bold");
    doc.setFontSize(15);
    doc.text(`Grand Total : ₹${invoice.total}`, 14, y);

    y += 20;

    doc.setFontSize(12);
    doc.text("Thank you for your purchase ❤️", 14, y);

    doc.save("invoice.pdf");
  };

  if (!invoice) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-3xl font-bold">No Invoice Found</h2>
      </div>
    );
  }
  //  console.log(invoice);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto">
        <div ref={invoiceRef} className="bg-white p-10 rounded-lg shadow">
          <div className="flex justify-between border-b pb-5">
            <div>
              <h1 className="text-4xl font-bold text-indigo-600">INVOICE</h1>

              <p>{invoice.invoiceNo}</p>
              <p>{invoice.date}</p>
            </div>

            <div className="text-right">
              <h2 className="font-bold text-xl">Customer</h2>

              <p>{invoice.customer}</p>
              <p>{invoice.email}</p>
              <p>{invoice.phone}</p>
              <p>{invoice.address}</p>
            </div>
          </div>

          <table className="w-full mt-8 border">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-3">Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {invoice.items?.map((item) => (
                <tr key={item.id} className="border-b text-center">
                  <td className="p-3 text-left">{item.name}</td>

                  <td>{item.quantity}</td>

                  <td>₹{item.price}</td>

                  <td>₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end mt-8">
            <div className="w-80 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{invoice.subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹{invoice.tax}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{invoice.shipping}</span>
              </div>

              <div className="border-t pt-2 flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span>₹{invoice.total}</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500">Thank you for your purchase ❤️</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={downloadInvoice}
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition cursor-pointer"
          >
            Download Invoice PDF
          </button>
          <Link
            to="/orderhistory"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition text-center"
          >
            View Order History
          </Link>
          <Link
            to="/"
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition text-center"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerate;
