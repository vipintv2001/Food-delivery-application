import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Button } from "react-bootstrap";

function AdminReport({ currentDayOrder }) {
  const generatePdf = (ordersToday) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Daily Report", 14, 22);

    doc.setFontSize(12);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 30);

    const tableData = ordersToday.map((order, index) => {
      const basePrice = Math.floor(
        order.cartSummary[0].subTotal - order.cartSummary[0].gst
      );
      const profit = basePrice * 0.15;
      const deliveryProfit = order.deliveryCharge * 0.3;
      const subTotalProfit = profit + deliveryProfit;

      return [
        index + 1,
        order._id?.slice(-4),
        `${order.cartSummary[0]?.subTotal}`,
        `${order.cartSummary[0]?.gst}`,
        `${basePrice}`,
        `${order.deliveryCharge}`,
        `${profit.toFixed(2)}`,
        `${deliveryProfit.toFixed(2)}`,
        `${subTotalProfit.toFixed(2)}`,
      ];
    });

    const totalProfit = ordersToday.reduce((sum, curr) => {
      const base = curr.cartSummary[0].subTotal - curr.cartSummary[0].gst;
      const profit = base * 0.15;
      const deliveryProfit = curr.deliveryCharge * 0.3;
      const subTotalProfit = profit + deliveryProfit;
      return sum + subTotalProfit;
    }, 0);

    autoTable(doc, {
      startY: 40,
      head: [
        [
          "#",
          "Order ID",
          "Total Price",
          "GST",
          "Base Price",
          "delivery Charge",
          "Product share(15%)",
          "delivery share(30%)",
          "Profit",
        ],
      ],
      body: tableData,
      styles: {
        fontSize: 8,
        cellPadding: 4,
        textColor: [40, 40, 40],
        lineColor: [220, 220, 220],
        lineWidth: 0.3,
      },
      headStyles: {
        fillColor: [0, 123, 255],
        textColor: 255,
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
      columnStyles: {
        0: { cellWidth: 10, halign: "center" },
        1: { cellWidth: 30 },
        2: { cellWidth: 20, halign: "center" },
        3: { halign: "right" },
        4: { halign: "right" },
        5: { halign: "right" },
        6: { halign: "right" },
        7: { halign: "right" },
      },
    });

    const finalY = doc.lastAutoTable.finalY + 10;

    const label = "Total Profit:";
    const value = "Rs. " + totalProfit.toFixed(2);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(33, 37, 41);
    const pageWidth = doc.internal.pageSize.getWidth();
    const textX = pageWidth - 20;
    doc.text(label, textX, finalY, { align: "right" });
    doc.setFont("helvetica", "bold");
    doc.text(value, textX, finalY + 6, { align: "right" });

    doc.save("order-profit-report.pdf");
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold">Delivery Report</h4>
        <Button
          variant="outline-danger"
          onClick={() => generatePdf(currentDayOrder)}
        >
          <i className="bi bi-download me-2"></i>Download Daily Report
        </Button>
      </div>
    </>
  );
}

export default AdminReport;
