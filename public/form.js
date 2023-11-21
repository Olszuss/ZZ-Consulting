const VIN = document.getElementById("vin-number");
const OCdays = document.getElementById("ocDays");
const insurer = document.getElementById("insurer-name");

if (insurer != null && insurer != undefined) {
  insurer.addEventListener("change", function() {
    const a = document.getElementById("insurer-name").value;
    const b = document.getElementById("insurer-street");
    const bNumber = document.getElementById("insurer-street-number");
    const c = document.getElementById("insurer-zip-code");
    const d = document.getElementById("insurer-city");
  
    const insurerMapping = {
      "ALLIANZ POLSKA S.A.": { s: "ul. Rodziny Hiszpańskich", sNumber: "1", m: "Warszawa", z: "02-685" },
      "GENERALI T.U. S.A.": { s: "ul. Senatorska", sNumber: "18", m: "Warszawa", z: "00-082" },
      "INTERRISK TU S.A. Vienna Insurance Group": { s: "ul. Noakowskiego", sNumber: "2", m: "Warszawa", z: "00-668" },
      "LINK4 TU S.A.": { s: "ul. Postępu", sNumber: "15", m: "Warszawa", z: "02-676" },
      "HDI Asekuracja Towarzystwo Ubezpieczeń S.A.": { s: "al. Jerozolimskie", sNumber: "133A", m: "Warszawa", z: "02-304" },
      "PROAMA": { s: "ul. Szeligowskiego", sNumber: "6", m: "Lublin", z: "20-883" },
      "PZU SA": { s: "Rondo Ignacego Daszyńskiego", sNumber: "4", m: "Warszawa", z: "00-843" },
      "UNIQA TU S.A.": { s: "ul. Gdańska", sNumber: "132", m: "Łódź", z: "90-520" },
      "TUiR WARTA S.A.": { s: "Rondo Ignacego Daszyńskiego", sNumber: "1", m: "Warszawa", z: "00-843" },
      "Wiener TU S.A.": { s: "ul. Wołoska", sNumber: "22a", m: "Warszawa", z: "02-675" },
      "STU ERGO HESTIA S.A.": { s: "ul. Hestii", sNumber: "1", m: "Sopot", z: "81-731" },
    };
  
    const insurerData = insurerMapping[a];
  
    if (insurerData) {
      b.value = insurerData.s;
      c.value = insurerData.z;
      bNumber.value = insurerData.sNumber;
      d.value = insurerData.m;
    }
  });
}
if (VIN != null && VIN !== undefined) {
VIN.addEventListener("change", () => {
  const vinNumber = document.getElementById("vin-number").value;
  let error = document.querySelector(".wrongVin");
  vinNumber.length != 17
    ? (error.innerHTML = "Numer VIN powinien składać się z 17 znaków")
    : (error.innerHTML = " ");
});
}
if (OCdays !== undefined && OCdays != null) {
OCdays.addEventListener("change", () => {
  let typeOfCar = document.getElementById("car").value;
  let penalty = document.getElementById("penalty");
  if (typeOfCar == "osobowy") {
      if (OCdays.value <= 3){
          penalty.value = 1440;
      } else if (OCdays.value <= 14){
          penalty.value = 3600;
      } else if (OCdays.value > 14){
          penalty.value = 7200;
      }
  }
  if (typeOfCar == "ciężarowy") {
      if (OCdays.value <= 3){
          penalty.value = 2160;
      } else if (OCdays.value <= 14){
          penalty.value = 5400;
      } else if (OCdays.value > 14){
          penalty.value = 10800;
      }
  }
  if (typeOfCar == "autobus") {
      if (OCdays.value <= 3){
          penalty.value = 2160;
      } else if (OCdays.value <= 14){
          penalty.value = 5400;
      } else if (OCdays.value > 14){
          penalty.value = 10800;
      }
  }
  if (typeOfCar == "motocykl") {
      if (OCdays.value <= 3){
          penalty.value = 240;
      } else if (OCdays.value <= 14){
          penalty.value = 600;
      } else if (OCdays.value > 14){
          penalty.value = 1200;
      }
  }
});
}