import React, { useState } from "react";
import CardContainer from "../cardsContainer/CardContainer";
import "./TabsContainer.css";

const tabs = [
  {
    title: "מילות סיומת",
    url: "sufix",
  },
  {
    title: "מילות קידומת",
    url: "prefix",
  },
  {
    title: "מילות שורש",
    url: "source",
  },
];

const sourceWordsCards = [
  { english: "Abdomino", hebrew: "אבדומינו", value: "בטן / קיר הבטן" },
  { english: "Angi-", hebrew: "אנגי", value: "כלי דם" },
  { english: "Aort-", hebrew: "אאורט", value: "עורק ראשי היוצא מחדר הלב" },
  { english: "Arter-", hebrew: "ארטר", value: "עורק" },
  { english: "Asphyxia", hebrew: "אספירציה", value: "חנק" },
  { english: "Bio-", hebrew: "ביו", value: "חיים" },
  { english: "Card- Cardia-", hebrew: "קרד, קרדיה", value: "לב" },
  { english: "Corp-", hebrew: "קורפ", value: "הגוף" },
  { english: "Cyc-", hebrew: "ציס", value: "מעגל" },
  { english: "Cyst", hebrew: "צסט", value: "שלפחות ציסטה" },
  { english: "Dent-", hebrew: "דנט", value: "שן" },
  { english: "Edem-", hebrew: "אדמ", value: "נפיחות" },
  { english: "Embryo", hebrew: "אמבריו", value: "עובר" },
  { english: "Enter-", hebrew: "אנטר", value: "מעיים" },
  { english: "Eryth--", hebrew: "אריט", value: "אדום" },
  { english: "Flex", hebrew: "פלקס", value: "לכופף" },
  { english: "Fract-", hebrew: "פרקט", value: "לשבור לחתיכות" },
  { english: "Gast", hebrew: "גסט", value: "בטן קיבה" },
  { english: "Gnosis", hebrew: "גנוסיס", value: "מידע" },
  { english: "-graph", hebrew: "גרף", value: "לרשום" },
  { english: "Hem- , em-", hebrew: "המ", value: "דם" },
  { english: "Homerus", hebrew: "הומרוס", value: "זרוע" },
  { english: "Hydr-", hebrew: "הידר", value: "מים" },
  { english: "Hystr-", hebrew: "היסטר", value: "רחם" },
  { english: "Ling-", hebrew: "לינג", value: "לשון" },
  { english: "Mal-", hebrew: "מל", value: "רע, גרוע" },
  { english: "Med-", hebrew: "מד", value: "אמצע" },
  { english: "Mega-", hebrew: "מגה", value: "גדול" },
  { english: "Melan-, Melen-", hebrew: "מלנ", value: "שחור" },
  { english: "Men-, Mena-", hebrew: "מנ", value: "חודשי" },
  {
    english: "Menin-",
    hebrew: "מנין",
    value: "קרום המכסה את המוח וחוט השדרה",
  },
  { english: "Morb-", hebrew: "מורב", value: "מחלה" },
  { english: "Myo-", hebrew: "מיו", value: "שריר" },
  { english: "Nephr-", hebrew: "נפר", value: "כליה" },
  { english: "Oa-, oss-, ost-", hebrew: "אוס, אוסט", value: "עצם" },
  { english: "Opthalm", hebrew: "אופטלמ", value: "עין" },
  { english: "Pariet-", hebrew: "פרייט", value: "קיר" },
  { english: "Pur-, pus-, py-", hebrew: "פר, פס, פי", value: "מוגלה" },
  { english: "Pyel-", hebrew: "פיל", value: "אגן" },
  { english: "Pyr", hebrew: "פיר", value: "חום גבוה" },
  { english: "Pleur", hebrew: "פלאור", value: "קרום המכסה את הריאה" },
  { english: "Pneum", hebrew: "פנאום", value: "ריאה" },
  { english: "Pod", hebrew: "פוד", value: "רגל" },
  { english: "Pseud-", hebrew: "פסאוד", value: "לא אמיתי" },
  { english: "Psych", hebrew: "פסיכ", value: "נפש" },
  {
    english: "Quad- , quar-, quat-",
    hebrew: "קווד, קוור, קווט",
    value: "ארבע",
  },
  { english: "Radius", hebrew: "רדיוס", value: "מחוג" },
  { english: "Ren-", hebrew: "רנ", value: "כליה" },
  { english: "Rhin-", hebrew: "רין", value: "אף" },
  { english: "Scler-", hebrew: "סקלר", value: "קשה" },
  { english: "Scat-, seg-", hebrew: "סקט, סג", value: "לחתוך" },
  { english: "Sepsis", hebrew: "ספסיס", value: "מכיל חיידקים" },
  { english: "Sept-", hebrew: "ספט", value: "קיר/מחיצה" },
  { english: "Serum", hebrew: "סרום", value: "נוזל הנוצר כאשר הדם נקרש" },
  { english: "Sinus", hebrew: "סינוס", value: "חלל, חלול" },
  { english: "Somat-", hebrew: "סומט", value: "גוף" },
  { english: "Sphincter", hebrew: "ספינקטר", value: "שריר סוגר" },
  { english: "Spir-", hebrew: "ספיר", value: "ללפף, לסובב" },
  { english: "Statis", hebrew: "סטטיס", value: "עומד" },
  { english: "Stern-", hebrew: "סטרנ", value: "חזה" },
  { english: "Stoma", hebrew: "סטומה", value: "פתח או פה" },
  { english: "Tachy-", hebrew: "טאכי", value: "מהיר" },
  { english: "Temp-", hebrew: "טמפ", value: "זמן או רקה" },
  { english: "Tendon", hebrew: "טנדון", value: "גיד" },
  { english: "Toxis", hebrew: "טוקסיק", value: "רעיל" },
  { english: "Trachea", hebrew: "טרכיאה", value: "קנה נשימה" },
  { english: "Ur-, Urin-", hebrew: "אור, אורין", value: "שתן" },
  { english: "Vagina", hebrew: "וגינה", value: "תעלת מין נקבית" },
  { english: "Vertebra", hebrew: "ורטברה", value: "חוליה" },
  { english: "Vertebra", hebrew: "ורטברה", value: "חוליה" },
  { english: "Vertigo", hebrew: "ורטיגו", value: "סחרחורת" },
];

const prefixWords = [
  { english: "Anti", hebrew: "אנטי", value: "כנגד, בניגוד ל" },
  { english: "Auto", hebrew: "אוטו", value: "עצמי" },
  { english: "Bi", hebrew: "בי", value: "שניים" },
  { english: "Brady", hebrew: "ברדי", value: "איטי" },
  { english: "Contra", hebrew: "קונטרא", value: "בניגוד ל" },
  { english: "Dys", hebrew: "דיס", value: "עם קושי" },
  { english: "E ex", hebrew: "א אקס", value: "מתוך" },
  { english: "Ecto", hebrew: "אקטו", value: "מחוץ ל" },
  { english: "Endo", hebrew: "אנדו", value: "בתוך" },
  { english: "Epi", hebrew: "אפי", value: "מעל, על" },
  { english: "Erythro", hebrew: "אריטרו", value: "אדום" },
  { english: "Hyper", hebrew: "היפר", value: "עודף" },
  { english: "Hypo", hebrew: "היפו", value: "מתחת" },
  { english: "Hemi", hebrew: "המי", value: "חצי" },
  { english: "Macro", hebrew: "מקרו", value: "גדול" },
  { english: "Micro", hebrew: "מיקרו", value: "קטן" },
  { english: "Sub", hebrew: "סאב", value: "מתחת" },
  { english: "Supra", hebrew: "סופרה", value: "מעל" },
  { english: "vaso", hebrew: "וסו", value: "כלי דם" },
];
const sufixWords = [
  { english: "Algia", hebrew: "אלגיה", value: "קשור לכאב" },
  { english: "Ectomy", hebrew: "אקטומי", value: "חיתוך והוצאה" },
  { english: "Emia", hebrew: "אמיה", value: "דם" },
  { english: "It is", hebrew: "יטיס", value: "דלקת" },
  { english: "Ostomy", hebrew: "אוסטומי", value: "יצירת פתח" },
  { english: "Oma", hebrew: "אומה", value: "גידול" },
  { english: "Osis", hebrew: "אוסיס", value: "מצב של" },
  { english: "Pathy", hebrew: "פטי", value: "מחלה" },
  { english: "Rhytmia", hebrew: "ריטמיה", value: "קצב" },
  { english: "Scope", hebrew: "סקופ", value: "מכשיר בדיקה" },
  { english: "Scopy", hebrew: "סקופי", value: "בדיקה עם מכשיר" },
];

const cards = [sufixWords, prefixWords, sourceWordsCards];

const TabsContainer: React.FC<{}> = () => {
  const [selectTab, setSelectTab] = useState<number>(0);

  return (
    <div>
      <div className="btnContainer">
        {tabs.map((tab, index) => (
          <button
            className={`tabBtn ${selectTab === index ? "selectedTab" : ""}`}
            onClick={() => setSelectTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <CardContainer cards={cards[selectTab]} />
    </div>
  );
};

export default TabsContainer;
