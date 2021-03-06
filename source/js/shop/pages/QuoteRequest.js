


class QuoteRequest {
    constructor() {
        this.addresses = {
  "label": "Country",
  "options": [
    {
      "label": "Afghanistan",
      "iso": "AF",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{4}$",
                "eg": "1001"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Aland Islands",
      "iso": "AX",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^22\\d{3}$",
                "eg": "22150"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Albania",
      "iso": "AL",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Algeria",
      "iso": "DZ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "American Samoa",
      "iso": "AS",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            },
            {
              "postalcode": {
                "label": "ZIP code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Andorra",
      "iso": "AD",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Angola",
      "iso": "AO",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Anguilla",
      "iso": "AI",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Antarctica",
      "iso": "AQ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Antigua and Barbuda",
      "iso": "AG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Argentina",
      "iso": "AR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^((?:[A-HJ-NP-Z])?\\d{4})([A-Z]{3})?$",
                "eg": "B1921"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "B": "Buenos Aires"
                  },
                  {
                    "K": "Catamarca"
                  },
                  {
                    "H": "Chaco"
                  },
                  {
                    "U": "Chubut"
                  },
                  {
                    "C": "Ciudad de Buenos Aires"
                  },
                  {
                    "X": "Córdoba"
                  },
                  {
                    "W": "Corrientes"
                  },
                  {
                    "E": "Entre Ríos"
                  },
                  {
                    "P": "Formosa"
                  },
                  {
                    "Y": "Jujuy"
                  },
                  {
                    "L": "La Pampa"
                  },
                  {
                    "F": "La Rioja"
                  },
                  {
                    "M": "Mendoza"
                  },
                  {
                    "N": "Misiones"
                  },
                  {
                    "Q": "Neuquén"
                  },
                  {
                    "R": "Río Negro"
                  },
                  {
                    "A": "Salta"
                  },
                  {
                    "J": "San Juan"
                  },
                  {
                    "D": "San Luis"
                  },
                  {
                    "Z": "Santa Cruz"
                  },
                  {
                    "S": "Santa Fe"
                  },
                  {
                    "G": "Santiago del Estero"
                  },
                  {
                    "V": "Tierra del Fuego"
                  },
                  {
                    "T": "Tucumán"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Armenia",
      "iso": "AM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Aruba",
      "iso": "AW",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Australia",
      "iso": "AU",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City/suburb"
              }
            },
            {
              "administrativearea": {
                "label": "State",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "ACT": "Australian Capital Territory"
                  },
                  {
                    "NSW": "New South Wales"
                  },
                  {
                    "NT": "Northern Territory"
                  },
                  {
                    "QLD": "Queensland"
                  },
                  {
                    "SA": "South Australia"
                  },
                  {
                    "TAS": "Tasmania"
                  },
                  {
                    "VIC": "Victoria"
                  },
                  {
                    "WA": "Western Australia"
                  }
                ]
              }
            },
            {
              "postalcode": {
                "label": "Postcode",
                "format": "^\\d{4}$",
                "eg": "2000"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Austria",
      "iso": "AT",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{4}$",
                "eg": "3741"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Azerbaijan",
      "iso": "AZ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Bahamas",
      "iso": "BS",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Island"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Bahrain",
      "iso": "BH",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Bangladesh",
      "iso": "BD",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Barbados",
      "iso": "BB",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Belarus",
      "iso": "BY",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Belgium",
      "iso": "BE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{4}$",
                "eg": "4000"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Belize",
      "iso": "BZ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Benin",
      "iso": "BJ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Bermuda",
      "iso": "BM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Bhutan",
      "iso": "BT",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Bolivia",
      "iso": "BO",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Bosnia and Herzegovina",
      "iso": "BA",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Botswana",
      "iso": "BW",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Bouvet Island",
      "iso": "BV",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Brazil",
      "iso": "BR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Thoroughfare"
          }
        },
        {
          "premise": {
            "label": "Complement"
          }
        },
        {
          "locality": [
            {
              "dependent_localityname": {
                "label": "Neighborhood"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "AC": "Acre"
                  },
                  {
                    "AL": "Alagoas"
                  },
                  {
                    "AM": "Amazonas"
                  },
                  {
                    "AP": "Amapa"
                  },
                  {
                    "BA": "Bahia"
                  },
                  {
                    "CE": "Ceara"
                  },
                  {
                    "DF": "Distrito Federal"
                  },
                  {
                    "ES": "Espirito Santo"
                  },
                  {
                    "GO": "Goias"
                  },
                  {
                    "MA": "Maranhao"
                  },
                  {
                    "MG": "Minas Gerais"
                  },
                  {
                    "MS": "Mato Grosso do Sul"
                  },
                  {
                    "MT": "Mato Grosso"
                  },
                  {
                    "PA": "Para"
                  },
                  {
                    "PB": "Paraiba"
                  },
                  {
                    "PE": "Pernambuco"
                  },
                  {
                    "PI": "Piaui"
                  },
                  {
                    "PR": "Parana"
                  },
                  {
                    "RJ": "Rio de Janeiro"
                  },
                  {
                    "RN": "Rio Grande do Norte"
                  },
                  {
                    "RO": "Rondonia"
                  },
                  {
                    "RR": "Roraima"
                  },
                  {
                    "RS": "Rio Grande do Sul"
                  },
                  {
                    "SC": "Santa Catarina"
                  },
                  {
                    "SE": "Sergipe"
                  },
                  {
                    "SP": "Sao Paulo"
                  },
                  {
                    "TO": "Tocantins"
                  }
                ]
              }
            },
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{5}[\\-]?\\d{3}$",
                "eg": "10025-345"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "British Indian Ocean Territory",
      "iso": "IO",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "British Virgin Islands",
      "iso": "VG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Brunei",
      "iso": "BN",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Bulgaria",
      "iso": "BG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Burkina Faso",
      "iso": "BF",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Burundi",
      "iso": "BI",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Cambodia",
      "iso": "KH",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Cameroon",
      "iso": "CM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Canada",
      "iso": "CA",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "AB": "Alberta"
                  },
                  {
                    "BC": "British Columbia"
                  },
                  {
                    "MB": "Manitoba"
                  },
                  {
                    "NB": "New Brunswick"
                  },
                  {
                    "NL": "Newfoundland"
                  },
                  {
                    "NT": "Northwest Territories"
                  },
                  {
                    "NS": "Nova Scotia"
                  },
                  {
                    "NU": "Nunavut"
                  },
                  {
                    "ON": "Ontario"
                  },
                  {
                    "PE": "Prince Edward Island"
                  },
                  {
                    "QC": "Quebec"
                  },
                  {
                    "SK": "Saskatchewan"
                  },
                  {
                    "YT": "Yukon Territory"
                  }
                ]
              }
            },
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z][ ]?\\d[ABCEGHJ-NPRSTV-Z]\\d$",
                "eg": "K1A 0B1"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Cape Verde",
      "iso": "CV",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Island"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Cayman Islands",
      "iso": "KY",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "administrativearea": {
                "label": "Island"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Central African Republic",
      "iso": "CF",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Chad",
      "iso": "TD",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Chile",
      "iso": "CL",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "AI": "Aysén del General Carlos Ibáñez del Campo"
                  },
                  {
                    "AN": "Antofagasta"
                  },
                  {
                    "AR": "Araucanía"
                  },
                  {
                    "AP": "Arica y Parinacota"
                  },
                  {
                    "AT": "Atacama"
                  },
                  {
                    "BI": "Biobío"
                  },
                  {
                    "CO": "Coquimbo"
                  },
                  {
                    "LI": "Libertador General Bernardo O'Higgins"
                  },
                  {
                    "LL": "Los Lagos"
                  },
                  {
                    "LR": "Los Ríos"
                  },
                  {
                    "MA": "Magallanes y de la Antártica Chilena"
                  },
                  {
                    "ML": "Maule"
                  },
                  {
                    "RM": "Metropolitana de Santiago"
                  },
                  {
                    "TA": "Tarapacá"
                  },
                  {
                    "VS": "Valparaíso"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "China",
      "iso": "CN",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "dependent_localityname": {
                "label": "District"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "11": "Beijing"
                  },
                  {
                    "31": "Shanghai"
                  },
                  {
                    "44": "Guangdong"
                  },
                  {
                    "12": "Tianjin"
                  },
                  {
                    "13": "Hebei"
                  },
                  {
                    "14": "Shanxi"
                  },
                  {
                    "15": "Inner Mongolia"
                  },
                  {
                    "21": "Liaoning"
                  },
                  {
                    "22": "Jilin"
                  },
                  {
                    "23": "Heilongjiang"
                  },
                  {
                    "32": "Jiangsu"
                  },
                  {
                    "33": "Zhejiang"
                  },
                  {
                    "34": "Anhui"
                  },
                  {
                    "35": "Fujian"
                  },
                  {
                    "36": "Jiangxi"
                  },
                  {
                    "37": "Shandong"
                  },
                  {
                    "41": "Henan"
                  },
                  {
                    "42": "Hubei"
                  },
                  {
                    "43": "Hunan"
                  },
                  {
                    "45": "Guangxi"
                  },
                  {
                    "46": "Hainan"
                  },
                  {
                    "50": "Chongqing"
                  },
                  {
                    "51": "Sichuan"
                  },
                  {
                    "52": "Guizhou"
                  },
                  {
                    "53": "Yunnan"
                  },
                  {
                    "54": "Tibet"
                  },
                  {
                    "61": "Shaanxi"
                  },
                  {
                    "62": "Gansu"
                  },
                  {
                    "63": "Qinghai"
                  },
                  {
                    "64": "Ningxia Hui"
                  },
                  {
                    "65": "Xinjiang Uyghur"
                  }
                ]
              }
            },
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{6}$",
                "eg": "101200"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Christmas Island",
      "iso": "CX",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Cocos (Keeling) Islands",
      "iso": "CC",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Colombia",
      "iso": "CO",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Comoros",
      "iso": "KM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Congo (Brazzaville)",
      "iso": "CG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Congo (Kinshasa)",
      "iso": "CD",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Cook Islands",
      "iso": "CK",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Costa Rica",
      "iso": "CR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Cuba",
      "iso": "CU",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Croatia",
      "iso": "HR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "CuraÁao",
      "iso": "CW",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Cyprus",
      "iso": "CY",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Czech Republic",
      "iso": "CZ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Denmark",
      "iso": "DK",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{4}$",
                "eg": "8660"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Djibouti",
      "iso": "DJ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Dominica",
      "iso": "DM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Dominican Republic",
      "iso": "DO",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Ecuador",
      "iso": "EC",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Egypt",
      "iso": "EG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Governorate",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "ALX": "Alexandria"
                  },
                  {
                    "ASN": "Aswan"
                  },
                  {
                    "AST": "Asyut"
                  },
                  {
                    "BH": "Beheira"
                  },
                  {
                    "BNS": "Beni Suef"
                  },
                  {
                    "C": "Cairo"
                  },
                  {
                    "DK": "Dakahlia"
                  },
                  {
                    "DT": "Damietta"
                  },
                  {
                    "FYM": "Faiyum"
                  },
                  {
                    "GH": "Gharbia"
                  },
                  {
                    "GZ": "Giza"
                  },
                  {
                    "IS": "Ismailia"
                  },
                  {
                    "KFS": "Kafr el-Sheikh"
                  },
                  {
                    "MT": "Matruh"
                  },
                  {
                    "MN": "Minya"
                  },
                  {
                    "MNF": "Monufia"
                  },
                  {
                    "WAD": "New Valley"
                  },
                  {
                    "SIN": "North Sinai"
                  },
                  {
                    "PTS": "Port Said"
                  },
                  {
                    "KB": "Qalyubia"
                  },
                  {
                    "KN": "Qena"
                  },
                  {
                    "BA": "Red Sea"
                  },
                  {
                    "SHR": "Sharqia"
                  },
                  {
                    "SHG": "Sohag"
                  },
                  {
                    "JS": "South Sinai"
                  },
                  {
                    "SUZ": "Suez"
                  },
                  {
                    "LX": "Luxor"
                  }
                ]
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "El Salvador",
      "iso": "SV",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Equatorial Guinea",
      "iso": "GQ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Eritrea",
      "iso": "ER",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Estonia",
      "iso": "EE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Ethiopia",
      "iso": "ET",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Falkland Islands",
      "iso": "FK",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Faroe Islands",
      "iso": "FO",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Fiji",
      "iso": "FJ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Finland",
      "iso": "FI",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{5}$",
                "eg": "00550"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "France",
      "iso": "FR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{2}[ ]?\\d{3}$",
                "eg": "75002"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "French Guiana",
      "iso": "GF",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^9[78]3\\d{2}$",
                "eg": "97300"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "French Polynesia",
      "iso": "PF",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Island"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "French Southern Territories",
      "iso": "TF",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Gabon",
      "iso": "GA",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Gambia",
      "iso": "GM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Georgia",
      "iso": "GE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Germany",
      "iso": "DE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{5}$",
                "eg": "60322"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Ghana",
      "iso": "GH",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Gibraltar",
      "iso": "GI",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Greece",
      "iso": "GR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{3} ?\\d{2}$",
                "eg": "151 24"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Greenland",
      "iso": "GL",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^39\\d{2}$",
                "eg": "3911"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Grenada",
      "iso": "GD",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Guadeloupe",
      "iso": "GP",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^9[78][01]\\d{2}$",
                "eg": "97100"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Guam",
      "iso": "GU",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            },
            {
              "postalcode": {
                "label": "ZIP code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Guatemala",
      "iso": "GT",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Guernsey",
      "iso": "GG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^GY\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}$",
                "eg": "GY1 1AA"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Guinea",
      "iso": "GN",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Guinea-Bissau",
      "iso": "GW",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Guyana",
      "iso": "GY",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Haiti",
      "iso": "HT",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Heard Island and McDonald Islands",
      "iso": "HM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Honduras",
      "iso": "HN",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Hong Kong S.A.R., China",
      "iso": "HK",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "District"
              }
            },
            {
              "administrativearea": {
                "label": "Area",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "Kowloon": "Kowloon"
                  },
                  {
                    "Hong Kong Island": "Hong Kong Island"
                  },
                  {
                    "New Territories": "New Territories"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Hungary",
      "iso": "HU",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Iceland",
      "iso": "IS",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "India",
      "iso": "IN",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "AP": "Andhra Pradesh"
                  },
                  {
                    "AR": "Arunachal Pradesh"
                  },
                  {
                    "AS": "Assam"
                  },
                  {
                    "BR": "Bihar"
                  },
                  {
                    "CT": "Chhattisgarh"
                  },
                  {
                    "GA": "Goa"
                  },
                  {
                    "GJ": "Gujarat"
                  },
                  {
                    "HR": "Haryana"
                  },
                  {
                    "HP": "Himachal Pradesh"
                  },
                  {
                    "JK": "Jammu and Kashmir"
                  },
                  {
                    "JH": "Jharkhand"
                  },
                  {
                    "KA": "Karnataka"
                  },
                  {
                    "KL": "Kerala"
                  },
                  {
                    "MP": "Madhya Pradesh"
                  },
                  {
                    "MH": "Maharashtra"
                  },
                  {
                    "MN": "Manipur"
                  },
                  {
                    "ML": "Meghalaya"
                  },
                  {
                    "MZ": "Mizoram"
                  },
                  {
                    "NL": "Nagaland"
                  },
                  {
                    "OR": "Odisha"
                  },
                  {
                    "PB": "Punjab"
                  },
                  {
                    "RJ": "Rajasthan"
                  },
                  {
                    "SK": "Sikkim"
                  },
                  {
                    "TN": "Tamil Nadu"
                  },
                  {
                    "TR": "Tripura"
                  },
                  {
                    "UP": "Uttar Pradesh"
                  },
                  {
                    "UT": "Uttarakhand"
                  },
                  {
                    "WB": "West Bengal"
                  },
                  {
                    "": "--"
                  },
                  {
                    "AN": "Andaman and Nicobar Islands"
                  },
                  {
                    "CH": "Chandigarh"
                  },
                  {
                    "DN": "Dadra and Nagar Haveli"
                  },
                  {
                    "DD": "Daman and Diu"
                  },
                  {
                    "LD": "Lakshadweep"
                  },
                  {
                    "DL": "National Capital Territory of Delhi"
                  },
                  {
                    "PY": "Puducherry"
                  }
                ]
              }
            },
            {
              "postalcode": {
                "label": "PIN code",
                "format": "^\\d{6}$",
                "eg": "110005"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Indonesia",
      "iso": "ID",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City/regency"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "administrativearea": {
                "label": "Province",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "AC": "Aceh"
                  },
                  {
                    "BA": "Bali"
                  },
                  {
                    "BB": "Bangka Belitung"
                  },
                  {
                    "BT": "Banten"
                  },
                  {
                    "BE": "Bengkulu"
                  },
                  {
                    "JK": "DKI Jakarta"
                  },
                  {
                    "YO": "D.I. Yogyakarta"
                  },
                  {
                    "GO": "Gorontalo"
                  },
                  {
                    "JA": "Jambi"
                  },
                  {
                    "JB": "Jawa Barat"
                  },
                  {
                    "JT": "Jawa Tengah"
                  },
                  {
                    "JI": "Jawa Timur"
                  },
                  {
                    "KB": "Kalimantan Barat"
                  },
                  {
                    "KS": "Kalimantan Selatan"
                  },
                  {
                    "KT": "Kalimantan Tengah"
                  },
                  {
                    "KI": "Kalimantan Timur"
                  },
                  {
                    "KR": "Kepulauan Riau"
                  },
                  {
                    "LA": "Lampung"
                  },
                  {
                    "MA": "Maluku"
                  },
                  {
                    "MU": "Maluku Utara"
                  },
                  {
                    "NB": "Nusa Tenggara Barat"
                  },
                  {
                    "NT": "Nusa Tenggara Timur"
                  },
                  {
                    "PA": "Papua"
                  },
                  {
                    "PB": "Papua Barat"
                  },
                  {
                    "RI": "Riau"
                  },
                  {
                    "SR": "Sulawesi Barat"
                  },
                  {
                    "SN": "Sulawesi Selatan"
                  },
                  {
                    "ST": "Sulawesi Tengah"
                  },
                  {
                    "SG": "Sulawesi Tenggara"
                  },
                  {
                    "SA": "Sulawesi Utara"
                  },
                  {
                    "SB": "Sumatera Barat"
                  },
                  {
                    "SS": "Sumatera Selatan"
                  },
                  {
                    "SU": "Sumatera Utara"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Iran",
      "iso": "IR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "dependent_localityname": {
                "label": "Neighborhood"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Iraq",
      "iso": "IQ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Ireland",
      "iso": "IE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "Town/city"
              }
            },
            {
              "administrativearea": {
                "label": "County",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "CW": "Co Carlow"
                  },
                  {
                    "CN": "Co Cavan"
                  },
                  {
                    "CE": "Co Clare"
                  },
                  {
                    "CO": "Co Cork"
                  },
                  {
                    "DL": "Co Donegal"
                  },
                  {
                    "D": "Co Dublin"
                  },
                  {
                    "D1": "Dublin 1"
                  },
                  {
                    "D2": "Dublin 2"
                  },
                  {
                    "D3": "Dublin 3"
                  },
                  {
                    "D4": "Dublin 4"
                  },
                  {
                    "D5": "Dublin 5"
                  },
                  {
                    "D6": "Dublin 6"
                  },
                  {
                    "D6W": "Dublin 6w"
                  },
                  {
                    "D7": "Dublin 7"
                  },
                  {
                    "D8": "Dublin 8"
                  },
                  {
                    "D9": "Dublin 9"
                  },
                  {
                    "D10": "Dublin 10"
                  },
                  {
                    "D11": "Dublin 11"
                  },
                  {
                    "D12": "Dublin 12"
                  },
                  {
                    "D13": "Dublin 13"
                  },
                  {
                    "D14": "Dublin 14"
                  },
                  {
                    "D15": "Dublin 15"
                  },
                  {
                    "D16": "Dublin 16"
                  },
                  {
                    "D17": "Dublin 17"
                  },
                  {
                    "D18": "Dublin 18"
                  },
                  {
                    "D19": "Dublin 19"
                  },
                  {
                    "D20": "Dublin 20"
                  },
                  {
                    "D21": "Dublin 21"
                  },
                  {
                    "D22": "Dublin 22"
                  },
                  {
                    "D23": "Dublin 23"
                  },
                  {
                    "D24": "Dublin 24"
                  },
                  {
                    "G": "Co Galway"
                  },
                  {
                    "KY": "Co Kerry"
                  },
                  {
                    "KE": "Co Kildare"
                  },
                  {
                    "KK": "Co Kilkenny"
                  },
                  {
                    "LS": "Co Laois"
                  },
                  {
                    "LM": "Co Leitrim"
                  },
                  {
                    "LK": "Co Limerick"
                  },
                  {
                    "LD": "Co Longford"
                  },
                  {
                    "LH": "Co Louth"
                  },
                  {
                    "MO": "Co Mayo"
                  },
                  {
                    "MH": "Co Meath"
                  },
                  {
                    "MN": "Co Monaghan"
                  },
                  {
                    "OY": "Co Offaly"
                  },
                  {
                    "RN": "Co Roscommon"
                  },
                  {
                    "SO": "Co Sligo"
                  },
                  {
                    "TA": "Co Tipperary"
                  },
                  {
                    "WD": "Co Waterford"
                  },
                  {
                    "WH": "Co Westmeath"
                  },
                  {
                    "WX": "Co Wexford"
                  },
                  {
                    "WW": "Co Wicklow"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Isle of Man",
      "iso": "IM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^IM\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}$",
                "eg": "IM99 1PS"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Israel",
      "iso": "IL",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Italy",
      "iso": "IT",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "AG": "Agrigento"
                  },
                  {
                    "AL": "Alessandria"
                  },
                  {
                    "AN": "Ancona"
                  },
                  {
                    "AO": "Valle d'Aosta/VallÈe d'Aoste"
                  },
                  {
                    "AP": "Ascoli Piceno"
                  },
                  {
                    "AQ": "L'Aquila"
                  },
                  {
                    "AR": "Arezzo"
                  },
                  {
                    "AT": "Asti"
                  },
                  {
                    "AV": "Avellino"
                  },
                  {
                    "BA": "Bari"
                  },
                  {
                    "BG": "Bergamo"
                  },
                  {
                    "BI": "Biella"
                  },
                  {
                    "BL": "Belluno"
                  },
                  {
                    "BN": "Benevento"
                  },
                  {
                    "BO": "Bologna"
                  },
                  {
                    "BR": "Brindisi"
                  },
                  {
                    "BS": "Brescia"
                  },
                  {
                    "BT": "Barletta-Andria-Trani"
                  },
                  {
                    "BZ": "Bolzano/Bozen"
                  },
                  {
                    "CA": "Cagliari"
                  },
                  {
                    "CB": "Campobasso"
                  },
                  {
                    "CE": "Caserta"
                  },
                  {
                    "CH": "Chieti"
                  },
                  {
                    "CI": "Carbonia-Iglesias"
                  },
                  {
                    "CL": "Caltanissetta"
                  },
                  {
                    "CN": "Cuneo"
                  },
                  {
                    "CO": "Como"
                  },
                  {
                    "CR": "Cremona"
                  },
                  {
                    "CS": "Cosenza"
                  },
                  {
                    "CT": "Catania"
                  },
                  {
                    "CZ": "Catanzaro"
                  },
                  {
                    "EN": "Enna"
                  },
                  {
                    "FC": "ForlÏ-Cesena"
                  },
                  {
                    "FE": "Ferrara"
                  },
                  {
                    "FG": "Foggia"
                  },
                  {
                    "FI": "Firenze"
                  },
                  {
                    "FM": "Fermo"
                  },
                  {
                    "FR": "Frosinone"
                  },
                  {
                    "GE": "Genova"
                  },
                  {
                    "GO": "Gorizia"
                  },
                  {
                    "GR": "Grosseto"
                  },
                  {
                    "IM": "Imperia"
                  },
                  {
                    "IS": "Isernia"
                  },
                  {
                    "KR": "Crotone"
                  },
                  {
                    "LC": "Lecco"
                  },
                  {
                    "LE": "Lecce"
                  },
                  {
                    "LI": "Livorno"
                  },
                  {
                    "LO": "Lodi"
                  },
                  {
                    "LT": "Latina"
                  },
                  {
                    "LU": "Lucca"
                  },
                  {
                    "MB": "Monza e Brianza"
                  },
                  {
                    "MC": "Macerata"
                  },
                  {
                    "ME": "Messina"
                  },
                  {
                    "MI": "Milano"
                  },
                  {
                    "MN": "Mantova"
                  },
                  {
                    "MO": "Modena"
                  },
                  {
                    "MS": "Massa-Carrara"
                  },
                  {
                    "MT": "Matera"
                  },
                  {
                    "NA": "Napoli"
                  },
                  {
                    "NO": "Novara"
                  },
                  {
                    "NU": "Nuoro"
                  },
                  {
                    "OG": "Ogliastra"
                  },
                  {
                    "OR": "Oristano"
                  },
                  {
                    "OT": "Olbia-Tempio"
                  },
                  {
                    "PA": "Palermo"
                  },
                  {
                    "PC": "Piacenza"
                  },
                  {
                    "PD": "Padova"
                  },
                  {
                    "PE": "Pescara"
                  },
                  {
                    "PG": "Perugia"
                  },
                  {
                    "PI": "Pisa"
                  },
                  {
                    "PN": "Pordenone"
                  },
                  {
                    "PO": "Prato"
                  },
                  {
                    "PR": "Parma"
                  },
                  {
                    "PT": "Pistoia"
                  },
                  {
                    "PU": "Pesaro e Urbino"
                  },
                  {
                    "PV": "Pavia"
                  },
                  {
                    "PZ": "Potenza"
                  },
                  {
                    "RA": "Ravenna"
                  },
                  {
                    "RC": "Reggio di Calabria"
                  },
                  {
                    "RE": "Reggio nell'Emilia"
                  },
                  {
                    "RG": "Ragusa"
                  },
                  {
                    "RI": "Rieti"
                  },
                  {
                    "RM": "Roma"
                  },
                  {
                    "RN": "Rimini"
                  },
                  {
                    "RO": "Rovigo"
                  },
                  {
                    "SA": "Salerno"
                  },
                  {
                    "SI": "Siena"
                  },
                  {
                    "SO": "Sondrio"
                  },
                  {
                    "SP": "La Spezia"
                  },
                  {
                    "SR": "Siracusa"
                  },
                  {
                    "SS": "Sassari"
                  },
                  {
                    "SV": "Savona"
                  },
                  {
                    "TA": "Taranto"
                  },
                  {
                    "TE": "Teramo"
                  },
                  {
                    "TN": "Trento"
                  },
                  {
                    "TO": "Torino"
                  },
                  {
                    "TP": "Trapani"
                  },
                  {
                    "TR": "Terni"
                  },
                  {
                    "TS": "Trieste"
                  },
                  {
                    "TV": "Treviso"
                  },
                  {
                    "UD": "Udine"
                  },
                  {
                    "VA": "Varese"
                  },
                  {
                    "VB": "Verbano-Cusio-Ossola"
                  },
                  {
                    "VC": "Vercelli"
                  },
                  {
                    "VE": "Venezia"
                  },
                  {
                    "VI": "Vicenza"
                  },
                  {
                    "VR": "Verona"
                  },
                  {
                    "VS": "Medio Campidano"
                  },
                  {
                    "VT": "Viterbo"
                  },
                  {
                    "VV": "Vibo Valentia"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Ivory Coast",
      "iso": "CI",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Jamaica",
      "iso": "JM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Parish",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "Clarendon": "Clarendon"
                  },
                  {
                    "Hanover": "Hanover"
                  },
                  {
                    "Kingston": "Kingston"
                  },
                  {
                    "Manchester": "Manchester"
                  },
                  {
                    "Portland": "Portland"
                  },
                  {
                    "St. Andrew": "St. Andrew"
                  },
                  {
                    "St. Ann": "St. Ann"
                  },
                  {
                    "St. Catherine": "St. Catherine"
                  },
                  {
                    "St. Elizabeth": "St. Elizabeth"
                  },
                  {
                    "St. James": "St. James"
                  },
                  {
                    "St. Mary": "St. Mary"
                  },
                  {
                    "St. Thomas": "St. Thomas"
                  },
                  {
                    "Trelawny": "Trelawny"
                  },
                  {
                    "Westmoreland": "Westmoreland"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Japan",
      "iso": "JP",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{3}-?\\d{4}$",
                "eg": "142-0062"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Prefecture",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "01": "Hokkaido"
                  },
                  {
                    "02": "Aomori"
                  },
                  {
                    "03": "Iwate"
                  },
                  {
                    "04": "Miyagi"
                  },
                  {
                    "05": "Akita"
                  },
                  {
                    "06": "Yamagata"
                  },
                  {
                    "07": "Fukushima"
                  },
                  {
                    "08": "Ibaraki"
                  },
                  {
                    "09": "Tochigi"
                  },
                  {
                    "10": "Gunma"
                  },
                  {
                    "11": "Saitama"
                  },
                  {
                    "12": "Chiba"
                  },
                  {
                    "13": "Tokyo"
                  },
                  {
                    "14": "Kanagawa"
                  },
                  {
                    "15": "Niigata"
                  },
                  {
                    "16": "Toyama"
                  },
                  {
                    "17": "Ishikawa"
                  },
                  {
                    "18": "Fukui"
                  },
                  {
                    "19": "Yamanashi"
                  },
                  {
                    "20": "Nagano"
                  },
                  {
                    "21": "Gifu"
                  },
                  {
                    "22": "Shizuoka"
                  },
                  {
                    "23": "Aichi"
                  },
                  {
                    "24": "Mie"
                  },
                  {
                    "25": "Shiga"
                  },
                  {
                    "26": "Kyoto"
                  },
                  {
                    "27": "Osaka"
                  },
                  {
                    "28": "Hyogo"
                  },
                  {
                    "29": "Nara"
                  },
                  {
                    "30": "Wakayama"
                  },
                  {
                    "31": "Tottori"
                  },
                  {
                    "32": "Shimane"
                  },
                  {
                    "33": "Okayama"
                  },
                  {
                    "34": "Hiroshima"
                  },
                  {
                    "35": "Yamaguchi"
                  },
                  {
                    "36": "Tokushima"
                  },
                  {
                    "37": "Kagawa"
                  },
                  {
                    "38": "Ehime"
                  },
                  {
                    "39": "Kochi"
                  },
                  {
                    "40": "Fukuoka"
                  },
                  {
                    "41": "Saga"
                  },
                  {
                    "42": "Nagasaki"
                  },
                  {
                    "43": "Kumamoto"
                  },
                  {
                    "44": "Oita"
                  },
                  {
                    "45": "Miyazaki"
                  },
                  {
                    "46": "Kagoshima"
                  },
                  {
                    "47": "Okinawa"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Jersey",
      "iso": "JE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^JE\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}$",
                "eg": "JE2 2BT"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Jordan",
      "iso": "JO",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Kazakhstan",
      "iso": "KZ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Kenya",
      "iso": "KE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Kiribati",
      "iso": "KI",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Island"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Kuwait",
      "iso": "KW",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Kyrgyzstan",
      "iso": "KG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Laos",
      "iso": "LA",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Latvia",
      "iso": "LV",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Lebanon",
      "iso": "LB",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Lesotho",
      "iso": "LS",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Liberia",
      "iso": "LR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Libya",
      "iso": "LY",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Liechtenstein",
      "iso": "LI",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^(948[5-9])|(949[0-7])$",
                "eg": "9496"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Lithuania",
      "iso": "LT",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Luxembourg",
      "iso": "LU",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{4}$",
                "eg": "4750"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Macao S.A.R., China",
      "iso": "MO",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Macedonia",
      "iso": "MK",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Madagascar",
      "iso": "MG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Malawi",
      "iso": "MW",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Malaysia",
      "iso": "MY",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "dependent_localityname": {
                "label": "Village/township"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "Johor": "Johor"
                  },
                  {
                    "Kedah": "Kedah"
                  },
                  {
                    "Kelantan": "Kelantan"
                  },
                  {
                    "Kuala Lumpur": "Kuala Lumpur"
                  },
                  {
                    "Labuan": "Labuan"
                  },
                  {
                    "Melaka": "Melaka"
                  },
                  {
                    "Negeri Sembilan": "Negeri Sembilan"
                  },
                  {
                    "Pahang": "Pahang"
                  },
                  {
                    "Perak": "Perak"
                  },
                  {
                    "Perlis": "Perlis"
                  },
                  {
                    "Pulau Pinang": "Pulau Pinang"
                  },
                  {
                    "Putrajaya": "Putrajaya"
                  },
                  {
                    "Sabah": "Sabah"
                  },
                  {
                    "Sarawak": "Sarawak"
                  },
                  {
                    "Selangor": "Selangor"
                  },
                  {
                    "Terengganu": "Terengganu"
                  }
                ]
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Maldives",
      "iso": "MV",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Mali",
      "iso": "ML",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Malta",
      "iso": "MT",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Marshall Islands",
      "iso": "MH",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            },
            {
              "postalcode": {
                "label": "ZIP code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Martinique",
      "iso": "MQ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^9[78]2\\d{2}$",
                "eg": "97220"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Mauritania",
      "iso": "MR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Mauritius",
      "iso": "MU",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Mayotte",
      "iso": "YT",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^976\\d{2}$",
                "eg": "97600"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Mexico",
      "iso": "MX",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "dependent_localityname": {
                "label": "Neighborhood"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "AGU": "Aguascalientes"
                  },
                  {
                    "BCN": "Baja California"
                  },
                  {
                    "BCS": "Baja California Sur"
                  },
                  {
                    "CAM": "Campeche"
                  },
                  {
                    "COA": "Coahuila"
                  },
                  {
                    "COL": "Colima"
                  },
                  {
                    "CHP": "Chiapas"
                  },
                  {
                    "CHH": "Chihuahua"
                  },
                  {
                    "DIF": "Distrito Federal"
                  },
                  {
                    "DUG": "Durango"
                  },
                  {
                    "MEX": "Estado de México"
                  },
                  {
                    "GUA": "Guanajuato"
                  },
                  {
                    "GRO": "Guerrero"
                  },
                  {
                    "HID": "Hidalgo"
                  },
                  {
                    "JAL": "Jalisco"
                  },
                  {
                    "MIC": "Michoacán"
                  },
                  {
                    "MOR": "Morelos"
                  },
                  {
                    "NAY": "Nayarit"
                  },
                  {
                    "NLE": "Nuevo León"
                  },
                  {
                    "OAX": "Oaxaca"
                  },
                  {
                    "PUE": "Puebla"
                  },
                  {
                    "QUE": "Queretaro"
                  },
                  {
                    "ROO": "Quintana Roo"
                  },
                  {
                    "SLP": "San Luis Potosí"
                  },
                  {
                    "SIN": "Sinaloa"
                  },
                  {
                    "SON": "Sonora"
                  },
                  {
                    "TAB": "Tabasco"
                  },
                  {
                    "TAM": "Tamaulipas"
                  },
                  {
                    "TLA": "Tlaxcala"
                  },
                  {
                    "VER": "Veracruz"
                  },
                  {
                    "YUC": "Yucatán"
                  },
                  {
                    "ZAC": "Zacatecas"
                  }
                ]
              }
            },
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{5}$",
                "eg": "03400"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Micronesia",
      "iso": "FM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            },
            {
              "postalcode": {
                "label": "ZIP code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Moldova",
      "iso": "MD",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Monaco",
      "iso": "MC",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Mongolia",
      "iso": "MN",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            },            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Montenegro",
      "iso": "ME",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Montserrat",
      "iso": "MS",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Morocco",
      "iso": "MA",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Mozambique",
      "iso": "MZ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Myanmar",
      "iso": "MM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Namibia",
      "iso": "NA",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Nauru",
      "iso": "NR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "administrativearea": {
                "label": "District"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Nepal",
      "iso": "NP",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Netherlands",
      "iso": "NL",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{4}[ ]?[A-Z]{2}$",
                "eg": "2585 GJ"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Netherlands Antilles",
      "iso": "AN",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "New Caledonia",
      "iso": "NC",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^988\\d{2}$",
                "eg": "98814"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "New Zealand",
      "iso": "NZ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "Town/city"
              }
            },
            {
              "administrativearea": {
                "label": "Region",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "AUK": "Auckland"
                  },
                  {
                    "BOP": "Bay of Plenty"
                  },
                  {
                    "CAN": "Canterbury"
                  },
                  {
                    "HKB": "Hawke's Bay"
                  },
                  {
                    "MWT": "Manawatu-Wanganui"
                  },
                  {
                    "NTL": "Northland"
                  },
                  {
                    "OTA": "Otago"
                  },
                  {
                    "STL": "Southland"
                  },
                  {
                    "TKI": "Taranaki"
                  },
                  {
                    "WKO": "Waikato"
                  },
                  {
                    "WGN": "Wellington"
                  },
                  {
                    "WTC": "West Coast"
                  },
                  {
                    "GIS": "Gisborne District"
                  },
                  {
                    "MBH": "Marlborough District"
                  },
                  {
                    "NSN": "Nelson"
                  },
                  {
                    "TAS": "Tasman District"
                  },
                  {
                    "CIT": "Chatham Islands Territory"
                  }
                ]
              }
            },
            {
              "postalcode": {
                "label": "Postcode"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Nicaragua",
      "iso": "NI",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Department"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Niger",
      "iso": "NE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Nigeria",
      "iso": "NG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Niue",
      "iso": "NU",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Norfolk Island",
      "iso": "NF",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Northern Mariana Islands",
      "iso": "MP",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            },
            {
              "postalcode": {
                "label": "ZIP code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "North Korea",
      "iso": "KP",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Norway",
      "iso": "NO",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{4}$",
                "eg": "0025"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Oman",
      "iso": "OM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Pakistan",
      "iso": "PK",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Palau",
      "iso": "PW",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            },
            {
              "postalcode": {
                "label": "ZIP code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Palestinian Territory",
      "iso": "PS",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Panama",
      "iso": "PA",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Papua New Guinea",
      "iso": "PG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Paraguay",
      "iso": "PY",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Peru",
      "iso": "PE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "administrativearea": {
                "label": "Region",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "AMA": "Amazonas"
                  },
                  {
                    "ANC": "Ancash"
                  },
                  {
                    "APU": "Apurimac"
                  },
                  {
                    "ARE": "Arequipa"
                  },
                  {
                    "AYA": "Ayacucho"
                  },
                  {
                    "CAJ": "Cajamarca"
                  },
                  {
                    "CAL": "Callao"
                  },
                  {
                    "CUS": "Cusco"
                  },
                  {
                    "HUV": "Huancavelica"
                  },
                  {
                    "HUC": "Huanuco"
                  },
                  {
                    "ICA": "Ica"
                  },
                  {
                    "JUN": "Junin"
                  },
                  {
                    "LAL": "La Libertad"
                  },
                  {
                    "LAM": "Lambayeque"
                  },
                  {
                    "LIM": "Lima"
                  },
                  {
                    "LOR": "Loreto"
                  },
                  {
                    "MDD": "Madre de Dios"
                  },
                  {
                    "MOQ": "Moquegua"
                  },
                  {
                    "PAS": "Pasco"
                  },
                  {
                    "PIU": "Piura"
                  },
                  {
                    "PUN": "Puno"
                  },
                  {
                    "SAM": "San Martin"
                  },
                  {
                    "TAC": "Tacna"
                  },
                  {
                    "TUM": "Tumbes"
                  },
                  {
                    "UCA": "Ucayali"
                  }
                ]
              }
            },
            {
              "localityname": {
                "label": "District"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Philippines",
      "iso": "PH",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "dependent_localityname": {
                "label": "Suburb"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Pitcairn",
      "iso": "PN",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Poland",
      "iso": "PL",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{2}-?\\d{3}$",
                "eg": "00-950"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Portugal",
      "iso": "PT",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{4}-?\\d{3}$",
                "eg": "2725-079"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Puerto Rico",
      "iso": "PR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "ZIP code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Qatar",
      "iso": "QA",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Reunion",
      "iso": "RE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^9[78]4\\d{2}$",
                "eg": "97400"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Romania",
      "iso": "RO",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Russia",
      "iso": "RU",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "MOW": "Moskva"
                  },
                  {
                    "SPE": "Sankt-Peterburg"
                  },
                  {
                    "AD": "Adygeya, Respublika"
                  },
                  {
                    "AL": "Altay, Respublika"
                  },
                  {
                    "BA": "Bashkortostan, Respublika"
                  },
                  {
                    "BU": "Buryatiya, Respublika"
                  },
                  {
                    "CE": "Chechenskaya Respublika"
                  },
                  {
                    "CU": "Chuvashskaya Respublika"
                  },
                  {
                    "DA": "Dagestan, Respublika"
                  },
                  {
                    "IN": "Ingushetiya, Respublika"
                  },
                  {
                    "KB": "Kabardino-Balkarskaya Respublika"
                  },
                  {
                    "KL": "Kalmykiya, Respublika"
                  },
                  {
                    "KC": "Karachayevo-Cherkesskaya Respublika"
                  },
                  {
                    "KR": "Kareliya, Respublika"
                  },
                  {
                    "KK": "Khakasiya, Respublika"
                  },
                  {
                    "KO": "Komi, Respublika"
                  },
                  {
                    "ME": "Mariy El, Respublika"
                  },
                  {
                    "MO": "Mordoviya, Respublika"
                  },
                  {
                    "SA": "Sakha, Respublika [Yakutiya]"
                  },
                  {
                    "SE": "Severnaya Osetiya-Alaniya, Respublika"
                  },
                  {
                    "TA": "Tatarstan, Respublika"
                  },
                  {
                    "TY": "Tyva, Respublika [Tuva]"
                  },
                  {
                    "UD": "Udmurtskaya Respublika"
                  },
                  {
                    "ALT": "Altayskiy kray"
                  },
                  {
                    "KAM": "Kamchatskiy kray"
                  },
                  {
                    "KHA": "Khabarovskiy kray"
                  },
                  {
                    "KDA": "Krasnodarskiy kray"
                  },
                  {
                    "KYA": "Krasnoyarskiy kray"
                  },
                  {
                    "PER": "Permskiy kray"
                  },
                  {
                    "PRI": "Primorskiy kray"
                  },
                  {
                    "STA": "Stavropolskiy kray"
                  },
                  {
                    "ZAB": "Zabaykalskiy kray"
                  },
                  {
                    "AMU": "Amurskaya oblast"
                  },
                  {
                    "ARK": "Arkhangelskaya oblast"
                  },
                  {
                    "AST": "Astrakhanskaya oblast"
                  },
                  {
                    "BEL": "Belgorodskaya oblast"
                  },
                  {
                    "BRY": "Bryanskaya oblast"
                  },
                  {
                    "CHE": "Chelyabinskaya oblast"
                  },
                  {
                    "IRK": "Irkutskaya oblast"
                  },
                  {
                    "IVA": "Ivanovskaya oblast"
                  },
                  {
                    "KGD": "Kaliningradskaya oblast"
                  },
                  {
                    "KLU": "Kaluzhskaya oblast"
                  },
                  {
                    "KEM": "Kemerovskaya oblast"
                  },
                  {
                    "KIR": "Kirovskaya oblast"
                  },
                  {
                    "KOS": "Kostromskaya oblast"
                  },
                  {
                    "KGN": "Kurganskaya oblast"
                  },
                  {
                    "KRS": "Kurskaya oblast"
                  },
                  {
                    "LEN": "Leningradskaya oblast"
                  },
                  {
                    "LIP": "Lipetskaya oblast"
                  },
                  {
                    "MAG": "Magadanskaya oblast"
                  },
                  {
                    "MOS": "Moskovskaya oblast"
                  },
                  {
                    "MUR": "Murmanskaya oblast"
                  },
                  {
                    "NIZ": "Nizhegorodskaya oblast"
                  },
                  {
                    "NGR": "Novgorodskaya oblast"
                  },
                  {
                    "NVS": "Novosibirskaya oblast"
                  },
                  {
                    "OMS": "Omskaya oblast"
                  },
                  {
                    "ORE": "Orenburgskaya oblast"
                  },
                  {
                    "ORL": "Orlovskaya oblast"
                  },
                  {
                    "PNZ": "Penzenskaya oblast"
                  },
                  {
                    "PSK": "Pskovskaya oblast"
                  },
                  {
                    "ROS": "Rostovskaya oblast"
                  },
                  {
                    "RYA": "Ryazanskaya oblast"
                  },
                  {
                    "SAK": "Sakhalinskaya oblast"
                  },
                  {
                    "SAM": "Samarskaya oblast"
                  },
                  {
                    "SAR": "Saratovskaya oblast"
                  },
                  {
                    "SMO": "Smolenskaya oblast"
                  },
                  {
                    "SVE": "Sverdlovskaya oblast"
                  },
                  {
                    "TAM": "Tambovskaya oblast"
                  },
                  {
                    "TOM": "Tomskaya oblast"
                  },
                  {
                    "TUL": "Tulskaya oblast"
                  },
                  {
                    "TVE": "Tverskaya oblast"
                  },
                  {
                    "TYU": "Tyumenskaya oblast"
                  },
                  {
                    "ULY": "Ulyanovskaya oblast"
                  },
                  {
                    "VLA": "Vladimirskaya oblast"
                  },
                  {
                    "VGG": "Volgogradskaya oblast"
                  },
                  {
                    "VLG": "Vologodskaya oblast"
                  },
                  {
                    "VOR": "Voronezhskaya oblast"
                  },
                  {
                    "YAR": "Yaroslavskaya oblast"
                  },
                  {
                    "YEV": "Yevreyskaya avtonomnaya oblast"
                  },
                  {
                    "CHU": "Chukotskiy avtonomnyy okrug"
                  },
                  {
                    "KHM": "Khanty-Mansiyskiy avtonomnyy okrug-Yugra"
                  },
                  {
                    "NEN": "Nenetskiy avtonomnyy okrug"
                  },
                  {
                    "YAN": "Yamalo-Nenetskiy avtonomnyy okrug"
                  }
                ]
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Rwanda",
      "iso": "RW",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Saint BarthÈlemy",
      "iso": "BL",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^9[78][01]\\d{2}$",
                "eg": "97100"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Saint Helena",
      "iso": "SH",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^(ASCN|STHL)[ ]?1ZZ$",
                "eg": "STHL 1ZZ"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Saint Kitts and Nevis",
      "iso": "KN",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Island"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Saint Lucia",
      "iso": "LC",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Saint Martin (French part)",
      "iso": "MF",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^9[78][01]\\d{2}$",
                "eg": "97100"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Saint Pierre and Miquelon",
      "iso": "PM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^9[78]5\\d{2}$",
                "eg": "97500"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Saint Vincent and the Grenadines",
      "iso": "VC",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Samoa",
      "iso": "WS",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "San Marino",
      "iso": "SM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Sao Tome and Principe",
      "iso": "ST",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Saudi Arabia",
      "iso": "SA",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Senegal",
      "iso": "SN",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Serbia",
      "iso": "RS",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Seychelles",
      "iso": "SC",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Island"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Sierra Leone",
      "iso": "SL",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Singapore",
      "iso": "SG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{6}$",
                "eg": "238880"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Slovakia",
      "iso": "SK",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Slovenia",
      "iso": "SI",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Solomon Islands",
      "iso": "SB",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Somalia",
      "iso": "SO",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "South Africa",
      "iso": "ZA",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "Eastern Cape": "Eastern Cape"
                  },
                  {
                    "Free State": "Free State"
                  },
                  {
                    "Gauteng": "Gauteng"
                  },
                  {
                    "KwaZulu-Natal": "KwaZulu-Natal"
                  },
                  {
                    "Limpopo": "Limpopo"
                  },
                  {
                    "Mpumalanga": "Mpumalanga"
                  },
                  {
                    "North West": "North West"
                  },
                  {
                    "Northern Cape": "Northern Cape"
                  },
                  {
                    "Western Cape": "Western Cape"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "South Georgia and the South Sandwich Islands",
      "iso": "GS",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "South Korea",
      "iso": "KR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "dependent_localityname": {
                "label": "District"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "Seoul": "Seoul"
                  },
                  {
                    "Busan": "Busan"
                  },
                  {
                    "Daegu": "Daegu"
                  },
                  {
                    "Daejeon": "Daejeon"
                  },
                  {
                    "Gwangju": "Gwangju"
                  },
                  {
                    "Incheon": "Incheon"
                  },
                  {
                    "Ulsan": "Ulsan"
                  },
                  {
                    "Chungcheongbuk-do": "Chungcheongbuk-do"
                  },
                  {
                    "Chungcheongnam-do": "Chungcheongnam-do"
                  },
                  {
                    "Gangwon-do": "Gangwon-do"
                  },
                  {
                    "Gyeonggi-do": "Gyeonggi-do"
                  },
                  {
                    "Gyeongsangbuk-do": "Gyeongsangbuk-do"
                  },
                  {
                    "Gyeongsangnam-do": "Gyeongsangnam-do"
                  },
                  {
                    "Jeju-do": "Jeju-do"
                  },
                  {
                    "Jeollabuk-do": "Jeollabuk-do"
                  },
                  {
                    "Jeollanam-do": "Jeollanam-do"
                  },
                  {
                    "Sejong": "Sejong"
                  }
                ]
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Spain",
      "iso": "ES",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "C": "A Coruña"
                  },
                  {
                    "VI": "Alava"
                  },
                  {
                    "AB": "Albacete"
                  },
                  {
                    "A": "Alicante"
                  },
                  {
                    "AL": "Almería"
                  },
                  {
                    "O": "Asturias"
                  },
                  {
                    "AV": "Ávila"
                  },
                  {
                    "BA": "Badajoz"
                  },
                  {
                    "PM": "Baleares"
                  },
                  {
                    "B": "Barcelona"
                  },
                  {
                    "BU": "Burgos"
                  },
                  {
                    "CC": "Cáceres"
                  },
                  {
                    "CA": "Cádiz"
                  },
                  {
                    "S": "Cantabria"
                  },
                  {
                    "CS": "Castellón"
                  },
                  {
                    "CE": "Ceuta"
                  },
                  {
                    "CR": "Ciudad Real"
                  },
                  {
                    "CO": "Córdoba"
                  },
                  {
                    "CU": "Cuenca"
                  },
                  {
                    "GI": "Gerona"
                  },
                  {
                    "GR": "Granada"
                  },
                  {
                    "GU": "Guadalajara"
                  },
                  {
                    "SS": "Guipúzcoa"
                  },
                  {
                    "H": "Huelva"
                  },
                  {
                    "HU": "Huesca"
                  },
                  {
                    "J": "Jaén"
                  },
                  {
                    "LO": "La Rioja"
                  },
                  {
                    "GC": "Las Palmas"
                  },
                  {
                    "LE": "León"
                  },
                  {
                    "L": "Lérida"
                  },
                  {
                    "LU": "Lugo"
                  },
                  {
                    "M": "Madrid"
                  },
                  {
                    "MA": "Málaga"
                  },
                  {
                    "ML": "Melilla"
                  },
                  {
                    "MU": "Murcia"
                  },
                  {
                    "NA": "Navarra"
                  },
                  {
                    "OR": "Ourense"
                  },
                  {
                    "P": "Palencia"
                  },
                  {
                    "PO": "Pontevedra"
                  },
                  {
                    "SA": "Salamanca"
                  },
                  {
                    "TF": "Santa Cruz de Tenerife"
                  },
                  {
                    "SG": "Segovia"
                  },
                  {
                    "SE": "Sevilla"
                  },
                  {
                    "SO": "Soria"
                  },
                  {
                    "T": "Tarragona"
                  },
                  {
                    "TE": "Teruel"
                  },
                  {
                    "TO": "Toledo"
                  },
                  {
                    "V": "Valencia"
                  },
                  {
                    "VA": "Valladolid"
                  },
                  {
                    "BI": "Vizcaya"
                  },
                  {
                    "ZA": "Zamora"
                  },
                  {
                    "Z": "Zaragoza"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Sri Lanka",
      "iso": "LK",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Sudan",
      "iso": "SD",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Suriname",
      "iso": "SR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Svalbard and Jan Mayen",
      "iso": "SJ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{4}$",
                "eg": "9170"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Swaziland",
      "iso": "SZ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Sweden",
      "iso": "SE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{3}[ ]?\\d{2}$",
                "eg": "11455"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Switzerland",
      "iso": "CH",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{4}$",
                "eg": "2544"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Syria",
      "iso": "SY",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Taiwan",
      "iso": "TW",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^\\d{3}(\\d{2})?$",
                "eg": "100"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "TXG": "Taichung City"
                  },
                  {
                    "TPE": "Taipei City"
                  },
                  {
                    "TTT": "Taitung County"
                  },
                  {
                    "TNN": "Tainan City"
                  },
                  {
                    "ILA": "Yilan County"
                  },
                  {
                    "HUA": "Hualien County"
                  },
                  {
                    "Kinmen County": "Kinmen County"
                  },
                  {
                    "NAN": "Nantou County"
                  },
                  {
                    "PIF": "Pingtung County"
                  },
                  {
                    "MIA": "Miaoli County"
                  },
                  {
                    "TAO": "Taoyuan County"
                  },
                  {
                    "KHH": "Kaohsiung City"
                  },
                  {
                    "KEE": "Keelung City"
                  },
                  {
                    "Lienchiang County": "Lienchiang County"
                  },
                  {
                    "YUN": "Yunlin County"
                  },
                  {
                    "TPQ": "New Taipei City"
                  },
                  {
                    "HSZ": "Hsinchu City"
                  },
                  {
                    "HSQ": "Hsinchu County"
                  },
                  {
                    "CYI": "Chiayi City"
                  },
                  {
                    "CYQ": "Chiayi County"
                  },
                  {
                    "CHA": "Changhua County"
                  },
                  {
                    "PEN": "Penghu County"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Tajikistan",
      "iso": "TJ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Tanzania",
      "iso": "TZ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Thailand",
      "iso": "TH",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "dependent_localityname": {
                "label": "Suburb"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Province"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Timor-Leste",
      "iso": "TL",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Togo",
      "iso": "TG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Tokelau",
      "iso": "TK",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Tonga",
      "iso": "TO",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Trinidad and Tobago",
      "iso": "TT",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Tunisia",
      "iso": "TN",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Turkey",
      "iso": "TR",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "administrativearea": {
                "label": "Province",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "Adana": "Adana"
                  },
                  {
                    "Adıyaman": "Adıyaman"
                  },
                  {
                    "Afyon": "Afyon"
                  },
                  {
                    "Ağrı": "Ağrı"
                  },
                  {
                    "Aksaray": "Aksaray"
                  },
                  {
                    "Amasya": "Amasya"
                  },
                  {
                    "Ankara": "Ankara"
                  },
                  {
                    "Antalya": "Antalya"
                  },
                  {
                    "Ardahan": "Ardahan"
                  },
                  {
                    "Artvin": "Artvin"
                  },
                  {
                    "Aydın": "Aydın"
                  },
                  {
                    "Balıkesir": "Balıkesir"
                  },
                  {
                    "Bartın": "Bartın"
                  },
                  {
                    "Batman": "Batman"
                  },
                  {
                    "Bayburt": "Bayburt"
                  },
                  {
                    "Bilecik": "Bilecik"
                  },
                  {
                    "Bingöl": "Bingöl"
                  },
                  {
                    "Bitlis": "Bitlis"
                  },
                  {
                    "Bolu": "Bolu"
                  },
                  {
                    "Burdur": "Burdur"
                  },
                  {
                    "Bursa": "Bursa"
                  },
                  {
                    "Çanakkale": "Çanakkale"
                  },
                  {
                    "Çankırı": "Çankırı"
                  },
                  {
                    "Çorum": "Çorum"
                  },
                  {
                    "Denizli": "Denizli"
                  },
                  {
                    "Diyarbakır": "Diyarbakır"
                  },
                  {
                    "Düzce": "Düzce"
                  },
                  {
                    "Edirne": "Edirne"
                  },
                  {
                    "Elazığ": "Elazığ"
                  },
                  {
                    "Erzincan": "Erzincan"
                  },
                  {
                    "Erzurum": "Erzurum"
                  },
                  {
                    "Eskişehir": "Eskişehir"
                  },
                  {
                    "Gaziantep": "Gaziantep"
                  },
                  {
                    "Giresun": "Giresun"
                  },
                  {
                    "Gümüşhane": "Gümüşhane"
                  },
                  {
                    "Hakkari": "Hakkari"
                  },
                  {
                    "Hatay": "Hatay"
                  },
                  {
                    "Iğdır": "Iğdır"
                  },
                  {
                    "Isparta": "Isparta"
                  },
                  {
                    "İstanbul": "İstanbul"
                  },
                  {
                    "İzmir": "İzmir"
                  },
                  {
                    "Kahramanmaraş": "Kahramanmaraş"
                  },
                  {
                    "Karabük": "Karabük"
                  },
                  {
                    "Karaman": "Karaman"
                  },
                  {
                    "Kars": "Kars"
                  },
                  {
                    "Kastamonu": "Kastamonu"
                  },
                  {
                    "Kayseri": "Kayseri"
                  },
                  {
                    "Kırıkkale": "Kırıkkale"
                  },
                  {
                    "Kırklareli": "Kırklareli"
                  },
                  {
                    "Kırşehir": "Kırşehir"
                  },
                  {
                    "Kilis": "Kilis"
                  },
                  {
                    "Kocaeli": "Kocaeli"
                  },
                  {
                    "Konya": "Konya"
                  },
                  {
                    "Kütahya": "Kütahya"
                  },
                  {
                    "Malatya": "Malatya"
                  },
                  {
                    "Manisa": "Manisa"
                  },
                  {
                    "Mardin": "Mardin"
                  },
                  {
                    "Mersin": "Mersin"
                  },
                  {
                    "Muğla": "Muğla"
                  },
                  {
                    "Muş": "Muş"
                  },
                  {
                    "Nevşehir": "Nevşehir"
                  },
                  {
                    "Niğde": "Niğde"
                  },
                  {
                    "Ordu": "Ordu"
                  },
                  {
                    "Osmaniye": "Osmaniye"
                  },
                  {
                    "Rize": "Rize"
                  },
                  {
                    "Sakarya": "Sakarya"
                  },
                  {
                    "Samsun": "Samsun"
                  },
                  {
                    "Siirt": "Siirt"
                  },
                  {
                    "Sinop": "Sinop"
                  },
                  {
                    "Sivas": "Sivas"
                  },
                  {
                    "Şanlıurfa": "Şanlıurfa"
                  },
                  {
                    "Şırnak": "Şırnak"
                  },
                  {
                    "Tekirdağ": "Tekirdağ"
                  },
                  {
                    "Tokat": "Tokat"
                  },
                  {
                    "Trabzon": "Trabzon"
                  },
                  {
                    "Tunceli": "Tunceli"
                  },
                  {
                    "Uşak": "Uşak"
                  },
                  {
                    "Van": "Van"
                  },
                  {
                    "Yalova": "Yalova"
                  },
                  {
                    "Yozgat": "Yozgat"
                  },
                  {
                    "Zonguldak": "Zonguldak"
                  }
                ]
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Turkmenistan",
      "iso": "TM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Turks and Caicos Islands",
      "iso": "TC",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Tuvalu",
      "iso": "TV",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Island",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "Funafuti": "Funafuti"
                  },
                  {
                    "Funafuti Centre": "Funafuti Centre"
                  },
                  {
                    "Nanumaga": "Nanumaga"
                  },
                  {
                    "Nanumea": "Nanumea"
                  },
                  {
                    "Niulakita": "Niulakita"
                  },
                  {
                    "Niutao": "Niutao"
                  },
                  {
                    "Nui": "Nui"
                  },
                  {
                    "Nukulaelae": "Nukulaelae"
                  },
                  {
                    "Vaitupu": "Vaitupu"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "U.S. Virgin Islands",
      "iso": "VI",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Uganda",
      "iso": "UG",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Ukraine",
      "iso": "UA",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "Region"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "United Arab Emirates",
      "iso": "AE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "administrativearea": {
                "label": "Emirate",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "AZ": "Abu Dhabi"
                  },
                  {
                    "FU": "Fujairah"
                  },
                  {
                    "UQ": "Umm al-Quwain"
                  },
                  {
                    "SH": "Sharjah"
                  },
                  {
                    "DU": "Dubai"
                  },
                  {
                    "RK": "Ras al-Khaimah"
                  },
                  {
                    "AJ": "Ajmān"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "United Kingdom",
      "iso": "GB",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "Town/city"
              }
            },
            {
              "administrativearea": {
                "label": "County"
              }
            },
            {
              "postalcode": {
                "label": "Postcode",
                "format": "^GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|BX|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\\d[\\dA-Z]?[ ]?\\d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?\\d{1,4}$",
                "eg": "SE1 0SU"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "United States",
      "iso": "US",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "AL": "Alabama"
                  },
                  {
                    "AK": "Alaska"
                  },
                  {
                    "AZ": "Arizona"
                  },
                  {
                    "AR": "Arkansas"
                  },
                  {
                    "CA": "California"
                  },
                  {
                    "CO": "Colorado"
                  },
                  {
                    "CT": "Connecticut"
                  },
                  {
                    "DE": "Delaware"
                  },
                  {
                    "DC": "District Of Columbia"
                  },
                  {
                    "FL": "Florida"
                  },
                  {
                    "GA": "Georgia"
                  },
                  {
                    "HI": "Hawaii"
                  },
                  {
                    "ID": "Idaho"
                  },
                  {
                    "IL": "Illinois"
                  },
                  {
                    "IN": "Indiana"
                  },
                  {
                    "IA": "Iowa"
                  },
                  {
                    "KS": "Kansas"
                  },
                  {
                    "KY": "Kentucky"
                  },
                  {
                    "LA": "Louisiana"
                  },
                  {
                    "ME": "Maine"
                  },
                  {
                    "MD": "Maryland"
                  },
                  {
                    "MA": "Massachusetts"
                  },
                  {
                    "MI": "Michigan"
                  },
                  {
                    "MN": "Minnesota"
                  },
                  {
                    "MS": "Mississippi"
                  },
                  {
                    "MO": "Missouri"
                  },
                  {
                    "MT": "Montana"
                  },
                  {
                    "NE": "Nebraska"
                  },
                  {
                    "NV": "Nevada"
                  },
                  {
                    "NH": "New Hampshire"
                  },
                  {
                    "NJ": "New Jersey"
                  },
                  {
                    "NM": "New Mexico"
                  },
                  {
                    "NY": "New York"
                  },
                  {
                    "NC": "North Carolina"
                  },
                  {
                    "ND": "North Dakota"
                  },
                  {
                    "OH": "Ohio"
                  },
                  {
                    "OK": "Oklahoma"
                  },
                  {
                    "OR": "Oregon"
                  },
                  {
                    "PA": "Pennsylvania"
                  },
                  {
                    "RI": "Rhode Island"
                  },
                  {
                    "SC": "South Carolina"
                  },
                  {
                    "SD": "South Dakota"
                  },
                  {
                    "TN": "Tennessee"
                  },
                  {
                    "TX": "Texas"
                  },
                  {
                    "UT": "Utah"
                  },
                  {
                    "VT": "Vermont"
                  },
                  {
                    "VA": "Virginia"
                  },
                  {
                    "WA": "Washington"
                  },
                  {
                    "WV": "West Virginia"
                  },
                  {
                    "WI": "Wisconsin"
                  },
                  {
                    "WY": "Wyoming"
                  },
                  {
                    "": "--"
                  },
                  {
                    "AA": "Armed Forces (Americas)"
                  },
                  {
                    "AE": "Armed Forces (Europe, Canada, Middle East, Africa)"
                  },
                  {
                    "AP": "Armed Forces (Pacific)"
                  },
                  {
                    "AS": "American Samoa"
                  },
                  {
                    "FM": "Federated States of Micronesia"
                  },
                  {
                    "GU": "Guam"
                  },
                  {
                    "MH": "Marshall Islands"
                  },
                  {
                    "MP": "Northern Mariana Islands"
                  },
                  {
                    "PW": "Palau"
                  },
                  {
                    "PR": "Puerto Rico"
                  },
                  {
                    "VI": "Virgin Islands"
                  }
                ]
              }
            },
            {
              "postalcode": {
                "label": "ZIP code",
                "format": "^\\d{5}(?:[-\\s]\\d{4})?$",
                "eg": "98103"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "United States Minor Outlying Islands",
      "iso": "UM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            },
            {
              "postalcode": {
                "label": "ZIP code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Uruguay",
      "iso": "UY",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Uzbekistan",
      "iso": "UZ",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Vanuatu",
      "iso": "VU",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Vatican",
      "iso": "VA",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Venezuela",
      "iso": "VE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State",
                "options": [
                  {
                    "": "--"
                  },
                  {
                    "Z": "Amazonas"
                  },
                  {
                    "B": "Anzoátegui"
                  },
                  {
                    "C": "Apure"
                  },
                  {
                    "D": "Aragua"
                  },
                  {
                    "E": "Barinas"
                  },
                  {
                    "F": "Bolívar"
                  },
                  {
                    "G": "Carabobo"
                  },
                  {
                    "H": "Cojedes"
                  },
                  {
                    "Y": "Delta Amacuro"
                  },
                  {
                    "W": "Dependencias Federales"
                  },
                  {
                    "A": "Distrito Federal"
                  },
                  {
                    "I": "Falcón"
                  },
                  {
                    "J": "Guárico"
                  },
                  {
                    "K": "Lara"
                  },
                  {
                    "L": "Mérida"
                  },
                  {
                    "M": "Miranda"
                  },
                  {
                    "N": "Monagas"
                  },
                  {
                    "O": "Nueva Esparta"
                  },
                  {
                    "P": "Portuguesa"
                  },
                  {
                    "R": "Sucre"
                  },
                  {
                    "S": "Táchira"
                  },
                  {
                    "T": "Trujillo"
                  },
                  {
                    "X": "Vargas"
                  },
                  {
                    "U": "Yaracuy"
                  },
                  {
                    "V": "Zulia"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Vietnam",
      "iso": "VN",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            },
            {
              "administrativearea": {
                "label": "State"
              }
            },
            {
              "postalcode": {
                "label": "Postal code"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Wallis and Futuna",
      "iso": "WF",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code",
                "format": "^986\\d{2}$",
                "eg": "98600"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Western Sahara",
      "iso": "EH",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Yemen",
      "iso": "YE",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Zambia",
      "iso": "ZM",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "postalcode": {
                "label": "Postal code"
              }
            },
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    },
    {
      "label": "Zimbabwe",
      "iso": "ZW",
      "fields": [
        {
          "thoroughfare": {
            "label": "Address 1"
          }
        },
        {
          "premise": {
            "label": "Address 2"
          }
        },
        {
          "locality": [
            {
              "localityname": {
                "label": "City"
              }
            }
          ]
        }
      ]
    }
  ]
}
        this.$country = $('#quote-country');
        this.$addressRender = $('#address-render');
        this.$copyInput = $('#copy-input');
        this.$shippingContainer = $('#quote-shipping-container')
        this.shippingValues = ['quote-state', 'quote-zipcode', 'quote-city', 'quote-address-1', 'quote-address-2']
    }


    static get bodyClass () {
        return "shop-page-quote-request"
    }

    init() {
        this.fetchCart()
        this.countrySelect()
        this.copyInputValues()
    }

    fetchCart() {
      jQuery.getJSON('/cart.js', function(cart) { // now have access to Shopify cart object
          console.log(cart)
          $("#cart-data").val(JSON.stringify(cart))
          let urlParams = new URLSearchParams(window.location.search);
          if (urlParams.has('submitted')) {
            const thankTitle = $("#quote-container").data("thank_title")
            const thankText = $("#quote-container").data("thank_text")
            $('#quote-form').hide()
            $("#quote-request-form").hide()
              console.log(thankTitle, thankText)
            $("#quote-container").append(
              `<h1 style='margin-top:50px;'>${thankTitle}</h1> <br> <p>${thankText}</p>`)
              }
        });

   }

    countrySelect() {
      this.$country.change((e) => {
        this.$addressRender.html('')
        this.$copyInput.html('')
        this.$shippingContainer.show()

        for (let i = 0; i < this.addresses.options.length; i++) {
          if (this.addresses.options[i].iso === e.target.value) {
            const country = this.addresses.options[i]
            let html = ''
             
            country.fields.forEach((field) => {
              if (field.thoroughfare) {
                html +=`
                 <div class="grid_item medium-up--one-half">
                    <label for="quote-address-1"> ${field.thoroughfare.label}</label>
                    <input type="text" id="quote-address-1" style="size: 100;" name="quote-address-1" placeholder=${field.thoroughfare.label} required>
                  </div>
                
                `
              }

            if (field.premise) {
              html += `
                 <div class="grid_item medium-up--one-half">
                    <label for="quote-address-2"> ${field.premise.label}</label>
                    <input type="text" id="quote-address-2" style="size: 100;" name="quote-address-2" placeholder=${field.premise.label}>
                 </div>
              
              `
              }

            if (field.locality) {
                field.locality.forEach((local) => {
                  if (local.hasOwnProperty('localityname')) {
                    html += `
                 <div class="grid_item medium-up--one-half">
                    <label for="quote-city"> ${local.localityname.label}</label>
                    <input type="text" id="quote-city" style="size: 100;" name="quote-city" placeholder=${local.localityname.label} required>
                 </div> `
                  }

                if (local.hasOwnProperty('postalcode')) {
                  html += `
                 <div class="grid_item medium-up--one-half">
                    <label for="quote-zipcode"> ${local.postalcode.label}</label>
                    <input type="text" id="quote-zipcode" style="size: 100;" name="quote-zipcode" placeholder=${local.postalcode.label} required>
                 </div> `
                }
                if (local.hasOwnProperty('administrativearea')) {
                  if (local.administrativearea.hasOwnProperty('options')) {
                    let options = ''
                    local.administrativearea.options.forEach((option, i) => {
                      let key = Object.keys(option)[0]
                      options += `<option value='${key}'>${option[key]}</option>`
                    })
                    html+= `
                    <div class="grid_item medium-up--one-half">
                      <label for="quote-state"> ${local.administrativearea.label}</label>
                      <select id="quote-state" name="quote-state">
                          <option hidden disabled selected>Select ${local.administrativearea.label}</option>
                          ${options}
                      </select>
                   </div> `
                  } else {
                    html += `
                    <div class="grid_item medium-up--one-half">
                      <label for="quote-name"> ${local.administrativearea.label}</label>
                      <input type="text" id="quote-state" style="size: 100;" name="quote-state" placeholder=${local.administrativearea.label} required>
                   </div>`
                  }
                }
                });
            }

            })
            if (html !== undefined) {
              this.$addressRender.append(html)
              const parsedHTML = this.parseShippingHTML(html)
              this.$copyInput.append(`
                    <label for="quote-country-shipping"> Country</label>
                  <select id="quote-country-shipping" name="quote-country-shipping" required>
                      <option selected disabled hidden value="">Choose Country</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Åland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia, Plurinational State of</option>
                      <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CD">Congo, the Democratic Republic of the</option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Côte d'Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curaçao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands (Malvinas)</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">Heard Island and McDonald Islands</option>
                      <option value="VA">Holy See (Vatican City State)</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran, Islamic Republic of</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">Korea, Democratic People's Republic of</option>
                      <option value="KR">Korea, Republic of</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Lao People's Democratic Republic</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">Micronesia, Federated States of</option>
                      <option value="MD">Moldova, Republic of</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestinian Territory, Occupied</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Réunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="RW">Rwanda</option>
                      <option value="BL">Saint Barthélemy</option>
                      <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="MF">Saint Martin (French part)</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">Saint Vincent and the Grenadines</option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten (Dutch part)</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">South Georgia and the South Sandwich Islands</option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syrian Arab Republic</option>
                      <option value="TW">Taiwan, Province of China</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania, United Republic of</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="UM">United States Minor Outlying Islands</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VE">Venezuela, Bolivarian Republic of</option>
                      <option value="VN">Viet Nam</option>
                      <option value="VG">Virgin Islands, British</option>
                      <option value="VI">Virgin Islands, U.S.</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                  </select>`)
              this.$copyInput.append(parsedHTML)
            }
            break;
          }
        }

      })
    }
    //Replaces all form names for shipping form

    parseShippingHTML(html) {

      let parsedHTML = html
      this.shippingValues.forEach((value) => {
        let re = new RegExp(value,"gi");
        parsedHTML = parsedHTML.replace(re,value + "-shipping")

      });
      return parsedHTML
    }

    copyInputValues() {
      $('#shipping-same').click((e) => {
        const billingIds = this.shippingValues.slice(0).concat(['quote-phone', 'quote-company','quote-country'])
        billingIds.forEach((value) => {
        let billingAddress = $(`#${value}`).val()
        $(`#${value}-shipping`).val(billingAddress)
        });
      })

    }
}



export default QuoteRequest;



