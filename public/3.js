(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reservation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reservation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "reservation",
  data: function data() {
    var _ref;

    return _ref = {
      reservations: [],
      roomTypes: [],
      errors: [],
      error: false,
      showError: false,
      success: false,
      edit: false,
      reservation: null
    }, _defineProperty(_ref, "errors", false), _defineProperty(_ref, "availability", false), _defineProperty(_ref, "total", 0), _ref;
  },
  methods: {
    getReservations: function getReservations() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/api/reservations");

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;

                if (data.ok) {
                  _this.reservations = data.reservations;
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    remove: function remove(id) {
      var _this2 = this;

      axios["delete"]("/api/room/reservation/".concat(id)).then(function (response) {
        _this2.reservations = response.data.reservations;
        _this2.success = true;
        setTimeout(function () {
          _this2.success = false;
        }, 5000);
      })["catch"](function (error) {
        _this2.error = error.response.data.error;
        _this2.showError = true;
        setTimeout(function () {
          _this2.showError = false;
        }, 5000);
      });
    },
    editReservation: function editReservation(reservation) {
      this.fetchRoomTypes();
      this.edit = true;
      this.availability = false;
      this.reservation = _objectSpread({}, reservation);
    },
    fetchRoomTypes: function fetchRoomTypes() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios.get("/api/roomTypes");

              case 3:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;

                if (data.ok) {
                  _this3.roomTypes = data.roomTypes;
                }

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    cancel: function cancel() {
      this.edit = false;
      this.reservation = null;
      this.availability = false;
    },
    checkAvailability: function checkAvailability() {
      var _this4 = this;

      var reservation = _objectSpread({}, this.reservation);

      delete reservation["client_name"];
      axios.get("/api/room/reservation/availability", {
        params: _objectSpread({}, reservation)
      }).then(function (response) {
        var total = response.data.total;
        _this4.total = total;
        _this4.errors = [];
        _this4.availability = true;
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this4.errors = errors;
        _this4.availability = false;
      });
    },
    update: function update() {
      var _this5 = this;

      axios.put("/api/room/reservation/".concat(this.reservation.id), this.reservation).then(function (response) {
        if (response.data.ok) {
          _this5.reservations = response.data.reservations;
          _this5.edit = false;
          _this5.reservation = null;
          _this5.availability = false;
        }
      })["catch"](function (error) {
        console.log(error.response);
        var errors = error.response.data.errors;
        _this5.errors = errors;
      });
    }
  },
  mounted: function mounted() {
    this.getReservations();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reservation.vue?vue&type=template&id=530d0e9e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Reservation.vue?vue&type=template&id=530d0e9e& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row bg-white p-3 rounded shadow mb-5" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _vm.success
          ? _c(
              "div",
              {
                staticClass: "alert alert-success mb-3",
                attrs: { role: "alert" }
              },
              [_vm._v("Reservation deleted successfully")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.showError
          ? _c(
              "div",
              {
                staticClass: "alert alert-danger mb-3",
                attrs: { role: "alert" }
              },
              [_vm._v(_vm._s(_vm.error))]
            )
          : _vm._e(),
        _vm._v(" "),
        _c("table", { staticClass: "table" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.reservations, function(reservation) {
              return _c("tr", { key: reservation.id }, [
                _c("th", { attrs: { scope: "row" } }, [
                  _vm._v(_vm._s(reservation.client_name))
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(reservation.room.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(reservation.check_in_at))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(reservation.check_out_at))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary text-white btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.editReservation(reservation)
                        }
                      }
                    },
                    [_vm._v("Edit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger text-white btn-sm",
                      on: {
                        click: function($event) {
                          return _vm.remove(reservation.id)
                        }
                      }
                    },
                    [_vm._v("Delete")]
                  )
                ])
              ])
            }),
            0
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.edit
      ? _c("div", { staticClass: "row bg-white p-3 rounded shadow mb-5" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "form",
              {
                staticClass: "needs-validation",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.update($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12 mb-3" }, [
                    _c("label", { attrs: { for: "customer-name" } }, [
                      _vm._v("Customer name")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.reservation.client_name,
                          expression: "reservation.client_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "customer-name" },
                      domProps: { value: _vm.reservation.client_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.reservation,
                            "client_name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.error && _vm.errors["client_name"]
                      ? _c("small", { staticClass: "form-text text-danger" }, [
                          _vm._v(_vm._s(_vm.errors["client_name"][0]))
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12 mb-3" }, [
                    _c("label", { attrs: { for: "type-room" } }, [
                      _vm._v("Type of room")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.reservation.room_type_id,
                            expression: "reservation.room_type_id"
                          }
                        ],
                        staticClass: "custom-select d-block w-100",
                        attrs: { id: "type-room", required: "" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.reservation,
                              "room_type_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "null" } }, [
                          _vm._v("Choose...")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.roomTypes, function(roomType) {
                          return _c(
                            "option",
                            {
                              key: roomType.id,
                              domProps: { value: roomType.id }
                            },
                            [_vm._v(_vm._s(roomType.name) + " Room")]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.errors["room_type_id"]
                      ? _c("small", { staticClass: "form-text text-danger" }, [
                          _vm._v(_vm._s(_vm.errors["room_type_id"][0]))
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6 mb-3" }, [
                    _c("label", { attrs: { for: "checking" } }, [
                      _vm._v("Checking")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.reservation.check_in_at,
                          expression: "reservation.check_in_at"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "date", id: "checking" },
                      domProps: { value: _vm.reservation.check_in_at },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.reservation,
                            "check_in_at",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors["check_in_at"]
                      ? _c("small", { staticClass: "form-text text-danger" }, [
                          _vm._v(_vm._s(_vm.errors["check_in_at"][0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6 mb-3" }, [
                    _c("label", { attrs: { for: "checkout" } }, [
                      _vm._v("Checkout")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.reservation.check_out_at,
                          expression: "reservation.check_out_at"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "date", id: "checkout" },
                      domProps: { value: _vm.reservation.check_out_at },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.reservation,
                            "check_out_at",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors["check_out_at"]
                      ? _c("small", { staticClass: "form-text text-danger" }, [
                          _vm._v(_vm._s(_vm.errors["check_out_at"][0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-sm-12" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary btn-lg btn-block",
                        on: {
                          click: function($event) {
                            return _vm.checkAvailability()
                          }
                        }
                      },
                      [_vm._v("Check availability")]
                    ),
                    _vm._v(" "),
                    _vm.availability && _vm.total > 0
                      ? _c(
                          "div",
                          {
                            staticClass: "alert alert-success mb-3 mt-3",
                            attrs: { role: "alert" }
                          },
                          [
                            _vm._v(
                              "There are " +
                                _vm._s(_vm.total) +
                                " " +
                                _vm._s(_vm.reservation.room.name) +
                                " rooms available."
                            )
                          ]
                        )
                      : _vm.availability
                      ? _c(
                          "div",
                          {
                            staticClass: "alert alert-danger mb-3 mt-3",
                            attrs: { role: "alert" }
                          },
                          [_vm._v("No rooms available.")]
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "mb-4" }),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-sm-6" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-warning btn-lg btn-block",
                        on: { click: _vm.cancel }
                      },
                      [_vm._v("Cancel")]
                    )
                  ])
                ])
              ]
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "py-3 text-center" }, [
      _c("img", {
        staticClass: "d-block mx-auto mb-4",
        attrs: {
          src: __webpack_require__(/*! ../../images/chotel.png */ "./resources/images/chotel.png"),
          alt: "logo CHotel",
          width: "80",
          height: "80"
        }
      }),
      _vm._v(" "),
      _c("h2", [_vm._v("Reservation list")]),
      _vm._v(" "),
      _c("p", { staticClass: "lead" }, [
        _vm._v("This list shows a detailed summary of all CHotel reservations")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Customer name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("type")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Checking")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Checkout")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-sm-6" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-lg btn-block",
          attrs: { type: "submit" }
        },
        [_vm._v("Save")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Reservation.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Reservation.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reservation_vue_vue_type_template_id_530d0e9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reservation.vue?vue&type=template&id=530d0e9e& */ "./resources/js/components/Reservation.vue?vue&type=template&id=530d0e9e&");
/* harmony import */ var _Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservation.vue?vue&type=script&lang=js& */ "./resources/js/components/Reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reservation_vue_vue_type_template_id_530d0e9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reservation_vue_vue_type_template_id_530d0e9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Reservation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Reservation.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Reservation.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Reservation.vue?vue&type=template&id=530d0e9e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Reservation.vue?vue&type=template&id=530d0e9e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_530d0e9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=template&id=530d0e9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Reservation.vue?vue&type=template&id=530d0e9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_530d0e9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_530d0e9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);