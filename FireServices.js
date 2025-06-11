document.addEventListener("DOMContentLoaded", () => {
  const themeToggler = document.getElementById("theme-toggler");
  const modal = document.getElementById("reportModal");
  const fireReportForm = document.getElementById("fireReportForm");
  const truckSelect = document.createElement("select");
  const selectedInfo = document.createElement("div");

  selectedInfo.id = "selected-info";
  document.body.appendChild(selectedInfo);

  truckSelect.id = "truck";
  truckSelect.required = true;
  truckSelect.innerHTML = `
    <option value="">-- Select Fire Truck --</option>
    <option value="Engine">Engine</option>
    <option value="Ladder">Ladder</option>
    <option value="Rescue">Rescue</option>
    <option value="Hazmat">Hazmat</option>
  `;

  
  themeToggler.addEventListener("click", () => {
    const current = document.documentElement.style.colorScheme;
    document.documentElement.style.colorScheme = current === "dark" ? "light" : "dark";
    themeToggler.textContent = current === "dark" ? "Light Mode" : "Dark Mode";
  });

  window.openModal = function () {
    modal.style.display = "block";
  };

  window.closeModal = function () {
    modal.style.display = "none";
  };

  window.submitReport = function (event) {
    event.preventDefault();

    const address = document.getElementById("address").value;
    const reason = document.getElementById("reason").value;
    const truck = document.getElementById("truck").value;

    if (!truck) {
      alert("Please select a fire truck.");
      return;
    }

    alert(`Report Submitted!\n\nAddress: ${address}\nReason: ${reason}\nFire Truck: ${truck}`);

    selectedInfo.style.display = "block";
    selectedInfo.innerHTML = `
      <strong>Submitted Report:</strong><br>
      Address: ${address}<br>
      Reason: ${reason}<br>
      Fire Truck: ${truck}
    `;

    fireReportForm.reset();
    closeModal();
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      closeModal();
    }
  };
});