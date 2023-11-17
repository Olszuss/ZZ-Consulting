const VIN = document.getElementById("vin-number");

window.addEventListener("change", function insurerAutoComplete() {
    const insurerChoice = document.getElementById("insurer-name").value
    const insurerStreet = document.getElementById("insurer-street")
    const insurerStreetNumber = document.getElementById("insurer-street-number")
    const insurerZipCode = document.getElementById("insurer-zip-code")
    const insurerCity = document.getElementById("insurer-city")
    let insure;
    const insurers = {
    Allianz: {
      street: "ul. Rodziny Hiszpańskich",
      streetNumber: "1",
      city: "Warszawa",
      zipCode: "02-685",
  
    },
    Generali: {
      street: "ul. Senatorska",
      streetNumber: "18",
      city: "Warszawa",
      zipCode: "00-082",
    },
    InterRisk: {
      street: "ul. Noakowskiego",
      streetNumber: "2",
      city: "Warszawa",
      zipCode: "00-668",
    },
    HDI: {
      street: "al. Jerozolimskie",
      streetNumber: "133A",
      city: "Warszawa",
      zipCode: "02-304",
    },
    Link4: {
      street: "ul. Postępu",
      streetNumber: "15",
      city: "Warszawa",
      zipCode: "02-676",
    },
    proama: {
      street: "ul. Szeligowskiego",
      streetNumber: "6",
      city: "Lublin",
      zipCode: "20-883",
    },
    pzu: {
      street: "Rondo Ignacego Daszyńskiego",
      streetNumber: "4",
      city: "Warszawa",
      zipCode: "00-843",
    },
    uniqa: {
      street: "ul. Gdańska",
      streetNumber: "132",
      city: "Łódź",
      zipCode: "90-520",
    },
    warta: {
      street: "Rondo Ignacego Daszyńskiego",
      streetNumber: "1",
      city: "Warszawa",
      zipCode: "00-843",
    },
    wiener: {
      street: "ul. Wołoska",
      streetNumber: "22a",
      city: "Warszawa",
      zipCode: "02-675",
    },
    ergo: {
      street: "ul. Hestii",
      streetNumber: "1",
      city: "Sopot",
      zipCode: "81-731",
    }
  }
  
    if (insurerChoice === "ALLIANZ POLSKA S.A.") {
        insurerStreet.value = insurers.Allianz.street;
        insurerZipCode.value = insurers.Allianz.zipCode;
        insurerStreetNumber.value = insurers.Allianz.streetNumber;
        insurerCity.value = insurers.Allianz.city;
  
    } else if (insurerChoice === "GENERALI T.U. S.A.") {
        insurerStreet.value = insurers.Generali.street;
        insurerZipCode.value = insurers.Generali.zipCode;
        insurerStreetNumber.value = insurers.Generali.streetNumber;
        insurerCity.value = insurers.Generali.city;
    } else if (insurerChoice === "INTERRISK TU S.A. Vienna Insurance Group") {
        insurerStreet.value = insurers.InterRisk.street;
        insurerZipCode.value = insurers.InterRisk.zipCode;
        insurerStreetNumber.value = insurers.InterRisk.streetNumber;
        insurerCity.value = insurers.InterRisk.city;
    } else if (insurerChoice === "LINK4 TU S.A.") {
        insurerStreet.value = insurers.Link4.street;
        insurerZipCode.value = insurers.Link4.zipCode;
        insurerStreetNumber.value = insurers.Link4.streetNumber;
        insurerCity.value = insurers.Link4.city;
    } else if (insurerChoice === "HDI Asekuracja Towarzystwo Ubezpieczeń S.A.") {
        insurerStreet.value = insurers.HDI.street;
        insurerZipCode.value = insurers.HDI.zipCode;
        insurerStreetNumber.value = insurers.HDI.streetNumber;
        insurerCity.value = insurers.HDI.city;
    } else if (insurerChoice === "PROAMA") {
        insurerStreet.value = insurers.proama.street;
        insurerZipCode.value = insurers.proama.zipCode;
        insurerStreetNumber.value = insurers.proama.streetNumber;
        insurerCity.value = insurers.proama.city;
    }   else if (insurerChoice === "PZU SA") {
        insurerStreet.value = insurers.pzu.street;
        insurerZipCode.value = insurers.pzu.zipCode;
        insurerStreetNumber.value = insurers.pzu.streetNumber;
        insurerCity.value = insurers.pzu.city;
    }   else if (insurerChoice === "UNIQA TU S.A.") {
        insurerStreet.value = insurers.uniqa.street;
        insurerZipCode.value = insurers.uniqa.zipCode;
        insurerStreetNumber.value = insurers.uniqa.streetNumber;
        insurerCity.value = insurers.uniqa.city;
    }   else if (insurerChoice === "TUiR WARTA S.A.") {
        insurerStreet.value = insurers.warta.street;
        insurerZipCode.value = insurers.warta.zipCode;
        insurerStreetNumber.value = insurers.warta.streetNumber;
        insurerCity.value = insurers.warta.city;
    }   else if (insurerChoice === "Wiener TU S.A.") {
        insurerStreet.value = insurers.wiener.street;
        insurerZipCode.value = insurers.wiener.zipCode;
        insurerStreetNumber.value = insurers.wiener.streetNumber;
        insurerCity.value = insurers.wiener.city;
    }   else if (insurerChoice === "STU ERGO HESTIA S.A.") {
        insurerStreet.value = insurers.ergo.street;
        insurerZipCode.value = insurers.ergo.zipCode;
        insurerStreetNumber.value = insurers.ergo.streetNumber;
        insurerCity.value = insurers.ergo.city;
    }


  });

VIN.addEventListener("change", ()=>{
    const vinNumber = document.getElementById("vin-number").value
    let error = document.querySelector('.wrongVin')
    vinNumber.length!=17 ? error.innerHTML = "Numer VIN powinien składać się z 17 znaków" : error.innerHTML = " ";
  
});
