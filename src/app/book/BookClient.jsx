"use client";
import { Fragment, useState, useEffect } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import "dirham/css";
import { DirhamIcon } from "dirham/react";

function css(str) {
    return Object.fromEntries(
        str
            .split(";")
            .filter((x) => x.includes(":"))
            .map((x) => {
                const i = x.indexOf(":");
                return [
                    x
                        .slice(0, i)
                        .trim()
                        .replace(/-([a-z])/g, (_, c) => c.toUpperCase()),
                    x.slice(i + 1).trim(),
                ];
            }),
    );
}
function moneyText(value) {
    if (typeof value !== "string" || !value.includes("Ð")) return value;
    return value.split("Ð").map((part, i) => (
        <Fragment key={i}>
            {i > 0 && <DirhamIcon size="1em" />}
            {part}
        </Fragment>
    ));
}
function dubaiDate() {
    const [y, m, d] = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Dubai",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
        .formatToParts(new Date())
        .filter((p) => ["year", "month", "day"].includes(p.type))
        .sort(
            (a, b) =>
                ["year", "month", "day"].indexOf(a.type) -
                ["year", "month", "day"].indexOf(b.type),
        )
        .map((p) => Number(p.value));
    return new Date(y, m - 1, d);
}
function dubaiHour() {
    const p = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
    }).formatToParts(new Date());
    return (
        Number(p.find((x) => x.type === "hour").value) +
        Number(p.find((x) => x.type === "minute").value) / 60
    );
}
var CATS = [
    { id: "sup", name: "SUP" },
    { id: "kayak", name: "Kayak" },
    { id: "efoil", name: "E-Foil" },
    { id: "pedalo", name: "Pedalo" },
    { id: "park", name: "Water Park" },
];
var PRODUCTS = {
    sup: [
        {
            id: "sup1",
            name: "SUP Rental",
            dur: "1 hour",
            price: 75,
            unit: "boards",
            note: "Quick tutorial first, then paddle at your own pace",
        },
        {
            id: "sup5",
            name: "Monday Paddle Hour",
            dur: "1 hour",
            price: 60,
            unit: "boards",
            note: "SUP or single kayak, Mondays only",
            tag: "Save Ð 15",
            save: 15,
            days: [1],
        },
        {
            id: "sup6",
            name: "SUP + Coffee",
            dur: "1 hour",
            price: 85,
            unit: "guests",
            note: "SUP rental with a coffee",
            tag: "Offer",
        },
        {
            id: "sup7",
            name: "Flexi Pack",
            dur: "4 hours",
            price: 240,
            unit: "packs",
            note: "4 hours of SUP or single-seat kayak. Use across visits or share with friends",
            tag: "Save Ð 60",
            save: 60,
        },
        {
            id: "sup2",
            name: "SUP Lesson",
            dur: "1 hour",
            price: 250,
            unit: "guests",
            note: "Coached and supervised by an IGNITE instructor for the full hour",
        },
        {
            id: "sup3",
            name: "Giant SUP",
            dur: "1 hour",
            price: 250,
            unit: "boards",
            note: "One board for groups of up to 6",
        },
        {
            id: "sup4",
            name: "Transparent SUP",
            dur: "1 hour",
            price: 95,
            unit: "boards",
            note: "See-through board",
        },
    ],
    kayak: [
        {
            id: "k1",
            name: "Single Kayak",
            dur: "1 hour",
            price: 65,
            unit: "kayaks",
            note: "1 paddler",
        },
        {
            id: "k7",
            name: "Monday Paddle Hour",
            dur: "1 hour",
            price: 60,
            unit: "kayaks",
            note: "Single, double or triple kayak, Mondays only",
            tag: "Save up to Ð 35",
            days: [1],
            vLabel: "Kayak type",
            vPrompt: "Choose a kayak type to continue",
            variants: [
                { name: "Single", save: 5, std: 65, unit: "single kayaks" },
                { name: "Double", save: 20, std: 80, unit: "double kayaks" },
                { name: "Triple", save: 35, std: 95, unit: "triple kayaks" },
            ],
        },
        {
            id: "k2",
            name: "Double Kayak",
            dur: "1 hour",
            price: 80,
            unit: "kayaks",
            note: "2 paddlers",
        },
        {
            id: "k3",
            name: "Transparent Double",
            dur: "1 hour",
            price: 160,
            unit: "kayaks",
            note: "2 paddlers, see-through hull with balance beams",
        },
        {
            id: "k4",
            name: "Triple Kayak",
            dur: "1 hour",
            price: 95,
            unit: "kayaks",
            note: "2 adults and 1 child",
        },
        {
            id: "k5",
            name: "Kids Kayak",
            dur: "1 hour",
            price: 50,
            unit: "kayaks",
            note: "Ages 6-10, adult supervision required",
        },
        {
            id: "k6",
            name: "Flexi Pack",
            dur: "4 hours",
            price: 240,
            unit: "packs",
            note: "4 hours of SUP or single-seat kayak. Use across visits or share with friends",
            tag: "Save Ð 20",
            save: 20,
        },
    ],
    efoil: [
        {
            id: "e1",
            name: "E-Foil Quick Ride",
            dur: "20 min",
            price: 400,
            unit: "riders",
            note: "For experienced riders",
        },
        {
            id: "e2",
            name: "E-Foil Session",
            dur: "40 min",
            price: 700,
            unit: "riders",
            note: "Includes a lesson",
        },
        {
            id: "e3",
            name: "E-Foil Hour",
            dur: "60 min",
            price: 1000,
            unit: "riders",
            note: "Extended ride, lesson included",
        },
        {
            id: "e4",
            name: "Kids E-Foil",
            dur: "40 min",
            price: 350,
            unit: "riders",
            note: "Ages 8-16, lesson included",
            tag: "Save Ð 350",
            save: 350,
        },
        {
            id: "e5",
            name: "E-Foil Flexi Pack",
            dur: "4 x 40 min",
            price: 2400,
            unit: "packs",
            note: "Four 40-minute sessions, lesson included. Share between up to 4 riders",
            tag: "Save Ð 400",
            save: 400,
        },
        {
            id: "e6",
            name: "Mermen Tuesday",
            dur: "40 min",
            price: 350,
            unit: "riders",
            note: "Lesson included, Tuesdays only",
            tag: "Save Ð 350",
            save: 350,
            days: [2],
        },
        {
            id: "e7",
            name: "Mermaid Wednesday",
            dur: "40 min",
            price: 350,
            unit: "riders",
            note: "Ladies day, lesson included, Wednesdays only",
            tag: "Save Ð 350",
            save: 350,
            days: [3],
        },
        {
            id: "e8",
            name: "Thursday Half Hour",
            dur: "30 min",
            price: 300,
            unit: "riders",
            note: "Lesson included, Thursdays only",
            tag: "Offer",
            days: [4],
        },
        {
            id: "e9",
            name: "Duo Friday",
            dur: "40 min",
            price: 700,
            unit: "pairs",
            note: "2 riders together, lesson included, Fridays only",
            tag: "Save Ð 700",
            save: 700,
            days: [5],
        },
    ],
    pedalo: [
        {
            id: "p1",
            name: "Pedalo",
            dur: "1 hour",
            price: 280,
            unit: "pedalos",
            note: "4-seater",
        },
    ],
    park: [
        {
            id: "w3",
            name: "Family Pack",
            dur: "1 hour",
            price: 250,
            unit: "packs",
            note: "2 water park passes (ages 6 to 16, min. 110 cm) plus 2 SUPs, 2 single kayaks or a 2-seater kayak",
            tag: "Save up to Ð 100",
            vLabel: "Choose your paddle",
            vPrompt: "Choose your paddle to continue",
            variants: [
                {
                    name: "2 SUPs",
                    save: 100,
                    std: 350,
                    incl: "2 water park passes + 2 SUPs",
                },
                {
                    name: "2 single kayaks",
                    save: 80,
                    std: 330,
                    incl: "2 water park passes + 2 single kayaks",
                },
                {
                    name: "1 double kayak",
                    save: 30,
                    std: 280,
                    incl: "2 water park passes + 1 double kayak",
                },
            ],
        },
        {
            id: "w1",
            name: "Water Park",
            dur: "1 hour",
            price: 100,
            unit: "guests",
            note: "Ages 6 to 16, min. height 110 cm, life vest provided",
        },
        {
            id: "w2",
            name: "Family Fun Time",
            dur: "8-11 am",
            price: 100,
            unit: "kids",
            note: "Ages 3-5, parents can join. Sundays only, booking required",
            tag: "Sundays",
            days: [0],
            hours: [8],
            slotLabel: "8:00 - 11:00 am",
        },
    ],
};
var HOURS = [6.5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16.5];
var GROUPS = [
    { label: "Morning", min: 0, max: 12 },
    { label: "Afternoon", min: 12, max: 16 },
    { label: "Sunset", min: 16, max: 24 },
];
var MNL = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
var C_BASE =
    "height: 48px; border-radius: 10px; border: 0; font-size: 15px; font-weight: 600; display: flex; align-items: center; justify-content: center; font-family: inherit; ";
var C_ON = C_BASE + "background: #222E34; color: #FFFFFF; cursor: pointer";
var C_OFF = C_BASE + "background: #FFFFFF; color: #222E34; cursor: pointer";
var C_TODAY =
    C_BASE +
    "background: #FFFFFF; color: #222E34; cursor: pointer; box-shadow: inset 0 0 0 2px #54C8E8";
var C_DIS =
    C_BASE + "background: transparent; color: #A9B2B7; cursor: not-allowed";
var NAV =
    "width: 40px; height: 40px; border-radius: 10px; border: 0; background: #FFFFFF; color: #222E34; display: flex; align-items: center; justify-content: center; ";
var DN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var MN = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

var CAT_BASE =
    "height: 44px; padding: 0 20px; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; ";
var CAT_ON = CAT_BASE + "background: #222E34; color: #FFFFFF; border: 0";
var CAT_OFF = CAT_BASE + "background: #FFFFFF; color: #222E34; border: 0";
var P_BASE =
    "display: flex; flex-direction: column; align-items: flex-start; gap: 4px; min-height: 124px; padding: 14px; border-radius: 10px; cursor: pointer; color: #222E34; text-align: left; background: #FFFFFF; ";
var P_ON = P_BASE + "border: 2px solid #54C8E8";
var P_OFF = P_BASE + "border: 2px solid #FFFFFF";
var D_BASE =
    "flex: 0 0 64px; height: 80px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; border: 0; ";
var D_ON = D_BASE + "background: #222E34; color: #FFFFFF";
var D_OFF = D_BASE + "background: #FFFFFF; color: #222E34";
var D_DIS = D_BASE + "background: #EEF0F2; color: #888888; cursor: not-allowed";
var S_BASE =
    "min-height: 56px; border-radius: 10px; padding: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0; font-size: 15px; font-weight: 600; border: 0; ";
var S_ON = S_BASE + "background: #222E34; color: #FFFFFF; cursor: pointer";
var S_OFF = S_BASE + "background: #FFFFFF; color: #222E34; cursor: pointer";
var S_DIS =
    S_BASE +
    "background: #EEF0F2; color: #888888; cursor: not-allowed; text-decoration: line-through";
var PAY_BASE =
    "width: 100%; padding: 14px 36px; border-radius: 10px; border: 0; font-size: 15px; font-weight: 600; ";
var PAY_ON = PAY_BASE + "background: #FF9015; color: #FFFFFF; cursor: pointer";
var PAY_OFF =
    PAY_BASE +
    "background: rgba(255,255,255,.12); color: rgba(255,255,255,.6); cursor: not-allowed";

function fmt(n) {
    return "Ð " + n.toLocaleString("en-US");
}
function hourLabel(h) {
    var hr = Math.floor(h);
    var hh = hr > 12 ? hr - 12 : hr;
    return hh + ":" + (h % 1 ? "30" : "00") + " " + (hr >= 12 ? "pm" : "am");
}
function getValues(s, setState, base) {
    function isPast(day, h) {
        return day === 0 && h <= dubaiHour();
    }
    function isOpen(day, h) {
        return h !== null && h !== undefined && !isPast(day, h);
    }
    function allowed(p, d) {
        return (
            !p.days ||
            p.days.indexOf(
                new Date(
                    base.getFullYear(),
                    base.getMonth(),
                    base.getDate() + d,
                ).getDay(),
            ) >= 0
        );
    }
    function hourOk(p, h) {
        return !p.hours || p.hours.indexOf(h) >= 0;
    }
    function monthOf(d) {
        var x = new Date(
            base.getFullYear(),
            base.getMonth(),
            base.getDate() + d,
        );
        return (
            (x.getFullYear() - base.getFullYear()) * 12 +
            x.getMonth() -
            base.getMonth()
        );
    }
    function firstAllowed(p) {
        for (var d = 0; d < 76; d++) {
            if (allowed(p, d)) return d;
        }
        return 0;
    }

    var self = {
        setState: (patch) => setState((old) => ({ ...old, ...patch })),
    };
    var prods = PRODUCTS[s.cat];
    var prod =
        prods.filter(function (p) {
            return p.id === s.pid;
        })[0] || prods[0];

    var cats = CATS.map(function (c) {
        var on = c.id === s.cat;
        return {
            name: c.name,
            style: on ? CAT_ON : CAT_OFF,
            pressed: on ? "true" : "false",
            pick: function () {
                self.setState({
                    cat: c.id,
                    pid: PRODUCTS[c.id][0].id,
                    qty: 1,
                    variant: null,
                    resident: false,
                    day: firstAllowed(PRODUCTS[c.id][0]),
                    month: monthOf(firstAllowed(PRODUCTS[c.id][0])),
                    slot: null,
                });
            },
        };
    });

    var products = prods.map(function (p) {
        var on = p.id === prod.id;
        return {
            name: p.name,
            dur: p.dur,
            note: p.note,
            price: fmt(p.price),
            on: on,
            hasTag: !!p.tag,
            tag: p.tag || "",
            style: on ? P_ON : P_OFF,
            pressed: on ? "true" : "false",
            pick: function () {
                var nd = allowed(p, s.day) ? s.day : firstAllowed(p);
                var ns = p.hours
                    ? p.hours[0]
                    : isOpen(nd, s.slot) && hourOk(p, s.slot)
                      ? s.slot
                      : null;
                if (ns !== null && !isOpen(nd, ns)) ns = null;
                self.setState({
                    pid: p.id,
                    resident: false,
                    variant: null,
                    day: nd,
                    month: monthOf(nd),
                    slot: ns,
                });
            },
        };
    });

    var MAXD = 75;
    var mo = s.month || 0;
    var first = new Date(base.getFullYear(), base.getMonth() + mo, 1);
    var lead = (first.getDay() + 6) % 7;
    var dim = new Date(
        base.getFullYear(),
        base.getMonth() + mo + 1,
        0,
    ).getDate();
    var cells = [];
    for (var b = 0; b < lead; b++) cells.push({ blank: true, isDay: false });
    for (var dd = 1; dd <= dim; dd++) {
        (function (dd) {
            var rel = Math.round(
                (Date.UTC(base.getFullYear(), base.getMonth() + mo, dd) -
                    Date.UTC(
                        base.getFullYear(),
                        base.getMonth(),
                        base.getDate(),
                    )) /
                    86400000,
            );
            var ok = rel >= 0 && rel <= MAXD && allowed(prod, rel);
            var on = ok && rel === s.day;
            var cd = new Date(
                base.getFullYear(),
                base.getMonth(),
                base.getDate() + rel,
            );
            cells.push({
                blank: false,
                isDay: true,
                num: dd,
                disabled: !ok,
                pressed: on ? "true" : "false",
                aria: DN[cd.getDay()] + " " + dd + " " + MN[cd.getMonth()],
                style: !ok ? C_DIS : on ? C_ON : rel === 0 ? C_TODAY : C_OFF,
                pick: function () {
                    if (!ok) return;
                    self.setState({
                        day: rel,
                        slot: isOpen(rel, s.slot) ? s.slot : null,
                    });
                },
            });
        })(dd);
    }
    var vIdx =
        prod.variants && s.variant !== null && s.variant !== undefined
            ? Math.min(s.variant, prod.variants.length - 1)
            : -1;
    var vSel = vIdx >= 0 ? prod.variants[vIdx] : null;
    var needVar = !!prod.variants && !vSel;
    var saveUnit = vSel ? vSel.save : prod.save || 0;
    var variants = prod.variants
        ? prod.variants.map(function (v, i) {
              var on = i === vIdx;
              return {
                  name: v.name,
                  pressed: on ? "true" : "false",
                  style:
                      "height: 44px; padding: 0 16px; border-radius: 10px; border: 0; font-size: 14px; font-weight: 600; cursor: pointer; " +
                      (on
                          ? "background: #222E34; color: #FFFFFF"
                          : "background: #f8f9fa; color: #222E34"),
                  pick: function () {
                      self.setState({ variant: i });
                  },
              };
          })
        : [];
    var slotOk =
        allowed(prod, s.day) && isOpen(s.day, s.slot) && hourOk(prod, s.slot);
    var payOk = slotOk && !needVar;
    var payPrompt = needVar ? prod.vPrompt : "Choose a time to continue";

    var LIST = prod.hours || HOURS;
    var groups = GROUPS.map(function (g) {
        var slots = [];
        for (var i = 0; i < LIST.length; i++) {
            (function (i) {
                var h = LIST[i];
                if (h < g.min || h >= g.max) return;
                var dis = isPast(s.day, h);
                var on = !dis && s.slot === h;
                slots.push({
                    time: prod.slotLabel || hourLabel(h),
                    disabled: dis,
                    pressed: on ? "true" : "false",
                    style: dis ? S_DIS : on ? S_ON : S_OFF,
                    pick: function () {
                        if (!dis) self.setState({ slot: h });
                    },
                });
            })(i);
        }
        return { label: g.label, slots: slots };
    });

    var dt = new Date(
        base.getFullYear(),
        base.getMonth(),
        base.getDate() + s.day,
    );
    var total = prod.price * s.qty;

    return {
        cats: cats,
        products: products,
        isEfoil: s.cat === "efoil",
        qty: s.qty,
        qtyQuestion:
            "How many " + (vSel && vSel.unit ? vSel.unit : prod.unit) + "?",
        inc: function () {
            self.setState({ qty: Math.min(10, s.qty + 1) });
        },
        dec: function () {
            self.setState({ qty: Math.max(1, s.qty - 1) });
        },
        cells: cells,
        monthName: MNL[first.getMonth()] + " " + first.getFullYear(),
        noPrev: mo <= 0,
        noNext: mo >= monthOf(MAXD),
        prevStyle:
            NAV +
            (mo <= 0 ? "opacity: .35; cursor: not-allowed" : "cursor: pointer"),
        nextStyle:
            NAV +
            (mo >= monthOf(MAXD)
                ? "opacity: .35; cursor: not-allowed"
                : "cursor: pointer"),
        prevMonth: function () {
            if (mo > 0) self.setState({ month: mo - 1 });
        },
        nextMonth: function () {
            if (mo < monthOf(MAXD)) self.setState({ month: mo + 1 });
        },
        groups: groups.filter(function (g) {
            return g.slots.length > 0;
        }),
        sumProduct: vSel ? prod.name + " (" + vSel.name + ")" : prod.name,
        sumDur: prod.dur + ", " + fmt(prod.price) + " each",
        sumDate: DN[dt.getDay()] + " " + dt.getDate() + " " + MN[dt.getMonth()],
        sumTime: slotOk ? prod.slotLabel || hourLabel(s.slot) : "Choose a time",
        sumQtyLabel: prod.unit.charAt(0).toUpperCase() + prod.unit.slice(1),
        sumQtyLine: s.qty + " x " + fmt(prod.price),
        total: fmt(total),
        resEligible: ["e1", "e2", "e3"].indexOf(prod.id) >= 0,
        resident: !!s.resident,
        resOn: ["e1", "e2", "e3"].indexOf(prod.id) >= 0 && !!s.resident,
        toggleRes: function () {
            self.setState({ resident: !s.resident });
        },
        hasSave: saveUnit > 0,
        sumSave: "- " + fmt(saveUnit * s.qty),
        hasVariants: !!prod.variants,
        variantLabel: prod.vLabel || "Option",
        variantNote: vSel
            ? "Standard price " +
              fmt(vSel.std) +
              ". You save " +
              fmt(vSel.save) +
              " each."
            : "Pick one option to continue.",
        variants: variants,
        payDisabled: !payOk,
        payStyle: payOk ? PAY_ON : PAY_OFF,
        payText: payOk ? "Pay " + fmt(total) : payPrompt,
        hasIncl: !!(vSel && vSel.incl),
        sumIncl: vSel && vSel.incl ? vSel.incl : "",
    };
}

export function BookClient() {
    const [base, setBase] = useState(null);
    const [state, setState] = useState({
        cat: "sup",
        pid: "sup1",
        qty: 2,
        day: 1,
        month: 0,
        slot: 9,
    });
    const [agreed, setAgreed] = useState(false);
    const [notice, setNotice] = useState("");
    useEffect(() => {
        setBase(dubaiDate());
    }, []);
    function handlePay() {
        const fields = ["d-name", "d-phone", "d-email"].map((id) =>
            document.getElementById(id),
        );
        for (const field of fields) {
            if (!field.value.trim() || !field.checkValidity()) {
                field.reportValidity();
                field.focus();
                return;
            }
        }
        if (!agreed) {
            setNotice("Please accept the safety rules and booking terms.");
            return;
        }
        setNotice(
            "Payment is not connected yet. No booking or payment has been made.",
        );
    }
    if (!base)
        return (
            <>
                <SiteHeader />
                <SiteFooter />
            </>
        );
    const {
        cats,
        products,
        isEfoil,
        qty,
        qtyQuestion,
        inc,
        dec,
        cells,
        monthName,
        noPrev,
        noNext,
        prevStyle,
        nextStyle,
        prevMonth,
        nextMonth,
        groups,
        sumProduct,
        sumDur,
        sumDate,
        sumTime,
        sumQtyLabel,
        sumQtyLine,
        total,
        resEligible,
        resident,
        resOn,
        toggleRes,
        hasSave,
        sumSave,
        hasVariants,
        variantLabel,
        variantNote,
        variants,
        payDisabled,
        payStyle,
        payText,
        hasIncl,
        sumIncl,
    } = getValues(state, setState, base);
    return (
        <>
            <SiteHeader />
            <div className="ignite-booking">
                <div
                    style={css(
                        "min-height: 100%; background: #FFFFFF; color: #222E34; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 15px; line-height: 1.5",
                    )}
                >
                    <section style={css("background: #222E34; color: #FFFFFF")}>
                        <div
                            style={css(
                                "max-width: 1100px; margin: 0 auto; padding: 56px 40px; box-sizing: border-box; display: flex; flex-direction: column; gap: 10px",
                            )}
                        >
                            <p
                                style={css(
                                    "margin: 0; font-size: 13px; font-weight: 600; color: #54C8E8",
                                )}
                            >
                                Rentals and classes
                            </p>
                            <h1
                                style={css(
                                    "margin: 0; font-size: 40px; font-weight: 700; line-height: 1.15",
                                )}
                            >
                                Book your session
                            </h1>
                            <p
                                style={css(
                                    "margin: 0; max-width: 620px; font-size: 16px; color: rgba(255,255,255,.7)",
                                )}
                            >
                                Choose your activity, date and time. Pay in one
                                step and get instant confirmation. No booking
                                fees.
                            </p>
                            <div
                                style={css(
                                    "display: flex; flex-wrap: wrap; gap: 24px; margin-top: 10px; font-size: 13px; color: rgba(255,255,255,.7)",
                                )}
                            >
                                <span
                                    style={css(
                                        "display: flex; align-items: center; gap: 6px",
                                    )}
                                >
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="#FF9015"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"></path>
                                    </svg>
                                    4.9 on Google, 141 reviews
                                </span>
                                <span
                                    style={css(
                                        "display: flex; align-items: center; gap: 6px",
                                    )}
                                >
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#54C8E8"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"></path>
                                        <circle
                                            cx="12"
                                            cy="10"
                                            r="2.5"
                                        ></circle>
                                    </svg>
                                    RIVA Beach Club, Palm Jumeirah
                                </span>
                            </div>
                        </div>
                    </section>
                    <main
                        style={css(
                            "max-width: 1100px; margin: 0 auto; padding: 60px 40px; box-sizing: border-box",
                        )}
                        className="booking-main"
                    >
                        <div
                            style={css(
                                "display: flex; flex-wrap: wrap; align-items: flex-start; gap: 20px",
                            )}
                        >
                            <div
                                style={css(
                                    "flex: 999 1 560px; min-width: 0; display: flex; flex-direction: column; gap: 20px",
                                )}
                            >
                                <section
                                    style={css(
                                        "background: #f8f9fa; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px",
                                    )}
                                >
                                    <div
                                        style={css(
                                            "display: flex; align-items: center; gap: 12px",
                                        )}
                                    >
                                        <span
                                            style={css(
                                                "width: 28px; height: 28px; border-radius: 14px; background: #54C8E8; color: #222E34; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center",
                                            )}
                                        >
                                            1
                                        </span>
                                        <h2
                                            style={css(
                                                "margin: 0; font-size: 22px; font-weight: 700",
                                            )}
                                        >
                                            Choose your activity
                                        </h2>
                                    </div>
                                    <div
                                        role="group"
                                        aria-label="Activity type"
                                        style={css(
                                            "display: flex; flex-wrap: wrap; gap: 8px",
                                        )}
                                    >
                                        {cats.map((c, index) => (
                                            <Fragment key={index}>
                                                <button
                                                    type="button"
                                                    style={css(c.style)}
                                                    aria-pressed={c.pressed}
                                                    onClick={c.pick}
                                                >
                                                    {moneyText(c.name)}
                                                </button>
                                            </Fragment>
                                        ))}
                                    </div>
                                    {isEfoil && (
                                        <>
                                            <div
                                                style={css(
                                                    "background: #FFFFFF; border-radius: 10px; padding: 12px 14px; font-size: 14px; display: flex; gap: 10px; align-items: center",
                                                )}
                                            >
                                                <span
                                                    style={css(
                                                        "color: #FF9015; font-weight: 700",
                                                    )}
                                                >
                                                    UAE resident perk
                                                </span>
                                                <span>
                                                    Extra 10 minutes on any
                                                    full-price E-Foil session.
                                                    Not valid with other offers.
                                                </span>
                                            </div>
                                        </>
                                    )}
                                    <div
                                        style={css(
                                            "display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px",
                                        )}
                                    >
                                        {products.map((p, index) => (
                                            <Fragment key={index}>
                                                <button
                                                    type="button"
                                                    style={css(p.style)}
                                                    aria-pressed={p.pressed}
                                                    onClick={p.pick}
                                                >
                                                    <span
                                                        style={css(
                                                            "display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; width: 100%",
                                                        )}
                                                    >
                                                        <span
                                                            style={css(
                                                                "font-size: 15px; font-weight: 700; text-align: left",
                                                            )}
                                                        >
                                                            {moneyText(p.name)}
                                                        </span>
                                                        {p.on && (
                                                            <>
                                                                <span
                                                                    style={css(
                                                                        "width: 20px; height: 20px; border-radius: 10px; background: #54C8E8; display: flex; align-items: center; justify-content: center; flex-shrink: 0",
                                                                    )}
                                                                >
                                                                    <svg
                                                                        width="11"
                                                                        height="11"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="#222E34"
                                                                        strokeWidth="4"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path d="M5 12l5 5L20 7"></path>
                                                                    </svg>
                                                                </span>
                                                            </>
                                                        )}
                                                    </span>
                                                    {p.hasTag && (
                                                        <>
                                                            <span
                                                                style={css(
                                                                    "background: #FF9015; color: #FFFFFF; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 6px",
                                                                )}
                                                            >
                                                                {moneyText(
                                                                    p.tag,
                                                                )}
                                                            </span>
                                                        </>
                                                    )}
                                                    <span
                                                        style={css(
                                                            "font-size: 13px; color: #6B777D; text-align: left",
                                                        )}
                                                    >
                                                        {moneyText(p.note)}
                                                    </span>
                                                    <span
                                                        style={css(
                                                            "display: flex; justify-content: space-between; align-items: baseline; width: 100%; margin-top: auto; padding-top: 8px",
                                                        )}
                                                    >
                                                        <span
                                                            style={css(
                                                                "font-size: 13px; color: #6B777D",
                                                            )}
                                                        >
                                                            {moneyText(p.dur)}
                                                        </span>
                                                        <span
                                                            style={css(
                                                                "font-size: 16px; font-weight: 700; color: #222E34",
                                                            )}
                                                        >
                                                            {moneyText(p.price)}
                                                        </span>
                                                    </span>
                                                </button>
                                            </Fragment>
                                        ))}
                                    </div>
                                    {hasVariants && (
                                        <>
                                            <div
                                                style={css(
                                                    "display: flex; flex-direction: column; gap: 10px; background: #FFFFFF; border-radius: 10px; padding: 14px 16px",
                                                )}
                                            >
                                                <span
                                                    style={css(
                                                        "font-size: 15px; font-weight: 600",
                                                    )}
                                                >
                                                    {moneyText(variantLabel)}
                                                </span>
                                                <div
                                                    role="group"
                                                    aria-label={variantLabel}
                                                    style={css(
                                                        "display: flex; flex-wrap: wrap; gap: 6px",
                                                    )}
                                                >
                                                    {variants.map(
                                                        (v, index) => (
                                                            <Fragment
                                                                key={index}
                                                            >
                                                                <button
                                                                    type="button"
                                                                    style={css(
                                                                        v.style,
                                                                    )}
                                                                    aria-pressed={
                                                                        v.pressed
                                                                    }
                                                                    onClick={
                                                                        v.pick
                                                                    }
                                                                >
                                                                    {moneyText(
                                                                        v.name,
                                                                    )}
                                                                </button>
                                                            </Fragment>
                                                        ),
                                                    )}
                                                </div>
                                                <span
                                                    style={css(
                                                        "font-size: 13px; color: #6B777D",
                                                    )}
                                                >
                                                    {moneyText(variantNote)}
                                                </span>
                                            </div>
                                        </>
                                    )}
                                    <div
                                        style={css(
                                            "display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; background: #FFFFFF; border-radius: 10px; padding: 8px 8px 8px 16px",
                                        )}
                                    >
                                        <span
                                            style={css(
                                                "font-size: 15px; font-weight: 600",
                                            )}
                                        >
                                            {moneyText(qtyQuestion)}
                                        </span>
                                        <div
                                            style={css(
                                                "display: flex; align-items: center; gap: 4px",
                                            )}
                                        >
                                            <button
                                                type="button"
                                                aria-label="Decrease"
                                                onClick={dec}
                                                style={css(
                                                    "width: 44px; height: 44px; border: 0; border-radius: 10px; background: #f8f9fa; color: #222E34; cursor: pointer; display: flex; align-items: center; justify-content: center",
                                                )}
                                            >
                                                <span className="booking-control-icon">−</span>
                                            </button>
                                            <span
                                                aria-live="polite"
                                                style={css(
                                                    "min-width: 40px; text-align: center; font-size: 17px; font-weight: 700",
                                                )}
                                            >
                                                {moneyText(qty)}
                                            </span>
                                            <button
                                                type="button"
                                                aria-label="Increase"
                                                onClick={inc}
                                                style={css(
                                                    "width: 44px; height: 44px; border: 0; border-radius: 10px; background: #f8f9fa; color: #222E34; cursor: pointer; display: flex; align-items: center; justify-content: center",
                                                )}
                                            >
                                                <span className="booking-control-icon">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    style={css(
                                        "background: #f8f9fa; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px",
                                    )}
                                >
                                    <div
                                        style={css(
                                            "display: flex; align-items: center; justify-content: space-between; gap: 12px",
                                        )}
                                    >
                                        <div
                                            style={css(
                                                "display: flex; align-items: center; gap: 12px",
                                            )}
                                        >
                                            <span
                                                style={css(
                                                    "width: 28px; height: 28px; border-radius: 14px; background: #54C8E8; color: #222E34; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center",
                                                )}
                                            >
                                                2
                                            </span>
                                            <h2
                                                style={css(
                                                    "margin: 0; font-size: 22px; font-weight: 700",
                                                )}
                                            >
                                                Pick a date
                                            </h2>
                                        </div>
                                        <div
                                            style={css(
                                                "display: flex; align-items: center; gap: 6px",
                                            )}
                                        >
                                            <button
                                                type="button"
                                                aria-label="Previous month"
                                                disabled={noPrev}
                                                onClick={prevMonth}
                                                style={css(prevStyle)}
                                            >
                                                <span className="booking-control-icon">‹</span>
                                            </button>
                                            <span
                                                style={css(
                                                    "min-width: 120px; text-align: center; font-size: 15px; font-weight: 600",
                                                )}
                                            >
                                                {moneyText(monthName)}
                                            </span>
                                            <button
                                                type="button"
                                                aria-label="Next month"
                                                disabled={noNext}
                                                onClick={nextMonth}
                                                style={css(nextStyle)}
                                            >
                                                <span className="booking-control-icon">›</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        style={css(
                                            "display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 6px",
                                        )}
                                    >
                                        <span
                                            style={css(
                                                "font-size: 12px; font-weight: 600; color: #6B777D; text-align: center; padding: 2px 0",
                                            )}
                                        >
                                            Mon
                                        </span>
                                        <span
                                            style={css(
                                                "font-size: 12px; font-weight: 600; color: #6B777D; text-align: center; padding: 2px 0",
                                            )}
                                        >
                                            Tue
                                        </span>
                                        <span
                                            style={css(
                                                "font-size: 12px; font-weight: 600; color: #6B777D; text-align: center; padding: 2px 0",
                                            )}
                                        >
                                            Wed
                                        </span>
                                        <span
                                            style={css(
                                                "font-size: 12px; font-weight: 600; color: #6B777D; text-align: center; padding: 2px 0",
                                            )}
                                        >
                                            Thu
                                        </span>
                                        <span
                                            style={css(
                                                "font-size: 12px; font-weight: 600; color: #6B777D; text-align: center; padding: 2px 0",
                                            )}
                                        >
                                            Fri
                                        </span>
                                        <span
                                            style={css(
                                                "font-size: 12px; font-weight: 600; color: #6B777D; text-align: center; padding: 2px 0",
                                            )}
                                        >
                                            Sat
                                        </span>
                                        <span
                                            style={css(
                                                "font-size: 12px; font-weight: 600; color: #6B777D; text-align: center; padding: 2px 0",
                                            )}
                                        >
                                            Sun
                                        </span>
                                        {cells.map((c, index) => (
                                            <Fragment key={index}>
                                                {c.blank && (
                                                    <>
                                                        <span aria-hidden="true"></span>
                                                    </>
                                                )}
                                                {c.isDay && (
                                                    <>
                                                        <button
                                                            type="button"
                                                            style={css(c.style)}
                                                            aria-pressed={
                                                                c.pressed
                                                            }
                                                            aria-label={c.aria}
                                                            disabled={
                                                                c.disabled
                                                            }
                                                            onClick={c.pick}
                                                        >
                                                            {moneyText(c.num)}
                                                        </button>
                                                    </>
                                                )}
                                            </Fragment>
                                        ))}
                                    </div>
                                </section>
                                <section
                                    style={css(
                                        "background: #f8f9fa; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px",
                                    )}
                                >
                                    <div
                                        style={css(
                                            "display: flex; align-items: center; gap: 12px",
                                        )}
                                    >
                                        <span
                                            style={css(
                                                "width: 28px; height: 28px; border-radius: 14px; background: #54C8E8; color: #222E34; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center",
                                            )}
                                        >
                                            3
                                        </span>
                                        <h2
                                            style={css(
                                                "margin: 0; font-size: 22px; font-weight: 700",
                                            )}
                                        >
                                            Pick a time
                                        </h2>
                                    </div>
                                    {groups.map((g, index) => (
                                        <Fragment key={index}>
                                            <div
                                                style={css(
                                                    "display: flex; flex-direction: column; gap: 8px",
                                                )}
                                            >
                                                <span
                                                    style={css(
                                                        "font-size: 13px; font-weight: 600; color: #6B777D",
                                                    )}
                                                >
                                                    {moneyText(g.label)}
                                                </span>
                                                <div
                                                    style={css(
                                                        "display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px",
                                                    )}
                                                >
                                                    {g.slots.map((t, index) => (
                                                        <Fragment key={index}>
                                                            <button
                                                                type="button"
                                                                style={css(
                                                                    t.style,
                                                                )}
                                                                aria-pressed={
                                                                    t.pressed
                                                                }
                                                                disabled={
                                                                    t.disabled
                                                                }
                                                                onClick={t.pick}
                                                            >
                                                                <span>
                                                                    {moneyText(
                                                                        t.time,
                                                                    )}
                                                                </span>
                                                            </button>
                                                        </Fragment>
                                                    ))}
                                                </div>
                                            </div>
                                        </Fragment>
                                    ))}
                                </section>
                                <section
                                    style={css(
                                        "background: #f8f9fa; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px",
                                    )}
                                >
                                    <div
                                        style={css(
                                            "display: flex; align-items: center; gap: 12px",
                                        )}
                                    >
                                        <span
                                            style={css(
                                                "width: 28px; height: 28px; border-radius: 14px; background: #54C8E8; color: #222E34; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center",
                                            )}
                                        >
                                            4
                                        </span>
                                        <h2
                                            style={css(
                                                "margin: 0; font-size: 22px; font-weight: 700",
                                            )}
                                        >
                                            Your details
                                        </h2>
                                    </div>
                                    <div
                                        style={css(
                                            "display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px",
                                        )}
                                    >
                                        <div
                                            style={css(
                                                "display: flex; flex-direction: column; gap: 6px",
                                            )}
                                        >
                                            <label
                                                htmlFor="d-name"
                                                style={css(
                                                    "font-size: 13px; font-weight: 600",
                                                )}
                                            >
                                                Full name
                                            </label>
                                            <input
                                                id="d-name"
                                                type="text"
                                                autoComplete="name"
                                                placeholder="As on your ID"
                                                style={css(
                                                    "height: 48px; border: 1px solid #E3E8EB; border-radius: 10px; padding: 0 14px; font-size: 15px; font-family: inherit; color: #222E34; background: #FFFFFF",
                                                )}
                                                required
                                            />
                                        </div>
                                        <div
                                            style={css(
                                                "display: flex; flex-direction: column; gap: 6px",
                                            )}
                                        >
                                            <label
                                                htmlFor="d-phone"
                                                style={css(
                                                    "font-size: 13px; font-weight: 600",
                                                )}
                                            >
                                                Mobile (WhatsApp)
                                            </label>
                                            <input
                                                id="d-phone"
                                                type="tel"
                                                autoComplete="tel"
                                                placeholder="+971 50 000 0000"
                                                style={css(
                                                    "height: 48px; border: 1px solid #E3E8EB; border-radius: 10px; padding: 0 14px; font-size: 15px; font-family: inherit; color: #222E34; background: #FFFFFF",
                                                )}
                                                required
                                            />
                                        </div>
                                        <div
                                            style={css(
                                                "display: flex; flex-direction: column; gap: 6px",
                                            )}
                                        >
                                            <label
                                                htmlFor="d-email"
                                                style={css(
                                                    "font-size: 13px; font-weight: 600",
                                                )}
                                            >
                                                Email
                                            </label>
                                            <input
                                                id="d-email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder="you@email.com"
                                                style={css(
                                                    "height: 48px; border: 1px solid #E3E8EB; border-radius: 10px; padding: 0 14px; font-size: 15px; font-family: inherit; color: #222E34; background: #FFFFFF",
                                                )}
                                                required
                                            />
                                        </div>
                                        <div
                                            style={css(
                                                "display: flex; flex-direction: column; gap: 6px",
                                            )}
                                        >
                                            <label
                                                htmlFor="d-voucher"
                                                style={css(
                                                    "font-size: 13px; font-weight: 600",
                                                )}
                                            >
                                                Voucher code (optional)
                                            </label>
                                            <div
                                                style={css(
                                                    "display: flex; gap: 8px",
                                                )}
                                            >
                                                <input
                                                    id="d-voucher"
                                                    type="text"
                                                    placeholder="Enter code"
                                                    style={css(
                                                        "flex: 1; min-width: 0; height: 48px; border: 1px solid #E3E8EB; border-radius: 10px; padding: 0 14px; font-size: 15px; font-family: inherit; color: #222E34; background: #FFFFFF",
                                                    )}
                                                />
                                                <button
                                                    type="button"
                                                    style={css(
                                                        "height: 48px; padding: 0 18px; border: 0; border-radius: 10px; background: #222E34; color: #FFFFFF; font-size: 14px; font-weight: 600; cursor: pointer",
                                                    )}
                                                    onClick={() =>
                                                        setNotice(
                                                            "Voucher validation is not connected yet.",
                                                        )
                                                    }
                                                >
                                                    Apply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {resEligible && (
                                        <>
                                            <label
                                                style={css(
                                                    "display: flex; align-items: flex-start; gap: 12px; background: #FFFFFF; border-radius: 10px; padding: 14px 16px; cursor: pointer",
                                                )}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={resident}
                                                    onChange={toggleRes}
                                                    style={css(
                                                        "width: 18px; height: 18px; margin: 2px 0 0; accent-color: #222E34; flex-shrink: 0",
                                                    )}
                                                />
                                                <span
                                                    style={css(
                                                        "display: flex; flex-direction: column; gap: 2px",
                                                    )}
                                                >
                                                    <span
                                                        style={css(
                                                            "font-size: 14px; font-weight: 600",
                                                        )}
                                                    >
                                                        I'm a UAE resident{" "}
                                                        <span
                                                            style={css(
                                                                "color: #FF9015",
                                                            )}
                                                        >
                                                            +10 min free
                                                        </span>
                                                    </span>
                                                    <span
                                                        style={css(
                                                            "font-size: 13px; color: #6B777D",
                                                        )}
                                                    >
                                                        Bring your Emirates ID
                                                        to check-in. Not valid
                                                        with other offers.
                                                    </span>
                                                </span>
                                            </label>
                                        </>
                                    )}
                                    <label
                                        style={css(
                                            "display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #6B777D",
                                        )}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={agreed}
                                            onChange={(e) =>
                                                setAgreed(e.target.checked)
                                            }
                                            required
                                            style={css(
                                                "width: 18px; height: 18px; margin: 1px 0 0; accent-color: #222E34; flex-shrink: 0",
                                            )}
                                        />
                                        <span>
                                            I agree to the{" "}
                                            <a href={undefined}>safety rules</a>{" "}
                                            and{" "}
                                            <a href={undefined}>
                                                booking terms
                                            </a>
                                            .
                                        </span>
                                    </label>
                                </section>
                            </div>
                            <aside
                                style={css(
                                    "flex: 1 1 320px; min-width: 0; position: sticky; top: 24px; display: flex; flex-direction: column; gap: 20px",
                                )}
                                className="booking-aside"
                            >
                                <div
                                    style={css(
                                        "background: #222E34; color: #FFFFFF; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 16px",
                                    )}
                                >
                                    <h2
                                        style={css(
                                            "margin: 0; font-size: 22px; font-weight: 700",
                                        )}
                                    >
                                        Your booking
                                    </h2>
                                    <div
                                        style={css(
                                            "display: flex; flex-direction: column; gap: 2px",
                                        )}
                                    >
                                        <span
                                            style={css(
                                                "font-size: 16px; font-weight: 700",
                                            )}
                                        >
                                            {moneyText(sumProduct)}
                                        </span>
                                        <span
                                            style={css(
                                                "font-size: 13px; color: rgba(255,255,255,.5)",
                                            )}
                                        >
                                            {moneyText(sumDur)}
                                        </span>
                                    </div>
                                    <div
                                        style={css(
                                            "display: flex; flex-direction: column; gap: 10px; font-size: 14px; border-top: 1px solid rgba(255,255,255,.12); padding-top: 14px",
                                        )}
                                    >
                                        {hasIncl && (
                                            <>
                                                <div
                                                    style={css(
                                                        "display: flex; justify-content: space-between; gap: 12px",
                                                    )}
                                                >
                                                    <span
                                                        style={css(
                                                            "color: rgba(255,255,255,.6)",
                                                        )}
                                                    >
                                                        Includes
                                                    </span>
                                                    <span
                                                        style={css(
                                                            "font-weight: 600; text-align: right",
                                                        )}
                                                    >
                                                        {moneyText(sumIncl)}
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                        <div
                                            style={css(
                                                "display: flex; justify-content: space-between; gap: 12px",
                                            )}
                                        >
                                            <span
                                                style={css(
                                                    "color: rgba(255,255,255,.6)",
                                                )}
                                            >
                                                Date
                                            </span>
                                            <span
                                                style={css("font-weight: 600")}
                                            >
                                                {moneyText(sumDate)}
                                            </span>
                                        </div>
                                        <div
                                            style={css(
                                                "display: flex; justify-content: space-between; gap: 12px",
                                            )}
                                        >
                                            <span
                                                style={css(
                                                    "color: rgba(255,255,255,.6)",
                                                )}
                                            >
                                                Time
                                            </span>
                                            <span
                                                style={css("font-weight: 600")}
                                            >
                                                {moneyText(sumTime)}
                                            </span>
                                        </div>
                                        <div
                                            style={css(
                                                "display: flex; justify-content: space-between; gap: 12px",
                                            )}
                                        >
                                            <span
                                                style={css(
                                                    "color: rgba(255,255,255,.6)",
                                                )}
                                            >
                                                {moneyText(sumQtyLabel)}
                                            </span>
                                            <span
                                                style={css("font-weight: 600")}
                                            >
                                                {moneyText(sumQtyLine)}
                                            </span>
                                        </div>
                                        {hasSave && (
                                            <>
                                                <div
                                                    style={css(
                                                        "display: flex; justify-content: space-between; gap: 12px",
                                                    )}
                                                >
                                                    <span
                                                        style={css(
                                                            "color: rgba(255,255,255,.6)",
                                                        )}
                                                    >
                                                        Offer saving
                                                    </span>
                                                    <span
                                                        style={css(
                                                            "font-weight: 600; color: #FF9015",
                                                        )}
                                                    >
                                                        {moneyText(sumSave)}
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                        {resOn && (
                                            <>
                                                <div
                                                    style={css(
                                                        "display: flex; justify-content: space-between; gap: 12px",
                                                    )}
                                                >
                                                    <span
                                                        style={css(
                                                            "color: rgba(255,255,255,.6)",
                                                        )}
                                                    >
                                                        Resident bonus
                                                    </span>
                                                    <span
                                                        style={css(
                                                            "font-weight: 600; color: #FF9015",
                                                        )}
                                                    >
                                                        +10 min
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                        <div
                                            style={css(
                                                "display: flex; justify-content: space-between; gap: 12px",
                                            )}
                                        >
                                            <span
                                                style={css(
                                                    "color: rgba(255,255,255,.6)",
                                                )}
                                            >
                                                Booking fee
                                            </span>
                                            <span
                                                style={css("font-weight: 600")}
                                            >
                                                <DirhamIcon size="1em" /> 0
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        style={css(
                                            "border-top: 1px solid rgba(255,255,255,.12); padding-top: 14px; display: flex; justify-content: space-between; align-items: baseline",
                                        )}
                                    >
                                        <span
                                            style={css(
                                                "font-size: 15px; font-weight: 600",
                                            )}
                                        >
                                            Total
                                        </span>
                                        <span
                                            style={css(
                                                "font-size: 28px; font-weight: 700",
                                            )}
                                        >
                                            {moneyText(total)}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        disabled={payDisabled}
                                        style={css(payStyle)}
                                        onClick={handlePay}
                                    >
                                        {moneyText(payText)}
                                    </button>
                                    <span
                                        style={css(
                                            "font-size: 12px; color: rgba(255,255,255,.5); text-align: center",
                                        )}
                                    >
                                        Apple Pay, Google Pay, Visa and
                                        Mastercard accepted
                                    </span>
                                </div>
                                <div
                                    style={css(
                                        "background: #f8f9fa; border-radius: 16px; padding: 20px 24px; display: flex; flex-direction: column; font-size: 14px",
                                    )}
                                >
                                    <span
                                        style={css(
                                            "display: flex; align-items: flex-start; gap: 10px; padding: 9px 0; border-bottom: 1px solid #eee",
                                        )}
                                    >
                                        <span
                                            style={css(
                                                "color: #54C8E8; font-weight: 700",
                                            )}
                                        >
                                            ✓
                                        </span>
                                        Instant confirmation by email and
                                        WhatsApp
                                    </span>
                                    <span
                                        style={css(
                                            "display: flex; align-items: flex-start; gap: 10px; padding: 9px 0; border-bottom: 1px solid #eee",
                                        )}
                                    >
                                        <span
                                            style={css(
                                                "color: #54C8E8; font-weight: 700",
                                            )}
                                        >
                                            ✓
                                        </span>
                                        Lifeguard and first aid trained team
                                    </span>
                                    <span
                                        style={css(
                                            "display: flex; align-items: flex-start; gap: 10px; padding: 9px 0; border-bottom: 1px solid #eee",
                                        )}
                                    >
                                        <span
                                            style={css(
                                                "color: #54C8E8; font-weight: 700",
                                            )}
                                        >
                                            ✓
                                        </span>
                                        Life vests provided on every rental
                                    </span>
                                    <span
                                        style={css(
                                            "display: flex; align-items: flex-start; gap: 10px; padding: 9px 0; border-bottom: 1px solid #eee",
                                        )}
                                    >
                                        <span
                                            style={css(
                                                "color: #54C8E8; font-weight: 700",
                                            )}
                                        >
                                            ✓
                                        </span>
                                        Dubai Maritime Authority licensed
                                    </span>
                                    <span
                                        style={css(
                                            "display: flex; align-items: flex-start; gap: 10px; padding: 9px 0 0",
                                        )}
                                    >
                                        <span
                                            style={css(
                                                "color: #54C8E8; font-weight: 700",
                                            )}
                                        >
                                            ✓
                                        </span>
                                        21,000+ guests welcomed since 2010
                                    </span>
                                </div>
                            </aside>
                        </div>
                    </main>
                </div>
                {notice && (
                    <div role="status" className="booking-notice">
                        {notice}
                    </div>
                )}
            </div>
            <SiteFooter />
            <style jsx global>{`
 .ignite-booking *{box-sizing:border-box}
 .ignite-booking button{font-family:inherit;text-transform:none;letter-spacing:normal;line-height:1.3;box-shadow:none}
 .ignite-booking input{max-width:100%;min-width:0}
 .ignite-booking h1,.ignite-booking h2{color:inherit;letter-spacing:normal}
 .ignite-booking a{color:#0b6e8a;text-decoration:underline}
 .ignite-booking .booking-aside{top:var(--booking-sticky-top,100px)!important}
 .ignite-booking .booking-notice{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#222e34;color:white;padding:16px 24px;border-radius:10px;z-index:9999;max-width:90vw}
 @media(max-width:767px){.ignite-booking .booking-main{padding:30px 15px!important}.ignite-booking .booking-aside{position:static!important;flex-basis:100%!important}.ignite-booking section>div:first-child{flex-wrap:wrap}.ignite-booking section[style*="background: rgb(34"]>div{padding:35px 15px!important}}
 .booking-control-icon {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-family: Arial, sans-serif !important;
  font-size: 24px !important;
  font-weight: 600;
  line-height: 1 !important;
  color: #222e34 !important;
  visibility: visible !important;
  opacity: 1 !important;
  flex-shrink: 0;
}

button[aria-label="Previous month"] .booking-control-icon,
button[aria-label="Next month"] .booking-control-icon {
  font-size: 28px !important;
}

button:disabled .booking-control-icon {
  opacity: 0.4 !important;
}
 `}</style>
        </>
    );
}
