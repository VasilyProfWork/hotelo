(() => {
    var __webpack_modules__ = {
        545: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                return function() {
                    "use strict";
                    var e = {
                        d: function(t, i) {
                            for (var s in i) e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, {
                                enumerable: !0,
                                get: i[s]
                            });
                        },
                        o: function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }
                    }, t = {};
                    e.d(t, {
                        default: function() {
                            return K;
                        }
                    });
                    var i = {
                        days: "days",
                        months: "months",
                        years: "years",
                        day: "day",
                        month: "month",
                        year: "year",
                        eventChangeViewDate: "changeViewDate",
                        eventChangeCurrentView: "changeCurrentView",
                        eventChangeFocusDate: "changeFocusDate",
                        eventChangeSelectedDate: "changeSelectedDate",
                        eventChangeTime: "changeTime",
                        eventChangeLastSelectedDate: "changeLastSelectedDate",
                        actionSelectDate: "selectDate",
                        actionUnselectDate: "unselectDate",
                        cssClassWeekend: "-weekend-"
                    }, s = {
                        classes: "",
                        inline: !1,
                        locale: {
                            days: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
                            daysShort: [ "Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб" ],
                            daysMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
                            months: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
                            monthsShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
                            today: "Сегодня",
                            clear: "Очистить",
                            dateFormat: "dd.MM.yyyy",
                            timeFormat: "HH:mm",
                            firstDay: 1
                        },
                        startDate: new Date,
                        firstDay: "",
                        weekends: [ 6, 0 ],
                        dateFormat: "",
                        altField: "",
                        altFieldDateFormat: "T",
                        toggleSelected: !0,
                        keyboardNav: !0,
                        selectedDates: !1,
                        container: "",
                        isMobile: !1,
                        visible: !1,
                        position: "bottom left",
                        offset: 12,
                        view: i.days,
                        minView: i.days,
                        showOtherMonths: !0,
                        selectOtherMonths: !0,
                        moveToOtherMonthsOnSelect: !0,
                        showOtherYears: !0,
                        selectOtherYears: !0,
                        moveToOtherYearsOnSelect: !0,
                        minDate: "",
                        maxDate: "",
                        disableNavWhenOutOfRange: !0,
                        multipleDates: !1,
                        multipleDatesSeparator: ", ",
                        range: !1,
                        dynamicRange: !0,
                        buttons: !1,
                        monthsField: "monthsShort",
                        showEvent: "focus",
                        autoClose: !1,
                        prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
                        nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
                        navTitles: {
                            days: "MMMM, <i>yyyy</i>",
                            months: "yyyy",
                            years: "yyyy1 - yyyy2"
                        },
                        timepicker: !1,
                        onlyTimepicker: !1,
                        dateTimeSeparator: " ",
                        timeFormat: "",
                        minHours: 0,
                        maxHours: 24,
                        minMinutes: 0,
                        maxMinutes: 59,
                        hoursStep: 1,
                        minutesStep: 1,
                        onSelect: !1,
                        onChangeViewDate: !1,
                        onChangeView: !1,
                        onRenderCell: !1,
                        onShow: !1,
                        onHide: !1
                    };
                    function a(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                        return "string" == typeof e ? t.querySelector(e) : e;
                    }
                    function n() {
                        let {tagName: e = "div", className: t = "", innerHtml: i = "", id: s = "", attrs: a = {}} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = document.createElement(e);
                        if (t && n.classList.add(...t.split(" ")), s && (n.id = s), i && (n.innerHTML = i), 
                        a) for (let e in a) n.setAttribute(e, a[e]);
                        return n;
                    }
                    function r(e, t) {
                        for (let [i, s] of Object.entries(t)) e.setAttribute(i, s);
                        return e;
                    }
                    function h(e) {
                        return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
                    }
                    function o(e) {
                        let t = e.getHours(), i = t % 12 == 0 ? 12 : t % 12;
                        return {
                            year: e.getFullYear(),
                            month: e.getMonth(),
                            fullMonth: e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
                            date: e.getDate(),
                            fullDate: e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
                            day: e.getDay(),
                            hours: t,
                            fullHours: l(t),
                            hours12: i,
                            fullHours12: l(i),
                            minutes: e.getMinutes(),
                            fullMinutes: e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()
                        };
                    }
                    function l(e) {
                        return e < 10 ? "0" + e : e;
                    }
                    function d(e) {
                        let t = 10 * Math.floor(e.getFullYear() / 10);
                        return [ t, t + 9 ];
                    }
                    function c() {
                        let e = [];
                        for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                        return i.forEach((t => {
                            if ("object" == typeof t) for (let i in t) t[i] && e.push(i); else t && e.push(t);
                        })), e.join(" ");
                    }
                    function u(e, t) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.days;
                        if (!e || !t) return !1;
                        let a = o(e), n = o(t), r = {
                            [i.days]: a.date === n.date && a.month === n.month && a.year === n.year,
                            [i.months]: a.month === n.month && a.year === n.year,
                            [i.years]: a.year === n.year
                        };
                        return r[s];
                    }
                    function p(e, t, i) {
                        let s = g(e, !1).getTime(), a = g(t, !1).getTime();
                        return i ? s >= a : s > a;
                    }
                    function m(e, t) {
                        return !p(e, t, !0);
                    }
                    function g(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = new Date(e.getTime());
                        return "boolean" != typeof t || t || D(i), i;
                    }
                    function D(e) {
                        return e.setHours(0, 0, 0, 0), e;
                    }
                    function v(e, t, i) {
                        e.length ? e.forEach((e => {
                            e.addEventListener(t, i);
                        })) : e.addEventListener(t, i);
                    }
                    function y(e, t) {
                        return !(!e || e === document || e instanceof DocumentFragment) && (e.matches(t) ? e : y(e.parentNode, t));
                    }
                    function f(e, t, i) {
                        return e > i ? i : e < t ? t : e;
                    }
                    function w(e) {
                        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                        return i.filter((e => e)).forEach((t => {
                            for (let [i, s] of Object.entries(t)) if (void 0 !== s && "[object Object]" === s.toString()) {
                                let t = void 0 !== e[i] ? e[i].toString() : void 0, a = s.toString(), n = Array.isArray(s) ? [] : {};
                                e[i] = e[i] ? t !== a ? n : e[i] : n, w(e[i], s);
                            } else e[i] = s;
                        })), e;
                    }
                    function b(e) {
                        let t = e;
                        return e instanceof Date || (t = new Date(e)), isNaN(t.getTime()) && (console.log('Unable to convert value "'.concat(e, '" to Date object')), 
                        t = !1), t;
                    }
                    function k(e) {
                        let t = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
                        return new RegExp("(^|>|" + t + ")(" + e + ")($|<|" + t + ")", "g");
                    }
                    function C(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class _ {
                        constructor() {
                            let {type: e, date: t, dp: i, opts: s, body: a} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            C(this, "focus", (() => {
                                this.$cell.classList.add("-focus-"), this.focused = !0;
                            })), C(this, "removeFocus", (() => {
                                this.$cell.classList.remove("-focus-"), this.focused = !1;
                            })), C(this, "select", (() => {
                                this.$cell.classList.add("-selected-"), this.selected = !0;
                            })), C(this, "removeSelect", (() => {
                                this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = !1;
                            })), C(this, "onChangeSelectedDate", (() => {
                                this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
                            })), C(this, "onChangeFocusDate", (e => {
                                if (!e) return void (this.focused && this.removeFocus());
                                let t = u(e, this.date, this.type);
                                t ? this.focus() : !t && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
                            })), C(this, "render", (() => (this.$cell.innerHTML = this._getHtml(), this.$cell.adpCell = this, 
                            this.$cell))), this.type = e, this.singleType = this.type.slice(0, -1), this.date = t, 
                            this.dp = i, this.opts = s, this.body = a, this.customData = !1, this.init();
                        }
                        init() {
                            let {range: e, onRenderCell: t} = this.opts;
                            t && (this.customData = t({
                                date: this.date,
                                cellType: this.singleType,
                                datepicker: this.dp
                            })), this._createElement(), this._bindDatepickerEvents(), this._handleInitialFocusStatus(), 
                            this.dp.hasSelectedDates && (this._handleSelectedStatus(), e && this._handleRangeStatus());
                        }
                        _bindDatepickerEvents() {
                            this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeFocusDate, this.onChangeFocusDate);
                        }
                        unbindDatepickerEvents() {
                            this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeFocusDate, this.onChangeFocusDate);
                        }
                        _createElement() {
                            let {year: e, month: t, date: i} = o(this.date);
                            this.$cell = n({
                                className: this._getClassName(),
                                attrs: {
                                    "data-year": e,
                                    "data-month": t,
                                    "data-date": i
                                }
                            });
                        }
                        _getClassName() {
                            var e, t;
                            let s = new Date, {selectOtherMonths: a, selectOtherYears: n} = this.opts, {minDate: r, maxDate: h} = this.dp, {day: l} = o(this.date), d = this._isOutOfMinMaxRange(), p = null === (e = this.customData) || void 0 === e ? void 0 : e.disabled, m = c("air-datepicker-cell", "-".concat(this.singleType, "-"), {
                                "-current-": u(s, this.date, this.type),
                                "-min-date-": r && u(r, this.date, this.type),
                                "-max-date-": h && u(h, this.date, this.type)
                            }), g = "";
                            switch (this.type) {
                              case i.days:
                                g = c({
                                    "-weekend-": this.dp.isWeekend(l),
                                    "-other-month-": this.isOtherMonth,
                                    "-disabled-": this.isOtherMonth && !a || d || p
                                });
                                break;

                              case i.months:
                                g = c({
                                    "-disabled-": d || p
                                });
                                break;

                              case i.years:
                                g = c({
                                    "-other-decade-": this.isOtherDecade,
                                    "-disabled-": d || this.isOtherDecade && !n || p
                                });
                            }
                            return c(m, g, null === (t = this.customData) || void 0 === t ? void 0 : t.classes);
                        }
                        _getHtml() {
                            var e;
                            let {year: t, month: s, date: a} = o(this.date), {showOtherMonths: n, showOtherYears: r} = this.opts;
                            if (null !== (e = this.customData) && void 0 !== e && e.html) return this.customData.html;
                            switch (this.type) {
                              case i.days:
                                return !n && this.isOtherMonth ? "" : a;

                              case i.months:
                                return this.dp.locale[this.opts.monthsField][s];

                              case i.years:
                                return !r && this.isOtherDecade ? "" : t;
                            }
                        }
                        _isOutOfMinMaxRange() {
                            let {minDate: e, maxDate: t} = this.dp, {type: s, date: a} = this, {month: n, year: r, date: h} = o(a), l = s === i.days, d = s === i.years, c = !!e && new Date(r, d ? e.getMonth() : n, l ? h : e.getDate()), u = !!t && new Date(r, d ? t.getMonth() : n, l ? h : t.getDate());
                            return e && t ? m(c, e) || p(u, t) : e ? m(c, e) : t ? p(u, t) : void 0;
                        }
                        destroy() {
                            this.unbindDatepickerEvents();
                        }
                        _handleRangeStatus() {
                            let {rangeDateFrom: e, rangeDateTo: t} = this.dp, i = c({
                                "-in-range-": e && t && (s = this.date, a = e, n = t, p(s, a) && m(s, n)),
                                "-range-from-": e && u(this.date, e, this.type),
                                "-range-to-": t && u(this.date, t, this.type)
                            });
                            var s, a, n;
                            this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), i && this.$cell.classList.add(...i.split(" "));
                        }
                        _handleSelectedStatus() {
                            let e = this.dp._checkIfDateIsSelected(this.date, this.type);
                            e ? this.select() : !e && this.selected && this.removeSelect();
                        }
                        _handleInitialFocusStatus() {
                            u(this.dp.focusDate, this.date, this.type) && this.focus();
                        }
                        get isDisabled() {
                            return this.$cell.matches(".-disabled-");
                        }
                        get isOtherMonth() {
                            return this.dp.isOtherMonth(this.date);
                        }
                        get isOtherDecade() {
                            return this.dp.isOtherDecade(this.date);
                        }
                    }
                    function M(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    let $ = {
                        [i.days]: '<div class="air-datepicker-body--day-names"></div>' + '<div class="air-datepicker-body--cells -'.concat(i.days, '-"></div>'),
                        [i.months]: '<div class="air-datepicker-body--cells -'.concat(i.months, '-"></div>'),
                        [i.years]: '<div class="air-datepicker-body--cells -'.concat(i.years, '-"></div>')
                    };
                    class S {
                        constructor(e) {
                            let {dp: t, type: s, opts: a} = e;
                            M(this, "handleClick", (e => {
                                let t = y(e.target, ".air-datepicker-cell");
                                if (!t) return;
                                let i = t.adpCell;
                                if (i.isDisabled) return;
                                if (!this.dp.isMinViewReached) return void this.dp.down();
                                let s = this.dp._checkIfDateIsSelected(i.date, i.type);
                                s ? this.dp._handleAlreadySelectedDates(s, i.date) : this.dp.selectDate(i.date);
                            })), M(this, "onChangeCurrentView", (e => {
                                e !== this.type ? this.hide() : (this.show(), this.render());
                            })), M(this, "onMouseOverCell", (e => {
                                let t = y(e.target, ".air-datepicker-cell");
                                this.dp.setFocusDate(!!t && t.adpCell.date);
                            })), M(this, "onMouseOutCell", (() => {
                                this.dp.setFocusDate(!1);
                            })), M(this, "onClickCell", (e => {
                                this.handleClick(e);
                            })), M(this, "onMouseDown", (e => {
                                this.pressed = !0;
                                let t = y(e.target, ".air-datepicker-cell"), i = t && t.adpCell;
                                u(i.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = !0), u(i.date, this.dp.rangeDateTo) && (this.rangeToFocused = !0);
                            })), M(this, "onMouseMove", (e => {
                                if (!this.pressed || !this.dp.isMinViewReached) return;
                                e.preventDefault();
                                let t = y(e.target, ".air-datepicker-cell"), i = t && t.adpCell, {selectedDates: s, rangeDateTo: a, rangeDateFrom: n} = this.dp;
                                if (!i || i.isDisabled) return;
                                let {date: r} = i;
                                if (2 === s.length) {
                                    if (this.rangeFromFocused && !p(r, a)) {
                                        let {hours: e, minutes: t} = o(n);
                                        r.setHours(e), r.setMinutes(t), this.dp.rangeDateFrom = r, this.dp.replaceDate(n, r);
                                    }
                                    if (this.rangeToFocused && !m(r, n)) {
                                        let {hours: e, minutes: t} = o(a);
                                        r.setHours(e), r.setMinutes(t), this.dp.rangeDateTo = r, this.dp.replaceDate(a, r);
                                    }
                                }
                            })), M(this, "onMouseUp", (() => {
                                this.pressed = !1, this.rangeFromFocused = !1, this.rangeToFocused = !1;
                            })), M(this, "onChangeViewDate", ((e, t) => {
                                if (!this.isVisible) return;
                                let s = d(e), a = d(t);
                                switch (this.dp.currentView) {
                                  case i.days:
                                    if (u(e, t, i.months)) return;
                                    break;

                                  case i.months:
                                    if (u(e, t, i.years)) return;
                                    break;

                                  case i.years:
                                    if (s[0] === a[0] && s[1] === a[1]) return;
                                }
                                this.render();
                            })), M(this, "render", (() => {
                                this.destroyCells(), this._generateCells(), this.cells.forEach((e => {
                                    this.$cells.appendChild(e.render());
                                }));
                            })), this.dp = t, this.type = s, this.opts = a, this.cells = [], this.$el = "", 
                            this.pressed = !1, this.isVisible = !0, this.init();
                        }
                        init() {
                            this._buildBaseHtml(), this.type === i.days && this.renderDayNames(), this.render(), 
                            this._bindEvents(), this._bindDatepickerEvents();
                        }
                        _bindEvents() {
                            let {range: e, dynamicRange: t} = this.opts;
                            v(this.$el, "mouseover", this.onMouseOverCell), v(this.$el, "mouseout", this.onMouseOutCell), 
                            v(this.$el, "click", this.onClickCell), e && t && (v(this.$el, "mousedown", this.onMouseDown), 
                            v(this.$el, "mousemove", this.onMouseMove), v(window.document, "mouseup", this.onMouseUp));
                        }
                        _bindDatepickerEvents() {
                            this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView);
                        }
                        _buildBaseHtml() {
                            this.$el = n({
                                className: "air-datepicker-body -".concat(this.type, "-"),
                                innerHtml: $[this.type]
                            }), this.$names = a(".air-datepicker-body--day-names", this.$el), this.$cells = a(".air-datepicker-body--cells", this.$el);
                        }
                        _getDayNamesHtml() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dp.locale.firstDay, t = "", s = this.dp.isWeekend, a = e, n = 0;
                            for (;n < 7; ) {
                                let e = a % 7, r = c("air-datepicker-body--day-name", {
                                    [i.cssClassWeekend]: s(e)
                                }), h = this.dp.locale.daysMin[e];
                                t += '<div class="'.concat(r, '">').concat(h, "</div>"), n++, a++;
                            }
                            return t;
                        }
                        _getDaysCells() {
                            let {viewDate: e, locale: {firstDay: t}} = this.dp, i = h(e), {year: s, month: a} = o(e), n = new Date(s, a, 1), r = new Date(s, a, i), l = n.getDay() - t, d = 6 - r.getDay() + t;
                            l = l < 0 ? l + 7 : l, d = d > 6 ? d - 7 : d;
                            let c = function(e, t) {
                                let {year: i, month: s, date: a} = o(e);
                                return new Date(i, s, a - t);
                            }(n, l), u = i + l + d, p = c.getDate(), {year: m, month: g} = o(c), D = 0;
                            for (;D < u; ) {
                                let e = new Date(m, g, p + D);
                                this._generateCell(e), D++;
                            }
                        }
                        _generateCell(e) {
                            let {type: t, dp: i, opts: s} = this, a = new _({
                                type: t,
                                dp: i,
                                opts: s,
                                date: e,
                                body: this
                            });
                            return this.cells.push(a), a;
                        }
                        _generateDayCells() {
                            this._getDaysCells();
                        }
                        _generateMonthCells() {
                            let {year: e} = this.dp.parsedViewDate, t = 0;
                            for (;t < 12; ) this.cells.push(this._generateCell(new Date(e, t))), t++;
                        }
                        _generateYearCells() {
                            let e = d(this.dp.viewDate), t = e[0] - 1, i = e[1] + 1, s = t;
                            for (;s <= i; ) this.cells.push(this._generateCell(new Date(s, 0))), s++;
                        }
                        renderDayNames() {
                            this.$names.innerHTML = this._getDayNamesHtml();
                        }
                        _generateCells() {
                            switch (this.type) {
                              case i.days:
                                this._generateDayCells();
                                break;

                              case i.months:
                                this._generateMonthCells();
                                break;

                              case i.years:
                                this._generateYearCells();
                            }
                        }
                        show() {
                            this.isVisible = !0, this.$el.classList.remove("-hidden-");
                        }
                        hide() {
                            this.isVisible = !1, this.$el.classList.add("-hidden-");
                        }
                        destroyCells() {
                            this.cells.forEach((e => e.destroy())), this.cells = [], this.$cells.innerHTML = "";
                        }
                        destroy() {
                            this.destroyCells(), this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), 
                            this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView);
                        }
                    }
                    function T(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class F {
                        constructor(e) {
                            let {dp: t, opts: i} = e;
                            T(this, "onClickNav", (e => {
                                let t = y(e.target, ".air-datepicker-nav--action");
                                if (!t) return;
                                let i = t.dataset.action;
                                this.dp[i]();
                            })), T(this, "onChangeViewDate", (() => {
                                this.render(), this._resetNavStatus(), this.handleNavStatus();
                            })), T(this, "onChangeCurrentView", (() => {
                                this.render(), this._resetNavStatus(), this.handleNavStatus();
                            })), T(this, "onClickNavTitle", (() => {
                                this.dp.isFinalView || this.dp.up();
                            })), T(this, "update", (() => {
                                let {prevHtml: e, nextHtml: t} = this.opts;
                                this.$prev.innerHTML = e, this.$next.innerHTML = t, this._resetNavStatus(), this.render(), 
                                this.handleNavStatus();
                            })), T(this, "renderDelay", (() => {
                                setTimeout(this.render);
                            })), T(this, "render", (() => {
                                this.$title.innerHTML = this._getTitle(), function(e, t) {
                                    for (let i in t) t[i] ? e.classList.add(i) : e.classList.remove(i);
                                }(this.$title, {
                                    "-disabled-": this.dp.isFinalView
                                });
                            })), this.dp = t, this.opts = i, this.init();
                        }
                        init() {
                            this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), 
                            this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
                        }
                        _defineDOM() {
                            this.$title = a(".air-datepicker-nav--title", this.$el), this.$prev = a('[data-action="prev"]', this.$el), 
                            this.$next = a('[data-action="next"]', this.$el);
                        }
                        _bindEvents() {
                            this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
                        }
                        _bindDatepickerEvents() {
                            this.dp.on(i.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i.eventChangeCurrentView, this.onChangeCurrentView), 
                            this.isNavIsFunction && (this.dp.on(i.eventChangeSelectedDate, this.renderDelay), 
                            this.dp.opts.timepicker && this.dp.on(i.eventChangeTime, this.render));
                        }
                        destroy() {
                            this.dp.off(i.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i.eventChangeCurrentView, this.onChangeCurrentView), 
                            this.isNavIsFunction && (this.dp.off(i.eventChangeSelectedDate, this.renderDelay), 
                            this.dp.opts.timepicker && this.dp.off(i.eventChangeTime, this.render));
                        }
                        _createElement() {
                            this.$el = n({
                                tagName: "nav",
                                className: "air-datepicker-nav"
                            });
                        }
                        _getTitle() {
                            let {dp: e, opts: t} = this, i = t.navTitles[e.currentView];
                            return "function" == typeof i ? i(e) : e.formatDate(e.viewDate, i);
                        }
                        handleNavStatus() {
                            let {disableNavWhenOutOfRange: e} = this.opts, {minDate: t, maxDate: s} = this.dp;
                            if (!t && !s || !e) return;
                            let {year: a, month: n} = this.dp.parsedViewDate, r = !!t && o(t), h = !!s && o(s);
                            switch (this.dp.currentView) {
                              case i.days:
                                t && r.month >= n && r.year >= a && this._disableNav("prev"), s && h.month <= n && h.year <= a && this._disableNav("next");
                                break;

                              case i.months:
                                t && r.year >= a && this._disableNav("prev"), s && h.year <= a && this._disableNav("next");
                                break;

                              case i.years:
                                {
                                    let e = d(this.dp.viewDate);
                                    t && r.year >= e[0] && this._disableNav("prev"), s && h.year <= e[1] && this._disableNav("next");
                                    break;
                                }
                            }
                        }
                        _disableNav(e) {
                            a('[data-action="' + e + '"]', this.$el).classList.add("-disabled-");
                        }
                        _resetNavStatus() {
                            !function(e) {
                                for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                                e.length ? e.forEach((e => {
                                    e.classList.remove(...i);
                                })) : e.classList.remove(...i);
                            }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
                        }
                        _buildBaseHtml() {
                            let {prevHtml: e, nextHtml: t} = this.opts;
                            this.$el.innerHTML = '<div class="air-datepicker-nav--action" data-action="prev">'.concat(e, "</div>") + '<div class="air-datepicker-nav--title"></div>' + '<div class="air-datepicker-nav--action" data-action="next">'.concat(t, "</div>");
                        }
                        get isNavIsFunction() {
                            let {navTitles: e} = this.opts;
                            return Object.keys(e).find((t => "function" == typeof e[t]));
                        }
                    }
                    var V = {
                        today: {
                            content: e => e.locale.today,
                            onClick: e => e.setViewDate(new Date)
                        },
                        clear: {
                            content: e => e.locale.clear,
                            onClick: e => e.clear()
                        }
                    };
                    class H {
                        constructor(e) {
                            let {dp: t, opts: i} = e;
                            this.dp = t, this.opts = i, this.init();
                        }
                        init() {
                            this.createElement(), this.render();
                        }
                        createElement() {
                            this.$el = n({
                                className: "air-datepicker-buttons"
                            });
                        }
                        destroy() {
                            this.$el.parentNode.removeChild(this.$el);
                        }
                        clearHtml() {
                            return this.$el.innerHTML = "", this;
                        }
                        generateButtons() {
                            let {buttons: e} = this.opts;
                            Array.isArray(e) || (e = [ e ]), e.forEach((e => {
                                let t = e;
                                "string" == typeof e && V[e] && (t = V[e]);
                                let i = this.createButton(t);
                                t.onClick && this.attachEventToButton(i, t.onClick), this.$el.appendChild(i);
                            }));
                        }
                        attachEventToButton(e, t) {
                            e.addEventListener("click", (() => {
                                t(this.dp);
                            }));
                        }
                        createButton(e) {
                            let {content: t, className: i, tagName: s = "button", attrs: a = {}} = e, r = "function" == typeof t ? t(this.dp) : t;
                            return n({
                                tagName: s,
                                innerHtml: "<span tabindex='-1'>".concat(r, "</span>"),
                                className: c("air-datepicker-button", i),
                                attrs: a
                            });
                        }
                        render() {
                            this.generateButtons();
                        }
                    }
                    function x(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class L {
                        constructor() {
                            let {opts: e, dp: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            x(this, "toggleTimepickerIsActive", (e => {
                                this.dp.timepickerIsActive = e;
                            })), x(this, "onChangeSelectedDate", (e => {
                                let {date: t, updateTime: i = !1} = e;
                                t && (this.setMinMaxTime(t), this.setCurrentTime(!!i && t), this.addTimeToDate(t));
                            })), x(this, "onChangeLastSelectedDate", (e => {
                                e && (this.setTime(e), this.render());
                            })), x(this, "onChangeInputRange", (e => {
                                let t = e.target;
                                this[t.getAttribute("name")] = t.value, this.updateText(), this.dp.trigger(i.eventChangeTime, {
                                    hours: this.hours,
                                    minutes: this.minutes
                                });
                            })), x(this, "onMouseEnterLeave", (e => {
                                let t = e.target.getAttribute("name"), i = this.$minutesText;
                                "hours" === t && (i = this.$hoursText), i.classList.toggle("-focus-");
                            })), x(this, "onFocus", (() => {
                                this.toggleTimepickerIsActive(!0);
                            })), x(this, "onBlur", (() => {
                                this.toggleTimepickerIsActive(!1);
                            })), this.opts = e, this.dp = t;
                            let {timeFormat: s} = this.dp.locale;
                            s && (s.match(k("h")) || s.match(k("hh"))) && (this.ampm = !0), this.init();
                        }
                        init() {
                            this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), 
                            this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), 
                            this.bindDOMEvents();
                        }
                        bindDatepickerEvents() {
                            this.dp.on(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
                        }
                        bindDOMEvents() {
                            let e = "input";
                            navigator.userAgent.match(/trident/gi) && (e = "change"), v(this.$ranges, e, this.onChangeInputRange), 
                            v(this.$ranges, "mouseenter", this.onMouseEnterLeave), v(this.$ranges, "mouseleave", this.onMouseEnterLeave), 
                            v(this.$ranges, "focus", this.onFocus), v(this.$ranges, "mousedown", this.onFocus), 
                            v(this.$ranges, "blur", this.onBlur);
                        }
                        createElement() {
                            this.$el = n({
                                className: c("air-datepicker-time", {
                                    "-am-pm-": this.dp.ampm
                                })
                            });
                        }
                        destroy() {
                            this.dp.off(i.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), 
                            this.$el.parentNode.removeChild(this.$el);
                        }
                        buildHtml() {
                            let {ampm: e, hours: t, displayHours: i, minutes: s, minHours: a, minMinutes: n, maxHours: r, maxMinutes: h, dayPeriod: o, opts: {hoursStep: d, minutesStep: c}} = this;
                            this.$el.innerHTML = '<div class="air-datepicker-time--current">' + '   <span class="air-datepicker-time--current-hours">'.concat(l(i), "</span>") + '   <span class="air-datepicker-time--current-colon">:</span>' + '   <span class="air-datepicker-time--current-minutes">'.concat(l(s), "</span>") + "   ".concat(e ? "<span class='air-datepicker-time--current-ampm'>".concat(o, "</span>") : "") + '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' + '      <input type="range" name="hours" value="'.concat(t, '" min="').concat(a, '" max="').concat(r, '" step="').concat(d, '"/>') + '   </div>   <div class="air-datepicker-time--row">' + '      <input type="range" name="minutes" value="'.concat(s, '" min="').concat(n, '" max="').concat(h, '" step="').concat(c, '"/>') + "   </div></div>";
                        }
                        defineDOM() {
                            let e = e => a(e, this.$el);
                            this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e('[name="hours"]'), 
                            this.$minutes = e('[name="minutes"]'), this.$hoursText = e(".air-datepicker-time--current-hours"), 
                            this.$minutesText = e(".air-datepicker-time--current-minutes"), this.$ampm = e(".air-datepicker-time--current-ampm");
                        }
                        setTime(e) {
                            this.setMinMaxTime(e), this.setCurrentTime(e);
                        }
                        addTimeToDate(e) {
                            e && (e.setHours(this.hours), e.setMinutes(this.minutes));
                        }
                        setMinMaxTime(e) {
                            if (this.setMinMaxTimeFromOptions(), e) {
                                let {minDate: t, maxDate: i} = this.dp;
                                t && u(e, t) && this.setMinTimeFromMinDate(t), i && u(e, i) && this.setMaxTimeFromMaxDate(i);
                            }
                        }
                        setCurrentTime(e) {
                            let {hours: t, minutes: i} = e ? o(e) : this;
                            this.hours = f(t, this.minHours, this.maxHours), this.minutes = f(i, this.minMinutes, this.maxMinutes);
                        }
                        setMinMaxTimeFromOptions() {
                            let {minHours: e, minMinutes: t, maxHours: i, maxMinutes: s} = this.opts;
                            this.minHours = f(e, 0, 23), this.minMinutes = f(t, 0, 59), this.maxHours = f(i, 0, 23), 
                            this.maxMinutes = f(s, 0, 59);
                        }
                        setMinTimeFromMinDate(e) {
                            let {lastSelectedDate: t} = this.dp;
                            this.minHours = e.getHours(), t && t.getHours() > e.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e.getMinutes();
                        }
                        setMaxTimeFromMaxDate(e) {
                            let {lastSelectedDate: t} = this.dp;
                            this.maxHours = e.getHours(), t && t.getHours() < e.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e.getMinutes();
                        }
                        getDayPeriod(e, t) {
                            let i = e, s = Number(e);
                            e instanceof Date && (i = o(e), s = Number(i.hours));
                            let a = "am";
                            if (t || this.ampm) {
                                switch (!0) {
                                  case 12 === s:
                                  case s > 11:
                                    a = "pm";
                                }
                                s = s % 12 == 0 ? 12 : s % 12;
                            }
                            return {
                                hours: s,
                                dayPeriod: a
                            };
                        }
                        updateSliders() {
                            r(this.$hours, {
                                min: this.minHours,
                                max: this.maxHours
                            }).value = this.hours, r(this.$minutes, {
                                min: this.minMinutes,
                                max: this.maxMinutes
                            }).value = this.minutes;
                        }
                        updateText() {
                            this.$hoursText.innerHTML = l(this.displayHours), this.$minutesText.innerHTML = l(this.minutes), 
                            this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
                        }
                        set hours(e) {
                            this._hours = e;
                            let {hours: t, dayPeriod: i} = this.getDayPeriod(e);
                            this.displayHours = t, this.dayPeriod = i;
                        }
                        get hours() {
                            return this._hours;
                        }
                        render() {
                            this.updateSliders(), this.updateText();
                        }
                    }
                    function O(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    class E {
                        constructor(e) {
                            let {dp: t, opts: i} = e;
                            O(this, "pressedKeys", new Set), O(this, "hotKeys", new Map([ [ [ [ "Control", "ArrowRight" ], [ "Control", "ArrowUp" ] ], e => e.month++ ], [ [ [ "Control", "ArrowLeft" ], [ "Control", "ArrowDown" ] ], e => e.month-- ], [ [ [ "Shift", "ArrowRight" ], [ "Shift", "ArrowUp" ] ], e => e.year++ ], [ [ [ "Shift", "ArrowLeft" ], [ "Shift", "ArrowDown" ] ], e => e.year-- ], [ [ [ "Alt", "ArrowRight" ], [ "Alt", "ArrowUp" ] ], e => e.year += 10 ], [ [ [ "Alt", "ArrowLeft" ], [ "Alt", "ArrowDown" ] ], e => e.year -= 10 ], [ [ "Control", "Shift", "ArrowUp" ], (e, t) => t.up() ] ])), 
                            O(this, "handleHotKey", (e => {
                                let t = this.hotKeys.get(e), i = o(this.getInitialFocusDate());
                                t(i, this.dp);
                                let {year: s, month: a, date: n} = i, r = h(new Date(s, a));
                                r < n && (n = r);
                                let l = this.dp.getClampedDate(new Date(s, a, n));
                                this.dp.setFocusDate(l, {
                                    viewDateTransition: !0
                                });
                            })), O(this, "isHotKeyPressed", (() => {
                                let e = !1, t = this.pressedKeys.size, i = e => this.pressedKeys.has(e);
                                for (let [s] of this.hotKeys) {
                                    if (e) break;
                                    if (Array.isArray(s[0])) s.forEach((a => {
                                        e || t !== a.length || (e = a.every(i) && s);
                                    })); else {
                                        if (t !== s.length) continue;
                                        e = s.every(i) && s;
                                    }
                                }
                                return e;
                            })), O(this, "isArrow", (e => e >= 37 && e <= 40)), O(this, "onKeyDown", (e => {
                                let {key: t, which: i} = e, {dp: s, dp: {focusDate: a}, opts: n} = this;
                                this.registerKey(t);
                                let r = this.isHotKeyPressed();
                                if (r) return e.preventDefault(), void this.handleHotKey(r);
                                if (this.isArrow(i)) return e.preventDefault(), void this.focusNextCell(t);
                                if ("Enter" === t) {
                                    if (s.currentView !== n.minView) return void s.down();
                                    if (a) {
                                        let e = s._checkIfDateIsSelected(a);
                                        return void (e ? s._handleAlreadySelectedDates(e, a) : s.selectDate(a));
                                    }
                                }
                                "Escape" === t && this.dp.hide();
                            })), O(this, "onKeyUp", (e => {
                                this.removeKey(e.key);
                            })), this.dp = t, this.opts = i, this.init();
                        }
                        init() {
                            this.bindKeyboardEvents();
                        }
                        bindKeyboardEvents() {
                            let {$el: e} = this.dp;
                            e.addEventListener("keydown", this.onKeyDown), e.addEventListener("keyup", this.onKeyUp);
                        }
                        destroy() {
                            let {$el: e} = this.dp;
                            e.removeEventListener("keydown", this.onKeyDown), e.removeEventListener("keyup", this.onKeyUp), 
                            this.hotKeys = null, this.pressedKeys = null;
                        }
                        getInitialFocusDate() {
                            let {focusDate: e, currentView: t, selectedDates: s, parsedViewDate: {year: a, month: n}} = this.dp, r = e || s[s.length - 1];
                            if (!r) switch (t) {
                              case i.days:
                                r = new Date(a, n, (new Date).getDate());
                                break;

                              case i.months:
                                r = new Date(a, n, 1);
                                break;

                              case i.years:
                                r = new Date(a, 0, 1);
                            }
                            return r;
                        }
                        focusNextCell(e) {
                            let t = this.getInitialFocusDate(), {currentView: s} = this.dp, {days: a, months: n, years: r} = i, h = o(t), l = h.year, d = h.month, c = h.date;
                            switch (e) {
                              case "ArrowLeft":
                                s === a && (c -= 1), s === n && (d -= 1), s === r && (l -= 1);
                                break;

                              case "ArrowUp":
                                s === a && (c -= 7), s === n && (d -= 3), s === r && (l -= 4);
                                break;

                              case "ArrowRight":
                                s === a && (c += 1), s === n && (d += 1), s === r && (l += 1);
                                break;

                              case "ArrowDown":
                                s === a && (c += 7), s === n && (d += 3), s === r && (l += 4);
                            }
                            let u = this.dp.getClampedDate(new Date(l, d, c));
                            this.dp.setFocusDate(u, {
                                viewDateTransition: !0
                            });
                        }
                        registerKey(e) {
                            this.pressedKeys.add(e);
                        }
                        removeKey(e) {
                            this.pressedKeys.delete(e);
                        }
                    }
                    let A = {
                        on(e, t) {
                            this.__events || (this.__events = {}), this.__events[e] ? this.__events[e].push(t) : this.__events[e] = [ t ];
                        },
                        off(e, t) {
                            this.__events && this.__events[e] && (this.__events[e] = this.__events[e].filter((e => e !== t)));
                        },
                        removeAllEvents() {
                            this.__events = {};
                        },
                        trigger(e) {
                            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
                            this.__events && this.__events[e] && this.__events[e].forEach((e => {
                                e(...i);
                            }));
                        }
                    };
                    function N(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    let I = "", R = "", P = "", B = !1;
                    class K {
                        constructor(e, t) {
                            var r = this;
                            if (N(this, "viewIndexes", [ i.days, i.months, i.years ]), N(this, "next", (() => {
                                let {year: e, month: t} = this.parsedViewDate;
                                switch (this.currentView) {
                                  case i.days:
                                    this.setViewDate(new Date(e, t + 1, 1));
                                    break;

                                  case i.months:
                                    this.setViewDate(new Date(e + 1, t, 1));
                                    break;

                                  case i.years:
                                    this.setViewDate(new Date(e + 10, 0, 1));
                                }
                            })), N(this, "prev", (() => {
                                let {year: e, month: t} = this.parsedViewDate;
                                switch (this.currentView) {
                                  case i.days:
                                    this.setViewDate(new Date(e, t - 1, 1));
                                    break;

                                  case i.months:
                                    this.setViewDate(new Date(e - 1, t, 1));
                                    break;

                                  case i.years:
                                    this.setViewDate(new Date(e - 10, 0, 1));
                                }
                            })), N(this, "_finishHide", (() => {
                                this.hideAnimation = !1, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
                            })), N(this, "setPosition", (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if ("function" == typeof (e = e || r.opts.position)) return void (r.customHide = e({
                                    $datepicker: r.$datepicker,
                                    $target: r.$el,
                                    $pointer: r.$pointer,
                                    isViewChange: t,
                                    done: r._finishHide
                                }));
                                let i, s, {isMobile: a} = r.opts, n = r.$el.getBoundingClientRect(), h = r.$el.getBoundingClientRect(), o = r.$datepicker.offsetParent, l = r.$el.offsetParent, d = r.$datepicker.getBoundingClientRect(), c = e.split(" "), u = window.scrollY, p = window.scrollX, m = r.opts.offset, g = c[0], D = c[1];
                                if (a) r.$datepicker.style.cssText = "left: 50%; top: 50%"; else {
                                    if (o === l && o !== document.body && (h = {
                                        top: r.$el.offsetTop,
                                        left: r.$el.offsetLeft,
                                        width: n.width,
                                        height: r.$el.offsetHeight
                                    }, u = 0, p = 0), o !== l && o !== document.body) {
                                        let e = o.getBoundingClientRect();
                                        h = {
                                            top: n.top - e.top,
                                            left: n.left - e.left,
                                            width: n.width,
                                            height: n.height
                                        }, u = 0, p = 0;
                                    }
                                    switch (g) {
                                      case "top":
                                        i = h.top - d.height - m;
                                        break;

                                      case "right":
                                        s = h.left + h.width + m;
                                        break;

                                      case "bottom":
                                        i = h.top + h.height + m;
                                        break;

                                      case "left":
                                        s = h.left - d.width - m;
                                    }
                                    switch (D) {
                                      case "top":
                                        i = h.top;
                                        break;

                                      case "right":
                                        s = h.left + h.width - d.width;
                                        break;

                                      case "bottom":
                                        i = h.top + h.height - d.height;
                                        break;

                                      case "left":
                                        s = h.left;
                                        break;

                                      case "center":
                                        /left|right/.test(g) ? i = h.top + h.height / 2 - d.height / 2 : s = h.left + h.width / 2 - d.width / 2;
                                    }
                                    r.$datepicker.style.cssText = "left: ".concat(s + p, "px; top: ").concat(i + u, "px");
                                }
                            })), N(this, "_setInputValue", (() => {
                                let {opts: e, $altField: t, locale: {dateFormat: i}} = this, {altFieldDateFormat: s, altField: a} = e;
                                a && t && (t.value = this._getInputValue(s)), this.$el.value = this._getInputValue(i);
                            })), N(this, "_getInputValue", (e => {
                                let {selectedDates: t, opts: i} = this, {multipleDates: s, multipleDatesSeparator: a} = i;
                                if (!t.length) return "";
                                let n = "function" == typeof e, r = n ? e(s ? t : t[0]) : t.map((t => this.formatDate(t, e)));
                                return r = n ? r : r.join(a), r;
                            })), N(this, "_checkIfDateIsSelected", (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.days, s = !1;
                                return r.selectedDates.some((i => {
                                    let a = u(e, i, t);
                                    return s = a && i, a;
                                })), s;
                            })), N(this, "_scheduleCallAfterTransition", (e => {
                                this._cancelScheduledCall(), e && e(!1), this._onTransitionEnd = () => {
                                    e && e(!0);
                                }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, {
                                    once: !0
                                });
                            })), N(this, "_cancelScheduledCall", (() => {
                                this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
                            })), N(this, "setViewDate", (e => {
                                if (!((e = b(e)) instanceof Date)) return;
                                if (u(e, this.viewDate)) return;
                                let t = this.viewDate;
                                this.viewDate = e;
                                let {onChangeViewDate: s} = this.opts;
                                if (s) {
                                    let {month: e, year: t} = this.parsedViewDate;
                                    s({
                                        month: e,
                                        year: t,
                                        decade: this.curDecade
                                    });
                                }
                                this.trigger(i.eventChangeViewDate, e, t);
                            })), N(this, "setFocusDate", (function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                (!e || (e = b(e)) instanceof Date) && (r.focusDate = e, r.opts.range && e && r._handleRangeOnFocus(), 
                                r.trigger(i.eventChangeFocusDate, e, t));
                            })), N(this, "setCurrentView", (e => {
                                if (this.viewIndexes.includes(e)) {
                                    if (this.currentView = e, this.elIsInput && this.visible && this.setPosition(void 0, !0), 
                                    this.trigger(i.eventChangeCurrentView, e), !this.views[e]) {
                                        let t = this.views[e] = new S({
                                            dp: this,
                                            opts: this.opts,
                                            type: e
                                        });
                                        this.$content.appendChild(t.$el);
                                    }
                                    this.opts.onChangeView && this.opts.onChangeView(e);
                                }
                            })), N(this, "_updateLastSelectedDate", (e => {
                                this.lastSelectedDate = e, this.trigger(i.eventChangeLastSelectedDate, e);
                            })), N(this, "destroy", (() => {
                                let {showEvent: e, isMobile: t} = this.opts, i = this.$datepicker.parentNode;
                                i && i.removeChild(this.$datepicker), this.$el.removeEventListener(e, this._onFocus), 
                                this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), 
                                t && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), 
                                this.views = null, this.nav = null, this.$datepicker = null, this.opts = null, this.$customContainer = null, 
                                this.viewDate = null, this.focusDate = null, this.selectedDates = null, this.rangeDateFrom = null, 
                                this.rangeDateTo = null;
                            })), N(this, "update", (e => {
                                let t = w({}, this.opts);
                                w(this.opts, e);
                                let {timepicker: s, buttons: a, range: n, selectedDates: r, isMobile: h} = this.opts, o = this.visible || this.treatAsInline;
                                this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this._handleLocale(), 
                                !t.selectedDates && r && this.selectDate(r), e.view && this.setCurrentView(e.view), 
                                this._setInputValue(), t.range && !n ? (this.rangeDateTo = !1, this.rangeDateFrom = !1) : !t.range && n && this.selectedDates.length && (this.rangeDateFrom = this.selectedDates[0], 
                                this.rangeDateTo = this.selectedDates[1]), t.timepicker && !s ? (o && this.timepicker.destroy(), 
                                this.timepicker = !1, this.$timepicker.parentNode.removeChild(this.$timepicker)) : !t.timepicker && s && this._addTimepicker(), 
                                !t.buttons && a ? this._addButtons() : t.buttons && !a ? (this.buttons.destroy(), 
                                this.$buttons.parentNode.removeChild(this.$buttons)) : o && t.buttons && a && this.buttons.clearHtml().render(), 
                                !t.isMobile && h ? (this.treatAsInline || P || this._createMobileOverlay(), this._addMobileAttributes(), 
                                this.visible && this._showMobileOverlay()) : t.isMobile && !h && (this._removeMobileAttributes(), 
                                this.visible && (P.classList.remove("-active-"), "function" != typeof this.opts.position && this.setPosition())), 
                                o && (this.nav.update(), this.views[this.currentView].render(), this.currentView === i.days && this.views[this.currentView].renderDayNames());
                            })), N(this, "isOtherMonth", (e => {
                                let {month: t} = o(e);
                                return t !== this.parsedViewDate.month;
                            })), N(this, "isOtherYear", (e => {
                                let {year: t} = o(e);
                                return t !== this.parsedViewDate.year;
                            })), N(this, "isOtherDecade", (e => {
                                let {year: t} = o(e), [i, s] = d(this.viewDate);
                                return t < i || t > s;
                            })), N(this, "_onChangeSelectedDate", (e => {
                                let {silent: t} = e;
                                setTimeout((() => {
                                    this._setInputValue(), this.opts.onSelect && !t && this._triggerOnSelect();
                                }));
                            })), N(this, "_onChangeFocusedDate", (function(e) {
                                let {viewDateTransition: t} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (!e) return;
                                let i = !1;
                                t && (i = r.isOtherMonth(e) || r.isOtherYear(e) || r.isOtherDecade(e)), i && r.setViewDate(e);
                            })), N(this, "_onChangeTime", (e => {
                                let {hours: t, minutes: i} = e, s = new Date, {lastSelectedDate: a, opts: {onSelect: n}} = this, r = a;
                                a || (r = s);
                                let h = this.getCell(r, this.currentViewSingular), o = h && h.adpCell;
                                o && o.isDisabled || (r.setHours(t), r.setMinutes(i), a ? (this._setInputValue(), 
                                n && this._triggerOnSelect()) : this.selectDate(r));
                            })), N(this, "_onFocus", (e => {
                                this.visible || this.show();
                            })), N(this, "_onBlur", (e => {
                                this.inFocus || !this.visible || this.opts.isMobile || this.hide();
                            })), N(this, "_onMouseDown", (e => {
                                this.inFocus = !0;
                            })), N(this, "_onMouseUp", (e => {
                                this.inFocus = !1, this.$el.focus();
                            })), N(this, "_onResize", (() => {
                                this.visible && "function" != typeof this.opts.position && this.setPosition();
                            })), N(this, "_onClickOverlay", (() => {
                                this.visible && this.hide();
                            })), N(this, "isWeekend", (e => this.opts.weekends.includes(e))), N(this, "getClampedDate", (e => {
                                let {minDate: t, maxDate: i} = this, s = e;
                                return i && p(e, i) ? s = i : t && m(e, t) && (s = t), s;
                            })), this.$el = a(e), !this.$el) return;
                            this.$datepicker = n({
                                className: "air-datepicker"
                            }), this.opts = w({}, s, t), this.$customContainer = !!this.opts.container && a(this.opts.container), 
                            this.$altField = a(this.opts.altField || !1), I || (I = a("body"));
                            let {view: h, startDate: l} = this.opts;
                            l || (this.opts.startDate = new Date), "INPUT" === this.$el.nodeName && (this.elIsInput = !0), 
                            this.inited = !1, this.visible = !1, this.viewDate = b(this.opts.startDate), this.focusDate = !1, 
                            this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = !1, 
                            this.currentView = h, this.selectedDates = [], this.views = {}, this.keys = [], 
                            this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = !1, this.treatAsInline = this.opts.inline || !this.elIsInput, 
                            this.init();
                        }
                        init() {
                            let {opts: e, treatAsInline: t, opts: {inline: i, isMobile: s, selectedDates: a, keyboardNav: r, onlyTimepicker: h}} = this;
                            var o;
                            B || i || !this.elIsInput || (B = !0, R = n({
                                className: o = K.defaultContainerId,
                                id: o
                            }), I.appendChild(R)), !s || P || t || this._createMobileOverlay(), this._handleLocale(), 
                            this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), 
                            this.elIsInput && (i || this._bindEvents(), r && !h && (this.keyboardNav = new E({
                                dp: this,
                                opts: e
                            }))), a && this.selectDate(a, {
                                silent: !0
                            }), this.opts.visible && !t && this.show(), t && this._createComponents();
                        }
                        _createMobileOverlay() {
                            P = n({
                                className: "air-datepicker-overlay"
                            }), R.appendChild(P);
                        }
                        _createComponents() {
                            let {opts: e, treatAsInline: t, opts: {inline: i, buttons: s, timepicker: a, position: n, classes: r, onlyTimepicker: h, isMobile: o}} = this;
                            this._buildBaseHtml(), this.elIsInput && (i || this._setPositionClasses(n)), !i && this.elIsInput || this.$datepicker.classList.add("-inline-"), 
                            r && this.$datepicker.classList.add(...r.split(" ")), h && this.$datepicker.classList.add("-only-timepicker-"), 
                            o && !t && this._addMobileAttributes(), this.views[this.currentView] = new S({
                                dp: this,
                                type: this.currentView,
                                opts: e
                            }), this.nav = new F({
                                dp: this,
                                opts: e
                            }), a && this._addTimepicker(), s && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), 
                            this.$nav.appendChild(this.nav.$el);
                        }
                        _destroyComponents() {
                            for (let e in this.views) this.views[e].destroy();
                            this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
                        }
                        _addMobileAttributes() {
                            P.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), 
                            this.$el.setAttribute("readonly", !0);
                        }
                        _removeMobileAttributes() {
                            P.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), 
                            this.initialReadonly || "" === this.initialReadonly || this.$el.removeAttribute("readonly");
                        }
                        _createMinMaxDates() {
                            let {minDate: e, maxDate: t} = this.opts;
                            this.minDate = !!e && b(e), this.maxDate = !!t && b(t);
                        }
                        _addTimepicker() {
                            this.$timepicker = n({
                                className: "air-datepicker--time"
                            }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L({
                                dp: this,
                                opts: this.opts
                            }), this.$timepicker.appendChild(this.timepicker.$el);
                        }
                        _addButtons() {
                            this.$buttons = n({
                                className: "air-datepicker--buttons"
                            }), this.$datepicker.appendChild(this.$buttons), this.buttons = new H({
                                dp: this,
                                opts: this.opts
                            }), this.$buttons.appendChild(this.buttons.$el);
                        }
                        _bindSubEvents() {
                            this.on(i.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i.eventChangeFocusDate, this._onChangeFocusedDate), 
                            this.on(i.eventChangeTime, this._onChangeTime);
                        }
                        _buildBaseHtml() {
                            let {inline: e} = this.opts;
                            var t, i;
                            this.elIsInput ? e ? (t = this.$datepicker, (i = this.$el).parentNode.insertBefore(t, i.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), 
                            this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', 
                            this.$content = a(".air-datepicker--content", this.$datepicker), this.$pointer = a(".air-datepicker--pointer", this.$datepicker), 
                            this.$nav = a(".air-datepicker--navigation", this.$datepicker);
                        }
                        _handleLocale() {
                            let {locale: e, dateFormat: t, firstDay: i, timepicker: s, onlyTimepicker: a, timeFormat: n, dateTimeSeparator: r} = this.opts;
                            var h;
                            this.locale = (h = e, JSON.parse(JSON.stringify(h))), t && (this.locale.dateFormat = t), 
                            void 0 !== n && "" !== n && (this.locale.timeFormat = n);
                            let {timeFormat: o} = this.locale;
                            if ("" !== i && (this.locale.firstDay = i), s && "function" != typeof t) {
                                let e = o ? r : "";
                                this.locale.dateFormat = [ this.locale.dateFormat, o || "" ].join(e);
                            }
                            a && (this.locale.dateFormat = this.locale.timeFormat);
                        }
                        _setPositionClasses(e) {
                            if ("function" == typeof e) return void this.$datepicker.classList.add("-custom-position-");
                            let t = (e = e.split(" "))[0], i = e[1], s = "air-datepicker -".concat(t, "-").concat(i, "- -from-").concat(t, "-");
                            this.$datepicker.classList.add(...s.split(" "));
                        }
                        _bindEvents() {
                            this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), 
                            this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), 
                            window.addEventListener("resize", this._onResize);
                        }
                        _limitViewDateByMaxMinDates() {
                            let {viewDate: e, minDate: t, maxDate: i} = this;
                            i && p(e, i) && this.setViewDate(i), t && m(e, t) && this.setViewDate(t);
                        }
                        formatDate() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.viewDate, t = arguments.length > 1 ? arguments[1] : void 0;
                            if (e = b(e), !(e instanceof Date)) return;
                            let i = t, s = this.locale, a = o(e), n = d(e), r = K.replacer, h = "am";
                            this.opts.timepicker && this.timepicker && (h = this.timepicker.getDayPeriod(e).dayPeriod);
                            let l = {
                                T: e.getTime(),
                                m: a.minutes,
                                mm: a.fullMinutes,
                                h: a.hours12,
                                hh: a.fullHours12,
                                H: a.hours,
                                HH: a.fullHours,
                                aa: h,
                                AA: h.toUpperCase(),
                                E: s.daysShort[a.day],
                                EEEE: s.days[a.day],
                                d: a.date,
                                dd: a.fullDate,
                                M: a.month + 1,
                                MM: a.fullMonth,
                                MMM: s.monthsShort[a.month],
                                MMMM: s.months[a.month],
                                yy: a.year.toString().slice(-2),
                                yyyy: a.year,
                                yyyy1: n[0],
                                yyyy2: n[1]
                            };
                            for (let [e, t] of Object.entries(l)) i = r(i, k(e), t);
                            return i;
                        }
                        down(e) {
                            this._handleUpDownActions(e, "down");
                        }
                        up(e) {
                            this._handleUpDownActions(e, "up");
                        }
                        selectDate(e) {
                            let t, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {currentView: a, parsedViewDate: n, selectedDates: r} = this, {updateTime: h} = s, {moveToOtherMonthsOnSelect: o, moveToOtherYearsOnSelect: l, multipleDates: d, range: c, autoClose: u} = this.opts, m = r.length;
                            if (Array.isArray(e)) return e.forEach((e => {
                                this.selectDate(e, s);
                            })), new Promise((e => {
                                setTimeout(e);
                            }));
                            if ((e = b(e)) instanceof Date) {
                                if (a === i.days && e.getMonth() !== n.month && o && (t = new Date(e.getFullYear(), e.getMonth(), 1)), 
                                a === i.years && e.getFullYear() !== n.year && l && (t = new Date(e.getFullYear(), 0, 1)), 
                                t && this.setViewDate(t), d && !c) {
                                    if (m === d) return;
                                    this._checkIfDateIsSelected(e) || r.push(e);
                                } else if (c) switch (m) {
                                  case 1:
                                    r.push(e), this.rangeDateTo || (this.rangeDateTo = e), p(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, 
                                    this.rangeDateFrom = e), this.selectedDates = [ this.rangeDateFrom, this.rangeDateTo ];
                                    break;

                                  case 2:
                                    this.selectedDates = [ e ], this.rangeDateFrom = e, this.rangeDateTo = "";
                                    break;

                                  default:
                                    this.selectedDates = [ e ], this.rangeDateFrom = e;
                                } else this.selectedDates = [ e ];
                                return this.trigger(i.eventChangeSelectedDate, {
                                    action: i.actionSelectDate,
                                    silent: null == s ? void 0 : s.silent,
                                    date: e,
                                    updateTime: h
                                }), this._updateLastSelectedDate(e), u && !this.timepickerIsActive && this.visible && (d || c ? c && 1 === m && this.hide() : this.hide()), 
                                new Promise((e => {
                                    setTimeout(e);
                                }));
                            }
                        }
                        unselectDate(e) {
                            let t = this.selectedDates, s = this;
                            if ((e = b(e)) instanceof Date) return t.some(((a, n) => {
                                if (u(a, e)) return t.splice(n, 1), s.selectedDates.length ? s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length - 1]) : (s.rangeDateFrom = "", 
                                s.rangeDateTo = "", s._updateLastSelectedDate(!1)), this.trigger(i.eventChangeSelectedDate, {
                                    action: i.actionUnselectDate,
                                    date: e
                                }), !0;
                            }));
                        }
                        replaceDate(e, t) {
                            let s = this.selectedDates.find((t => u(t, e, this.currentView))), a = this.selectedDates.indexOf(s);
                            a < 0 || u(this.selectedDates[a], t, this.currentView) || (this.selectedDates[a] = t, 
                            this.trigger(i.eventChangeSelectedDate, {
                                action: i.actionSelectDate,
                                date: t,
                                updateTime: !0
                            }), this._updateLastSelectedDate(t));
                        }
                        clear() {
                            this.selectedDates = [], this.rangeDateFrom = !1, this.rangeDateTo = !1, this.trigger(i.eventChangeSelectedDate, {
                                action: i.actionUnselectDate
                            });
                        }
                        show() {
                            let {onShow: e, isMobile: t} = this.opts;
                            this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), 
                            this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), 
                            this.visible = !0, e && this._scheduleCallAfterTransition(e), t && this._showMobileOverlay();
                        }
                        hide() {
                            let {onHide: e, isMobile: t} = this.opts, i = this._hasTransition();
                            this.visible = !1, this.hideAnimation = !0, this.$datepicker.classList.remove("-active-"), 
                            this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition((t => {
                                !this.customHide && (t && i || !t && !i) && this._finishHide(), e && e(t);
                            })), t && P.classList.remove("-active-");
                        }
                        _triggerOnSelect() {
                            let e = [], t = [], {selectedDates: i, locale: s, opts: {onSelect: a, multipleDates: n, range: r}} = this, h = n || r, o = "function" == typeof s.dateFormat;
                            i.length && (e = i.map(g), t = o ? n ? s.dateFormat(e) : e.map((e => s.dateFormat(e))) : e.map((e => this.formatDate(e, s.dateFormat)))), 
                            a({
                                date: h ? e : e[0],
                                formattedDate: h ? t : t[0],
                                datepicker: this
                            });
                        }
                        _handleAlreadySelectedDates(e, t) {
                            let {range: i, toggleSelected: s} = this.opts;
                            i ? s ? this.unselectDate(t) : 2 !== this.selectedDates.length && this.selectDate(t) : s && this.unselectDate(t), 
                            s || this._updateLastSelectedDate(e);
                        }
                        _handleUpDownActions(e, t) {
                            if (!((e = b(e || this.focusDate || this.viewDate)) instanceof Date)) return;
                            let i = "up" === t ? this.viewIndex + 1 : this.viewIndex - 1;
                            i > 2 && (i = 2), i < 0 && (i = 0), this.setViewDate(new Date(e.getFullYear(), e.getMonth(), 1)), 
                            this.setCurrentView(this.viewIndexes[i]);
                        }
                        _handleRangeOnFocus() {
                            1 === this.selectedDates.length && (p(this.selectedDates[0], this.focusDate) ? (this.rangeDateTo = this.selectedDates[0], 
                            this.rangeDateFrom = this.focusDate) : (this.rangeDateTo = this.focusDate, this.rangeDateFrom = this.selectedDates[0]));
                        }
                        getCell(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.day;
                            if (!((e = b(e)) instanceof Date)) return;
                            let {year: s, month: a, date: n} = o(e), r = '[data-year="'.concat(s, '"]'), h = '[data-month="'.concat(a, '"]'), l = '[data-date="'.concat(n, '"]'), d = {
                                [i.day]: "".concat(r).concat(h).concat(l),
                                [i.month]: "".concat(r).concat(h),
                                [i.year]: "".concat(r)
                            };
                            return this.views[this.currentView].$el.querySelector(d[t]);
                        }
                        _showMobileOverlay() {
                            P.classList.add("-active-");
                        }
                        _hasTransition() {
                            return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(((e, t) => parseFloat(t) + e), 0) > 0;
                        }
                        get parsedViewDate() {
                            return o(this.viewDate);
                        }
                        get currentViewSingular() {
                            return this.currentView.slice(0, -1);
                        }
                        get curDecade() {
                            return d(this.viewDate);
                        }
                        get viewIndex() {
                            return this.viewIndexes.indexOf(this.currentView);
                        }
                        get isFinalView() {
                            return this.currentView === i.years;
                        }
                        get hasSelectedDates() {
                            return this.selectedDates.length > 0;
                        }
                        get isMinViewReached() {
                            return this.currentView === this.opts.minView || this.currentView === i.days;
                        }
                        get $container() {
                            return this.$customContainer || R;
                        }
                        static replacer(e, t, i) {
                            return e.replace(t, (function(e, t, s, a) {
                                return t + i + a;
                            }));
                        }
                    }
                    var j;
                    return N(K, "defaults", s), N(K, "version", "3.1.0"), N(K, "defaultContainerId", "air-datepicker-global-container"), 
                    j = K.prototype, Object.assign(j, A), t.default;
                }();
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.n = module => {
            var getter = module && module.__esModule ? () => module["default"] : () => module;
            __webpack_require__.d(getter, {
                a: getter
            });
            return getter;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        "use strict";
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function functions_getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = functions_getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        /*! For license information please see choices.min.js.LICENSE.txt */
        !function() {
            "use strict";
            var e = {
                282: function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.clearChoices = t.activateChoices = t.filterChoices = t.addChoice = void 0;
                    var n = i(883);
                    t.addChoice = function(e) {
                        var t = e.value, i = e.label, s = e.id, r = e.groupId, o = e.disabled, a = e.elementId, c = e.customProperties, l = e.placeholder, h = e.keyCode;
                        return {
                            type: n.ACTION_TYPES.ADD_CHOICE,
                            value: t,
                            label: i,
                            id: s,
                            groupId: r,
                            disabled: o,
                            elementId: a,
                            customProperties: c,
                            placeholder: l,
                            keyCode: h
                        };
                    }, t.filterChoices = function(e) {
                        return {
                            type: n.ACTION_TYPES.FILTER_CHOICES,
                            results: e
                        };
                    }, t.activateChoices = function(e) {
                        return void 0 === e && (e = !0), {
                            type: n.ACTION_TYPES.ACTIVATE_CHOICES,
                            active: e
                        };
                    }, t.clearChoices = function() {
                        return {
                            type: n.ACTION_TYPES.CLEAR_CHOICES
                        };
                    };
                },
                783: function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.addGroup = void 0;
                    var n = i(883);
                    t.addGroup = function(e) {
                        var t = e.value, i = e.id, s = e.active, r = e.disabled;
                        return {
                            type: n.ACTION_TYPES.ADD_GROUP,
                            value: t,
                            id: i,
                            active: s,
                            disabled: r
                        };
                    };
                },
                464: function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.highlightItem = t.removeItem = t.addItem = void 0;
                    var n = i(883);
                    t.addItem = function(e) {
                        var t = e.value, i = e.label, s = e.id, r = e.choiceId, o = e.groupId, a = e.customProperties, c = e.placeholder, l = e.keyCode;
                        return {
                            type: n.ACTION_TYPES.ADD_ITEM,
                            value: t,
                            label: i,
                            id: s,
                            choiceId: r,
                            groupId: o,
                            customProperties: a,
                            placeholder: c,
                            keyCode: l
                        };
                    }, t.removeItem = function(e, t) {
                        return {
                            type: n.ACTION_TYPES.REMOVE_ITEM,
                            id: e,
                            choiceId: t
                        };
                    }, t.highlightItem = function(e, t) {
                        return {
                            type: n.ACTION_TYPES.HIGHLIGHT_ITEM,
                            id: e,
                            highlighted: t
                        };
                    };
                },
                137: function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.setIsLoading = t.resetTo = t.clearAll = void 0;
                    var n = i(883);
                    t.clearAll = function() {
                        return {
                            type: n.ACTION_TYPES.CLEAR_ALL
                        };
                    }, t.resetTo = function(e) {
                        return {
                            type: n.ACTION_TYPES.RESET_TO,
                            state: e
                        };
                    }, t.setIsLoading = function(e) {
                        return {
                            type: n.ACTION_TYPES.SET_IS_LOADING,
                            isLoading: e
                        };
                    };
                },
                373: function(e, t, i) {
                    var n = this && this.__spreadArray || function(e, t, i) {
                        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), 
                        n[s] = t[s]);
                        return e.concat(n || Array.prototype.slice.call(t));
                    }, s = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = s(i(996)), o = s(i(221)), a = i(282), c = i(783), l = i(464), h = i(137), u = i(520), d = i(883), p = i(789), f = i(799), m = i(655), v = s(i(744)), g = s(i(686)), _ = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style, y = {}, E = function() {
                        function e(t, i) {
                            var s = this;
                            void 0 === t && (t = "[data-choice]"), void 0 === i && (i = {}), void 0 === i.allowHTML && console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message."), 
                            this.config = r.default.all([ p.DEFAULT_CONFIG, e.defaults.options, i ], {
                                arrayMerge: function(e, t) {
                                    return n([], t, !0);
                                }
                            });
                            var o = (0, f.diff)(this.config, p.DEFAULT_CONFIG);
                            o.length && console.warn("Unknown config option(s) passed", o.join(", "));
                            var a = "string" == typeof t ? document.querySelector(t) : t;
                            if (!(a instanceof HTMLInputElement || a instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
                            if (this._isTextElement = a.type === d.TEXT_TYPE, this._isSelectOneElement = a.type === d.SELECT_ONE_TYPE, 
                            this._isSelectMultipleElement = a.type === d.SELECT_MULTIPLE_TYPE, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, 
                            this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled, 
                            [ "auto", "always" ].includes("".concat(this.config.renderSelectedChoices)) || (this.config.renderSelectedChoices = "auto"), 
                            i.addItemFilter && "function" != typeof i.addItemFilter) {
                                var c = i.addItemFilter instanceof RegExp ? i.addItemFilter : new RegExp(i.addItemFilter);
                                this.config.addItemFilter = c.test.bind(c);
                            }
                            if (this._isTextElement ? this.passedElement = new u.WrappedInput({
                                element: a,
                                classNames: this.config.classNames,
                                delimiter: this.config.delimiter
                            }) : this.passedElement = new u.WrappedSelect({
                                element: a,
                                classNames: this.config.classNames,
                                template: function(e) {
                                    return s._templates.option(e);
                                }
                            }), this.initialised = !1, this._store = new v.default, this._initialState = m.defaultState, 
                            this._currentState = m.defaultState, this._prevState = m.defaultState, this._currentValue = "", 
                            this._canSearch = !!this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, 
                            this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = (0, 
                            f.generateId)(this.passedElement.element, "choices-"), this._direction = this.passedElement.dir, 
                            !this._direction) {
                                var l = window.getComputedStyle(this.passedElement.element).direction;
                                l !== window.getComputedStyle(document.documentElement).direction && (this._direction = l);
                            }
                            if (this._idNames = {
                                itemChoice: "item-choice"
                            }, this._isSelectElement && (this._presetGroups = this.passedElement.optionGroups, 
                            this._presetOptions = this.passedElement.options), this._presetChoices = this.config.choices, 
                            this._presetItems = this.config.items, this.passedElement.value && this._isTextElement) {
                                var h = this.passedElement.value.split(this.config.delimiter);
                                this._presetItems = this._presetItems.concat(h);
                            }
                            if (this.passedElement.options && this.passedElement.options.forEach((function(e) {
                                s._presetChoices.push({
                                    value: e.value,
                                    label: e.innerHTML,
                                    selected: !!e.selected,
                                    disabled: e.disabled || e.parentNode.disabled,
                                    placeholder: "" === e.value || e.hasAttribute("placeholder"),
                                    customProperties: e.dataset["custom-properties"]
                                });
                            })), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), 
                            this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), 
                            this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), 
                            this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), 
                            this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), 
                            this._onFormReset = this._onFormReset.bind(this), this._onSelectKey = this._onSelectKey.bind(this), 
                            this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), 
                            this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), 
                            this.passedElement.isActive) return this.config.silent || console.warn("Trying to initialise Choices on element already initialised", {
                                element: t
                            }), void (this.initialised = !0);
                            this.init();
                        }
                        return Object.defineProperty(e, "defaults", {
                            get: function() {
                                return Object.preventExtensions({
                                    get options() {
                                        return y;
                                    },
                                    get templates() {
                                        return g.default;
                                    }
                                });
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.init = function() {
                            if (!this.initialised) {
                                this._createTemplates(), this._createElements(), this._createStructure(), this._store.subscribe(this._render), 
                                this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), 
                                this.initialised = !0;
                                var e = this.config.callbackOnInit;
                                e && "function" == typeof e && e.call(this);
                            }
                        }, e.prototype.destroy = function() {
                            this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), 
                            this.containerOuter.unwrap(this.passedElement.element), this.clearStore(), this._isSelectElement && (this.passedElement.options = this._presetOptions), 
                            this._templates = g.default, this.initialised = !1);
                        }, e.prototype.enable = function() {
                            return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), 
                            this.input.enable(), this.containerOuter.enable()), this;
                        }, e.prototype.disable = function() {
                            return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), 
                            this.input.disable(), this.containerOuter.disable()), this;
                        }, e.prototype.highlightItem = function(e, t) {
                            if (void 0 === t && (t = !0), !e || !e.id) return this;
                            var i = e.id, n = e.groupId, s = void 0 === n ? -1 : n, r = e.value, o = void 0 === r ? "" : r, a = e.label, c = void 0 === a ? "" : a, h = s >= 0 ? this._store.getGroupById(s) : null;
                            return this._store.dispatch((0, l.highlightItem)(i, !0)), t && this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
                                id: i,
                                value: o,
                                label: c,
                                groupValue: h && h.value ? h.value : null
                            }), this;
                        }, e.prototype.unhighlightItem = function(e) {
                            if (!e || !e.id) return this;
                            var t = e.id, i = e.groupId, n = void 0 === i ? -1 : i, s = e.value, r = void 0 === s ? "" : s, o = e.label, a = void 0 === o ? "" : o, c = n >= 0 ? this._store.getGroupById(n) : null;
                            return this._store.dispatch((0, l.highlightItem)(t, !1)), this.passedElement.triggerEvent(d.EVENTS.highlightItem, {
                                id: t,
                                value: r,
                                label: a,
                                groupValue: c && c.value ? c.value : null
                            }), this;
                        }, e.prototype.highlightAll = function() {
                            var e = this;
                            return this._store.items.forEach((function(t) {
                                return e.highlightItem(t);
                            })), this;
                        }, e.prototype.unhighlightAll = function() {
                            var e = this;
                            return this._store.items.forEach((function(t) {
                                return e.unhighlightItem(t);
                            })), this;
                        }, e.prototype.removeActiveItemsByValue = function(e) {
                            var t = this;
                            return this._store.activeItems.filter((function(t) {
                                return t.value === e;
                            })).forEach((function(e) {
                                return t._removeItem(e);
                            })), this;
                        }, e.prototype.removeActiveItems = function(e) {
                            var t = this;
                            return this._store.activeItems.filter((function(t) {
                                return t.id !== e;
                            })).forEach((function(e) {
                                return t._removeItem(e);
                            })), this;
                        }, e.prototype.removeHighlightedItems = function(e) {
                            var t = this;
                            return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach((function(i) {
                                t._removeItem(i), e && t._triggerChange(i.value);
                            })), this;
                        }, e.prototype.showDropdown = function(e) {
                            var t = this;
                            return this.dropdown.isActive || requestAnimationFrame((function() {
                                t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow), !e && t._canSearch && t.input.focus(), 
                                t.passedElement.triggerEvent(d.EVENTS.showDropdown, {});
                            })), this;
                        }, e.prototype.hideDropdown = function(e) {
                            var t = this;
                            return this.dropdown.isActive ? (requestAnimationFrame((function() {
                                t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), 
                                t.input.blur()), t.passedElement.triggerEvent(d.EVENTS.hideDropdown, {});
                            })), this) : this;
                        }, e.prototype.getValue = function(e) {
                            void 0 === e && (e = !1);
                            var t = this._store.activeItems.reduce((function(t, i) {
                                var n = e ? i.value : i;
                                return t.push(n), t;
                            }), []);
                            return this._isSelectOneElement ? t[0] : t;
                        }, e.prototype.setValue = function(e) {
                            var t = this;
                            return this.initialised ? (e.forEach((function(e) {
                                return t._setChoiceOrItem(e);
                            })), this) : this;
                        }, e.prototype.setChoiceByValue = function(e) {
                            var t = this;
                            return !this.initialised || this._isTextElement || (Array.isArray(e) ? e : [ e ]).forEach((function(e) {
                                return t._findAndSelectChoiceByValue(e);
                            })), this;
                        }, e.prototype.setChoices = function(e, t, i, n) {
                            var s = this;
                            if (void 0 === e && (e = []), void 0 === t && (t = "value"), void 0 === i && (i = "label"), 
                            void 0 === n && (n = !1), !this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                            if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
                            if ("string" != typeof t || !t) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                            if (n && this.clearChoices(), "function" == typeof e) {
                                var r = e(this);
                                if ("function" == typeof Promise && r instanceof Promise) return new Promise((function(e) {
                                    return requestAnimationFrame(e);
                                })).then((function() {
                                    return s._handleLoadingState(!0);
                                })).then((function() {
                                    return r;
                                })).then((function(e) {
                                    return s.setChoices(e, t, i, n);
                                })).catch((function(e) {
                                    s.config.silent || console.error(e);
                                })).then((function() {
                                    return s._handleLoadingState(!1);
                                })).then((function() {
                                    return s;
                                }));
                                if (!Array.isArray(r)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof r));
                                return this.setChoices(r, t, i, !1);
                            }
                            if (!Array.isArray(e)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                            return this.containerOuter.removeLoadingState(), this._startLoading(), e.forEach((function(e) {
                                if (e.choices) s._addGroup({
                                    id: e.id ? parseInt("".concat(e.id), 10) : null,
                                    group: e,
                                    valueKey: t,
                                    labelKey: i
                                }); else {
                                    var n = e;
                                    s._addChoice({
                                        value: n[t],
                                        label: n[i],
                                        isSelected: !!n.selected,
                                        isDisabled: !!n.disabled,
                                        placeholder: !!n.placeholder,
                                        customProperties: n.customProperties
                                    });
                                }
                            })), this._stopLoading(), this;
                        }, e.prototype.clearChoices = function() {
                            return this._store.dispatch((0, a.clearChoices)()), this;
                        }, e.prototype.clearStore = function() {
                            return this._store.dispatch((0, h.clearAll)()), this;
                        }, e.prototype.clearInput = function() {
                            var e = !this._isSelectOneElement;
                            return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, 
                            this._store.dispatch((0, a.activateChoices)(!0))), this;
                        }, e.prototype._render = function() {
                            if (!this._store.isLoading()) {
                                this._currentState = this._store.state;
                                var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items, t = this._isSelectElement, i = this._currentState.items !== this._prevState.items;
                                e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState);
                            }
                        }, e.prototype._renderChoices = function() {
                            var e = this, t = this._store, i = t.activeGroups, n = t.activeChoices, s = document.createDocumentFragment();
                            if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame((function() {
                                return e.choiceList.scrollToTop();
                            })), i.length >= 1 && !this._isSearching) {
                                var r = n.filter((function(e) {
                                    return !0 === e.placeholder && -1 === e.groupId;
                                }));
                                r.length >= 1 && (s = this._createChoicesFragment(r, s)), s = this._createGroupsFragment(i, n, s);
                            } else n.length >= 1 && (s = this._createChoicesFragment(n, s));
                            if (s.childNodes && s.childNodes.length > 0) {
                                var o = this._store.activeItems, a = this._canAddItem(o, this.input.value);
                                if (a.response) this.choiceList.append(s), this._highlightChoice(); else {
                                    var c = this._getTemplate("notice", a.notice);
                                    this.choiceList.append(c);
                                }
                            } else {
                                var l = void 0;
                                c = void 0, this._isSearching ? (c = "function" == typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText, 
                                l = this._getTemplate("notice", c, "no-results")) : (c = "function" == typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText, 
                                l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l);
                            }
                        }, e.prototype._renderItems = function() {
                            var e = this._store.activeItems || [];
                            this.itemList.clear();
                            var t = this._createItemsFragment(e);
                            t.childNodes && this.itemList.append(t);
                        }, e.prototype._createGroupsFragment = function(e, t, i) {
                            var n = this;
                            return void 0 === i && (i = document.createDocumentFragment()), this.config.shouldSort && e.sort(this.config.sorter), 
                            e.forEach((function(e) {
                                var s = function(e) {
                                    return t.filter((function(t) {
                                        return n._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === n.config.renderSelectedChoices || !t.selected);
                                    }));
                                }(e);
                                if (s.length >= 1) {
                                    var r = n._getTemplate("choiceGroup", e);
                                    i.appendChild(r), n._createChoicesFragment(s, i, !0);
                                }
                            })), i;
                        }, e.prototype._createChoicesFragment = function(e, t, i) {
                            var s = this;
                            void 0 === t && (t = document.createDocumentFragment()), void 0 === i && (i = !1);
                            var r = this.config, o = r.renderSelectedChoices, a = r.searchResultLimit, c = r.renderChoiceLimit, l = this._isSearching ? f.sortByScore : this.config.sorter, h = function(e) {
                                if ("auto" !== o || s._isSelectOneElement || !e.selected) {
                                    var i = s._getTemplate("choice", e, s.config.itemSelectText);
                                    t.appendChild(i);
                                }
                            }, u = e;
                            "auto" !== o || this._isSelectOneElement || (u = e.filter((function(e) {
                                return !e.selected;
                            })));
                            var d = u.reduce((function(e, t) {
                                return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e;
                            }), {
                                placeholderChoices: [],
                                normalChoices: []
                            }), p = d.placeholderChoices, m = d.normalChoices;
                            (this.config.shouldSort || this._isSearching) && m.sort(l);
                            var v = u.length, g = this._isSelectOneElement ? n(n([], p, !0), m, !0) : m;
                            this._isSearching ? v = a : c && c > 0 && !i && (v = c);
                            for (var _ = 0; _ < v; _ += 1) g[_] && h(g[_]);
                            return t;
                        }, e.prototype._createItemsFragment = function(e, t) {
                            var i = this;
                            void 0 === t && (t = document.createDocumentFragment());
                            var n = this.config, s = n.shouldSortItems, r = n.sorter, o = n.removeItemButton;
                            return s && !this._isSelectOneElement && e.sort(r), this._isTextElement ? this.passedElement.value = e.map((function(e) {
                                return e.value;
                            })).join(this.config.delimiter) : this.passedElement.options = e, e.forEach((function(e) {
                                var n = i._getTemplate("item", e, o);
                                t.appendChild(n);
                            })), t;
                        }, e.prototype._triggerChange = function(e) {
                            null != e && this.passedElement.triggerEvent(d.EVENTS.change, {
                                value: e
                            });
                        }, e.prototype._selectPlaceholderChoice = function(e) {
                            this._addItem({
                                value: e.value,
                                label: e.label,
                                choiceId: e.id,
                                groupId: e.groupId,
                                placeholder: e.placeholder
                            }), this._triggerChange(e.value);
                        }, e.prototype._handleButtonAction = function(e, t) {
                            if (e && t && this.config.removeItems && this.config.removeItemButton) {
                                var i = t.parentNode && t.parentNode.dataset.id, n = i && e.find((function(e) {
                                    return e.id === parseInt(i, 10);
                                }));
                                n && (this._removeItem(n), this._triggerChange(n.value), this._isSelectOneElement && this._store.placeholderChoice && this._selectPlaceholderChoice(this._store.placeholderChoice));
                            }
                        }, e.prototype._handleItemAction = function(e, t, i) {
                            var n = this;
                            if (void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
                                var s = t.dataset.id;
                                e.forEach((function(e) {
                                    e.id !== parseInt("".concat(s), 10) || e.highlighted ? !i && e.highlighted && n.unhighlightItem(e) : n.highlightItem(e);
                                })), this.input.focus();
                            }
                        }, e.prototype._handleChoiceAction = function(e, t) {
                            if (e && t) {
                                var i = t.dataset.id, n = i && this._store.getChoiceById(i);
                                if (n) {
                                    var s = e[0] && e[0].keyCode ? e[0].keyCode : void 0, r = this.dropdown.isActive;
                                    n.keyCode = s, this.passedElement.triggerEvent(d.EVENTS.choice, {
                                        choice: n
                                    }), n.selected || n.disabled || this._canAddItem(e, n.value).response && (this._addItem({
                                        value: n.value,
                                        label: n.label,
                                        choiceId: n.id,
                                        groupId: n.groupId,
                                        customProperties: n.customProperties,
                                        placeholder: n.placeholder,
                                        keyCode: n.keyCode
                                    }), this._triggerChange(n.value)), this.clearInput(), r && this._isSelectOneElement && (this.hideDropdown(!0), 
                                    this.containerOuter.focus());
                                }
                            }
                        }, e.prototype._handleBackspace = function(e) {
                            if (this.config.removeItems && e) {
                                var t = e[e.length - 1], i = e.some((function(e) {
                                    return e.highlighted;
                                }));
                                this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), 
                                this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), 
                                this.removeHighlightedItems(!0));
                            }
                        }, e.prototype._startLoading = function() {
                            this._store.dispatch((0, h.setIsLoading)(!0));
                        }, e.prototype._stopLoading = function() {
                            this._store.dispatch((0, h.setIsLoading)(!1));
                        }, e.prototype._handleLoadingState = function(e) {
                            void 0 === e && (e = !0);
                            var t = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
                            e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText)) && this.itemList.append(t) : this.input.placeholder = this.config.loadingText) : (this.enable(), 
                            this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t && (t.innerHTML = this._placeholderValue || "") : this.input.placeholder = this._placeholderValue || "");
                        }, e.prototype._handleSearch = function(e) {
                            if (this.input.isFocussed) {
                                var t = this._store.choices, i = this.config, n = i.searchFloor, s = i.searchChoices, r = t.some((function(e) {
                                    return !e.active;
                                }));
                                if (null != e && e.length >= n) {
                                    var o = s ? this._searchChoices(e) : 0;
                                    this.passedElement.triggerEvent(d.EVENTS.search, {
                                        value: e,
                                        resultCount: o
                                    });
                                } else r && (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0)));
                            }
                        }, e.prototype._canAddItem = function(e, t) {
                            var i = !0, n = "function" == typeof this.config.addItemText ? this.config.addItemText(t) : this.config.addItemText;
                            if (!this._isSelectOneElement) {
                                var s = (0, f.existsInArray)(e, t);
                                this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, 
                                n = "function" == typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), 
                                !this.config.duplicateItemsAllowed && s && i && (i = !1, n = "function" == typeof this.config.uniqueItemText ? this.config.uniqueItemText(t) : this.config.uniqueItemText), 
                                this._isTextElement && this.config.addItems && i && "function" == typeof this.config.addItemFilter && !this.config.addItemFilter(t) && (i = !1, 
                                n = "function" == typeof this.config.customAddItemText ? this.config.customAddItemText(t) : this.config.customAddItemText);
                            }
                            return {
                                response: i,
                                notice: n
                            };
                        }, e.prototype._searchChoices = function(e) {
                            var t = "string" == typeof e ? e.trim() : e, i = "string" == typeof this._currentValue ? this._currentValue.trim() : this._currentValue;
                            if (t.length < 1 && t === "".concat(i, " ")) return 0;
                            var s = this._store.searchableChoices, r = t, c = Object.assign(this.config.fuseOptions, {
                                keys: n([], this.config.searchFields, !0),
                                includeMatches: !0
                            }), l = new o.default(s, c).search(r);
                            return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, 
                            this._store.dispatch((0, a.filterChoices)(l)), l.length;
                        }, e.prototype._addEventListeners = function() {
                            var e = document.documentElement;
                            e.addEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0), 
                            this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0), 
                            e.addEventListener("click", this._onClick, {
                                passive: !0
                            }), e.addEventListener("touchmove", this._onTouchMove, {
                                passive: !0
                            }), this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                                passive: !0
                            }), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, {
                                passive: !0
                            }), this.containerOuter.element.addEventListener("blur", this._onBlur, {
                                passive: !0
                            })), this.input.element.addEventListener("keyup", this._onKeyUp, {
                                passive: !0
                            }), this.input.element.addEventListener("focus", this._onFocus, {
                                passive: !0
                            }), this.input.element.addEventListener("blur", this._onBlur, {
                                passive: !0
                            }), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, {
                                passive: !0
                            }), this.input.addEventListeners();
                        }, e.prototype._removeEventListeners = function() {
                            var e = document.documentElement;
                            e.removeEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0), 
                            this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0), 
                            e.removeEventListener("click", this._onClick), e.removeEventListener("touchmove", this._onTouchMove), 
                            this.dropdown.element.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), 
                            this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("keyup", this._onKeyUp), 
                            this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), 
                            this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), 
                            this.input.removeEventListeners();
                        }, e.prototype._onKeyDown = function(e) {
                            var t = e.keyCode, i = this._store.activeItems, n = this.input.isFocussed, s = this.dropdown.isActive, r = this.itemList.hasChildren(), o = String.fromCharCode(t), a = /[a-zA-Z0-9-_ ]/.test(o), c = d.KEY_CODES.BACK_KEY, l = d.KEY_CODES.DELETE_KEY, h = d.KEY_CODES.ENTER_KEY, u = d.KEY_CODES.A_KEY, p = d.KEY_CODES.ESC_KEY, f = d.KEY_CODES.UP_KEY, m = d.KEY_CODES.DOWN_KEY, v = d.KEY_CODES.PAGE_UP_KEY, g = d.KEY_CODES.PAGE_DOWN_KEY;
                            switch (this._isTextElement || s || !a || (this.showDropdown(), this.input.isFocussed || (this.input.value += o.toLowerCase())), 
                            t) {
                              case u:
                                return this._onSelectKey(e, r);

                              case h:
                                return this._onEnterKey(e, i, s);

                              case p:
                                return this._onEscapeKey(s);

                              case f:
                              case v:
                              case m:
                              case g:
                                return this._onDirectionKey(e, s);

                              case l:
                              case c:
                                return this._onDeleteKey(e, i, n);
                            }
                        }, e.prototype._onKeyUp = function(e) {
                            var t = e.target, i = e.keyCode, n = this.input.value, s = this._store.activeItems, r = this._canAddItem(s, n), o = d.KEY_CODES.BACK_KEY, c = d.KEY_CODES.DELETE_KEY;
                            if (this._isTextElement) if (r.notice && n) {
                                var l = this._getTemplate("notice", r.notice);
                                this.dropdown.element.innerHTML = l.outerHTML, this.showDropdown(!0);
                            } else this.hideDropdown(!0); else {
                                var h = (i === o || i === c) && t && !t.value, u = !this._isTextElement && this._isSearching, p = this._canSearch && r.response;
                                h && u ? (this._isSearching = !1, this._store.dispatch((0, a.activateChoices)(!0))) : p && this._handleSearch(this.input.rawValue);
                            }
                            this._canSearch = this.config.searchEnabled;
                        }, e.prototype._onSelectKey = function(e, t) {
                            var i = e.ctrlKey, n = e.metaKey;
                            (i || n) && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll());
                        }, e.prototype._onEnterKey = function(e, t, i) {
                            var n = e.target, s = d.KEY_CODES.ENTER_KEY, r = n && n.hasAttribute("data-button");
                            if (this._isTextElement && n && n.value) {
                                var o = this.input.value;
                                this._canAddItem(t, o).response && (this.hideDropdown(!0), this._addItem({
                                    value: o
                                }), this._triggerChange(o), this.clearInput());
                            }
                            if (r && (this._handleButtonAction(t, n), e.preventDefault()), i) {
                                var a = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                                a && (t[0] && (t[0].keyCode = s), this._handleChoiceAction(t, a)), e.preventDefault();
                            } else this._isSelectOneElement && (this.showDropdown(), e.preventDefault());
                        }, e.prototype._onEscapeKey = function(e) {
                            e && (this.hideDropdown(!0), this.containerOuter.focus());
                        }, e.prototype._onDirectionKey = function(e, t) {
                            var i = e.keyCode, n = e.metaKey, s = d.KEY_CODES.DOWN_KEY, r = d.KEY_CODES.PAGE_UP_KEY, o = d.KEY_CODES.PAGE_DOWN_KEY;
                            if (t || this._isSelectOneElement) {
                                this.showDropdown(), this._canSearch = !1;
                                var a = i === s || i === o ? 1 : -1, c = "[data-choice-selectable]", l = void 0;
                                if (n || i === o || i === r) l = a > 0 ? this.dropdown.element.querySelector("".concat(c, ":last-of-type")) : this.dropdown.element.querySelector(c); else {
                                    var h = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                                    l = h ? (0, f.getAdjacentEl)(h, c, a) : this.dropdown.element.querySelector(c);
                                }
                                l && ((0, f.isScrolledIntoView)(l, this.choiceList.element, a) || this.choiceList.scrollToChildElement(l, a), 
                                this._highlightChoice(l)), e.preventDefault();
                            }
                        }, e.prototype._onDeleteKey = function(e, t, i) {
                            var n = e.target;
                            this._isSelectOneElement || n.value || !i || (this._handleBackspace(t), e.preventDefault());
                        }, e.prototype._onTouchMove = function() {
                            this._wasTap && (this._wasTap = !1);
                        }, e.prototype._onTouchEnd = function(e) {
                            var t = (e || e.touches[0]).target;
                            this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), 
                            e.stopPropagation()), this._wasTap = !0;
                        }, e.prototype._onMouseDown = function(e) {
                            var t = e.target;
                            if (t instanceof HTMLElement) {
                                if (_ && this.choiceList.element.contains(t)) {
                                    var i = this.choiceList.element.firstElementChild, n = "ltr" === this._direction ? e.offsetX >= i.offsetWidth : e.offsetX < i.offsetLeft;
                                    this._isScrollingOnIe = n;
                                }
                                if (t !== this.input.element) {
                                    var s = t.closest("[data-button],[data-item],[data-choice]");
                                    if (s instanceof HTMLElement) {
                                        var r = e.shiftKey, o = this._store.activeItems, a = s.dataset;
                                        "button" in a ? this._handleButtonAction(o, s) : "item" in a ? this._handleItemAction(o, s, r) : "choice" in a && this._handleChoiceAction(o, s);
                                    }
                                    e.preventDefault();
                                }
                            }
                        }, e.prototype._onMouseOver = function(e) {
                            var t = e.target;
                            t instanceof HTMLElement && "choice" in t.dataset && this._highlightChoice(t);
                        }, e.prototype._onClick = function(e) {
                            var t = e.target;
                            this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), 
                            this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), 
                            this.containerOuter.removeFocusState(), this.hideDropdown(!0));
                        }, e.prototype._onFocus = function(e) {
                            var t, i = this, n = e.target;
                            n && this.containerOuter.element.contains(n) && ((t = {})[d.TEXT_TYPE] = function() {
                                n === i.input.element && i.containerOuter.addFocusState();
                            }, t[d.SELECT_ONE_TYPE] = function() {
                                i.containerOuter.addFocusState(), n === i.input.element && i.showDropdown(!0);
                            }, t[d.SELECT_MULTIPLE_TYPE] = function() {
                                n === i.input.element && (i.showDropdown(!0), i.containerOuter.addFocusState());
                            }, t)[this.passedElement.element.type]();
                        }, e.prototype._onBlur = function(e) {
                            var t, i = this, n = e.target;
                            if (n && this.containerOuter.element.contains(n) && !this._isScrollingOnIe) {
                                var s = this._store.activeItems.some((function(e) {
                                    return e.highlighted;
                                }));
                                ((t = {})[d.TEXT_TYPE] = function() {
                                    n === i.input.element && (i.containerOuter.removeFocusState(), s && i.unhighlightAll(), 
                                    i.hideDropdown(!0));
                                }, t[d.SELECT_ONE_TYPE] = function() {
                                    i.containerOuter.removeFocusState(), (n === i.input.element || n === i.containerOuter.element && !i._canSearch) && i.hideDropdown(!0);
                                }, t[d.SELECT_MULTIPLE_TYPE] = function() {
                                    n === i.input.element && (i.containerOuter.removeFocusState(), i.hideDropdown(!0), 
                                    s && i.unhighlightAll());
                                }, t)[this.passedElement.element.type]();
                            } else this._isScrollingOnIe = !1, this.input.element.focus();
                        }, e.prototype._onFormReset = function() {
                            this._store.dispatch((0, h.resetTo)(this._initialState));
                        }, e.prototype._highlightChoice = function(e) {
                            var t = this;
                            void 0 === e && (e = null);
                            var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                            if (i.length) {
                                var n = e;
                                Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))).forEach((function(e) {
                                    e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false");
                                })), n ? this._highlightPosition = i.indexOf(n) : (n = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (n = i[0]), 
                                n.classList.add(this.config.classNames.highlightedState), n.setAttribute("aria-selected", "true"), 
                                this.passedElement.triggerEvent(d.EVENTS.highlightChoice, {
                                    el: n
                                }), this.dropdown.isActive && (this.input.setActiveDescendant(n.id), this.containerOuter.setActiveDescendant(n.id));
                            }
                        }, e.prototype._addItem = function(e) {
                            var t = e.value, i = e.label, n = void 0 === i ? null : i, s = e.choiceId, r = void 0 === s ? -1 : s, o = e.groupId, a = void 0 === o ? -1 : o, c = e.customProperties, h = void 0 === c ? {} : c, u = e.placeholder, p = void 0 !== u && u, f = e.keyCode, m = void 0 === f ? -1 : f, v = "string" == typeof t ? t.trim() : t, g = this._store.items, _ = n || v, y = r || -1, E = a >= 0 ? this._store.getGroupById(a) : null, b = g ? g.length + 1 : 1;
                            this.config.prependValue && (v = this.config.prependValue + v.toString()), this.config.appendValue && (v += this.config.appendValue.toString()), 
                            this._store.dispatch((0, l.addItem)({
                                value: v,
                                label: _,
                                id: b,
                                choiceId: y,
                                groupId: a,
                                customProperties: h,
                                placeholder: p,
                                keyCode: m
                            })), this._isSelectOneElement && this.removeActiveItems(b), this.passedElement.triggerEvent(d.EVENTS.addItem, {
                                id: b,
                                value: v,
                                label: _,
                                customProperties: h,
                                groupValue: E && E.value ? E.value : null,
                                keyCode: m
                            });
                        }, e.prototype._removeItem = function(e) {
                            var t = e.id, i = e.value, n = e.label, s = e.customProperties, r = e.choiceId, o = e.groupId, a = o && o >= 0 ? this._store.getGroupById(o) : null;
                            t && r && (this._store.dispatch((0, l.removeItem)(t, r)), this.passedElement.triggerEvent(d.EVENTS.removeItem, {
                                id: t,
                                value: i,
                                label: n,
                                customProperties: s,
                                groupValue: a && a.value ? a.value : null
                            }));
                        }, e.prototype._addChoice = function(e) {
                            var t = e.value, i = e.label, n = void 0 === i ? null : i, s = e.isSelected, r = void 0 !== s && s, o = e.isDisabled, c = void 0 !== o && o, l = e.groupId, h = void 0 === l ? -1 : l, u = e.customProperties, d = void 0 === u ? {} : u, p = e.placeholder, f = void 0 !== p && p, m = e.keyCode, v = void 0 === m ? -1 : m;
                            if (null != t) {
                                var g = this._store.choices, _ = n || t, y = g ? g.length + 1 : 1, E = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(y);
                                this._store.dispatch((0, a.addChoice)({
                                    id: y,
                                    groupId: h,
                                    elementId: E,
                                    value: t,
                                    label: _,
                                    disabled: c,
                                    customProperties: d,
                                    placeholder: f,
                                    keyCode: v
                                })), r && this._addItem({
                                    value: t,
                                    label: _,
                                    choiceId: y,
                                    customProperties: d,
                                    placeholder: f,
                                    keyCode: v
                                });
                            }
                        }, e.prototype._addGroup = function(e) {
                            var t = this, i = e.group, n = e.id, s = e.valueKey, r = void 0 === s ? "value" : s, o = e.labelKey, a = void 0 === o ? "label" : o, l = (0, 
                            f.isType)("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")), h = n || Math.floor((new Date).valueOf() * Math.random()), u = !!i.disabled && i.disabled;
                            l ? (this._store.dispatch((0, c.addGroup)({
                                value: i.label,
                                id: h,
                                active: !0,
                                disabled: u
                            })), l.forEach((function(e) {
                                var i = e.disabled || e.parentNode && e.parentNode.disabled;
                                t._addChoice({
                                    value: e[r],
                                    label: (0, f.isType)("Object", e) ? e[a] : e.innerHTML,
                                    isSelected: e.selected,
                                    isDisabled: i,
                                    groupId: h,
                                    customProperties: e.customProperties,
                                    placeholder: e.placeholder
                                });
                            }))) : this._store.dispatch((0, c.addGroup)({
                                value: i.label,
                                id: i.id,
                                active: !1,
                                disabled: i.disabled
                            }));
                        }, e.prototype._getTemplate = function(e) {
                            for (var t, i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
                            return (t = this._templates[e]).call.apply(t, n([ this, this.config ], i, !1));
                        }, e.prototype._createTemplates = function() {
                            var e = this.config.callbackOnCreateTemplates, t = {};
                            e && "function" == typeof e && (t = e.call(this, f.strToEl)), this._templates = (0, 
                            r.default)(g.default, t);
                        }, e.prototype._createElements = function() {
                            this.containerOuter = new u.Container({
                                element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                                classNames: this.config.classNames,
                                type: this.passedElement.element.type,
                                position: this.config.position
                            }), this.containerInner = new u.Container({
                                element: this._getTemplate("containerInner"),
                                classNames: this.config.classNames,
                                type: this.passedElement.element.type,
                                position: this.config.position
                            }), this.input = new u.Input({
                                element: this._getTemplate("input", this._placeholderValue),
                                classNames: this.config.classNames,
                                type: this.passedElement.element.type,
                                preventPaste: !this.config.paste
                            }), this.choiceList = new u.List({
                                element: this._getTemplate("choiceList", this._isSelectOneElement)
                            }), this.itemList = new u.List({
                                element: this._getTemplate("itemList", this._isSelectOneElement)
                            }), this.dropdown = new u.Dropdown({
                                element: this._getTemplate("dropdown"),
                                classNames: this.config.classNames,
                                type: this.passedElement.element.type
                            });
                        }, e.prototype._createStructure = function() {
                            this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), 
                            this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, 
                            this.input.setWidth()), this.containerOuter.element.appendChild(this.containerInner.element), 
                            this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), 
                            this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), 
                            this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), 
                            this._isSelectElement && (this._highlightPosition = 0, this._isSearching = !1, this._startLoading(), 
                            this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices), 
                            this._stopLoading()), this._isTextElement && this._addPredefinedItems(this._presetItems);
                        }, e.prototype._addPredefinedGroups = function(e) {
                            var t = this, i = this.passedElement.placeholderOption;
                            i && i.parentNode && "SELECT" === i.parentNode.tagName && this._addChoice({
                                value: i.value,
                                label: i.innerHTML,
                                isSelected: i.selected,
                                isDisabled: i.disabled,
                                placeholder: !0
                            }), e.forEach((function(e) {
                                return t._addGroup({
                                    group: e,
                                    id: e.id || null
                                });
                            }));
                        }, e.prototype._addPredefinedChoices = function(e) {
                            var t = this;
                            this.config.shouldSort && e.sort(this.config.sorter);
                            var i = e.some((function(e) {
                                return e.selected;
                            })), n = e.findIndex((function(e) {
                                return void 0 === e.disabled || !e.disabled;
                            }));
                            e.forEach((function(e, s) {
                                var r = e.value, o = void 0 === r ? "" : r, a = e.label, c = e.customProperties, l = e.placeholder;
                                if (t._isSelectElement) if (e.choices) t._addGroup({
                                    group: e,
                                    id: e.id || null
                                }); else {
                                    var h = !(!t._isSelectOneElement || i || s !== n) || e.selected, u = e.disabled;
                                    t._addChoice({
                                        value: o,
                                        label: a,
                                        isSelected: !!h,
                                        isDisabled: !!u,
                                        placeholder: !!l,
                                        customProperties: c
                                    });
                                } else t._addChoice({
                                    value: o,
                                    label: a,
                                    isSelected: !!e.selected,
                                    isDisabled: !!e.disabled,
                                    placeholder: !!e.placeholder,
                                    customProperties: c
                                });
                            }));
                        }, e.prototype._addPredefinedItems = function(e) {
                            var t = this;
                            e.forEach((function(e) {
                                "object" == typeof e && e.value && t._addItem({
                                    value: e.value,
                                    label: e.label,
                                    choiceId: e.id,
                                    customProperties: e.customProperties,
                                    placeholder: e.placeholder
                                }), "string" == typeof e && t._addItem({
                                    value: e
                                });
                            }));
                        }, e.prototype._setChoiceOrItem = function(e) {
                            var t = this;
                            ({
                                object: function() {
                                    e.value && (t._isTextElement ? t._addItem({
                                        value: e.value,
                                        label: e.label,
                                        choiceId: e.id,
                                        customProperties: e.customProperties,
                                        placeholder: e.placeholder
                                    }) : t._addChoice({
                                        value: e.value,
                                        label: e.label,
                                        isSelected: !0,
                                        isDisabled: !1,
                                        customProperties: e.customProperties,
                                        placeholder: e.placeholder
                                    }));
                                },
                                string: function() {
                                    t._isTextElement ? t._addItem({
                                        value: e
                                    }) : t._addChoice({
                                        value: e,
                                        label: e,
                                        isSelected: !0,
                                        isDisabled: !1
                                    });
                                }
                            })[(0, f.getType)(e).toLowerCase()]();
                        }, e.prototype._findAndSelectChoiceByValue = function(e) {
                            var t = this, i = this._store.choices.find((function(i) {
                                return t.config.valueComparer(i.value, e);
                            }));
                            i && !i.selected && this._addItem({
                                value: i.value,
                                label: i.label,
                                choiceId: i.id,
                                groupId: i.groupId,
                                customProperties: i.customProperties,
                                placeholder: i.placeholder,
                                keyCode: i.keyCode
                            });
                        }, e.prototype._generatePlaceholderValue = function() {
                            if (this._isSelectElement && this.passedElement.placeholderOption) {
                                var e = this.passedElement.placeholderOption;
                                return e ? e.text : null;
                            }
                            var t = this.config, i = t.placeholder, n = t.placeholderValue, s = this.passedElement.element.dataset;
                            if (i) {
                                if (n) return n;
                                if (s.placeholder) return s.placeholder;
                            }
                            return null;
                        }, e;
                    }();
                    t.default = E;
                },
                613: function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = i(799), s = i(883), r = function() {
                        function e(e) {
                            var t = e.element, i = e.type, n = e.classNames, s = e.position;
                            this.element = t, this.classNames = n, this.type = i, this.position = s, this.isOpen = !1, 
                            this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, 
                            this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
                        }
                        return e.prototype.addEventListeners = function() {
                            this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur);
                        }, e.prototype.removeEventListeners = function() {
                            this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
                        }, e.prototype.shouldFlip = function(e) {
                            if ("number" != typeof e) return !1;
                            var t = !1;
                            return "auto" === this.position ? t = !window.matchMedia("(min-height: ".concat(e + 1, "px)")).matches : "top" === this.position && (t = !0), 
                            t;
                        }, e.prototype.setActiveDescendant = function(e) {
                            this.element.setAttribute("aria-activedescendant", e);
                        }, e.prototype.removeActiveDescendant = function() {
                            this.element.removeAttribute("aria-activedescendant");
                        }, e.prototype.open = function(e) {
                            this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), 
                            this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), 
                            this.isFlipped = !0);
                        }, e.prototype.close = function() {
                            this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), 
                            this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), 
                            this.isFlipped = !1);
                        }, e.prototype.focus = function() {
                            this.isFocussed || this.element.focus();
                        }, e.prototype.addFocusState = function() {
                            this.element.classList.add(this.classNames.focusState);
                        }, e.prototype.removeFocusState = function() {
                            this.element.classList.remove(this.classNames.focusState);
                        }, e.prototype.enable = function() {
                            this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), 
                            this.type === s.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1;
                        }, e.prototype.disable = function() {
                            this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), 
                            this.type === s.SELECT_ONE_TYPE && this.element.setAttribute("tabindex", "-1"), 
                            this.isDisabled = !0;
                        }, e.prototype.wrap = function(e) {
                            (0, n.wrap)(e, this.element);
                        }, e.prototype.unwrap = function(e) {
                            this.element.parentNode && (this.element.parentNode.insertBefore(e, this.element), 
                            this.element.parentNode.removeChild(this.element));
                        }, e.prototype.addLoadingState = function() {
                            this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), 
                            this.isLoading = !0;
                        }, e.prototype.removeLoadingState = function() {
                            this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), 
                            this.isLoading = !1;
                        }, e.prototype._onFocus = function() {
                            this.isFocussed = !0;
                        }, e.prototype._onBlur = function() {
                            this.isFocussed = !1;
                        }, e;
                    }();
                    t.default = r;
                },
                217: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = function() {
                        function e(e) {
                            var t = e.element, i = e.type, n = e.classNames;
                            this.element = t, this.classNames = n, this.type = i, this.isActive = !1;
                        }
                        return Object.defineProperty(e.prototype, "distanceFromTopWindow", {
                            get: function() {
                                return this.element.getBoundingClientRect().bottom;
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.getChild = function(e) {
                            return this.element.querySelector(e);
                        }, e.prototype.show = function() {
                            return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), 
                            this.isActive = !0, this;
                        }, e.prototype.hide = function() {
                            return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), 
                            this.isActive = !1, this;
                        }, e;
                    }();
                    t.default = i;
                },
                520: function(e, t, i) {
                    var n = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.WrappedSelect = t.WrappedInput = t.List = t.Input = t.Container = t.Dropdown = void 0;
                    var s = n(i(217));
                    t.Dropdown = s.default;
                    var r = n(i(613));
                    t.Container = r.default;
                    var o = n(i(11));
                    t.Input = o.default;
                    var a = n(i(624));
                    t.List = a.default;
                    var c = n(i(541));
                    t.WrappedInput = c.default;
                    var l = n(i(982));
                    t.WrappedSelect = l.default;
                },
                11: function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = i(799), s = i(883), r = function() {
                        function e(e) {
                            var t = e.element, i = e.type, n = e.classNames, s = e.preventPaste;
                            this.element = t, this.type = i, this.classNames = n, this.preventPaste = s, this.isFocussed = this.element.isEqualNode(document.activeElement), 
                            this.isDisabled = t.disabled, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), 
                            this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
                        }
                        return Object.defineProperty(e.prototype, "placeholder", {
                            set: function(e) {
                                this.element.placeholder = e;
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "value", {
                            get: function() {
                                return (0, n.sanitise)(this.element.value);
                            },
                            set: function(e) {
                                this.element.value = e;
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "rawValue", {
                            get: function() {
                                return this.element.value;
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.addEventListeners = function() {
                            this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("input", this._onInput, {
                                passive: !0
                            }), this.element.addEventListener("focus", this._onFocus, {
                                passive: !0
                            }), this.element.addEventListener("blur", this._onBlur, {
                                passive: !0
                            });
                        }, e.prototype.removeEventListeners = function() {
                            this.element.removeEventListener("input", this._onInput), this.element.removeEventListener("paste", this._onPaste), 
                            this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur);
                        }, e.prototype.enable = function() {
                            this.element.removeAttribute("disabled"), this.isDisabled = !1;
                        }, e.prototype.disable = function() {
                            this.element.setAttribute("disabled", ""), this.isDisabled = !0;
                        }, e.prototype.focus = function() {
                            this.isFocussed || this.element.focus();
                        }, e.prototype.blur = function() {
                            this.isFocussed && this.element.blur();
                        }, e.prototype.clear = function(e) {
                            return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), 
                            e && this.setWidth(), this;
                        }, e.prototype.setWidth = function() {
                            var e = this.element, t = e.style, i = e.value, n = e.placeholder;
                            t.minWidth = "".concat(n.length + 1, "ch"), t.width = "".concat(i.length + 1, "ch");
                        }, e.prototype.setActiveDescendant = function(e) {
                            this.element.setAttribute("aria-activedescendant", e);
                        }, e.prototype.removeActiveDescendant = function() {
                            this.element.removeAttribute("aria-activedescendant");
                        }, e.prototype._onInput = function() {
                            this.type !== s.SELECT_ONE_TYPE && this.setWidth();
                        }, e.prototype._onPaste = function(e) {
                            this.preventPaste && e.preventDefault();
                        }, e.prototype._onFocus = function() {
                            this.isFocussed = !0;
                        }, e.prototype._onBlur = function() {
                            this.isFocussed = !1;
                        }, e;
                    }();
                    t.default = r;
                },
                624: function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = i(883), s = function() {
                        function e(e) {
                            var t = e.element;
                            this.element = t, this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight;
                        }
                        return e.prototype.clear = function() {
                            this.element.innerHTML = "";
                        }, e.prototype.append = function(e) {
                            this.element.appendChild(e);
                        }, e.prototype.getChild = function(e) {
                            return this.element.querySelector(e);
                        }, e.prototype.hasChildren = function() {
                            return this.element.hasChildNodes();
                        }, e.prototype.scrollToTop = function() {
                            this.element.scrollTop = 0;
                        }, e.prototype.scrollToChildElement = function(e, t) {
                            var i = this;
                            if (e) {
                                var n = this.element.offsetHeight, s = this.element.scrollTop + n, r = e.offsetHeight, o = e.offsetTop + r, a = t > 0 ? this.element.scrollTop + o - s : e.offsetTop;
                                requestAnimationFrame((function() {
                                    i._animateScroll(a, t);
                                }));
                            }
                        }, e.prototype._scrollDown = function(e, t, i) {
                            var n = (i - e) / t, s = n > 1 ? n : 1;
                            this.element.scrollTop = e + s;
                        }, e.prototype._scrollUp = function(e, t, i) {
                            var n = (e - i) / t, s = n > 1 ? n : 1;
                            this.element.scrollTop = e - s;
                        }, e.prototype._animateScroll = function(e, t) {
                            var i = this, s = n.SCROLLING_SPEED, r = this.element.scrollTop, o = !1;
                            t > 0 ? (this._scrollDown(r, s, e), r < e && (o = !0)) : (this._scrollUp(r, s, e), 
                            r > e && (o = !0)), o && requestAnimationFrame((function() {
                                i._animateScroll(e, t);
                            }));
                        }, e;
                    }();
                    t.default = s;
                },
                730: function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = i(799), s = function() {
                        function e(e) {
                            var t = e.element, i = e.classNames;
                            if (this.element = t, this.classNames = i, !(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
                            this.isDisabled = !1;
                        }
                        return Object.defineProperty(e.prototype, "isActive", {
                            get: function() {
                                return "active" === this.element.dataset.choice;
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "dir", {
                            get: function() {
                                return this.element.dir;
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "value", {
                            get: function() {
                                return this.element.value;
                            },
                            set: function(e) {
                                this.element.value = e;
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.conceal = function() {
                            this.element.classList.add(this.classNames.input), this.element.hidden = !0, this.element.tabIndex = -1;
                            var e = this.element.getAttribute("style");
                            e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("data-choice", "active");
                        }, e.prototype.reveal = function() {
                            this.element.classList.remove(this.classNames.input), this.element.hidden = !1, 
                            this.element.removeAttribute("tabindex");
                            var e = this.element.getAttribute("data-choice-orig-style");
                            e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), 
                            this.element.removeAttribute("data-choice"), this.element.value = this.element.value;
                        }, e.prototype.enable = function() {
                            this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1;
                        }, e.prototype.disable = function() {
                            this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0;
                        }, e.prototype.triggerEvent = function(e, t) {
                            (0, n.dispatchEvent)(this.element, e, t);
                        }, e;
                    }();
                    t.default = s;
                },
                541: function(e, t, i) {
                    var n, s = this && this.__extends || (n = function(e, t) {
                        return n = Object.setPrototypeOf || {
                            __proto__: []
                        } instanceof Array && function(e, t) {
                            e.__proto__ = t;
                        } || function(e, t) {
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        }, n(e, t);
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                        function i() {
                            this.constructor = e;
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, 
                        new i);
                    }), r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = function(e) {
                        function t(t) {
                            var i = t.element, n = t.classNames, s = t.delimiter, r = e.call(this, {
                                element: i,
                                classNames: n
                            }) || this;
                            return r.delimiter = s, r;
                        }
                        return s(t, e), Object.defineProperty(t.prototype, "value", {
                            get: function() {
                                return this.element.value;
                            },
                            set: function(e) {
                                this.element.setAttribute("value", e), this.element.value = e;
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t;
                    }(r(i(730)).default);
                    t.default = o;
                },
                982: function(e, t, i) {
                    var n, s = this && this.__extends || (n = function(e, t) {
                        return n = Object.setPrototypeOf || {
                            __proto__: []
                        } instanceof Array && function(e, t) {
                            e.__proto__ = t;
                        } || function(e, t) {
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        }, n(e, t);
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                        function i() {
                            this.constructor = e;
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, 
                        new i);
                    }), r = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var o = function(e) {
                        function t(t) {
                            var i = t.element, n = t.classNames, s = t.template, r = e.call(this, {
                                element: i,
                                classNames: n
                            }) || this;
                            return r.template = s, r;
                        }
                        return s(t, e), Object.defineProperty(t.prototype, "placeholderOption", {
                            get: function() {
                                return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "optionGroups", {
                            get: function() {
                                return Array.from(this.element.getElementsByTagName("OPTGROUP"));
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "options", {
                            get: function() {
                                return Array.from(this.element.options);
                            },
                            set: function(e) {
                                var t = this, i = document.createDocumentFragment();
                                e.forEach((function(e) {
                                    return n = e, s = t.template(n), void i.appendChild(s);
                                    var n, s;
                                })), this.appendDocFragment(i);
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.appendDocFragment = function(e) {
                            this.element.innerHTML = "", this.element.appendChild(e);
                        }, t;
                    }(r(i(730)).default);
                    t.default = o;
                },
                883: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.SCROLLING_SPEED = t.SELECT_MULTIPLE_TYPE = t.SELECT_ONE_TYPE = t.TEXT_TYPE = t.KEY_CODES = t.ACTION_TYPES = t.EVENTS = void 0, 
                    t.EVENTS = {
                        showDropdown: "showDropdown",
                        hideDropdown: "hideDropdown",
                        change: "change",
                        choice: "choice",
                        search: "search",
                        addItem: "addItem",
                        removeItem: "removeItem",
                        highlightItem: "highlightItem",
                        highlightChoice: "highlightChoice",
                        unhighlightItem: "unhighlightItem"
                    }, t.ACTION_TYPES = {
                        ADD_CHOICE: "ADD_CHOICE",
                        FILTER_CHOICES: "FILTER_CHOICES",
                        ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                        CLEAR_CHOICES: "CLEAR_CHOICES",
                        ADD_GROUP: "ADD_GROUP",
                        ADD_ITEM: "ADD_ITEM",
                        REMOVE_ITEM: "REMOVE_ITEM",
                        HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                        CLEAR_ALL: "CLEAR_ALL",
                        RESET_TO: "RESET_TO",
                        SET_IS_LOADING: "SET_IS_LOADING"
                    }, t.KEY_CODES = {
                        BACK_KEY: 46,
                        DELETE_KEY: 8,
                        ENTER_KEY: 13,
                        A_KEY: 65,
                        ESC_KEY: 27,
                        UP_KEY: 38,
                        DOWN_KEY: 40,
                        PAGE_UP_KEY: 33,
                        PAGE_DOWN_KEY: 34
                    }, t.TEXT_TYPE = "text", t.SELECT_ONE_TYPE = "select-one", t.SELECT_MULTIPLE_TYPE = "select-multiple", 
                    t.SCROLLING_SPEED = 4;
                },
                789: function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.DEFAULT_CONFIG = t.DEFAULT_CLASSNAMES = void 0;
                    var n = i(799);
                    t.DEFAULT_CLASSNAMES = {
                        containerOuter: "choices",
                        containerInner: "choices__inner",
                        input: "choices__input",
                        inputCloned: "choices__input--cloned",
                        list: "choices__list",
                        listItems: "choices__list--multiple",
                        listSingle: "choices__list--single",
                        listDropdown: "choices__list--dropdown",
                        item: "choices__item",
                        itemSelectable: "choices__item--selectable",
                        itemDisabled: "choices__item--disabled",
                        itemChoice: "choices__item--choice",
                        placeholder: "choices__placeholder",
                        group: "choices__group",
                        groupHeading: "choices__heading",
                        button: "choices__button",
                        activeState: "is-active",
                        focusState: "is-focused",
                        openState: "is-open",
                        disabledState: "is-disabled",
                        highlightedState: "is-highlighted",
                        selectedState: "is-selected",
                        flippedState: "is-flipped",
                        loadingState: "is-loading",
                        noResults: "has-no-results",
                        noChoices: "has-no-choices"
                    }, t.DEFAULT_CONFIG = {
                        items: [],
                        choices: [],
                        silent: !1,
                        renderChoiceLimit: -1,
                        maxItemCount: -1,
                        addItems: !0,
                        addItemFilter: null,
                        removeItems: !0,
                        removeItemButton: !1,
                        editItems: !1,
                        allowHTML: !0,
                        duplicateItemsAllowed: !0,
                        delimiter: ",",
                        paste: !0,
                        searchEnabled: !0,
                        searchChoices: !0,
                        searchFloor: 1,
                        searchResultLimit: 4,
                        searchFields: [ "label", "value" ],
                        position: "auto",
                        resetScrollPosition: !0,
                        shouldSort: !0,
                        shouldSortItems: !1,
                        sorter: n.sortByAlpha,
                        placeholder: !0,
                        placeholderValue: null,
                        searchPlaceholderValue: null,
                        prependValue: null,
                        appendValue: null,
                        renderSelectedChoices: "auto",
                        loadingText: "Loading...",
                        noResultsText: "No results found",
                        noChoicesText: "No choices to choose from",
                        itemSelectText: "Press to select",
                        uniqueItemText: "Only unique values can be added",
                        customAddItemText: "Only values matching specific conditions can be added",
                        addItemText: function(e) {
                            return 'Press Enter to add <b>"'.concat((0, n.sanitise)(e), '"</b>');
                        },
                        maxItemText: function(e) {
                            return "Only ".concat(e, " values can be added");
                        },
                        valueComparer: function(e, t) {
                            return e === t;
                        },
                        fuseOptions: {
                            includeScore: !0
                        },
                        labelId: "",
                        callbackOnInit: null,
                        callbackOnCreateTemplates: null,
                        classNames: t.DEFAULT_CLASSNAMES
                    };
                },
                18: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                978: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                948: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                359: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                285: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                533: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                187: function(e, t, i) {
                    var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
                        void 0 === n && (n = i), Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: function() {
                                return t[i];
                            }
                        });
                    } : function(e, t, i, n) {
                        void 0 === n && (n = i), e[n] = t[i];
                    }), s = this && this.__exportStar || function(e, t) {
                        for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || n(t, e, i);
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), s(i(18), t), s(i(978), t), s(i(948), t), s(i(359), t), s(i(285), t), s(i(533), t), 
                    s(i(287), t), s(i(132), t), s(i(837), t), s(i(598), t), s(i(369), t), s(i(37), t), 
                    s(i(47), t), s(i(923), t), s(i(876), t);
                },
                287: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                132: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                837: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                598: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                37: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                369: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                47: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                923: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                876: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                },
                799: function(e, t) {
                    var i;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.diff = t.cloneObject = t.existsInArray = t.dispatchEvent = t.sortByScore = t.sortByAlpha = t.strToEl = t.sanitise = t.isScrolledIntoView = t.getAdjacentEl = t.wrap = t.isType = t.getType = t.generateId = t.generateChars = t.getRandomNumber = void 0, 
                    t.getRandomNumber = function(e, t) {
                        return Math.floor(Math.random() * (t - e) + e);
                    }, t.generateChars = function(e) {
                        return Array.from({
                            length: e
                        }, (function() {
                            return (0, t.getRandomNumber)(0, 36).toString(36);
                        })).join("");
                    }, t.generateId = function(e, i) {
                        var n = e.id || e.name && "".concat(e.name, "-").concat((0, t.generateChars)(2)) || (0, 
                        t.generateChars)(4);
                        return n = n.replace(/(:|\.|\[|\]|,)/g, ""), "".concat(i, "-").concat(n);
                    }, t.getType = function(e) {
                        return Object.prototype.toString.call(e).slice(8, -1);
                    }, t.isType = function(e, i) {
                        return null != i && (0, t.getType)(i) === e;
                    }, t.wrap = function(e, t) {
                        return void 0 === t && (t = document.createElement("div")), e.parentNode && (e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)), 
                        t.appendChild(e);
                    }, t.getAdjacentEl = function(e, t, i) {
                        void 0 === i && (i = 1);
                        for (var n = "".concat(i > 0 ? "next" : "previous", "ElementSibling"), s = e[n]; s; ) {
                            if (s.matches(t)) return s;
                            s = s[n];
                        }
                        return s;
                    }, t.isScrolledIntoView = function(e, t, i) {
                        return void 0 === i && (i = 1), !!e && (i > 0 ? t.scrollTop + t.offsetHeight >= e.offsetTop + e.offsetHeight : e.offsetTop >= t.scrollTop);
                    }, t.sanitise = function(e) {
                        return "string" != typeof e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                    }, t.strToEl = (i = document.createElement("div"), function(e) {
                        var t = e.trim();
                        i.innerHTML = t;
                        for (var n = i.children[0]; i.firstChild; ) i.removeChild(i.firstChild);
                        return n;
                    }), t.sortByAlpha = function(e, t) {
                        var i = e.value, n = e.label, s = void 0 === n ? i : n, r = t.value, o = t.label, a = void 0 === o ? r : o;
                        return s.localeCompare(a, [], {
                            sensitivity: "base",
                            ignorePunctuation: !0,
                            numeric: !0
                        });
                    }, t.sortByScore = function(e, t) {
                        var i = e.score, n = void 0 === i ? 0 : i, s = t.score;
                        return n - (void 0 === s ? 0 : s);
                    }, t.dispatchEvent = function(e, t, i) {
                        void 0 === i && (i = null);
                        var n = new CustomEvent(t, {
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        });
                        return e.dispatchEvent(n);
                    }, t.existsInArray = function(e, t, i) {
                        return void 0 === i && (i = "value"), e.some((function(e) {
                            return "string" == typeof t ? e[i] === t.trim() : e[i] === t;
                        }));
                    }, t.cloneObject = function(e) {
                        return JSON.parse(JSON.stringify(e));
                    }, t.diff = function(e, t) {
                        var i = Object.keys(e).sort(), n = Object.keys(t).sort();
                        return i.filter((function(e) {
                            return n.indexOf(e) < 0;
                        }));
                    };
                },
                273: function(e, t) {
                    var i = this && this.__spreadArray || function(e, t, i) {
                        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), 
                        n[s] = t[s]);
                        return e.concat(n || Array.prototype.slice.call(t));
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.defaultState = void 0, t.defaultState = [], t.default = function(e, n) {
                        switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
                          case "ADD_CHOICE":
                            var s = n, r = {
                                id: s.id,
                                elementId: s.elementId,
                                groupId: s.groupId,
                                value: s.value,
                                label: s.label || s.value,
                                disabled: s.disabled || !1,
                                selected: !1,
                                active: !0,
                                score: 9999,
                                customProperties: s.customProperties,
                                placeholder: s.placeholder || !1
                            };
                            return i(i([], e, !0), [ r ], !1);

                          case "ADD_ITEM":
                            var o = n;
                            return o.choiceId > -1 ? e.map((function(e) {
                                var t = e;
                                return t.id === parseInt("".concat(o.choiceId), 10) && (t.selected = !0), t;
                            })) : e;

                          case "REMOVE_ITEM":
                            var a = n;
                            return a.choiceId && a.choiceId > -1 ? e.map((function(e) {
                                var t = e;
                                return t.id === parseInt("".concat(a.choiceId), 10) && (t.selected = !1), t;
                            })) : e;

                          case "FILTER_CHOICES":
                            var c = n;
                            return e.map((function(e) {
                                var t = e;
                                return t.active = c.results.some((function(e) {
                                    var i = e.item, n = e.score;
                                    return i.id === t.id && (t.score = n, !0);
                                })), t;
                            }));

                          case "ACTIVATE_CHOICES":
                            var l = n;
                            return e.map((function(e) {
                                var t = e;
                                return t.active = l.active, t;
                            }));

                          case "CLEAR_CHOICES":
                            return t.defaultState;

                          default:
                            return e;
                        }
                    };
                },
                871: function(e, t) {
                    var i = this && this.__spreadArray || function(e, t, i) {
                        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), 
                        n[s] = t[s]);
                        return e.concat(n || Array.prototype.slice.call(t));
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.defaultState = void 0, t.defaultState = [], t.default = function(e, n) {
                        switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
                          case "ADD_GROUP":
                            var s = n;
                            return i(i([], e, !0), [ {
                                id: s.id,
                                value: s.value,
                                active: s.active,
                                disabled: s.disabled
                            } ], !1);

                          case "CLEAR_CHOICES":
                            return [];

                          default:
                            return e;
                        }
                    };
                },
                655: function(e, t, i) {
                    var n = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.defaultState = void 0;
                    var s = i(857), r = n(i(52)), o = n(i(871)), a = n(i(273)), c = n(i(502)), l = i(799);
                    t.defaultState = {
                        groups: [],
                        items: [],
                        choices: [],
                        loading: !1
                    };
                    var h = (0, s.combineReducers)({
                        items: r.default,
                        groups: o.default,
                        choices: a.default,
                        loading: c.default
                    });
                    t.default = function(e, i) {
                        var n = e;
                        if ("CLEAR_ALL" === i.type) n = t.defaultState; else if ("RESET_TO" === i.type) return (0, 
                        l.cloneObject)(i.state);
                        return h(n, i);
                    };
                },
                52: function(e, t) {
                    var i = this && this.__spreadArray || function(e, t, i) {
                        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), 
                        n[s] = t[s]);
                        return e.concat(n || Array.prototype.slice.call(t));
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.defaultState = void 0, t.defaultState = [], t.default = function(e, n) {
                        switch (void 0 === e && (e = t.defaultState), void 0 === n && (n = {}), n.type) {
                          case "ADD_ITEM":
                            var s = n;
                            return i(i([], e, !0), [ {
                                id: s.id,
                                choiceId: s.choiceId,
                                groupId: s.groupId,
                                value: s.value,
                                label: s.label,
                                active: !0,
                                highlighted: !1,
                                customProperties: s.customProperties,
                                placeholder: s.placeholder || !1,
                                keyCode: null
                            } ], !1).map((function(e) {
                                var t = e;
                                return t.highlighted = !1, t;
                            }));

                          case "REMOVE_ITEM":
                            return e.map((function(e) {
                                var t = e;
                                return t.id === n.id && (t.active = !1), t;
                            }));

                          case "HIGHLIGHT_ITEM":
                            var r = n;
                            return e.map((function(e) {
                                var t = e;
                                return t.id === r.id && (t.highlighted = r.highlighted), t;
                            }));

                          default:
                            return e;
                        }
                    };
                },
                502: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.defaultState = void 0, t.defaultState = !1, t.default = function(e, i) {
                        return void 0 === e && (e = t.defaultState), void 0 === i && (i = {}), "SET_IS_LOADING" === i.type ? i.isLoading : e;
                    };
                },
                744: function(e, t, i) {
                    var n = this && this.__spreadArray || function(e, t, i) {
                        if (i || 2 === arguments.length) for (var n, s = 0, r = t.length; s < r; s++) !n && s in t || (n || (n = Array.prototype.slice.call(t, 0, s)), 
                        n[s] = t[s]);
                        return e.concat(n || Array.prototype.slice.call(t));
                    }, s = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    };
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = i(857), o = s(i(655)), a = function() {
                        function e() {
                            this._store = (0, r.createStore)(o.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                        }
                        return e.prototype.subscribe = function(e) {
                            this._store.subscribe(e);
                        }, e.prototype.dispatch = function(e) {
                            this._store.dispatch(e);
                        }, Object.defineProperty(e.prototype, "state", {
                            get: function() {
                                return this._store.getState();
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "items", {
                            get: function() {
                                return this.state.items;
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "activeItems", {
                            get: function() {
                                return this.items.filter((function(e) {
                                    return !0 === e.active;
                                }));
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "highlightedActiveItems", {
                            get: function() {
                                return this.items.filter((function(e) {
                                    return e.active && e.highlighted;
                                }));
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "choices", {
                            get: function() {
                                return this.state.choices;
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "activeChoices", {
                            get: function() {
                                return this.choices.filter((function(e) {
                                    return !0 === e.active;
                                }));
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "selectableChoices", {
                            get: function() {
                                return this.choices.filter((function(e) {
                                    return !0 !== e.disabled;
                                }));
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "searchableChoices", {
                            get: function() {
                                return this.selectableChoices.filter((function(e) {
                                    return !0 !== e.placeholder;
                                }));
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "placeholderChoice", {
                            get: function() {
                                return n([], this.choices, !0).reverse().find((function(e) {
                                    return !0 === e.placeholder;
                                }));
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "groups", {
                            get: function() {
                                return this.state.groups;
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "activeGroups", {
                            get: function() {
                                var e = this.groups, t = this.choices;
                                return e.filter((function(e) {
                                    var i = !0 === e.active && !1 === e.disabled, n = t.some((function(e) {
                                        return !0 === e.active && !1 === e.disabled;
                                    }));
                                    return i && n;
                                }), []);
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.isLoading = function() {
                            return this.state.loading;
                        }, e.prototype.getChoiceById = function(e) {
                            return this.activeChoices.find((function(t) {
                                return t.id === parseInt(e, 10);
                            }));
                        }, e.prototype.getGroupById = function(e) {
                            return this.groups.find((function(t) {
                                return t.id === e;
                            }));
                        }, e;
                    }();
                    t.default = a;
                },
                686: function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = {
                        containerOuter: function(e, t, i, n, s, r, o) {
                            var a = e.classNames.containerOuter, c = Object.assign(document.createElement("div"), {
                                className: a
                            });
                            return c.dataset.type = r, t && (c.dir = t), n && (c.tabIndex = 0), i && (c.setAttribute("role", s ? "combobox" : "listbox"), 
                            s && c.setAttribute("aria-autocomplete", "list")), c.setAttribute("aria-haspopup", "true"), 
                            c.setAttribute("aria-expanded", "false"), o && c.setAttribute("aria-labeledby", o), 
                            c;
                        },
                        containerInner: function(e) {
                            var t = e.classNames.containerInner;
                            return Object.assign(document.createElement("div"), {
                                className: t
                            });
                        },
                        itemList: function(e, t) {
                            var i = e.classNames, n = i.list, s = i.listSingle, r = i.listItems;
                            return Object.assign(document.createElement("div"), {
                                className: "".concat(n, " ").concat(t ? s : r)
                            });
                        },
                        placeholder: function(e, t) {
                            var i, n = e.allowHTML, s = e.classNames.placeholder;
                            return Object.assign(document.createElement("div"), ((i = {
                                className: s
                            })[n ? "innerHTML" : "innerText"] = t, i));
                        },
                        item: function(e, t, i) {
                            var n, s, r = e.allowHTML, o = e.classNames, a = o.item, c = o.button, l = o.highlightedState, h = o.itemSelectable, u = o.placeholder, d = t.id, p = t.value, f = t.label, m = t.customProperties, v = t.active, g = t.disabled, _ = t.highlighted, y = t.placeholder, E = Object.assign(document.createElement("div"), ((n = {
                                className: a
                            })[r ? "innerHTML" : "innerText"] = f, n));
                            if (Object.assign(E.dataset, {
                                item: "",
                                id: d,
                                value: p,
                                customProperties: m
                            }), v && E.setAttribute("aria-selected", "true"), g && E.setAttribute("aria-disabled", "true"), 
                            y && E.classList.add(u), E.classList.add(_ ? l : h), i) {
                                g && E.classList.remove(h), E.dataset.deletable = "";
                                var b = "Remove item", S = Object.assign(document.createElement("button"), ((s = {
                                    type: "button",
                                    className: c
                                })[r ? "innerHTML" : "innerText"] = b, s));
                                S.setAttribute("aria-label", "".concat(b, ": '").concat(p, "'")), S.dataset.button = "", 
                                E.appendChild(S);
                            }
                            return E;
                        },
                        choiceList: function(e, t) {
                            var i = e.classNames.list, n = Object.assign(document.createElement("div"), {
                                className: i
                            });
                            return t || n.setAttribute("aria-multiselectable", "true"), n.setAttribute("role", "listbox"), 
                            n;
                        },
                        choiceGroup: function(e, t) {
                            var i, n = e.allowHTML, s = e.classNames, r = s.group, o = s.groupHeading, a = s.itemDisabled, c = t.id, l = t.value, h = t.disabled, u = Object.assign(document.createElement("div"), {
                                className: "".concat(r, " ").concat(h ? a : "")
                            });
                            return u.setAttribute("role", "group"), Object.assign(u.dataset, {
                                group: "",
                                id: c,
                                value: l
                            }), h && u.setAttribute("aria-disabled", "true"), u.appendChild(Object.assign(document.createElement("div"), ((i = {
                                className: o
                            })[n ? "innerHTML" : "innerText"] = l, i))), u;
                        },
                        choice: function(e, t, i) {
                            var n, s = e.allowHTML, r = e.classNames, o = r.item, a = r.itemChoice, c = r.itemSelectable, l = r.selectedState, h = r.itemDisabled, u = r.placeholder, d = t.id, p = t.value, f = t.label, m = t.groupId, v = t.elementId, g = t.disabled, _ = t.selected, y = t.placeholder, E = Object.assign(document.createElement("div"), ((n = {
                                id: v
                            })[s ? "innerHTML" : "innerText"] = f, n.className = "".concat(o, " ").concat(a), 
                            n));
                            return _ && E.classList.add(l), y && E.classList.add(u), E.setAttribute("role", m && m > 0 ? "treeitem" : "option"), 
                            Object.assign(E.dataset, {
                                choice: "",
                                id: d,
                                value: p,
                                selectText: i
                            }), g ? (E.classList.add(h), E.dataset.choiceDisabled = "", E.setAttribute("aria-disabled", "true")) : (E.classList.add(c), 
                            E.dataset.choiceSelectable = ""), E;
                        },
                        input: function(e, t) {
                            var i = e.classNames, n = i.input, s = i.inputCloned, r = Object.assign(document.createElement("input"), {
                                type: "search",
                                name: "search_terms",
                                className: "".concat(n, " ").concat(s),
                                autocomplete: "off",
                                autocapitalize: "off",
                                spellcheck: !1
                            });
                            return r.setAttribute("role", "textbox"), r.setAttribute("aria-autocomplete", "list"), 
                            r.setAttribute("aria-label", t), r;
                        },
                        dropdown: function(e) {
                            var t = e.classNames, i = t.list, n = t.listDropdown, s = document.createElement("div");
                            return s.classList.add(i, n), s.setAttribute("aria-expanded", "false"), s;
                        },
                        notice: function(e, t, i) {
                            var n, s = e.allowHTML, r = e.classNames, o = r.item, a = r.itemChoice, c = r.noResults, l = r.noChoices;
                            void 0 === i && (i = "");
                            var h = [ o, a ];
                            return "no-choices" === i ? h.push(l) : "no-results" === i && h.push(c), Object.assign(document.createElement("div"), ((n = {})[s ? "innerHTML" : "innerText"] = t, 
                            n.className = h.join(" "), n));
                        },
                        option: function(e) {
                            var t = e.label, i = e.value, n = e.customProperties, s = e.active, r = e.disabled, o = new Option(t, i, !1, s);
                            return n && (o.dataset.customProperties = "".concat(n)), o.disabled = !!r, o;
                        }
                    };
                    t.default = i;
                },
                996: function(e) {
                    var t = function(e) {
                        return function(e) {
                            return !!e && "object" == typeof e;
                        }(e) && !function(e) {
                            var t = Object.prototype.toString.call(e);
                            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                                return e.$$typeof === i;
                            }(e);
                        }(e);
                    }, i = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
                    function n(e, t) {
                        return !1 !== t.clone && t.isMergeableObject(e) ? a((i = e, Array.isArray(i) ? [] : {}), e, t) : e;
                        var i;
                    }
                    function s(e, t, i) {
                        return e.concat(t).map((function(e) {
                            return n(e, i);
                        }));
                    }
                    function r(e) {
                        return Object.keys(e).concat(function(e) {
                            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                                return e.propertyIsEnumerable(t);
                            })) : [];
                        }(e));
                    }
                    function o(e, t) {
                        try {
                            return t in e;
                        } catch (e) {
                            return !1;
                        }
                    }
                    function a(e, i, c) {
                        (c = c || {}).arrayMerge = c.arrayMerge || s, c.isMergeableObject = c.isMergeableObject || t, 
                        c.cloneUnlessOtherwiseSpecified = n;
                        var l = Array.isArray(i);
                        return l === Array.isArray(e) ? l ? c.arrayMerge(e, i, c) : function(e, t, i) {
                            var s = {};
                            return i.isMergeableObject(e) && r(e).forEach((function(t) {
                                s[t] = n(e[t], i);
                            })), r(t).forEach((function(r) {
                                (function(e, t) {
                                    return o(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
                                })(e, r) || (o(e, r) && i.isMergeableObject(t[r]) ? s[r] = function(e, t) {
                                    if (!t.customMerge) return a;
                                    var i = t.customMerge(e);
                                    return "function" == typeof i ? i : a;
                                }(r, i)(e[r], t[r], i) : s[r] = n(t[r], i));
                            })), s;
                        }(e, i, c) : n(i, c);
                    }
                    a.all = function(e, t) {
                        if (!Array.isArray(e)) throw new Error("first argument should be an array");
                        return e.reduce((function(e, i) {
                            return a(e, i, t);
                        }), {});
                    };
                    var c = a;
                    e.exports = c;
                },
                221: function(e, t, i) {
                    function n(e) {
                        return Array.isArray ? Array.isArray(e) : "[object Array]" === l(e);
                    }
                    function s(e) {
                        return "string" == typeof e;
                    }
                    function r(e) {
                        return "number" == typeof e;
                    }
                    function o(e) {
                        return "object" == typeof e;
                    }
                    function a(e) {
                        return null != e;
                    }
                    function c(e) {
                        return !e.trim().length;
                    }
                    function l(e) {
                        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
                    }
                    i.r(t), i.d(t, {
                        default: function() {
                            return R;
                        }
                    });
                    const h = Object.prototype.hasOwnProperty;
                    class u {
                        constructor(e) {
                            this._keys = [], this._keyMap = {};
                            let t = 0;
                            e.forEach((e => {
                                let i = d(e);
                                t += i.weight, this._keys.push(i), this._keyMap[i.id] = i, t += i.weight;
                            })), this._keys.forEach((e => {
                                e.weight /= t;
                            }));
                        }
                        get(e) {
                            return this._keyMap[e];
                        }
                        keys() {
                            return this._keys;
                        }
                        toJSON() {
                            return JSON.stringify(this._keys);
                        }
                    }
                    function d(e) {
                        let t = null, i = null, r = null, o = 1;
                        if (s(e) || n(e)) r = e, t = p(e), i = f(e); else {
                            if (!h.call(e, "name")) throw new Error("Missing name property in key");
                            const n = e.name;
                            if (r = n, h.call(e, "weight") && (o = e.weight, o <= 0)) throw new Error((e => `Property 'weight' in key '${e}' must be a positive integer`)(n));
                            t = p(n), i = f(n);
                        }
                        return {
                            path: t,
                            id: i,
                            weight: o,
                            src: r
                        };
                    }
                    function p(e) {
                        return n(e) ? e : e.split(".");
                    }
                    function f(e) {
                        return n(e) ? e.join(".") : e;
                    }
                    var m = {
                        isCaseSensitive: !1,
                        includeScore: !1,
                        keys: [],
                        shouldSort: !0,
                        sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1,
                        includeMatches: !1,
                        findAllMatches: !1,
                        minMatchCharLength: 1,
                        location: 0,
                        threshold: .6,
                        distance: 100,
                        useExtendedSearch: !1,
                        getFn: function(e, t) {
                            let i = [], c = !1;
                            const h = (e, t, u) => {
                                if (a(e)) if (t[u]) {
                                    const d = e[t[u]];
                                    if (!a(d)) return;
                                    if (u === t.length - 1 && (s(d) || r(d) || function(e) {
                                        return !0 === e || !1 === e || function(e) {
                                            return o(e) && null !== e;
                                        }(e) && "[object Boolean]" == l(e);
                                    }(d))) i.push(function(e) {
                                        return null == e ? "" : function(e) {
                                            if ("string" == typeof e) return e;
                                            let t = e + "";
                                            return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                                        }(e);
                                    }(d)); else if (n(d)) {
                                        c = !0;
                                        for (let e = 0, i = d.length; e < i; e += 1) h(d[e], t, u + 1);
                                    } else t.length && h(d, t, u + 1);
                                } else i.push(e);
                            };
                            return h(e, s(t) ? t.split(".") : t, 0), c ? i : i[0];
                        },
                        ignoreLocation: !1,
                        ignoreFieldNorm: !1,
                        fieldNormWeight: 1
                    };
                    const v = /[^ ]+/g;
                    class g {
                        constructor({getFn: e = m.getFn, fieldNormWeight: t = m.fieldNormWeight} = {}) {
                            this.norm = function(e = 1, t = 3) {
                                const i = new Map, n = Math.pow(10, t);
                                return {
                                    get(t) {
                                        const s = t.match(v).length;
                                        if (i.has(s)) return i.get(s);
                                        const r = 1 / Math.pow(s, .5 * e), o = parseFloat(Math.round(r * n) / n);
                                        return i.set(s, o), o;
                                    },
                                    clear() {
                                        i.clear();
                                    }
                                };
                            }(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
                        }
                        setSources(e = []) {
                            this.docs = e;
                        }
                        setIndexRecords(e = []) {
                            this.records = e;
                        }
                        setKeys(e = []) {
                            this.keys = e, this._keysMap = {}, e.forEach(((e, t) => {
                                this._keysMap[e.id] = t;
                            }));
                        }
                        create() {
                            !this.isCreated && this.docs.length && (this.isCreated = !0, s(this.docs[0]) ? this.docs.forEach(((e, t) => {
                                this._addString(e, t);
                            })) : this.docs.forEach(((e, t) => {
                                this._addObject(e, t);
                            })), this.norm.clear());
                        }
                        add(e) {
                            const t = this.size();
                            s(e) ? this._addString(e, t) : this._addObject(e, t);
                        }
                        removeAt(e) {
                            this.records.splice(e, 1);
                            for (let t = e, i = this.size(); t < i; t += 1) this.records[t].i -= 1;
                        }
                        getValueForItemAtKeyId(e, t) {
                            return e[this._keysMap[t]];
                        }
                        size() {
                            return this.records.length;
                        }
                        _addString(e, t) {
                            if (!a(e) || c(e)) return;
                            let i = {
                                v: e,
                                i: t,
                                n: this.norm.get(e)
                            };
                            this.records.push(i);
                        }
                        _addObject(e, t) {
                            let i = {
                                i: t,
                                $: {}
                            };
                            this.keys.forEach(((t, r) => {
                                let o = this.getFn(e, t.path);
                                if (a(o)) if (n(o)) {
                                    let e = [];
                                    const t = [ {
                                        nestedArrIndex: -1,
                                        value: o
                                    } ];
                                    for (;t.length; ) {
                                        const {nestedArrIndex: i, value: r} = t.pop();
                                        if (a(r)) if (s(r) && !c(r)) {
                                            let t = {
                                                v: r,
                                                i,
                                                n: this.norm.get(r)
                                            };
                                            e.push(t);
                                        } else n(r) && r.forEach(((e, i) => {
                                            t.push({
                                                nestedArrIndex: i,
                                                value: e
                                            });
                                        }));
                                    }
                                    i.$[r] = e;
                                } else if (!c(o)) {
                                    let e = {
                                        v: o,
                                        n: this.norm.get(o)
                                    };
                                    i.$[r] = e;
                                }
                            })), this.records.push(i);
                        }
                        toJSON() {
                            return {
                                keys: this.keys,
                                records: this.records
                            };
                        }
                    }
                    function _(e, t, {getFn: i = m.getFn, fieldNormWeight: n = m.fieldNormWeight} = {}) {
                        const s = new g({
                            getFn: i,
                            fieldNormWeight: n
                        });
                        return s.setKeys(e.map(d)), s.setSources(t), s.create(), s;
                    }
                    function y(e, {errors: t = 0, currentLocation: i = 0, expectedLocation: n = 0, distance: s = m.distance, ignoreLocation: r = m.ignoreLocation} = {}) {
                        const o = t / e.length;
                        if (r) return o;
                        const a = Math.abs(n - i);
                        return s ? o + a / s : a ? 1 : o;
                    }
                    const E = 32;
                    function b(e) {
                        let t = {};
                        for (let i = 0, n = e.length; i < n; i += 1) {
                            const s = e.charAt(i);
                            t[s] = (t[s] || 0) | 1 << n - i - 1;
                        }
                        return t;
                    }
                    class S {
                        constructor(e, {location: t = m.location, threshold: i = m.threshold, distance: n = m.distance, includeMatches: s = m.includeMatches, findAllMatches: r = m.findAllMatches, minMatchCharLength: o = m.minMatchCharLength, isCaseSensitive: a = m.isCaseSensitive, ignoreLocation: c = m.ignoreLocation} = {}) {
                            if (this.options = {
                                location: t,
                                threshold: i,
                                distance: n,
                                includeMatches: s,
                                findAllMatches: r,
                                minMatchCharLength: o,
                                isCaseSensitive: a,
                                ignoreLocation: c
                            }, this.pattern = a ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length) return;
                            const l = (e, t) => {
                                this.chunks.push({
                                    pattern: e,
                                    alphabet: b(e),
                                    startIndex: t
                                });
                            }, h = this.pattern.length;
                            if (h > E) {
                                let e = 0;
                                const t = h % E, i = h - t;
                                for (;e < i; ) l(this.pattern.substr(e, E), e), e += E;
                                if (t) {
                                    const e = h - E;
                                    l(this.pattern.substr(e), e);
                                }
                            } else l(this.pattern, 0);
                        }
                        searchIn(e) {
                            const {isCaseSensitive: t, includeMatches: i} = this.options;
                            if (t || (e = e.toLowerCase()), this.pattern === e) {
                                let t = {
                                    isMatch: !0,
                                    score: 0
                                };
                                return i && (t.indices = [ [ 0, e.length - 1 ] ]), t;
                            }
                            const {location: n, distance: s, threshold: r, findAllMatches: o, minMatchCharLength: a, ignoreLocation: c} = this.options;
                            let l = [], h = 0, u = !1;
                            this.chunks.forEach((({pattern: t, alphabet: d, startIndex: p}) => {
                                const {isMatch: f, score: v, indices: g} = function(e, t, i, {location: n = m.location, distance: s = m.distance, threshold: r = m.threshold, findAllMatches: o = m.findAllMatches, minMatchCharLength: a = m.minMatchCharLength, includeMatches: c = m.includeMatches, ignoreLocation: l = m.ignoreLocation} = {}) {
                                    if (t.length > E) throw new Error("Pattern length exceeds max of 32.");
                                    const h = t.length, u = e.length, d = Math.max(0, Math.min(n, u));
                                    let p = r, f = d;
                                    const v = a > 1 || c, g = v ? Array(u) : [];
                                    let _;
                                    for (;(_ = e.indexOf(t, f)) > -1; ) {
                                        let e = y(t, {
                                            currentLocation: _,
                                            expectedLocation: d,
                                            distance: s,
                                            ignoreLocation: l
                                        });
                                        if (p = Math.min(e, p), f = _ + h, v) {
                                            let e = 0;
                                            for (;e < h; ) g[_ + e] = 1, e += 1;
                                        }
                                    }
                                    f = -1;
                                    let b = [], S = 1, I = h + u;
                                    const O = 1 << h - 1;
                                    for (let n = 0; n < h; n += 1) {
                                        let r = 0, a = I;
                                        for (;r < a; ) y(t, {
                                            errors: n,
                                            currentLocation: d + a,
                                            expectedLocation: d,
                                            distance: s,
                                            ignoreLocation: l
                                        }) <= p ? r = a : I = a, a = Math.floor((I - r) / 2 + r);
                                        I = a;
                                        let c = Math.max(1, d - a + 1), m = o ? u : Math.min(d + a, u) + h, _ = Array(m + 2);
                                        _[m + 1] = (1 << n) - 1;
                                        for (let r = m; r >= c; r -= 1) {
                                            let o = r - 1, a = i[e.charAt(o)];
                                            if (v && (g[o] = +!!a), _[r] = (_[r + 1] << 1 | 1) & a, n && (_[r] |= (b[r + 1] | b[r]) << 1 | 1 | b[r + 1]), 
                                            _[r] & O && (S = y(t, {
                                                errors: n,
                                                currentLocation: o,
                                                expectedLocation: d,
                                                distance: s,
                                                ignoreLocation: l
                                            }), S <= p)) {
                                                if (p = S, f = o, f <= d) break;
                                                c = Math.max(1, 2 * d - f);
                                            }
                                        }
                                        if (y(t, {
                                            errors: n + 1,
                                            currentLocation: d,
                                            expectedLocation: d,
                                            distance: s,
                                            ignoreLocation: l
                                        }) > p) break;
                                        b = _;
                                    }
                                    const C = {
                                        isMatch: f >= 0,
                                        score: Math.max(.001, S)
                                    };
                                    if (v) {
                                        const e = function(e = [], t = m.minMatchCharLength) {
                                            let i = [], n = -1, s = -1, r = 0;
                                            for (let o = e.length; r < o; r += 1) {
                                                let o = e[r];
                                                o && -1 === n ? n = r : o || -1 === n || (s = r - 1, s - n + 1 >= t && i.push([ n, s ]), 
                                                n = -1);
                                            }
                                            return e[r - 1] && r - n >= t && i.push([ n, r - 1 ]), i;
                                        }(g, a);
                                        e.length ? c && (C.indices = e) : C.isMatch = !1;
                                    }
                                    return C;
                                }(e, t, d, {
                                    location: n + p,
                                    distance: s,
                                    threshold: r,
                                    findAllMatches: o,
                                    minMatchCharLength: a,
                                    includeMatches: i,
                                    ignoreLocation: c
                                });
                                f && (u = !0), h += v, f && g && (l = [ ...l, ...g ]);
                            }));
                            let d = {
                                isMatch: u,
                                score: u ? h / this.chunks.length : 1
                            };
                            return u && i && (d.indices = l), d;
                        }
                    }
                    class I {
                        constructor(e) {
                            this.pattern = e;
                        }
                        static isMultiMatch(e) {
                            return O(e, this.multiRegex);
                        }
                        static isSingleMatch(e) {
                            return O(e, this.singleRegex);
                        }
                        search() {}
                    }
                    function O(e, t) {
                        const i = e.match(t);
                        return i ? i[1] : null;
                    }
                    class C extends I {
                        constructor(e, {location: t = m.location, threshold: i = m.threshold, distance: n = m.distance, includeMatches: s = m.includeMatches, findAllMatches: r = m.findAllMatches, minMatchCharLength: o = m.minMatchCharLength, isCaseSensitive: a = m.isCaseSensitive, ignoreLocation: c = m.ignoreLocation} = {}) {
                            super(e), this._bitapSearch = new S(e, {
                                location: t,
                                threshold: i,
                                distance: n,
                                includeMatches: s,
                                findAllMatches: r,
                                minMatchCharLength: o,
                                isCaseSensitive: a,
                                ignoreLocation: c
                            });
                        }
                        static get type() {
                            return "fuzzy";
                        }
                        static get multiRegex() {
                            return /^"(.*)"$/;
                        }
                        static get singleRegex() {
                            return /^(.*)$/;
                        }
                        search(e) {
                            return this._bitapSearch.searchIn(e);
                        }
                    }
                    class T extends I {
                        constructor(e) {
                            super(e);
                        }
                        static get type() {
                            return "include";
                        }
                        static get multiRegex() {
                            return /^'"(.*)"$/;
                        }
                        static get singleRegex() {
                            return /^'(.*)$/;
                        }
                        search(e) {
                            let t, i = 0;
                            const n = [], s = this.pattern.length;
                            for (;(t = e.indexOf(this.pattern, i)) > -1; ) i = t + s, n.push([ t, i - 1 ]);
                            const r = !!n.length;
                            return {
                                isMatch: r,
                                score: r ? 0 : 1,
                                indices: n
                            };
                        }
                    }
                    const L = [ class extends I {
                        constructor(e) {
                            super(e);
                        }
                        static get type() {
                            return "exact";
                        }
                        static get multiRegex() {
                            return /^="(.*)"$/;
                        }
                        static get singleRegex() {
                            return /^=(.*)$/;
                        }
                        search(e) {
                            const t = e === this.pattern;
                            return {
                                isMatch: t,
                                score: t ? 0 : 1,
                                indices: [ 0, this.pattern.length - 1 ]
                            };
                        }
                    }, T, class extends I {
                        constructor(e) {
                            super(e);
                        }
                        static get type() {
                            return "prefix-exact";
                        }
                        static get multiRegex() {
                            return /^\^"(.*)"$/;
                        }
                        static get singleRegex() {
                            return /^\^(.*)$/;
                        }
                        search(e) {
                            const t = e.startsWith(this.pattern);
                            return {
                                isMatch: t,
                                score: t ? 0 : 1,
                                indices: [ 0, this.pattern.length - 1 ]
                            };
                        }
                    }, class extends I {
                        constructor(e) {
                            super(e);
                        }
                        static get type() {
                            return "inverse-prefix-exact";
                        }
                        static get multiRegex() {
                            return /^!\^"(.*)"$/;
                        }
                        static get singleRegex() {
                            return /^!\^(.*)$/;
                        }
                        search(e) {
                            const t = !e.startsWith(this.pattern);
                            return {
                                isMatch: t,
                                score: t ? 0 : 1,
                                indices: [ 0, e.length - 1 ]
                            };
                        }
                    }, class extends I {
                        constructor(e) {
                            super(e);
                        }
                        static get type() {
                            return "inverse-suffix-exact";
                        }
                        static get multiRegex() {
                            return /^!"(.*)"\$$/;
                        }
                        static get singleRegex() {
                            return /^!(.*)\$$/;
                        }
                        search(e) {
                            const t = !e.endsWith(this.pattern);
                            return {
                                isMatch: t,
                                score: t ? 0 : 1,
                                indices: [ 0, e.length - 1 ]
                            };
                        }
                    }, class extends I {
                        constructor(e) {
                            super(e);
                        }
                        static get type() {
                            return "suffix-exact";
                        }
                        static get multiRegex() {
                            return /^"(.*)"\$$/;
                        }
                        static get singleRegex() {
                            return /^(.*)\$$/;
                        }
                        search(e) {
                            const t = e.endsWith(this.pattern);
                            return {
                                isMatch: t,
                                score: t ? 0 : 1,
                                indices: [ e.length - this.pattern.length, e.length - 1 ]
                            };
                        }
                    }, class extends I {
                        constructor(e) {
                            super(e);
                        }
                        static get type() {
                            return "inverse-exact";
                        }
                        static get multiRegex() {
                            return /^!"(.*)"$/;
                        }
                        static get singleRegex() {
                            return /^!(.*)$/;
                        }
                        search(e) {
                            const t = -1 === e.indexOf(this.pattern);
                            return {
                                isMatch: t,
                                score: t ? 0 : 1,
                                indices: [ 0, e.length - 1 ]
                            };
                        }
                    }, C ], w = L.length, A = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/, M = new Set([ C.type, T.type ]);
                    const P = [];
                    function x(e, t) {
                        for (let i = 0, n = P.length; i < n; i += 1) {
                            let n = P[i];
                            if (n.condition(e, t)) return new n(e, t);
                        }
                        return new S(e, t);
                    }
                    const N = "$and", D = e => !(!e.$and && !e.$or), j = e => ({
                        [N]: Object.keys(e).map((t => ({
                            [t]: e[t]
                        })))
                    });
                    function F(e, t, {auto: i = !0} = {}) {
                        const r = e => {
                            let a = Object.keys(e);
                            const c = (e => !!e.$path)(e);
                            if (!c && a.length > 1 && !D(e)) return r(j(e));
                            if ((e => !n(e) && o(e) && !D(e))(e)) {
                                const n = c ? e.$path : a[0], r = c ? e.$val : e[n];
                                if (!s(r)) throw new Error((e => `Invalid value for key ${e}`)(n));
                                const o = {
                                    keyId: f(n),
                                    pattern: r
                                };
                                return i && (o.searcher = x(r, t)), o;
                            }
                            let l = {
                                children: [],
                                operator: a[0]
                            };
                            return a.forEach((t => {
                                const i = e[t];
                                n(i) && i.forEach((e => {
                                    l.children.push(r(e));
                                }));
                            })), l;
                        };
                        return D(e) || (e = j(e)), r(e);
                    }
                    function k(e, t) {
                        const i = e.matches;
                        t.matches = [], a(i) && i.forEach((e => {
                            if (!a(e.indices) || !e.indices.length) return;
                            const {indices: i, value: n} = e;
                            let s = {
                                indices: i,
                                value: n
                            };
                            e.key && (s.key = e.key.src), e.idx > -1 && (s.refIndex = e.idx), t.matches.push(s);
                        }));
                    }
                    function K(e, t) {
                        t.score = e.score;
                    }
                    class R {
                        constructor(e, t = {}, i) {
                            this.options = {
                                ...m,
                                ...t
                            }, this.options.useExtendedSearch, this._keyStore = new u(this.options.keys), this.setCollection(e, i);
                        }
                        setCollection(e, t) {
                            if (this._docs = e, t && !(t instanceof g)) throw new Error("Incorrect 'index' type");
                            this._myIndex = t || _(this.options.keys, this._docs, {
                                getFn: this.options.getFn,
                                fieldNormWeight: this.options.fieldNormWeight
                            });
                        }
                        add(e) {
                            a(e) && (this._docs.push(e), this._myIndex.add(e));
                        }
                        remove(e = (() => !1)) {
                            const t = [];
                            for (let i = 0, n = this._docs.length; i < n; i += 1) {
                                const s = this._docs[i];
                                e(s, i) && (this.removeAt(i), i -= 1, n -= 1, t.push(s));
                            }
                            return t;
                        }
                        removeAt(e) {
                            this._docs.splice(e, 1), this._myIndex.removeAt(e);
                        }
                        getIndex() {
                            return this._myIndex;
                        }
                        search(e, {limit: t = -1} = {}) {
                            const {includeMatches: i, includeScore: n, shouldSort: o, sortFn: a, ignoreFieldNorm: c} = this.options;
                            let l = s(e) ? s(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
                            return function(e, {ignoreFieldNorm: t = m.ignoreFieldNorm}) {
                                e.forEach((e => {
                                    let i = 1;
                                    e.matches.forEach((({key: e, norm: n, score: s}) => {
                                        const r = e ? e.weight : null;
                                        i *= Math.pow(0 === s && r ? Number.EPSILON : s, (r || 1) * (t ? 1 : n));
                                    })), e.score = i;
                                }));
                            }(l, {
                                ignoreFieldNorm: c
                            }), o && l.sort(a), r(t) && t > -1 && (l = l.slice(0, t)), function(e, t, {includeMatches: i = m.includeMatches, includeScore: n = m.includeScore} = {}) {
                                const s = [];
                                return i && s.push(k), n && s.push(K), e.map((e => {
                                    const {idx: i} = e, n = {
                                        item: t[i],
                                        refIndex: i
                                    };
                                    return s.length && s.forEach((t => {
                                        t(e, n);
                                    })), n;
                                }));
                            }(l, this._docs, {
                                includeMatches: i,
                                includeScore: n
                            });
                        }
                        _searchStringList(e) {
                            const t = x(e, this.options), {records: i} = this._myIndex, n = [];
                            return i.forEach((({v: e, i, n: s}) => {
                                if (!a(e)) return;
                                const {isMatch: r, score: o, indices: c} = t.searchIn(e);
                                r && n.push({
                                    item: e,
                                    idx: i,
                                    matches: [ {
                                        score: o,
                                        value: e,
                                        norm: s,
                                        indices: c
                                    } ]
                                });
                            })), n;
                        }
                        _searchLogical(e) {
                            const t = F(e, this.options), i = (e, t, n) => {
                                if (!e.children) {
                                    const {keyId: i, searcher: s} = e, r = this._findMatches({
                                        key: this._keyStore.get(i),
                                        value: this._myIndex.getValueForItemAtKeyId(t, i),
                                        searcher: s
                                    });
                                    return r && r.length ? [ {
                                        idx: n,
                                        item: t,
                                        matches: r
                                    } ] : [];
                                }
                                const s = [];
                                for (let r = 0, o = e.children.length; r < o; r += 1) {
                                    const o = e.children[r], a = i(o, t, n);
                                    if (a.length) s.push(...a); else if (e.operator === N) return [];
                                }
                                return s;
                            }, n = this._myIndex.records, s = {}, r = [];
                            return n.forEach((({$: e, i: n}) => {
                                if (a(e)) {
                                    let o = i(t, e, n);
                                    o.length && (s[n] || (s[n] = {
                                        idx: n,
                                        item: e,
                                        matches: []
                                    }, r.push(s[n])), o.forEach((({matches: e}) => {
                                        s[n].matches.push(...e);
                                    })));
                                }
                            })), r;
                        }
                        _searchObjectList(e) {
                            const t = x(e, this.options), {keys: i, records: n} = this._myIndex, s = [];
                            return n.forEach((({$: e, i: n}) => {
                                if (!a(e)) return;
                                let r = [];
                                i.forEach(((i, n) => {
                                    r.push(...this._findMatches({
                                        key: i,
                                        value: e[n],
                                        searcher: t
                                    }));
                                })), r.length && s.push({
                                    idx: n,
                                    item: e,
                                    matches: r
                                });
                            })), s;
                        }
                        _findMatches({key: e, value: t, searcher: i}) {
                            if (!a(t)) return [];
                            let s = [];
                            if (n(t)) t.forEach((({v: t, i: n, n: r}) => {
                                if (!a(t)) return;
                                const {isMatch: o, score: c, indices: l} = i.searchIn(t);
                                o && s.push({
                                    score: c,
                                    key: e,
                                    value: t,
                                    idx: n,
                                    norm: r,
                                    indices: l
                                });
                            })); else {
                                const {v: n, n: r} = t, {isMatch: o, score: a, indices: c} = i.searchIn(n);
                                o && s.push({
                                    score: a,
                                    key: e,
                                    value: n,
                                    norm: r,
                                    indices: c
                                });
                            }
                            return s;
                        }
                    }
                    R.version = "6.5.3", R.createIndex = _, R.parseIndex = function(e, {getFn: t = m.getFn, fieldNormWeight: i = m.fieldNormWeight} = {}) {
                        const {keys: n, records: s} = e, r = new g({
                            getFn: t,
                            fieldNormWeight: i
                        });
                        return r.setKeys(n), r.setIndexRecords(s), r;
                    }, R.config = m, R.parseQuery = F, function(...e) {
                        P.push(...e);
                    }(class {
                        constructor(e, {isCaseSensitive: t = m.isCaseSensitive, includeMatches: i = m.includeMatches, minMatchCharLength: n = m.minMatchCharLength, ignoreLocation: s = m.ignoreLocation, findAllMatches: r = m.findAllMatches, location: o = m.location, threshold: a = m.threshold, distance: c = m.distance} = {}) {
                            this.query = null, this.options = {
                                isCaseSensitive: t,
                                includeMatches: i,
                                minMatchCharLength: n,
                                findAllMatches: r,
                                ignoreLocation: s,
                                location: o,
                                threshold: a,
                                distance: c
                            }, this.pattern = t ? e : e.toLowerCase(), this.query = function(e, t = {}) {
                                return e.split("|").map((e => {
                                    let i = e.trim().split(A).filter((e => e && !!e.trim())), n = [];
                                    for (let e = 0, s = i.length; e < s; e += 1) {
                                        const s = i[e];
                                        let r = !1, o = -1;
                                        for (;!r && ++o < w; ) {
                                            const e = L[o];
                                            let i = e.isMultiMatch(s);
                                            i && (n.push(new e(i, t)), r = !0);
                                        }
                                        if (!r) for (o = -1; ++o < w; ) {
                                            const e = L[o];
                                            let i = e.isSingleMatch(s);
                                            if (i) {
                                                n.push(new e(i, t));
                                                break;
                                            }
                                        }
                                    }
                                    return n;
                                }));
                            }(this.pattern, this.options);
                        }
                        static condition(e, t) {
                            return t.useExtendedSearch;
                        }
                        searchIn(e) {
                            const t = this.query;
                            if (!t) return {
                                isMatch: !1,
                                score: 1
                            };
                            const {includeMatches: i, isCaseSensitive: n} = this.options;
                            e = n ? e : e.toLowerCase();
                            let s = 0, r = [], o = 0;
                            for (let n = 0, a = t.length; n < a; n += 1) {
                                const a = t[n];
                                r.length = 0, s = 0;
                                for (let t = 0, n = a.length; t < n; t += 1) {
                                    const n = a[t], {isMatch: c, indices: l, score: h} = n.search(e);
                                    if (!c) {
                                        o = 0, s = 0, r.length = 0;
                                        break;
                                    }
                                    if (s += 1, o += h, i) {
                                        const e = n.constructor.type;
                                        M.has(e) ? r = [ ...r, ...l ] : r.push(l);
                                    }
                                }
                                if (s) {
                                    let e = {
                                        isMatch: !0,
                                        score: o / s
                                    };
                                    return i && (e.indices = r), e;
                                }
                            }
                            return {
                                isMatch: !1,
                                score: 1
                            };
                        }
                    });
                },
                857: function(e, t, i) {
                    function n(e, t, i) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i, e;
                    }
                    function s(e, t) {
                        var i = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            }))), i.push.apply(i, n);
                        }
                        return i;
                    }
                    function r(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var i = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? s(Object(i), !0).forEach((function(t) {
                                n(e, t, i[t]);
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                            }));
                        }
                        return e;
                    }
                    function o(e) {
                        return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
                    }
                    i.r(t), i.d(t, {
                        __DO_NOT_USE__ActionTypes: function() {
                            return l;
                        },
                        applyMiddleware: function() {
                            return v;
                        },
                        bindActionCreators: function() {
                            return f;
                        },
                        combineReducers: function() {
                            return d;
                        },
                        compose: function() {
                            return m;
                        },
                        createStore: function() {
                            return u;
                        }
                    });
                    var a = "function" == typeof Symbol && Symbol.observable || "@@observable", c = function() {
                        return Math.random().toString(36).substring(7).split("").join(".");
                    }, l = {
                        INIT: "@@redux/INIT" + c(),
                        REPLACE: "@@redux/REPLACE" + c(),
                        PROBE_UNKNOWN_ACTION: function() {
                            return "@@redux/PROBE_UNKNOWN_ACTION" + c();
                        }
                    };
                    function h(e) {
                        if ("object" != typeof e || null === e) return !1;
                        for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
                        return Object.getPrototypeOf(e) === t;
                    }
                    function u(e, t, i) {
                        var n;
                        if ("function" == typeof t && "function" == typeof i || "function" == typeof i && "function" == typeof arguments[3]) throw new Error(o(0));
                        if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
                            if ("function" != typeof i) throw new Error(o(1));
                            return i(u)(e, t);
                        }
                        if ("function" != typeof e) throw new Error(o(2));
                        var s = e, r = t, c = [], d = c, p = !1;
                        function f() {
                            d === c && (d = c.slice());
                        }
                        function m() {
                            if (p) throw new Error(o(3));
                            return r;
                        }
                        function v(e) {
                            if ("function" != typeof e) throw new Error(o(4));
                            if (p) throw new Error(o(5));
                            var t = !0;
                            return f(), d.push(e), function() {
                                if (t) {
                                    if (p) throw new Error(o(6));
                                    t = !1, f();
                                    var i = d.indexOf(e);
                                    d.splice(i, 1), c = null;
                                }
                            };
                        }
                        function g(e) {
                            if (!h(e)) throw new Error(o(7));
                            if (void 0 === e.type) throw new Error(o(8));
                            if (p) throw new Error(o(9));
                            try {
                                p = !0, r = s(r, e);
                            } finally {
                                p = !1;
                            }
                            for (var t = c = d, i = 0; i < t.length; i++) (0, t[i])();
                            return e;
                        }
                        function _(e) {
                            if ("function" != typeof e) throw new Error(o(10));
                            s = e, g({
                                type: l.REPLACE
                            });
                        }
                        function y() {
                            var e, t = v;
                            return (e = {
                                subscribe: function(e) {
                                    if ("object" != typeof e || null === e) throw new Error(o(11));
                                    function i() {
                                        e.next && e.next(m());
                                    }
                                    return i(), {
                                        unsubscribe: t(i)
                                    };
                                }
                            })[a] = function() {
                                return this;
                            }, e;
                        }
                        return g({
                            type: l.INIT
                        }), (n = {
                            dispatch: g,
                            subscribe: v,
                            getState: m,
                            replaceReducer: _
                        })[a] = y, n;
                    }
                    function d(e) {
                        for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
                            var s = t[n];
                            "function" == typeof e[s] && (i[s] = e[s]);
                        }
                        var r, a = Object.keys(i);
                        try {
                            !function(e) {
                                Object.keys(e).forEach((function(t) {
                                    var i = e[t];
                                    if (void 0 === i(void 0, {
                                        type: l.INIT
                                    })) throw new Error(o(12));
                                    if (void 0 === i(void 0, {
                                        type: l.PROBE_UNKNOWN_ACTION()
                                    })) throw new Error(o(13));
                                }));
                            }(i);
                        } catch (e) {
                            r = e;
                        }
                        return function(e, t) {
                            if (void 0 === e && (e = {}), r) throw r;
                            for (var n = !1, s = {}, c = 0; c < a.length; c++) {
                                var l = a[c], h = i[l], u = e[l], d = h(u, t);
                                if (void 0 === d) throw t && t.type, new Error(o(14));
                                s[l] = d, n = n || d !== u;
                            }
                            return (n = n || a.length !== Object.keys(e).length) ? s : e;
                        };
                    }
                    function p(e, t) {
                        return function() {
                            return t(e.apply(this, arguments));
                        };
                    }
                    function f(e, t) {
                        if ("function" == typeof e) return p(e, t);
                        if ("object" != typeof e || null === e) throw new Error(o(16));
                        var i = {};
                        for (var n in e) {
                            var s = e[n];
                            "function" == typeof s && (i[n] = p(s, t));
                        }
                        return i;
                    }
                    function m() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        return 0 === t.length ? function(e) {
                            return e;
                        } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                            return function() {
                                return e(t.apply(void 0, arguments));
                            };
                        }));
                    }
                    function v() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        return function(e) {
                            return function() {
                                var i = e.apply(void 0, arguments), n = function() {
                                    throw new Error(o(15));
                                }, s = {
                                    getState: i.getState,
                                    dispatch: function() {
                                        return n.apply(void 0, arguments);
                                    }
                                }, a = t.map((function(e) {
                                    return e(s);
                                }));
                                return n = m.apply(void 0, a)(i.dispatch), r(r({}, i), {}, {
                                    dispatch: n
                                });
                            };
                        };
                    }
                }
            }, t = {};
            function i(n) {
                var s = t[n];
                if (void 0 !== s) return s.exports;
                var r = t[n] = {
                    exports: {}
                };
                return e[n].call(r.exports, r, r.exports, i), r.exports;
            }
            i.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default;
                } : function() {
                    return e;
                };
                return i.d(t, {
                    a: t
                }), t;
            }, i.d = function(e, t) {
                for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                });
            }, i.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, i.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                });
            };
            var n, s, r = {};
            n = i(373), s = i.n(n), i(187), i(883), i(789), i(686), r.default = s(), window.Choices = r.default;
        }();
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (void 0 === delay) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (void 0 === axis) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = void 0 === _temp ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (void 0 === overrides) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    const {width, height} = swiper;
                    let newWidth = width;
                    let newHeight = height;
                    entries.forEach((_ref2 => {
                        let {contentBoxSize, contentRect, target} = _ref2;
                        if (target && target !== swiper.el) return;
                        newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                        newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                    }));
                    if (newWidth !== width || newHeight !== height) resizeHandler();
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (void 0 === options) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if ("function" !== typeof handler) return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) swiper.visibleSlides.each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate) {
            if (void 0 === translate) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (void 0 === axis) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (void 0 === translate) translate = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === translateBounds) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            const translate = -snapGrid[snapIndex];
            swiper.updateProgress(translate);
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === threshold) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                const slide = dom(el);
                if (index < swiper.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
            el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (void 0 === base) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = dom(event.path[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (-0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (void 0 === base) base = "window";
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (void 0 === obj) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (void 0 === view) view = "current";
                if (void 0 === exact) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (void 0 === needUpdate) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (void 0 === deleteInstance) deleteInstance = true;
                if (void 0 === cleanStyles) cleanStyles = true;
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function classes_to_selector_classesToSelector(classes) {
            if (void 0 === classes) classes = "";
            return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`
                }
            });
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length;
            }
            function setSideBullets($bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let current;
                const total = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                    if (current > slidesLength - 1 - 2 * swiper.loopedSlides) current -= slidesLength - 2 * swiper.loopedSlides;
                    if (current > total - 1) current -= total;
                    if (current < 0 && "bullets" !== swiper.params.paginationType) current = total + current;
                } else if ("undefined" !== typeof swiper.snapIndex) current = swiper.snapIndex; else current = swiper.activeIndex || 0;
                if ("bullets" === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                        $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                        if (params.dynamicMainBullets > 1 && void 0 !== swiper.previousIndex) {
                            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.removeClass([ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)).join(" "));
                    if ($el.length > 1) bullets.each((bullet => {
                        const $bullet = dom(bullet);
                        const bulletIndex = $bullet.index();
                        if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                            if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                        }
                    })); else {
                        const $bullet = bullets.eq(current);
                        const bulletIndex = $bullet.index();
                        $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            const $firstDisplayedBullet = bullets.eq(firstIndex);
                            const $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (let i = firstIndex; i <= lastIndex; i += 1) bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                            if (swiper.params.loop) if (bulletIndex >= bullets.length) {
                                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            }
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
                    }
                }
                if ("fraction" === params.type) {
                    $el.find(classes_to_selector_classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find(classes_to_selector_classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
                }
                if ("progressbar" === params.type) {
                    let progressbarDirection;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if ("horizontal" === progressbarDirection) scaleX = scale; else scaleY = scale;
                    $el.find(classes_to_selector_classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
                }
                if ("custom" === params.type && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    emit("paginationRender", $el[0]);
                } else emit("paginationUpdate", $el[0]);
                if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let paginationHTML = "";
                if ("bullets" === params.type) {
                    let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(classes_to_selector_classesToSelector(params.bulletClass));
                }
                if ("fraction" === params.type) {
                    if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("progressbar" === params.type) {
                    if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("custom" !== params.type) emit("paginationRender", swiper.pagination.$el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let $el = dom(params.el);
                if (0 === $el.length) return;
                if (swiper.params.uniqueNavElements && "string" === typeof params.el && $el.length > 1) {
                    $el = swiper.$el.find(params.el);
                    if ($el.length > 1) $el = $el.filter((el => {
                        if (dom(el).parents(".swiper")[0] !== swiper.el) return false;
                        return true;
                    }));
                }
                if ("bullets" === params.type && params.clickable) $el.addClass(params.clickableClass);
                $el.addClass(params.modifierClass + params.type);
                $el.addClass(params.modifierClass + swiper.params.direction);
                if ("bullets" === params.type && params.dynamicBullets) {
                    $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if ("progressbar" === params.type && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
                if (params.clickable) $el.on("click", classes_to_selector_classesToSelector(params.bulletClass), (function onClick(e) {
                    e.preventDefault();
                    let index = dom(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                }));
                Object.assign(swiper.pagination, {
                    $el,
                    el: $el[0]
                });
                if (!swiper.enabled) $el.addClass(params.lockClass);
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                $el.removeClass(params.modifierClass + swiper.params.direction);
                if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
                if (params.clickable) $el.off("click", classes_to_selector_classesToSelector(params.bulletClass));
            }
            on("init", (() => {
                init();
                render();
                update();
            }));
            on("activeIndexChange", (() => {
                if (swiper.params.loop) update(); else if ("undefined" === typeof swiper.snapIndex) update();
            }));
            on("snapIndexChange", (() => {
                if (!swiper.params.loop) update();
            }));
            on("slidesLengthChange", (() => {
                if (swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("snapGridLengthChange", (() => {
                if (!swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$el} = swiper.pagination;
                if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const {$el} = swiper.pagination;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                    if (true === isHidden) emit("paginationShow"); else emit("paginationHide");
                    $el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            }));
            Object.assign(swiper.pagination, {
                render,
                update,
                init,
                destroy
            });
        }
        function Autoplay(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            let timeout;
            swiper.autoplay = {
                running: false,
                paused: false
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            function run() {
                const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                let delay = swiper.params.autoplay.delay;
                if ($activeSlideEl.attr("data-swiper-autoplay")) delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
                clearTimeout(timeout);
                timeout = utils_nextTick((() => {
                    let autoplayResult;
                    if (swiper.params.autoplay.reverseDirection) if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isBeginning) {
                        autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop(); else if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.isEnd) {
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                        emit("autoplay");
                    } else stop();
                    if (swiper.params.cssMode && swiper.autoplay.running) run(); else if (false === autoplayResult) run();
                }), delay);
            }
            function start() {
                if ("undefined" !== typeof timeout) return false;
                if (swiper.autoplay.running) return false;
                swiper.autoplay.running = true;
                emit("autoplayStart");
                run();
                return true;
            }
            function stop() {
                if (!swiper.autoplay.running) return false;
                if ("undefined" === typeof timeout) return false;
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = void 0;
                }
                swiper.autoplay.running = false;
                emit("autoplayStop");
                return true;
            }
            function pause(speed) {
                if (!swiper.autoplay.running) return;
                if (swiper.autoplay.paused) return;
                if (timeout) clearTimeout(timeout);
                swiper.autoplay.paused = true;
                if (0 === speed || !swiper.params.autoplay.waitForTransition) {
                    swiper.autoplay.paused = false;
                    run();
                } else [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
                }));
            }
            function onVisibilityChange() {
                const document = ssr_window_esm_getDocument();
                if ("hidden" === document.visibilityState && swiper.autoplay.running) pause();
                if ("visible" === document.visibilityState && swiper.autoplay.paused) {
                    run();
                    swiper.autoplay.paused = false;
                }
            }
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
                if (e.target !== swiper.$wrapperEl[0]) return;
                [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                }));
                swiper.autoplay.paused = false;
                if (!swiper.autoplay.running) stop(); else run();
            }
            function onMouseEnter() {
                if (swiper.params.autoplay.disableOnInteraction) stop(); else {
                    emit("autoplayPause");
                    pause();
                }
                [ "transitionend", "webkitTransitionEnd" ].forEach((event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                }));
            }
            function onMouseLeave() {
                if (swiper.params.autoplay.disableOnInteraction) return;
                swiper.autoplay.paused = false;
                emit("autoplayResume");
                run();
            }
            function attachMouseEvents() {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.$el.on("mouseenter", onMouseEnter);
                    swiper.$el.on("mouseleave", onMouseLeave);
                }
            }
            function detachMouseEvents() {
                swiper.$el.off("mouseenter", onMouseEnter);
                swiper.$el.off("mouseleave", onMouseLeave);
            }
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    start();
                    const document = ssr_window_esm_getDocument();
                    document.addEventListener("visibilitychange", onVisibilityChange);
                    attachMouseEvents();
                }
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.autoplay.running) if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.autoplay.running) if (swiper.params.autoplay.disableOnInteraction) stop(); else pause();
            }));
            on("touchEnd", (() => {
                if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
            }));
            on("destroy", (() => {
                detachMouseEvents();
                if (swiper.autoplay.running) stop();
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            }));
            Object.assign(swiper.autoplay, {
                pause,
                run,
                start,
                stop
            });
        }
        function initSliders() {
            if (document.querySelector(".swiper")) new core(".swiper", {
                modules: [ Pagination, Autoplay ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 30,
                autoHeight: false,
                speed: 800,
                effect: "fade",
                autoplay: {
                    delay: 3e3,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        var air_datepicker = __webpack_require__(545);
        var air_datepicker_default = __webpack_require__.n(air_datepicker);
        const index_es = air_datepicker_default();
        const iconMenu = document.querySelector(".icon-menu");
        const menuBody = document.querySelector(".menu");
        const lock = document.querySelector("html");
        if (iconMenu) {
            iconMenu.addEventListener("click", (function(e) {
                lock.classList.toggle("lock");
                iconMenu.classList.toggle("menu-open");
                menuBody.classList.toggle("menu-open");
            }));
            document.addEventListener("keydown", (function(e) {
                let keyCode = e.keyCode;
                if (27 === keyCode) {
                    lock.classList.remove("lock");
                    iconMenu.classList.remove("menu-open");
                    menuBody.classList.remove("menu-open");
                }
            }));
        }
        new index_es("#input", {
            range: true,
            multipleDatesSeparator: " - ",
            dateFormat: "dd MMM",
            selectOtherMonths: false
        });
        const script_element = document.querySelectorAll(".js-choice");
        script_element.forEach((el => {
            new Choices(el, {
                shouldSort: false,
                position: "bottom",
                searchEnabled: false
            });
        }));
        window["FLS"] = true;
        isWebp();
        tabs();
    })();
})();