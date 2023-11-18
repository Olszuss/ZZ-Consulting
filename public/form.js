const VIN = document.getElementById("vin-number");
const OCdays = document.getElementById("ocDays");
const insurer = document.getElementById("insurer-name");

if (insurer != null && insurer != undefined) {
insurer.addEventListener("change", function insurerAutoComplete() {
  const a = document.getElementById("insurer-name").value;
  const b = document.getElementById("insurer-street");
  const bNumber = document.getElementById("insurer-street-number");
  const c = document.getElementById("insurer-zip-code");
  const d = document.getElementById("insurer-city");
  const t = {
    Allianz: {
      s: "ul. Rodziny Hiszpańskich",
      sNumber: "1",
      m: "Warszawa",
      z: "02-685",
    },
    Generali: {
      s: "ul. Senatorska",
      sNumber: "18",
      m: "Warszawa",
      z: "00-082",
    },
    InterRisk: {
      s: "ul. Noakowskiego",
      sNumber: "2",
      m: "Warszawa",
      z: "00-668",
    },
    HDI: {
      s: "al. Jerozolimskie",
      sNumber: "133A",
      m: "Warszawa",
      z: "02-304",
    },
    Link4: {
      s: "ul. Postępu",
      sNumber: "15",
      m: "Warszawa",
      z: "02-676",
    },
    proama: {
      s: "ul. Szeligowskiego",
      sNumber: "6",
      m: "Lublin",
      z: "20-883",
    },
    pzu: {
      s: "Rondo Ignacego Daszyńskiego",
      sNumber: "4",
      m: "Warszawa",
      z: "00-843",
    },
    uniqa: {
      s: "ul. Gdańska",
      sNumber: "132",
      m: "Łódź",
      z: "90-520",
    },
    warta: {
      s: "Rondo Ignacego Daszyńskiego",
      sNumber: "1",
      m: "Warszawa",
      z: "00-843",
    },
    wiener: {
      s: "ul. Wołoska",
      sNumber: "22a",
      m: "Warszawa",
      z: "02-675",
    },
    ergo: {
      s: "ul. Hestii",
      sNumber: "1",
      m: "Sopot",
      z: "81-731",
    },
  };

  if (a === "ALLIANZ POLSKA S.A.") {
    b.value = t.Allianz.s;
    c.value = t.Allianz.z;
    bNumber.value = t.Allianz.sNumber;
    d.value = t.Allianz.m;
  } else if (a === "GENERALI T.U. S.A.") {
    b.value = t.Generali.s;
    c.value = t.Generali.z;
    bNumber.value = t.Generali.sNumber;
    d.value = t.Generali.m;
  } else if (a === "INTERRISK TU S.A. Vienna Insurance Group") {
    b.value = t.InterRisk.s;
    c.value = t.InterRisk.z;
    bNumber.value = t.InterRisk.sNumber;
    d.value = t.InterRisk.m;
  } else if (a === "LINK4 TU S.A.") {
    b.value = t.Link4.s;
    c.value = t.Link4.z;
    bNumber.value = t.Link4.sNumber;
    d.value = t.Link4.m;
  } else if (a === "HDI Asekuracja Towarzystwo Ubezpieczeń S.A.") {
    b.value = t.HDI.s;
    c.value = t.HDI.z;
    bNumber.value = t.HDI.sNumber;
    d.value = t.HDI.m;
  } else if (a === "PROAMA") {
    b.value = t.proama.s;
    c.value = t.proama.z;
    bNumber.value = t.proama.sNumber;
    d.value = t.proama.m;
  } else if (a === "PZU SA") {
    b.value = t.pzu.s;
    c.value = t.pzu.z;
    bNumber.value = t.pzu.sNumber;
    d.value = t.pzu.m;
  } else if (a === "UNIQA TU S.A.") {
    b.value = t.uniqa.s;
    c.value = t.uniqa.z;
    bNumber.value = t.uniqa.sNumber;
    d.value = t.uniqa.m;
  } else if (a === "TUiR WARTA S.A.") {
    b.value = t.warta.s;
    c.value = t.warta.z;
    bNumber.value = t.warta.sNumber;
    d.value = t.warta.m;
  } else if (a === "Wiener TU S.A.") {
    b.value = t.wiener.s;
    c.value = t.wiener.z;
    bNumber.value = t.wiener.sNumber;
    d.value = t.wiener.m;
  } else if (a === "STU ERGO HESTIA S.A.") {
    b.value = t.ergo.s;
    c.value = t.ergo.z;
    bNumber.value = t.ergo.sNumber;
    d.value = t.ergo.m;
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