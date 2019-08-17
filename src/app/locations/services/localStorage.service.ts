import { Injectable } from '@angular/core';
import { Location } from '../models/location.model'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocalStorageService {
    locations: Location[] = [
        {
            "locationId": 13142,
            "name": "מבשרת",
            "address": "החושן 6 9079562",
            "latitude": 0,
            "longitude": 0,
            "bankCode": "13",
            "brancCode": "142",
            "category": 5
        },
        {
            "locationId": 13123,
            "name": "אגוד ישיר",
            "address": "אבא הילל סלבר 13 ",
            "latitude": 31.965243,
            "longitude": 34.899996,
            "bankCode": "13",
            "brancCode": "123",
            "category": 3
        },
        {
            "locationId": 1372,
            "name": "הרצליה",
            "address": "סוקולוב 38 ",
            "latitude": 32.167074,
            "longitude": 34.844708,
            "bankCode": "13",
            "brancCode": "72",
            "category": 4
        },
        {
            "locationId": 1379,
            "name": "הרצליה פיתוח",
            "address": "הסדנאות 9 ",
            "latitude": 32.161023,
            "longitude": 34.80644,
            "bankCode": "13",
            "brancCode": "79",
            "category": 2
        },
        {
            "locationId": 1392,
            "name": "חדרה",
            "address": "הרברט סמואל 57 ",
            "latitude": 32.437226,
            "longitude": 34.919315,
            "bankCode": "13",
            "brancCode": "92",
            "category": 2
        },
        {
            "locationId": 13158,
            "name": "חולון",
            "address": "פנחס אילון 13 ",
            "latitude": 32.008634,
            "longitude": 34.778362,
            "bankCode": "13",
            "brancCode": "158",
            "category": 2
        },
        {
            "locationId": 13190,
            "name": "נהריה",
            "address": "שד' הגעתון 26 ",
            "latitude": 33.0067,
            "longitude": 35.094702,
            "bankCode": "13",
            "brancCode": "190",
            "category": 1
        },
        {
            "locationId": 1375,
            "name": "רעננה",
            "address": "אחוזה 153 153 ",
            "latitude": 32.181288,
            "longitude": 34.870682,
            "bankCode": "13",
            "brancCode": "75",
            "category": 2
        },
        {
            "locationId": 1393,
            "name": "רחובות",
            "address": "אחד העם 1 ",
            "latitude": 31.896297,
            "longitude": 34.812181,
            "bankCode": "13",
            "brancCode": "93",
            "category": 2
        },
        {
            "locationId": 13152,
            "name": "הוד השרון",
            "address": "סוקולוב 15 ",
            "latitude": 32.163689,
            "longitude": 34.902197,
            "bankCode": "13",
            "brancCode": "152",
            "category": 6
        },
        {
            "locationId": 1381,
            "name": "חיפה ראשי",
            "address": "פלי\"ם 6 ",
            "latitude": 32.816731,
            "longitude": 35.000336,
            "bankCode": "13",
            "brancCode": "81",
            "category": 5
        },
        {
            "locationId": 1383,
            "name": "מרכז הכרמל",
            "address": "מחניים 4 ",
            "latitude": 32.803547,
            "longitude": 34.98615,
            "bankCode": "13",
            "brancCode": "83",
            "category": 5
        },
        {
            "locationId": 13140,
            "name": "פרימיום מרכז",
            "address": "אחד העם 9 ",
            "latitude": 32.06426,
            "longitude": 34.770454,
            "bankCode": "13",
            "brancCode": "140",
            "category": 5
        },
        {
            "locationId": 13197,
            "name": "הנהלה",
            "address": "אחוזת בית 6 ",
            "latitude": 32.06426,
            "longitude": 34.770454,
            "bankCode": "13",
            "brancCode": "197",
            "category": 4
        },
        {
            "locationId": 13196,
            "name": "הנהלה",
            "address": "אחוזת בית 6 ",
            "latitude": 32.06426,
            "longitude": 34.770454,
            "bankCode": "13",
            "brancCode": "196",
            "category": 3
        },
        {
            "locationId": 1364,
            "name": "מיקדו",
            "address": "אהרון בקר 8 ",
            "latitude": 32.12303,
            "longitude": 34.816495,
            "bankCode": "13",
            "brancCode": "64",
            "category": 4
        },
        {
            "locationId": 1366,
            "name": "גורדון",
            "address": "גורדון 42 ",
            "latitude": 32.081715,
            "longitude": 34.773687,
            "bankCode": "13",
            "brancCode": "66",
            "category": 3
        },
        {
            "locationId": 13157,
            "name": "כיכר המדינה",
            "address": "ויצמן 32 ",
            "latitude": 32.084588,
            "longitude": 34.789425,
            "bankCode": "13",
            "brancCode": "157",
            "category": 3
        },
        {
            "locationId": 13992,
            "name": "משכנתאות",
            "address": "אחד העם 9 ",
            "latitude": 32.06426,
            "longitude": 34.770454,
            "bankCode": "13",
            "brancCode": "992",
            "category": 5
        },
        {
            "locationId": 1363,
            "name": "תל אביב ראשי",
            "address": "אחוזת בית 6 ",
            "latitude": 32.06426,
            "longitude": 34.770454,
            "bankCode": "13",
            "brancCode": "63",
            "category": 5
        },
        {
            "locationId": 13198,
            "name": "הנהלה",
            "address": "אחוזת בית 6 ",
            "latitude": 32.06426,
            "longitude": 34.770454,
            "bankCode": "13",
            "brancCode": "198",
            "category": 3
        }
    ]

    constructor() {
        if (this.getData() == undefined) {
            this.saveData(this.locations)
        }
    }

    saveData(value: Location[]): void {
        localStorage.setItem("DB", JSON.stringify(value));
    }

    getData(): Location[] {
        return JSON.parse(localStorage.getItem("DB"));
    }

    // getApiData(callback: (locations: Location[])=> void): void{
    //     this.http.get('http://localhost:8080/banks')
    //              .subscribe(callback);
    // }
}