function openModal() {
  document.getElementById("reportModal").style.display = "block";
}

function closeModal() {
  document.getElementById("reportModal").style.display = "none";
}

function submitReport(event) {
  event.preventDefault();

  const address = document.getElementById("address").value;
  const reason = document.getElementById("reason").value;

  alert("Report Submitted!\n\nAddress: " + address + "\nReason: " + reason);

  closeModal();
  document.getElementById("fireReportForm").reset();


  document.getElementById("fireReportForm").reset();
  closeModal();
}

window.onclick = function(event) {
  const modal = document.getElementById("reportModal");
  if (event.target === modal) {
    closeModal();
  }
};