import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Button } from "react-bootstrap";

function RestaurentReport({ currentDayOrders }) {
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
      const appShare = basePrice * 0.15;
      const profit = basePrice - appShare;

      return [
        index + 1,
        order._id?.slice(-4),
        `${order.cart?.length || 0}`,
        `${order.cartSummary[0]?.subTotal}`,
        `${order.cartSummary[0]?.gst}`,
        `${basePrice}`,
        `${appShare.toFixed(2)}`,
        `${profit.toFixed(2)}`,
      ];
    });

    const totalProfit = ordersToday.reduce((sum, curr) => {
      const base = curr.cartSummary[0].subTotal - curr.cartSummary[0].gst;
      const profit = base - base * 0.15;
      return sum + profit;
    }, 0);

    autoTable(doc, {
      startY: 40,
      head: [
        [
          "#",
          "Order ID",
          "Quantity",
          "Total Price",
          "GST",
          "Base Price",
          "App Share (15%)",
          "Profit",
        ],
      ],
      body: tableData,
      styles: {
        fontSize: 10,
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
          onClick={() => generatePdf(currentDayOrders)}
        >
          <i className="bi bi-download me-2"></i>Download Daily Report
        </Button>
      </div>
    </>
  );
}

export default RestaurentReport;
