import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      fa: {
        translation: {   
          "Add": "افزودن",                 
          "Inbox": "موجود",
          "My account": "حساب من",
          "Profile": "پروفایل",
          "Search": "جستجو",
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
