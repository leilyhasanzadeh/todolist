import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      fa: {
        translation: {
          "A customer must be selected": "یک مشتری می بایست انتخاب شود.",
          "Active Indicator": "شاخص فعال",
          "Activity type": "نوع فعالیت",
          "Address": "آدرس",
          "Add": "افزودن",
          "Add customer": "افزودن مشتری",
          "Add custom info": "افزودن اطلاعات ثابت",
          "Add File": "افزودن فایل",
          "Add New": "افزودن صفحه",
          "Add to Reports": "افزودن به صفحات گزارش",
          "Add plants": "افزودن گیاه",
          "Add product": "افزودن محصول",
          "Add/Edit": "افزودن/ویرایش",
          "Add/Edit crop pattern": "افزودن/ویرایش الگوی کاشت",
          "Add/Edit customer": "افزودن/ویرایش مشتری",
          "Add/Edit general report": "افزودن/ویرایش گزارش عملیات",
          "Add general report": "افزودن گزارش عملیات",
          "Add/Edit pattern plant": "افزودن/ویرایش گیاه در الگو",
          "Add/Edit plants": "افزوردن/ویرایش گیاه",
          "Add production": "افزودن تولید",
          "Add/Edit soil": "افزودن/ویرایش خاک",
          "Add/Edit watering": "افزودن/ویرایش عملیات آبیاری",
          "Add/Edit water test": "افزودن/ویرایش آزمایش آب",
          "Add manpower": "افزودن نیروی انسانی جدید",
          "Add machinery": "افزودن ماشین آلات",
          "Add raw material": "افزودن مواد اولیه",
          "Add sell": "افزودن فروش",
          "Ajust gauge fields should be filled": "مقادیر تنظیم کننده گاج می بایست پر شوند.",
          "All": "همه",
          "All fields related to a human resource should be filled": "تمام فیلدهای مربوط به یک نیروی انسانی می بایست پر شوند.",
          "All fields related to a machinery should be filled": "تمام فیلدهای مربوط به یک ماشین می بایست پر شوند.",
          "All fields related to a raw material should be filled": "تمام فیلدهای مربوط به یک مواد اولیه می بایست پر شوند.",
          "All search fields must be filled in": "تمام فیلدهای جستجو می بایست پر شوند",
          "Alert": "اخطار",
          "Amount": "مقدار",
          "Analyses date": "تاریخ آنالیز",
          "An operation type should be selected": "یک نوع عملیات می بایست انتخاب شود.",
          "Approve": "تایید",
          "Approve operation": "تایید عملیات",
          "Approve operation detail": "عملیات های نیاز به تایید",
          "Are you sure you want to remove the plant": "آیا از حذف اطمینان دارید؟",
          "Area": "مساحت(هکتار)",
          "Area coeficent": "ضریب مساحت",
          "Area or polygon is required": "ورود مساحت یا شکل ضروری است",
          "Are you sure to do this": "از انجام این کار اطمینان دارید؟",
          "Arman Id": "شناسه آرمان",
          "At least one meteorological station is required": "انتخاب حداقل یک ایستگاه هواشناسی ضروری است.",
          "At least one human resource is required": "انتخاب حداقل یک نیروی انسانی ضروری است.",
          "Available for all reports": "در دسترس برای تمام گزارشات",
          "Average": "میانگین",
          "B": "بر",
          "Back": "بازگشت",
          "Ca": "کلسیم",
          "Cancel": "انصراف",
          "Car report": "گزارش ماشین آلات",
          "Car report detail": "در این بخش گزارش ماشین آلات برای قطعه انتخابی، نمایش داده می شود.",
          "Cases have been selected": "مورد انتخاب شده است.",
          "Category": "دسته بندی",
          "Cd": "کادمیم",
          "Change": "تغییر",
          "Chart": "نمودار",
          "CHD": "سختی کربناتی",
          "Choose Crop": "انتخاب گیاه",
          "Choose First Crop": "انتخاب گیاه اول",
          "Choose Second Crop": "انتخاب گیاه دوم",
          "Choose variety": "رقم گیاه",
          "Choose pattern": "الگوی کشت",
          "CI": "کلرید",
          "City": "شهر",
          "Clay": "رس",
          "Click to view or select": "برای مشاهده یا انتخاب کلیک کنید.",
          "Climate": "آب و هوا",
          "Clock": "زمان",
          "Close": "بستن",
          "CO3": "کربنات",
          "Company": "شرکت",
          "COMPANIES": "شرکت",
          "Compare crops based on pattern": "مقایسه گیاهان با الگو",
          "Compare with": "مقایسه با",
          "Comparison of the irrigation of the selected plant with its blue requirement": "نمودار مقایسه آبیاری گیاه انتخابی با نیاز آبی آن",
          "Comparision value": "مقدار پیش بینی",
          "Copper": "مس",
          "Copy": "کپی",
          "Copy plants": "کپی گیاهان",
          "Copy product": "کپی محصول",
          "Cost": "هزینه",
          "Cost of overhead calculated": "هزینه سربار محاسبه شده",
          "Cost per kilo": "قیمت هر کیلو",
          "Cost/income value field should be filled": "فیلد مقدار هزینه/درآمد می بایست پر شود.",
          "Cost report": "گزارش هزینه ها",
          "Cost report detail": "در این بخش گزارش هزینه ها برای قطعه انتخابی، نمایش داده می شود.",
          "Create an optimal pattern": "",
          "Create Indicators": "ایجاد شاخص",
          "Create optimal cropping pattern": "ایجاد الگوی کشت بهینه",
          "Creating value": "مقدار عملیات",
          "Crop pattern": "الگوی کشت",
          "Crop pattern managment": "مدیریت الگوی کشت",
          "Crop pattern managment detail": "در این بخش می توانید الگوهای کشت را مدیریت کنید.",
          "Crop year": "سال زراعی",
          "Crop year destination": "سال زراعی مقصد",
          "Crop": "گیاه",
          "Crops": "گیاهان",
          "Cu": "مس",
          "Cubic meter": "مترمکعب",
          "Cultivate date": "تاریخ کشت",
          "Cultivation period": "طول کشت(روز)",
          "Current crop year and destination should be different": "سال زراعی جاری و مقصد می بایست متفاوت باشند.",
          "Current status": "وضعیت کنونی",
          "Current value": "مقدار کنونی",
          "Current year debi": "دبی سال زراعی",
          "Customer select": "انتخاب مشتری",
          "Customer": "مشتری",
          "Customers": "مشتریان",
          "Dashboard": "داشبورد",
          "Dashboard name": "نام داشبورد",
          "Date": "تاریخ",
          "Date and time": "تاریخ و ساعت",
          "Date field should be filled": "فیلد تاریخ می بایست پر شود.",
          "Date range": "بازه تاریخی",
          "Day": "روز",
          "Debi": "دبی",
          "Default": "مقدار پیشفرض",
          "Default debi": "دبی پیشفرض",
          "Define a new index": "تعریف شاخص جدید",
          "Description": "توضیحات",
          "Detail": "جزئیات",
          "Detailed no3": "تفصیلی 3 - شماره قطعه",
          "Difference": "اختلاف",
          "Direct": "مستقیم",
          "Direct cost": "هزینه مستقیم",
          "Direct manpower": "نیروی انسانی مستقیم",
          "Doc code": "کد حواله",
          "Doc no": "شماره حواله",
          "Download link": "لینک دانلود",
          "Duration": "تاریخ کشت",
          "EC": "هدایت الکتریکی(شوری)",
          "EC water": "هدایت الکتریکی",
          "Edit": "ویرایش",
          "Education": "تحصیلات",
          "Employment type": "نوع استخدام",
          "Elevation": "ارتفاع",
          "email": "ایمیل",
          "End": "پایان",
          "Exit": "خروج از سیستم",
          "Exit date": "زمان خروج",
          "Exit No": "تعداد خروجی انبار",
          "Fail plants": "گیاهان ناموفق",
          "Farm": "کشت و صنعت",
          "Farmer work": "مزارعه کاری",
          "Farmer work percent": "درصد مزارعه کاری",
          "Farmer work weight": "وزن مزارعه کاری",
          "FARMS": "کشت و صنعت",
          "Fe": "آهن",
          "Field": "حوزه",
          "FIELDS": "حوزه",
          "Files": "فایل ها",
          "File name": "نام فایل",
          "File properties should be entered": "مشخصات فایل می بایست وارد شوند",
          "Filter": "پالایش",
          "Finance": "مالی",
          "First fill in the previous fields of the machine": "ابتدا فیلدهای قبلی ماشین آلات را پر کنید.",
          "First fill in the previous fields of the raw material": "ابتدا فیلدهای قبلی مواد اولیه را پر کنید.",
          "First page": "صفحه اول",
          "First plant area": "مساحت گیاه اول",
          "Forecast": "پیشبینی",
          "Forget password": "فراموشی رمز عبور",
          "For cumulative data, start and end dates are necessary": "برای داده های تجمعی تاریخ شروع و پایان ضروری است.",
          "from": "از",
          "From date": "از تاریخ",
          "Function": "عملکرد",
          "Further Details": "توضیحات تکمیلی",
          "Further information": "اطلاعات تکمیلی",
          "General index": "شاخص عمومی",
          "General reports": "گزارش کارشناسی",
          "Group": "گروه",
          "HCO3": "بیکربنات",
          "Hectare": "هکتار",
          "Home": "هلدینگ کشاورزی، دامپروری و صنایع غذایی",
          "Help": "آموزش",
          "Hide description": "پنهان کردن جزئیات",
          "Hide variety": "پنهان کردن رقم گیاه",
          "Historical": "تاریخی",
          "Horse power": "اسب بخار",
          "Hour": "ساعت",
          "Hours allowed per year": "ساعات کارکرد مجاز در سال",
          "Human list": "لیست نیروی انسانی",
          "Human report": "گزارش نیروی انسانی",
          "Human report detail": "در این بخش گزارش نیروی انسانی برای قطعه انتخابی نمایش داده می شود.",
          "Human resource": "نیروی انسانی",
          "human_resource_count": "تعداد نیروی انسانی",
          "Humidity": "رطوبت",
          "Income": "درآمد",
          "Indicator": "شاخص",
          "If determined, the area will be determined based on it": "در صورت تعیین شکل، مساحت بر اساس آن تعیین خواهد شد",
          "Initial cases should only be selected once a financial system": "موارد اولیه تنها می بایست یک بار از سیستم مالی انتخاب شوند.",
          "Invoice No.": "شماره فاکتور",
          "Iron": "آهن",
          "K": "پتاسیم قابل جذب",
          "K water": "پتاسیم",
          "Kilo": "کیلوگرم",
          "Last page": "صفحه آخر",
          "Last update": "آخرین بروزرسانی",
          "Liters per second": "لیتر بر ثانیه",
          "Load params": "بارگیری مقادیر",
          "login": "ورود",
          "Long forecast": "بلند مدت",
          "Machinery": "ماشین آلات",
          "Machinery Type": "نوع ماشین آلات",
          "Main dashboard": "داشبورد اصلی",
          "Manage layers": "مدیریت لایه ها",
          "Managment panel": "پنل مدیریت",
          "Manage plants": "مدیریت",
          "Manganese": "منگنز",
          "Manpower": "نیروی انسانی",
          "Manpower select": "انتخاب نیروی انسانی",
          "Map": "نقشه",
          "Maximum temperature": "حداکثر دما",
          "Maximum value": "حداکثر",
          "Medium value": "پیش بینی",
          "Merge": "ادغام",
          "Message": "پیام",
          "Meteorology": "هواشناسی",
          "Meteo hum": "رطوبت",
          "Meteo rad": "تابش خورشید",
          "Meteo temp": "دما",
          "Meteo wind": "وزش باد",
          "Meteorological stations": "ایستگاه های هواشناسی",
          "Meter": "مترمربع",
          "Minimum temperature": "حداقل دما",
          "Minimum value": "حداقل",
          "Mg": "منیزیم",
          "Mn": "منگنز",
          "more than": "بیشتر از",
          "N": "نیتروژن(ازت)",
          "Na": "سدیم",
          "N hours": "مقدار نفر ساعت",
          "Name": "نام",
          "Need proof": "نیاز به تایید",
          "Need to be confirmed when the sum of the values recorded for this operation in real terms exceeds the value defined in this section": "نیاز به تایید در زمانی که مجموع مقادیر ثبت شده برای این عملیات در شرایط واقعی از مقدار تعریف شده در این قسمت بیشتر شود.",
          "New crop pattern": "الگوی جدید",
          "New operation": "عملیات جدید",
          "New operation submit": "ثبت عملیات جدید",
          "New soil operation": "ثبت آزمایش خاک",
          "New watering operation": "ثبت عملیات آبیاری",
          "Next": "بعدی",
          "No": "خیر",
          "No images for this area": "هیچ تصویری برای این منطقه ثبت نشده است.",
          "Number": "شماره",
          "Number of send crops should be greater than one": "تعداد گیاهان می بایست بیشتر از یک باشد.",
          "no result found": "هیچ نتیجه ای یافت نشد.",
          "Notifications": "اعلانات",
          "OC": "کربن آلی",
          "Operating hours": "ساعات بهره برداری",
          "Operation": "عملیات",
          "Operation date": "تاریخ عملیات",
          "Operation doing date": "تاریخ انجام عملیات",
          "Opearation group select": "انتخاب گروه عملیات",
          "Operation list": "لیست عملیات",
          "Operation report": "گزارش عملیات",
          "Operation report detail": "در این بخش گزارش عملیات ثبت شده برای قطعه انتخابی، نمایش داده می شود.",
          "Operation successfuly done": "عملیات با موفقیت انجام شد.",
          "operating_system": "نظام بهره برداری",
          "Opearation type": "نوع عملیات",
          "Opearation type select": "انتخاب نوع عملیات",
          "Opearation type value should be field": "مقدار نوع عملیات می بایست پر شود.",
          "Opearation type value should be less": "مقدار نوع عملیات می بایست کمتر باشد.",
          "Or": "یا",
          "Overhead Cost": "هزینه سربار",
          "Ownership": "مالک",
          "o-sand": "شنی",
          "o-loamy-sand": "شنی - لومی",
          "o-sandy-loam": "لومی - شنی",
          "o-loam": "لوم",
          "o-silt-loam": "لومی - سیلتی",
          "o-silt": "سیلت",
          "o-sandy-clay-loam": "لوم رسی - شنی",
          "o-clam-loam": "لومی و رسی",
          "o-silty-clam-loam": "لوم رسی - سیلتی",
          "o-sandy-clay": "رسی و شنی",
          "o-silty-clay": "رسی و سیلتی",
          "o-clay": "رسی",
          "P": "فسفر قابل جذب",
          "Paid direct cost": "هزینه مستقیم پرداخت شده",
          "Page title": "عنوان صفحه",
          "Page title should be filled": "عنوان صفحه می بایست پر شود.",
          "Parameters": "پارامترها",
          "password": "رمز عبور",
          "Path": "مسیر",
          "Pattern": "الگو",
          "Pb": "سرب",
          "Percent": "درصد",
          "Period": "بازه",
          "PH": "واکنش خاک(اسیدیته)",
          "PH water": "اسیدیته",
          "Phone format is not correct": "فرمت تلفن صحیح نمی باشد.",
          "Piece": "قطعه",
          "PIECES": "قطعه",
          "Plant": "محصول",
          "PLANTS": "محصول",
          "Plaq": "پلاک",
          "please wait": "لطفا منتظر بمانید ...",
          "Previous": "قبلی",
          "Price per unit": "هزینه هر عدد",
          "private index": "شاخص اختصاصی",
          "problem on saving": "خطا در ثبت اطلاعات",
          "Problem with file format": "فایل وارد شده نامعتبر است.",
          "Production": "تولید",
          "Production details": "جزئیات تولید",
          "Productions && sells": "تولید و فروش",
          "Properties": "مشخصات",
          "Planting process map": "نقشه فرآیند زراعت",
          "Planting process map detail": "تصویر فرآیند زراعت را از این قسمت ببینید",
          "Production cost": "هزینه تولید(ریال در هر هکتار)",
          "Radiation": "تابش",
          "Rain": "بارش",
          "Rank": "سمت",
          "Raw material": "مواد اولیه",
          "Raw material select": "انتخاب مواد اولیه",
          "Real": "واقعی",
          "Real plant area": "مساحت واقعی",
          "Realtime": "بلادرنگ",
          "Reason": "علت",
          "Registration pattern": "الگوی کشت ثبت",
          "Regular": "معمولی",
          "Remember me": "مرا به خاطر بسپار",
          "Remove": "حذف",
          "Remove polygon": "حذف شکل",
          "Report": "گزارش",
          "Report basis": "اساس گزارش گیری",
          "Report dashboard": "داشبورد گزارش گیری",
          "Report dashboard detail": "در این بخش داشبورد گزارش گیری در دسترس شما خواهد بود.",
          "Report type type": "نوع شاخص گزارش",
          "Reset": "بازگشت به مقادیر اولیه",
          "Resource name": "نام منبع",
          "Resource type": "نوع منبع",
          "Results": "نتایج",
          "Row": "ردیف",
          "Rows per page": "ردیف در هر صفحه",
          "Run reports": "اجرای گزارش",
          "Sale price": "نرخ فروش(ریال به کیلوگرم)",
          "Sand": "شن",
          "Satellite images": "تصاویر ماهواره ای",
          "Sattelite monitoring": "پایش ماهواره ای",
          "Scale crop pattern": "الگوی کشت مقیاس",
          "Search": "جستجو",
          "Second plant area": "مساحت مقایسه",
          "Second plant cost": "مقدار هزینه",
          "Second plant income": "درآمد مقایسه",
          "Second plant production": "تولید مقایسه",
          "Second plant sell": "فروش مقایسه",
          "Section": "بخش",
          "SECTIONS": "بخش",
          "See weather alerts": "مشاهده اخطارهای هواشناسی",
          "See weather charts": "مشاهده نمودارهای هواشناسی",
          "See weather information": "مشاهده اطلاعات هواشناسی",
          "Select": "انتخاب",
          "Select all": "همه",
          "Select crop from list": "انتخاب نوع گیاهان از روی لیست",
          "Select crop year": "انتخاب سال زراعی",
          "Select date": "انتخاب تاریخ",
          "Select from Arman system": "انتخاب از انبار سیستم مالی",
          "Select from calendar": "انتخاب از روی تقویم",
          "Select human from calendar": "انتخاب نیروی انسانی از روی لیست",
          "Select human resource type from list": "انتخاب نوع نیروی انسانی از روی لیست",
          "Select index type": "انتخاب نوع شاخص",
          "Select machinery from list": "انتخاب ماشین آلات از لیست",
          "Select machinery type from list": "انتخاب نوع ماشین آلات از روی لیست",
          "Select man from list": "انتخاب نیرو از لیست",
          "Select none": "هیچکدام",
          "Select one": "انتخاب کنید",
          "Select operation": "انتخاب عملیات",
          "Select operation from list": "انتخاب عملیات از لیست",
          "Select operation types from list": "انتخاب نوع عملیات از لیست",
          "Select page": "انتخاب صفحه",
          "Select plantation year from list": "انتخاب سال زراعی از لیست",
          "Select private index": "انتخاب شاخص اختصاصی",
          "Select private index description": "شاخص های اختصاصی را از این قسمت انتخاب کنید.",
          "Select raw material from list": "انتخاب مواد اولیه از لیست",
          "Select regular": "انتخاب از سیستم انبار سامانه جامع",
          "Select value": "انتخاب مقادیر",
          "Select water resource": "منبع آب",
          "Select weather stations from list": "انتخاب ایستگاه های هواشناسی",
          "Selected path": "مسیر انتخابی",
          "Sell": "فروش",
          "Sell amount": "مقدار فروش",
          "Sell detail": "جزئیات فروش",
          "Sell rate": "نرخ فروش",
          "Send values should be greater than zero": "مقادیر ارسالی می بایست از صفر بیشتر باشند.",
          "Server error": "خطای سرور",
          "server error": "خطای سرور",
          "Settings": "تنظیمات",
          "Set the index values": "تنظیم مقادیر شاخص",
          "Sign Up": "ثبت نام",
          "Short forecast": "کوتاه مدت",
          "Show water test": "مشاهده آزمایشات آب",
          "Silt": "سیلت",
          "Size": "سایز",
          "Soil ec": "آستانه تحمل خاک",
          "Soil ph": "اسیدیسیته خاک",
          "Soil SAR": "SAR",
          "Soil management": "کیفیت خاک",
          "Soil management detail": "در این بخش می توانید عملیات مدیریت خاک را انجام دهید.",
          "Soil texture class": "کلاس بافت خاک",
          "Software name": "سماک",
          "SO4": "سولفات",
          "SP": "درصد اشباع خاک",
          "specialities": "زمینه فعالیت",
          "Start": "شروع",
          "static info": "اطلاعات ثابت",
          "Station name": "نام ایستگاه",
          "Statistics and data": "آمار و اطلاعات",
          "Stock": "انبار",
          "Stock report": "گزارش انبار",
          "Stock report detail": "در این بخش گزارش انبار برای قطعه انتخابی، نمایش داده می شود",
          "Source": "مکان",
          "Stress": "استرس",
          "Submit": "ثبت",
          "Submit all": "ثبت نهایی",
          "Submit date": "تاریخ ثبت",
          "Submit & back": "ثبت و بازگشت به فرم",
          "SUBPLANTS": "محصول",
          "Subset": "زیرمجموعه",
          "Submit the same": "ذخیره و ثبت مشابه",
          "Submit water test": "ثبت آزمایشات آب",
          "Successful plants": "گیاهان موفق",
          "Sum amount": "مجموع مقدار",
          "Sum area": "مجموع مساحت",
          "Sum sale": "مجموع فروش",
          "Supply": "موجودی",
          "Supplier": "تامین کننده",
          "System": "سیستم",
          "System code": "کد سیستم",
          "Table": "جدول",
          "TDS": "کل مواد محلول",
          "THD": "سختی کل",
          "Telephone": "تلفن تماس",
          "Test date": "تاریخ آزمون",
          "The amount of exploitation of the water source in comparison with its annual capacity": "میزان بهره برداری از منبع آبی در مقایسه با ظرفیت سالانه آن",
          "The amount of operation type is higher than the limit": "مقدار نوع عملیات بالاتر از حد مجاز است",
          "The amount of raw material used should be in accordance with the inventory": "مقدار مواد اولیه استفاده شده می بایست متاسب با موجودی باشد",
          "The title should be filled": "عنوان می بایست پر شود.",
          "Tendency": "گرایش",
          "This field should be filled": "این فیلد می بایست پر شود.",
          "This report is not supported for the selected reporting log": "این گزارش برای اساس گزارش گیری انتخابی پشتیبانی نمی شود.",
          "Time": "زمان",
          "Title": "عنوان",
          "TNV": "مواد خنثی شونده(آهک)",
          "To date": "تا تاریخ",
          "Toman": "تومان",
          "Total": "مجموع",
          "total_area": "مساحت کل",
          "Total price": "مجموع هزینه ریالی",
          "Training content": "محتوای آموزشی",
          "Training videos": "ویدیوهای آموزشی سامانه جامع کشاورزی",
          "Type": "نوع",
          "Undefined": "ثبت نشده است.",
          "Unique code": "کد یکتا",
          "Unique name": "نام یکتا",
          "Unit": "واحد",
          "UNITS": "واحد",
          "Upload file": "آپلود فایل",
          "Used machinery": "ماشین آلات مورد استفاده",
          "User": "کاربر",
          "Username": "نام کاربر",
          "User value": "مقدار کاربر",
          "Value": "مقدار",
          "Variety": "رقم",
          "Warehouse arrival date": "تاریخ ورود به انبار",
          "Water ec": "شوری",
          "Watering list": "لیست آبیاری",
          "water_resource_debi_average": "متوسط آبدهی چاه ها",
          "water_resource_salinetry": "میانگین شوری منابع آب ",
          "Water resources": "منابع آب",
          "Water resource volume": "حجم منابع آبی مجاز",
          "Water test": "آزمایش آب",
          "Water tests": "گزارش تجزیه شیمیایی آب کشاورزی",
          "Watering management": "مدیریت آبیاری",
          "Watering management detail": "در این بخش می توانید عملیات مدیریت آبیاری را انجام دهید.",
          "Watering operation": "عملیات آبیاری",
          "Watering requirement": "نیاز آبی",
          "Weather alerts": "اخطارهای هواشناسی",
          "Weather alert detail": "در این بخش اخطارهای هواشناسی برای قطعه انتخابی، نمایش داده می شود.",
          "Weather chart": "نمودار هواشناسی",
          "Weather chart detail": "در این بخش نمودار هواشناسی برای قطعه انتخابی نشان داده می شود.",
          "Weather report": "گزارش هواشناسی",
          "Weather report detail": "در این بخش گزارش هواشناسی ثبت شده برای قطعه انتخابی، نمایش داده می شود.",
          "Weather stations": "ایستگاه های هواشناسی",
          "Weather forecast": "پیش بینی آب و هوا",
          "Welcome to React": "Welcome to React and react-i18next",
          "Wind": "باد",
          "Work hours": "ساعت کارکرد",
          "Yes": "آری",
          "unprocessable entity": "عملیات درخواست شده امکان پذیر نمی باشد",
          "Unauthorized": "نام کاربری یا کلمه عبور اشتباه است",
          "You should select at least one water resource": "انتخاب لااقل یک منبع آبی ضروری است.",
          "Update Indicators": "به روز رسانی شاخص",
          "Zine": "روی",
        }
      }
    },
    lng: "fa",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
