(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.mobile-filter{\n  display: none;\n}\n.ng5-slider{\n  width: 85% !important;\n  margin: 60px 0 15px !important;\n}\n.ng5-slider .ng5-slider-bubble {\n  padding: 5px 4px !important;\n  font-size: 12px !important;\n}\n.slider-container{\n  width: 16%;\n  margin: 1em auto;\n  position: -webkit-sticky;\n  position: sticky\n}\n.rangeprice-filter{\n  margin-left: 40%;\n  color: #9d9797;\n}\nbody {\n  color: var(--mainBlack);\n  background: var(--mainWhite);\n  font-family: \"Lato\", sans-serif;\n}\n/* --------------- Navbar ---------------- */\n.navbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  height: 60px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background:#047DBF;\n  z-index: 1;\n}\n.cartheader{\n  text-align: center;\n  padding-top: 100px;\n  font-size: 20px;\n}\n.navbar-center {\n  width: 100%;\n  max-width: 1170px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n}\n.footer{\n  height: 30px;\n  width: 100%;\n  background:#047DBF;\n  position: fixed;\n  text-align: center;\n  bottom: 0px;\n  padding: 5px;\n}\n.nav-icon {\n  font-size: 1.5rem;\n  color: azure;\n}\n.nav-icon-logo{\n    font-size: 1.5rem;\n    color: #f8e831;\n}\n.counter{\n  display: flex;\n  letter-spacing: 8px;\n}\n.cart-btn {\n  position: relative;\n  cursor: pointer;\n}\n.cart-items {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background: red;\n  padding: 0 5px;\n  border-radius: 30%;\n  color: var(--mainWhite);\n}\n/* --------------- End of Navbar ---------------- */\n.banner-btn {\n  padding: .5rem .6rem;\n  text-transform: uppercase;\n  letter-spacing: var(--mainSpacing);\n  font-size: .7rem;\n  background: #047DBF;\n  color: #fff;\n  border: 1px solid #fff;\n  transition: var(--mainTransition);\n  cursor: pointer;\n}\n.banner-btn:hover {\n  background:#666;\n  color: #fff;\n}\n/* --------------- Products ---------------- */\n.products {\n  padding: 2rem 0;\n  width: 80%;\n  margin: auto;\n  border-left: 1px solid #e7e9e4 !important;\n}\n.products-center {\n  width: 90vw;\n  margin: 0 auto;\n  max-width: 930px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-column-gap: 1.5rem;\n  grid-row-gap: 2rem;\n}\n.sortBy{\n  width: 70vw;\n  display: block;\n  margin: auto;\n  margin-bottom: 25px;\n  font-weight: bold;\n}\n.price-filter{\n  margin: 10%;\n  color:#047DBF;\n  cursor: pointer;\n}\n.img-container {\n  position: relative;\n  overflow: hidden;\n}\n.fa-shopping-cart {\n  margin-right: 0.5rem;\n}\n.img-container:hover .bag-btn {\n  transform: translateX(0);\n}\n.product-img {\n  display: block;\n  width: 100%;\n  min-height: 6rem;\n  transition: var(--mainTransition);\n}\n.img-container:hover .product-img {\n  opacity: 0.5;\n}\n.item-btn{\n  background: #047DBF;\n  color: #fff;\n  letter-spacing: var(--mainSpacing);\n  font-weight: bold;\n  cursor: pointer;\n  padding: 0.5rem 0.75rem;\n  border-radius: 20px;\n  border: 0px;\n  margin: auto;\n  display: block;\n}\n.mobile-filter-btn{\n  background:#fff;\n  color:#444;\n  letter-spacing: var(--mainSpacing);\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif !important;\n  padding: .3rem;\n  border: 1ps solid #333;\n  border-radius: 5px;\n  box-shadow: none;\n  margin: 0px 5px;\n}\n.product h3 {\n  text-transform: capitalize;\n  font-size: 1.1rem;\n  margin-top: 0.5rem;\n  letter-spacing: var(--mainSpacing);\n  text-align: center;\n}\n.product h4 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  letter-spacing: var(--mainSpacing);\n  color: #222;\n  text-align: center;\n}\n/* ---------------End of Products ---------------- */\n/* --------------- Cart ---------------- */\n.cart-overlay {\n  width: 100%;\n  height: 100%;\n}\n.cart {\n  width: 90%;\n  height: 100%;\n  margin: auto;\n  background: #fff;\n  padding: 0rem 1.5rem;\n}\n.cart-content{\n  width: 65% !important;\n}\n.cartHeading {\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n}\n@media screen and (min-width: 768px) {\n  .cart {\n    width: 100%;\n    min-width: 450px;\n  }\n}\n@media screen and (max-width: 468px) {\n  .slider-container{\n    display: none !important;\n  }\n.cartHeading {\n  display: none !important;\n}\n  .products {\n    width: 100%;\n    padding: 0rem !important;\n    border-left: none;\n  }\n  .cart-content{\n    width: 100% !important;\n  }\n  .cart {\n    width: 100% !important;\n    padding: 0rem 0.5rem;\n}\n  .cart-footer {\n    width: 76% !important;\n    position: fixed;\n    bottom: 6%;\n    margin-top: 0px !important;\n    left: 10%;\n    height: 150px !important;\n    padding: 2px !important;\n}\n  .cart-item {\n    display: grid;\n    align-items: center;\n    grid-template-columns: auto 1fr 1fr auto;\n    grid-column-gap: 0.5rem;\n    margin: 0.5rem 0;\n  }\n  .cart-item img {\n    width: 50px;\n    height: 50px;\n  }\n  .cart-item h4 {\n    font-size: 0.55rem;\n    text-transform: capitalize;\n    letter-spacing: var(--mainSpacing);\n  }\n  .cart-item h5 {\n    margin: 0.3rem 0;\n    letter-spacing: var(--mainSpacing);\n  }\n  .cart-btn {\n    margin-right: 10px;\n}\n  .close-cart {\n    font-size: 0.7rem;\n    cursor: pointer;\n  }\n  .products-center {\n    width: 100vw;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));\n    grid-column-gap: 0.5rem;\n    grid-row-gap: 0.5rem;\n  }\n  .sortBy {\n    display: none;\n  }\n.mobile-filter {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin: .5rem auto;\n}\n.price-filter {\n  margin: 2% 1%;\n  font-size: 14px;\n}\n}\n.delPrice{\ncolor: #777;\npadding-right: 5px;\n}\n.discPrice{\n  color: limegreen;\n}\n.close-cart {\n  font-size: 1.7rem;\n  cursor: pointer;\n}\n.cart h2 {\n  text-transform: capitalize;\n  text-align: center;\n  letter-spacing: var(--mainSpacing);\n  margin-bottom: 2rem;\n}\n.makebold{\n  font-weight: 600;\n}\n/*---------- Cart Item -------------------- */\n.cart-item {\n  display: grid;\n  align-items: center;\n  grid-template-columns:  1fr 1fr 1fr 1fr ;\n  grid-column-gap: 1.5rem;\n  margin: 1.5rem 0;\n  border: 1px solid #444;\n  padding: 5px;\n}\n.cart-item img {\n  width: 75px;\n  height: 75px;\n}\n.cart-item h4 {\n  font-size: 0.85rem;\n  text-transform: capitalize;\n  letter-spacing: var(--mainSpacing);\n}\n.cart-item h5 {\n  margin: 0.5rem 0;\n  letter-spacing: var(--mainSpacing);\n}\n.item-amount {\n  text-align: center;\n}\n.remove-item {\n  color: grey;\n  cursor: pointer;\n}\n.fa-chevron-up,\n.fa-chevron-down {\n  color: #047DBF;\n  cursor: pointer;\n}\n/*---------- End of Cart Item -------------------- */\n.cart-footer {\n    width: 27%;\n    border: 1px solid #666;\n    padding: 5px 0px;\n    margin-top: 1.4rem;\n    height: 150px;\n    margin-left: 3%;\n    font-size: 13px;\n    letter-spacing: var(--mainSpacing);\n    text-align: left;\n}\n.priceDetails{\n  color: #888;\n    padding-left: 8px;\n    padding-bottom: 5px;\n    border-bottom: 1px solid #e1dbdb;\n    font-weight: bolder;\n}\nh3.price{\n  font-size: 13px;\n    padding-left: 10px;\n    padding-top: 5px;\n    padding-bottom: 10px;\n}\nh3.discountPrice{\n  font-size: 13px;\n  padding-left: 10px;\n  padding-top: 5px;\n  padding-bottom: 10px;\n}\n.cart-footer h3 {\n  text-transform: capitalize;\n  margin-bottom: 10px;\n}\nh3.totalPAyabile {\n  border-top: 1px solid #e1dbdb;\n  padding-top: 4px;\n  margin-bottom: 0px;\n  padding-left: 6px;\n}\n.list-container{\n  display: flex;\n}\n/* .cart-totalPAyabile{\n  padding-left: 20%;\n}\n.cart-price{\n  padding-left: 55%;\n}\n.cart-discountPrice{\n  padding-left: 44%;\n} */\n/* --------------- End of Cart ---------------- */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTtBQVduRTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsd0JBQWU7RUFBZjtBQUNGO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7QUFDQSw0Q0FBNEM7QUFDNUM7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7QUFDQSxtREFBbUQ7QUFDbkQ7RUFDRSxvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFDQSw4Q0FBOEM7QUFFOUM7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLG9EQUFvRDtFQUNwRCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBLG9EQUFvRDtBQUNwRCwwQ0FBMEM7QUFDMUM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjtFQUNFLHdCQUF3QjtBQUMxQjtFQUNFO0lBQ0UsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4QjtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4Qyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtDQUFrQztFQUNwQztFQUNBO0lBQ0Usa0JBQWtCO0FBQ3RCO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELHVCQUF1QjtJQUN2QixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7QUFFQTtBQUNBLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0EsNkNBQTZDO0FBQzdDO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0Esb0RBQW9EO0FBRXBEO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7SUFDVCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxtQkFBbUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBOzs7Ozs7OztHQVFHO0FBR0gsaURBQWlEIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwXCIpO1xuQGltcG9ydCAnfmJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcblxuOnJvb3Qge1xuICAtLXByaW1hcnlDb2xvcjogI2YwOWQ1MTtcbiAgLS1tYWluV2hpdGU6ICNmZmY7XG4gIC0tbWFpbkJsYWNrOiAjMjIyO1xuICAtLW1haW5HcmV5OiAjZWNlY2VjO1xuICAtLW1haW5TcGFjaW5nOiAwLjFyZW07XG4gIC0tbWFpblRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubW9iaWxlLWZpbHRlcntcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5uZzUtc2xpZGVye1xuICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNjBweCAwIDE1cHggIWltcG9ydGFudDtcbn1cbi5uZzUtc2xpZGVyIC5uZzUtc2xpZGVyLWJ1YmJsZSB7XG4gIHBhZGRpbmc6IDVweCA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uc2xpZGVyLWNvbnRhaW5lcntcbiAgd2lkdGg6IDE2JTtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgcG9zaXRpb246IHN0aWNreVxufVxuLnJhbmdlcHJpY2UtZmlsdGVye1xuICBtYXJnaW4tbGVmdDogNDAlO1xuICBjb2xvcjogIzlkOTc5Nztcbn1cbmJvZHkge1xuICBjb2xvcjogdmFyKC0tbWFpbkJsYWNrKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbldoaXRlKTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tIE5hdmJhciAtLS0tLS0tLS0tLS0tLS0tICovXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiMwNDdEQkY7XG4gIHotaW5kZXg6IDE7XG59XG4uY2FydGhlYWRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5uYXZiYXItY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTE3MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbn1cbi5mb290ZXJ7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IzA0N0RCRjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubmF2LWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IGF6dXJlO1xufVxuLm5hdi1pY29uLWxvZ297XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6ICNmOGU4MzE7XG59XG4uY291bnRlcntcbiAgZGlzcGxheTogZmxleDtcbiAgbGV0dGVyLXNwYWNpbmc6IDhweDtcbn1cbi5jYXJ0LWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcnQtaXRlbXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IC04cHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgY29sb3I6IHZhcigtLW1haW5XaGl0ZSk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gRW5kIG9mIE5hdmJhciAtLS0tLS0tLS0tLS0tLS0tICovXG4uYmFubmVyLWJ0biB7XG4gIHBhZGRpbmc6IC41cmVtIC42cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWFpblNwYWNpbmcpO1xuICBmb250LXNpemU6IC43cmVtO1xuICBiYWNrZ3JvdW5kOiAjMDQ3REJGO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgdHJhbnNpdGlvbjogdmFyKC0tbWFpblRyYW5zaXRpb24pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmFubmVyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IzY2NjtcbiAgY29sb3I6ICNmZmY7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0gUHJvZHVjdHMgLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ucHJvZHVjdHMge1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTdlOWU0ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdHMtY2VudGVyIHtcbiAgd2lkdGg6IDkwdnc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDkzMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxLjVyZW07XG4gIGdyaWQtcm93LWdhcDogMnJlbTtcbn1cbi5zb3J0Qnl7XG4gIHdpZHRoOiA3MHZ3O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcmljZS1maWx0ZXJ7XG4gIG1hcmdpbjogMTAlO1xuICBjb2xvcjojMDQ3REJGO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW1nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZhLXNob3BwaW5nLWNhcnQge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5pbWctY29udGFpbmVyOmhvdmVyIC5iYWctYnRuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLnByb2R1Y3QtaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA2cmVtO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1tYWluVHJhbnNpdGlvbik7XG59XG4uaW1nLWNvbnRhaW5lcjpob3ZlciAucHJvZHVjdC1pbWcge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uaXRlbS1idG57XG4gIGJhY2tncm91bmQ6ICMwNDdEQkY7XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWFpblNwYWNpbmcpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubW9iaWxlLWZpbHRlci1idG57XG4gIGJhY2tncm91bmQ6I2ZmZjtcbiAgY29sb3I6IzQ0NDtcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1haW5TcGFjaW5nKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAuM3JlbTtcbiAgYm9yZGVyOiAxcHMgc29saWQgIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDBweCA1cHg7XG59XG4ucHJvZHVjdCBoMyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbWFpblNwYWNpbmcpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9kdWN0IGg0IHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tYWluU3BhY2luZyk7XG4gIGNvbG9yOiAjMjIyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS1FbmQgb2YgUHJvZHVjdHMgLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tIENhcnQgLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmNhcnQtb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FydCB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwcmVtIDEuNXJlbTtcbn1cbi5jYXJ0LWNvbnRlbnR7XG4gIHdpZHRoOiA2NSUgIWltcG9ydGFudDtcbn1cbi5jYXJ0SGVhZGluZyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNhcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogNDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2OHB4KSB7XG4gIC5zbGlkZXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuLmNhcnRIZWFkaW5nIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuICAucHJvZHVjdHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDByZW0gIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgfVxuICAuY2FydC1jb250ZW50e1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcnQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHJlbSAwLjVyZW07XG59XG4gIC5jYXJ0LWZvb3RlciB7XG4gICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDYlO1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDEwJTtcbiAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59XG4gIC5jYXJ0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIDFmciBhdXRvO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMC41cmVtO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gIH1cbiAgLmNhcnQtaXRlbSBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICAuY2FydC1pdGVtIGg0IHtcbiAgICBmb250LXNpemU6IDAuNTVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1haW5TcGFjaW5nKTtcbiAgfVxuICAuY2FydC1pdGVtIGg1IHtcbiAgICBtYXJnaW46IDAuM3JlbSAwO1xuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tYWluU3BhY2luZyk7XG4gIH1cbiAgLmNhcnQtYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4gIC5jbG9zZS1jYXJ0IHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnByb2R1Y3RzLWNlbnRlciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMjVweCwgMWZyKSk7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwLjVyZW07XG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjVyZW07XG4gIH1cbiAgLnNvcnRCeSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuLm1vYmlsZS1maWx0ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIG1hcmdpbjogLjVyZW0gYXV0bztcbn1cbi5wcmljZS1maWx0ZXIge1xuICBtYXJnaW46IDIlIDElO1xuICBmb250LXNpemU6IDE0cHg7XG59XG59XG5cbi5kZWxQcmljZXtcbmNvbG9yOiAjNzc3O1xucGFkZGluZy1yaWdodDogNXB4O1xufVxuLmRpc2NQcmljZXtcbiAgY29sb3I6IGxpbWVncmVlbjtcbn1cbi5jbG9zZS1jYXJ0IHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJ0IGgyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1haW5TcGFjaW5nKTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5tYWtlYm9sZHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi8qLS0tLS0tLS0tLSBDYXJ0IEl0ZW0gLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5jYXJ0LWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAxZnIgMWZyIDFmciAxZnIgO1xuICBncmlkLWNvbHVtbi1nYXA6IDEuNXJlbTtcbiAgbWFyZ2luOiAxLjVyZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNhcnQtaXRlbSBpbWcge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuLmNhcnQtaXRlbSBoNCB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tYWluU3BhY2luZyk7XG59XG4uY2FydC1pdGVtIGg1IHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLW1haW5TcGFjaW5nKTtcbn1cbi5pdGVtLWFtb3VudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZW1vdmUtaXRlbSB7XG4gIGNvbG9yOiBncmV5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmEtY2hldnJvbi11cCxcbi5mYS1jaGV2cm9uLWRvd24ge1xuICBjb2xvcjogIzA0N0RCRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLyotLS0tLS0tLS0tIEVuZCBvZiBDYXJ0IEl0ZW0gLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmNhcnQtZm9vdGVyIHtcbiAgICB3aWR0aDogMjclO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxLjRyZW07XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1tYWluU3BhY2luZyk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wcmljZURldGFpbHN7XG4gIGNvbG9yOiAjODg4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWRiZGI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbmgzLnByaWNle1xuICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5oMy5kaXNjb3VudFByaWNle1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY2FydC1mb290ZXIgaDMge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmgzLnRvdGFsUEF5YWJpbGUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UxZGJkYjtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbi5saXN0LWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbn1cbi8qIC5jYXJ0LXRvdGFsUEF5YWJpbGV7XG4gIHBhZGRpbmctbGVmdDogMjAlO1xufVxuLmNhcnQtcHJpY2V7XG4gIHBhZGRpbmctbGVmdDogNTUlO1xufVxuLmNhcnQtZGlzY291bnRQcmljZXtcbiAgcGFkZGluZy1sZWZ0OiA0NCU7XG59ICovXG5cblxuLyogLS0tLS0tLS0tLS0tLS0tIEVuZCBvZiBDYXJ0IC0tLS0tLS0tLS0tLS0tLS0gKi9cbiJdfQ== */", '', '']]

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

module.exports = __webpack_require__(/*! D:\satish\Angular-9\AngularAssignment\ShopCart\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map