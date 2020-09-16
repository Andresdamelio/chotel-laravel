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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    return {
      roomTypes: [],
      errors: [],
      availability: null,
      check: false,
      error: false,
      checkReservation: {
        room_type_id: null,
        check_in_at: null,
        check_out_at: null
      }
    };
  },
  methods: {
    fetchRoomTypes: function fetchRoomTypes() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get("/api/roomTypes");

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;

                if (data.ok) {
                  _this.roomTypes = data.roomTypes;
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
    checkAvailability: function checkAvailability() {
      var _this2 = this;

      axios.get("/api/room/reservation/availability", {
        params: _objectSpread({}, this.checkReservation)
      }).then(function (response) {
        var total = response.data.total;
        _this2.availability = total;
        _this2.check = true;
        _this2.error = false;
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this2.check = false;
        _this2.errors = errors;
        _this2.error = true;
      });
    },
    reserve: function reserve(id) {
      this.router.push({
        name: "",
        params: {
          id: this.checkReservation.room_type_id
        }
      });
    },
    getNameRoom: function getNameRoom(id) {
      return this.roomTypes.find(function (roomType) {
        return roomType.id == id;
      }).name;
    }
  },
  mounted: function mounted() {
    this.fetchRoomTypes();
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
        _c(
          "form",
          {
            staticClass: "needs-validation",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.checkAvailability($event)
              }
            }
          },
          [
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
                        value: _vm.checkReservation.room_type_id,
                        expression: "checkReservation.room_type_id"
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
                          _vm.checkReservation,
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
                        { key: roomType.id, domProps: { value: roomType.id } },
                        [_vm._v(_vm._s(roomType.name) + " Room")]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.error && _vm.errors["room_type_id"]
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
                      value: _vm.checkReservation.check_in_at,
                      expression: "checkReservation.check_in_at"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date", id: "checking" },
                  domProps: { value: _vm.checkReservation.check_in_at },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.checkReservation,
                        "check_in_at",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.error && _vm.errors["check_in_at"]
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
                      value: _vm.checkReservation.check_out_at,
                      expression: "checkReservation.check_out_at"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date", id: "checkout" },
                  domProps: { value: _vm.checkReservation.check_out_at },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.checkReservation,
                        "check_out_at",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _vm.error && _vm.errors["check_out_at"]
                  ? _c("small", { staticClass: "form-text text-danger" }, [
                      _vm._v(_vm._s(_vm.errors["check_out_at"][0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "mb-4" }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-lg btn-block",
                attrs: { type: "submit" }
              },
              [_vm._v("Check availability")]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm.check
      ? _c("div", { staticClass: "row bg-white p-3 rounded shadow mb-5" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _vm.availability > 0
              ? _c("p", { staticClass: "lead" }, [
                  _vm._v(
                    "There are " +
                      _vm._s(_vm.availability) +
                      " " +
                      _vm._s(
                        _vm.getNameRoom(_vm.checkReservation.room_type_id)
                      ) +
                      " rooms available."
                  )
                ])
              : _c("p", { staticClass: "lead" }, [
                  _vm._v("No rooms available.")
                ]),
            _vm._v(" "),
            _vm.availability > 0
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-lg btn-block",
                    on: {
                      click: function($event) {
                        return _vm.reserve(_vm.checkReservation.room_type_id)
                      }
                    }
                  },
                  [_vm._v("Reserve")]
                )
              : _vm._e()
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
      _c("h2", [_vm._v("Check availability")]),
      _vm._v(" "),
      _c("p", { staticClass: "lead" }, [
        _vm._v(
          "Choose the type of room you want, enter the check-in and check-out dates and press check availability."
        )
      ])
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