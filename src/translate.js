import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      fa: {
        translation: {   
          "Add": "افزودن",                 
          "Description": "شرح",
          "Duo date": "زمان تحویل",
          "Inbox": "موجود",
          "My account": "حساب من",
          "operation has done successfully": "عملیات با موفقیت انجام شد",
          "Profile": "پروفایل",
          "Search": "جستجو",
          "Submit": "ثبت",
          "Title": "عنوان",
          "Today": "امروز",
          "Trash": "زباله",
        }
      }
    },
    lng: "fa",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
