(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n\n:root {\n  --primaryColor: #f09d51;\n  --mainWhite: #fff;\n  --mainBlack: #222;\n  --mainGrey: #ececec;\n  --mainSpacing: 0.1rem;\n  --mainTransition: all 0.3s linear;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.mobile-filter{\n  display: none;\n}\n\n.ng5-slider{\n  width: 85% !important;\n  margin: 60px 0 15px !important;\n}\n\n.ng5-slider .ng5-slider-bubble {\n  padding: 5px 4px !important;\n  font-size: 12px !important;\n}\n\n.slider-container{\n  width: 16%;\n  margin: 1em auto;\n  position: -webkit-sticky;\n  position: sticky\n}\n\n.rangeprice-filter{\n  margin-left: 40%;\n  color: #9d9797;\n}\n\nbody {\n  color: var(--mainBlack);\n  background: var(--mainWhite);\n  font-family: \"Lato\", sans-serif;\n}\n\n/* --------------- Navbar ---------------- */\n\n.navbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  height: 60px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background:#047DBF;\n  z-index: 1;\n}\n\n.cartheader{\n  text-align: center;\n  padding-top: 100px;\n  font-size: 20px;\n}\n\n.navbar-center {\n  width: 100%;\n  max-width: 1170px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n}\n\n.footer{\n  height: 30px;\n  width: 100%;\n  background:#047DBF;\n  position: fixed;\n  text-align: center;\n  bottom: 0px;\n  padding: 5px;\n}\n\n.nav-icon {\n  font-size: 1.5rem;\n  color: azure;\n}\n\n.nav-icon-logo{\n    font-size: 1.5rem;\n    color: #f8e831;\n}\n\n.counter{\n  display: flex;\n  letter-spacing: 8px;\n}\n\n.cart-btn {\n  position: relative;\n  cursor: pointer;\n}\n\n.cart-items {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background: red;\n  padding: 0 5px;\n  border-radius: 30%;\n  color: var(--mainWhite);\n}\n\n/* --------------- End of Navbar ---------------- */\n\n.banner-btn {\n  padding: .5rem .6rem;\n  text-transform: uppercase;\n  letter-spacing: var(--mainSpacing);\n  font-size: .7rem;\n  background: #047DBF;\n  color: #fff;\n  border: 1px solid #fff;\n  transition: var(--mainTransition);\n  cursor: pointer;\n}\n\n.banner-btn:hover {\n  background:#666;\n  color: #fff;\n}\n\n/* --------------- Products ---------------- */\n\n.products {\n  padding: 2rem 0;\n  width: 80%;\n  margin: auto;\n  border-left: 1px solid #e7e9e4 !important;\n}\n\n.products-center {\n  width: 90vw;\n  margin: 0 auto;\n  max-width: 930px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-column-gap: 1.5rem;\n  grid-row-gap: 2rem;\n}\n\n.sortBy{\n  width: 70vw;\n  display: block;\n  margin: auto;\n  margin-bottom: 25px;\n  font-weight: bold;\n}\n\n.price-filter{\n  margin: 10%;\n  color:#047DBF;\n  cursor: pointer;\n}\n\n.img-container {\n  position: relative;\n  overflow: hidden;\n}\n\n.fa-shopping-cart {\n  margin-right: 0.5rem;\n}\n\n.img-container:hover .bag-btn {\n  transform: translateX(0);\n}\n\n.product-img {\n  display: block;\n  width: 100%;\n  min-height: 6rem;\n  transition: var(--mainTransition);\n}\n\n.img-container:hover .product-img {\n  opacity: 0.5;\n}\n\n.item-btn{\n  background: #047DBF;\n  color: #fff;\n  letter-spacing: var(--mainSpacing);\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0.5rem 0.75rem;\n  border-radius: 20px;\n  border: 0px;\n  margin: auto;\n  display: block;\n}\n\n.product h3 {\n  text-transform: capitalize;\n  font-size: 1.1rem;\n  margin-top: 0.5rem;\n  letter-spacing: var(--mainSpacing);\n  text-align: center;\n}\n\n.product h4 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  letter-spacing: var(--mainSpacing);\n  color: #222;\n  text-align: center;\n}\n\n/* ---------------End of Products ---------------- */\n\n/* --------------- Cart ---------------- */\n\n.cart-overlay {\n  width: 100%;\n  height: 100%;\n}\n\n.cart {\n  width: 90%;\n  height: 100%;\n  margin: auto;\n  background: #fff;\n  padding: 0rem 1.5rem;\n}\n\n.cart-content{\n  width: 65% !important;\n}\n\n.cartHeading {\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n}\n\n@media screen and (min-width: 768px) {\n  .cart {\n    width: 100%;\n    min-width: 450px;\n  }\n}\n\n@media screen and (max-width: 468px) {\n  .slider-container{\n    display: none !important;\n  }\n  .products {\n    width: 100%;\n    border-left: none;\n  }\n  .cart-content{\n    width: 100% !important;\n  }\n  .cart {\n    width: 100% !important;\n    padding: 0rem 0.5rem;\n}\n  .cart-footer {\n    width: 76% !important;\n    position: fixed;\n    bottom: 5%;\n    margin-top: 0px !important;\n    left: 10%;\n    height: 117px !important;\n    padding: 2px !important;\n}\n  .cart-item {\n    display: grid;\n    align-items: center;\n    grid-template-columns: auto 1fr 1fr auto;\n    grid-column-gap: 0.5rem;\n    margin: 0.5rem 0;\n  }\n  .cart-item img {\n    width: 50px;\n    height: 50px;\n  }\n  .cart-item h4 {\n    font-size: 0.55rem;\n    text-transform: capitalize;\n    letter-spacing: var(--mainSpacing);\n  }\n  .cart-item h5 {\n    margin: 0.3rem 0;\n    letter-spacing: var(--mainSpacing);\n  }\n  .cart-btn {\n    margin-right: 10px;\n}\n  .close-cart {\n    font-size: 0.7rem;\n    cursor: pointer;\n  }\n  .products-center {\n    width: 100vw;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));\n    grid-column-gap: 0.5rem;\n    grid-row-gap: 0.5rem;\n  }\n  .sortBy {\n    display: none;\n  }\n.mobile-filter {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.price-filter {\n  margin: 2% 1%;\n  font-size: 14px;\n}\n}\n\n.delPrice{\ncolor: #777;\npadding-right: 5px;\n}\n\n.discPrice{\n  color: limegreen;\n}\n\n.close-cart {\n  font-size: 1.7rem;\n  cursor: pointer;\n}\n\n.cart h2 {\n  text-transform: capitalize;\n  text-align: center;\n  letter-spacing: var(--mainSpacing);\n  margin-bottom: 2rem;\n}\n\n.makebold{\n  font-weight: 600;\n}\n\n/*---------- Cart Item -------------------- */\n\n.cart-item {\n  display: grid;\n  align-items: center;\n  grid-template-columns:  1fr 1fr 1fr 1fr ;\n  grid-column-gap: 1.5rem;\n  margin: 1.5rem 0;\n  border: 1px solid #444;\n  padding: 5px;\n}\n\n.cart-item img {\n  width: 75px;\n  height: 75px;\n}\n\n.cart-item h4 {\n  font-size: 0.85rem;\n  text-transform: capitalize;\n  letter-spacing: var(--mainSpacing);\n}\n\n.cart-item h5 {\n  margin: 0.5rem 0;\n  letter-spacing: var(--mainSpacing);\n}\n\n.item-amount {\n  text-align: center;\n}\n\n.remove-item {\n  color: grey;\n  cursor: pointer;\n}\n\n.fa-chevron-up,\n.fa-chevron-down {\n  color: #047DBF;\n  cursor: pointer;\n}\n\n/*---------- End of Cart Item -------------------- */\n\n.cart-footer {\n    width: 27%;\n    border: 1px solid #666;\n    padding: 5px 0px;\n    margin-top: 1.4rem;\n    height: 150px;\n    margin-left: 3%;\n    font-size: 13px;\n    letter-spacing: var(--mainSpacing);\n    text-align: left;\n}\n\n.priceDetails{\n  color: #888;\n    padding-left: 8px;\n    padding-bottom: 5px;\n    border-bottom: 1px solid #e1dbdb;\n    font-weight: bolder;\n}\n\nh3.price{\n  font-size: 13px;\n    padding-left: 10px;\n    padding-top: 5px;\n    padding-bottom: 10px;\n}\n\nh3.discountPrice{\n  font-size: 13px;\n  padding-left: 10px;\n  padding-top: 5px;\n  padding-bottom: 10px;\n}\n\n.cart-footer h3 {\n  text-transform: capitalize;\n  margin-bottom: 10px;\n}\n\nh3.totalPAyabile {\n  border-top: 1px solid #e1dbdb;\n  padding-top: 4px;\n  margin-bottom: 0px;\n  padding-left: 6px;\n}\n\n.list-container{\n  display: flex;\n}\n\n/* .cart-totalPAyabile{\n  padding-left: 20%;\n}\n.cart-price{\n  padding-left: 55%;\n}\n.cart-discountPrice{\n  padding-left: 44%;\n} */\n\n/* --------------- End of Cart ---------------- */\n\n/*# sourceMappingURL=data:application/json;base64,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QUEwQjtFQUMxQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7Ozs7Ozs7O0dBUUc7O0FBR0gsaURBQWlEIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwXCIpO1xuXG46cm9vdCB7XG4gIC0tcHJpbWFyeUNvbG9yOiAjZjA5ZDUxO1xuICAtLW1haW5XaGl0ZTogI2ZmZjtcbiAgLS1tYWluQmxhY2s6ICMyMjI7XG4gIC0tbWFpbkdyZXk6ICNlY2VjZWM7XG4gIC0tbWFpblNwYWNpbmc6IDAuMXJlbTtcbiAgLS1tYWluVHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tb2JpbGUtZmlsdGVye1xuICBkaXNwbGF5OiBub25lO1xufVxuLm5nNS1zbGlkZXJ7XG4gIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA2MHB4IDAgMTVweCAhaW1wb3J0YW50O1xufVxuLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItYnViYmxlIHtcbiAgcGFkZGluZzogNXB4IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi5zbGlkZXItY29udGFpbmVye1xuICB3aWR0aDogMTYlO1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICBwb3NpdGlvbjogc3RpY2t5XG59XG4ucmFuZ2VwcmljZS1maWx0ZXJ7XG4gIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIGNvbG9yOiAjOWQ5Nzk3O1xufVxuYm9keSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluQmxhY2spO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluV2hpdGUpO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gTmF2YmFyIC0tLS0tLS0tLS0tLS0tLS0gKi9cbi5uYXZiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IzA0N0RCRjtcbiAgei1pbmRleDogMTtcbn1cbi5jYXJ0aGVhZGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm5hdmJhci1jZW50ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xufVxuLmZvb3RlcntcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDojMDQ3REJGO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5uYXYtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogYXp1cmU7XG59XG4ubmF2LWljb24tbG9nb3tcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogI2Y4ZTgzMTtcbn1cbi5jb3VudGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBsZXR0ZXItc3BhY2luZzogOHB4O1xufVxuLmNhcnQtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FydC1pdGVtcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogLThweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xuICBjb2xvcjogdmFyKC0tbWFpbldoaXRlKTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSBFbmQgb2YgTmF2YmFyIC0tLS0tLS0tLS0tLS0tLS0gKi9cbi5iYW5uZXItYnRuIHtcbiAgcGFkZGluZzogLjVyZW0gLjZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tYWluU3BhY2luZyk7XG4gIGZvbnQtc2l6ZTogLjdyZW07XG4gIGJhY2tncm91bmQ6ICMwNDdEQkY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1tYWluVHJhbnNpdGlvbik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5iYW5uZXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDojNjY2O1xuICBjb2xvcjogI2ZmZjtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLSBQcm9kdWN0cyAtLS0tLS0tLS0tLS0tLS0tICovXG5cbi5wcm9kdWN0cyB7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlN2U5ZTQgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0cy1jZW50ZXIge1xuICB3aWR0aDogOTB2dztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogOTMwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEuNXJlbTtcbiAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xufVxuLnNvcnRCeXtcbiAgd2lkdGg6IDcwdnc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByaWNlLWZpbHRlcntcbiAgbWFyZ2luOiAxMCU7XG4gIGNvbG9yOiMwNDdEQkY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmEtc2hvcHBpbmctY2FydCB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLmltZy1jb250YWluZXI6aG92ZXIgLmJhZy1idG4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4ucHJvZHVjdC1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDZyZW07XG4gIHRyYW5zaXRpb246IHZhcigtLW1haW5UcmFuc2l0aW9uKTtcbn1cbi5pbWctY29udGFpbmVyOmhvdmVyIC5wcm9kdWN0LWltZyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5pdGVtLWJ0bntcbiAgYmFja2dyb3VuZDogIzA0N0RCRjtcbiAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tYWluU3BhY2luZyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wcm9kdWN0IGgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tYWluU3BhY2luZyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QgaDQge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1haW5TcGFjaW5nKTtcbiAgY29sb3I6ICMyMjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLUVuZCBvZiBQcm9kdWN0cyAtLS0tLS0tLS0tLS0tLS0tICovXG4vKiAtLS0tLS0tLS0tLS0tLS0gQ2FydCAtLS0tLS0tLS0tLS0tLS0tICovXG4uY2FydC1vdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXJ0IHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDByZW0gMS41cmVtO1xufVxuLmNhcnQtY29udGVudHtcbiAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xufVxuLmNhcnRIZWFkaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2FydCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiA0NTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY4cHgpIHtcbiAgLnNsaWRlci1jb250YWluZXJ7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9kdWN0cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIH1cbiAgLmNhcnQtY29udGVudHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJ0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDByZW0gMC41cmVtO1xufVxuICAuY2FydC1mb290ZXIge1xuICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA1JTtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAxMCU7XG4gICAgaGVpZ2h0OiAxMTdweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xufVxuICAuY2FydC1pdGVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciAxZnIgYXV0bztcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICB9XG4gIC5jYXJ0LWl0ZW0gaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgLmNhcnQtaXRlbSBoNCB7XG4gICAgZm9udC1zaXplOiAwLjU1cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tYWluU3BhY2luZyk7XG4gIH1cbiAgLmNhcnQtaXRlbSBoNSB7XG4gICAgbWFyZ2luOiAwLjNyZW0gMDtcbiAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWFpblNwYWNpbmcpO1xuICB9XG4gIC5jYXJ0LWJ0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuICAuY2xvc2UtY2FydCB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5wcm9kdWN0cy1jZW50ZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTI1cHgsIDFmcikpO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMC41cmVtO1xuICAgIGdyaWQtcm93LWdhcDogMC41cmVtO1xuICB9XG4gIC5zb3J0Qnkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbi5tb2JpbGUtZmlsdGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxuLnByaWNlLWZpbHRlciB7XG4gIG1hcmdpbjogMiUgMSU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbn1cblxuLmRlbFByaWNle1xuY29sb3I6ICM3Nzc7XG5wYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uZGlzY1ByaWNle1xuICBjb2xvcjogbGltZWdyZWVuO1xufVxuLmNsb3NlLWNhcnQge1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcnQgaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWFpblNwYWNpbmcpO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLm1ha2Vib2xke1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLyotLS0tLS0tLS0tIENhcnQgSXRlbSAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmNhcnQtaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIDFmciAxZnIgMWZyIDFmciA7XG4gIGdyaWQtY29sdW1uLWdhcDogMS41cmVtO1xuICBtYXJnaW46IDEuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uY2FydC1pdGVtIGltZyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG4uY2FydC1pdGVtIGg0IHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1haW5TcGFjaW5nKTtcbn1cbi5jYXJ0LWl0ZW0gaDUge1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWFpblNwYWNpbmcpO1xufVxuLml0ZW0tYW1vdW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJlbW92ZS1pdGVtIHtcbiAgY29sb3I6IGdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mYS1jaGV2cm9uLXVwLFxuLmZhLWNoZXZyb24tZG93biB7XG4gIGNvbG9yOiAjMDQ3REJGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKi0tLS0tLS0tLS0gRW5kIG9mIENhcnQgSXRlbSAtLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uY2FydC1mb290ZXIge1xuICAgIHdpZHRoOiAyNyU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIG1hcmdpbi10b3A6IDEuNHJlbTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1haW5TcGFjaW5nKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnByaWNlRGV0YWlsc3tcbiAgY29sb3I6ICM4ODg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZGJkYjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuaDMucHJpY2V7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmgzLmRpc2NvdW50UHJpY2V7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jYXJ0LWZvb3RlciBoMyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaDMudG90YWxQQXlhYmlsZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFkYmRiO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufVxuLmxpc3QtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLyogLmNhcnQtdG90YWxQQXlhYmlsZXtcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XG59XG4uY2FydC1wcmljZXtcbiAgcGFkZGluZy1sZWZ0OiA1NSU7XG59XG4uY2FydC1kaXNjb3VudFByaWNle1xuICBwYWRkaW5nLWxlZnQ6IDQ0JTtcbn0gKi9cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0gRW5kIG9mIENhcnQgLS0tLS0tLS0tLS0tLS0tLSAqL1xuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\satish\Angular-9\AngularAssignment\EcomCart\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map