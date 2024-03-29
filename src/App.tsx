import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Select from "react-select";
import CardContainer from "./components/cardsContainer/CardContainer";

function App() {
  const colors = [
    { label: "green", value: 0 },
    { label: "blue", value: 1 },
    { label: "red", value: 2 },
    { label: "yellow", value: 3 },
  ];
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if(ref.current){
  //     console.log("asd: ", ref.current);

  //     ref.current?.focus();
  //   }
  // }, []);

  const cards = [
    { id: "1", english: "Abdomino", hebrew: 'אבדומינו', value: "בטן / קיר הבטן" },
    { id: "1", english: "Angi-", hebrew: 'אנגי', value: "כלי דם" },
    { id: "1", english: "Aort-", hebrew: 'אאורט', value: "עורק ראשי היוצא מחדר הלב" },
    { id: "1", english: "Arter-", hebrew: 'ארטר', value: "עורק" },
    { id: "1", english: "Asphyxia", hebrew: 'אספירציה', value: "חנק" },
    { id: "1", english: "Bio-", hebrew: 'ביו', value: "חיים" },
    { id: "1", english: "Card- Cardia-", hebrew: 'קרד, קרדיה', value: "לב" },
    { id: "1", english: "Corp-", hebrew: 'קורפ', value: "הגוף" },
    { id: "1", english: "Cyc-", hebrew: 'ציס', value: "מעגל" },
    { id: "1", english: "Cyst", hebrew: 'צסט', value: "שלפחות ציסטה" },
    { id: "1", english: "Dent-", hebrew: 'דנט', value: "שן" },
    { id: "1", english: "Edem-", hebrew: 'אדמ', value: "נפיחות" },
    { id: "1", english: "Embryo", hebrew: 'אמבריו', value: "עובר" },
    { id: "1", english: "Enter-", hebrew: 'אנטר', value: "מעיים" },
    { id: "1", english: "Eryth--", hebrew: 'אריט', value: "אדום" },
    { id: "1", english: "Flex", hebrew: 'פלקס', value: "לכופף" },
    { id: "1", english: "Fract-", hebrew: 'פרקט', value: "לשבור לחתיכות" },
    { id: "1", english: "Gast", hebrew: 'גסט', value: "בטן קיבה" },
    { id: "1", english: "Gnosis", hebrew: 'גנוסיס', value: "מידע" },
    { id: "1", english: "-graph", hebrew: 'גרף', value: "לרשום" },
    { id: "1", english: "Hem- , em-", hebrew: 'המ', value: "דם" },
    { id: "1", english: "Homerus", hebrew: 'הומרוס', value: "זרוע" },
    { id: "1", english: "Hydr-", hebrew: 'הידר', value: "מים" },
    { id: "1", english: "Hystr-", hebrew: 'היסטר', value: "רחם" },
    { id: "1", english: "Ling-", hebrew: 'לינג', value: "לשון" },
    { id: "1", english: "Mal-", hebrew: 'מל', value: "רע, גרוע" },
    { id: "1", english: "Med-", hebrew: 'מד', value: "אמצע" },
    { id: "1", english: "Mega-", hebrew: 'מגה', value: "גדול" },
    { id: "1", english: "Melan-, Melen-", hebrew: 'מלנ', value: "שחור" },
    { id: "1", english: "Men-, Mena-", hebrew: 'מנ', value: "חודשי" },
    { id: "1", english: "Menin-", hebrew: 'מנין', value: "קרום המכסה את המוח וחוט השדרה" },
    { id: "1", english: "Morb-", hebrew: 'מורב', value: "מחלה" },
    { id: "1", english: "Myo-", hebrew: 'מיו', value: "שריר" },
    { id: "1", english: "Nephr-", hebrew: 'נפר', value: "כליה" },

  ];

  return (
    // <div style={{border:"1px solid ", width: '300px', height: '300px'}} ref={ref}>
    <CardContainer cards={cards}></CardContainer>
    // </div>
  );
}

export default App;
